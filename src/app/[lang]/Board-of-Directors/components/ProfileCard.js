import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ProfileCard({
  name,
  title,
  src,
  moreInfo,
  readMoreText = 'Read More', // Default prop value
}) {
  const [modalOpen, setModalOpen] = useState(false);
  // Ref to store the element that triggered the modal (the "Read More" button)
  const triggerRef = useRef(null);
  // Ref to the modal container itself for focus trapping
  const modalRef = useRef(null);

  // Effect to handle focus management and Escape key when modal opens/closes
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    };

    if (modalOpen) {
      // Add event listener for the Escape key
      document.addEventListener('keydown', handleKeyDown);

      // Focus the modal container when it opens
      // Using a timeout to ensure the element is in the DOM and ready to receive focus
      setTimeout(() => modalRef.current?.focus(), 0);
      
    } else {
      // Return focus to the trigger element when the modal closes
      triggerRef.current?.focus();
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);
  
  // Function to trap focus within the modal
  const handleFocusTrap = (event) => {
    if (event.key !== 'Tab') return;

    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) { // Shift + Tab
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else { // Tab
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  };


  return (
    <>
      {/* Card: Using <article> for better semantics */}
      <article
        className="relative p-4 pt-6 pb-16 w-full max-w-xs mx-auto bg-[#FFF1F1] rounded-xl shadow-md flex flex-col items-center text-center transition-transform duration-300 focus-within:scale-105 focus-within:shadow-lg hover:scale-105 hover:shadow-lg"
        aria-labelledby={`profile-name-${name.replace(/\s+/g, '-')}`}
      >
        <Image
          height={100}
          width={100}
          src={src}
          alt={`Profile photo of ${name}`} // More descriptive alt text
          className="w-24 h-24 object-cover rounded-full border-2 border-white mb-2"
        />

        {/* Name and Title */}
        <h2 id={`profile-name-${name.replace(/\s+/g, '-')}`} className="text-lg font-semibold text-gray-800">
          {name}
        </h2>
        <p className="text-sm text-gray-600 whitespace-pre-line">{title}</p>

        {/* Read More Button: Now always visible for accessibility */}
        {moreInfo && (
          <button
            ref={triggerRef} // Set the ref to this button
            onClick={() => setModalOpen(true)}
            aria-haspopup="dialog" // Informs assistive tech that this button opens a dialog
            className="absolute bottom-4 bg-[#f58220] text-white px-4 py-1 rounded-full text-sm shadow hover:bg-orange-600 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            {readMoreText}
          </button>
        )}
      </article>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
          role="dialog" // Defines the element as a dialog window
          aria-modal="true" // Makes it a modal dialog, preventing interaction with the background
          aria-labelledby="modal-title" // Associates the dialog with its title
          aria-describedby="modal-description" // Associates the dialog with its description
          ref={modalRef} // Ref for focus management
          tabIndex={-1} // Makes the container focusable programmatically
          onKeyDown={handleFocusTrap} // Add keydown listener for focus trap
        >
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-md p-6 relative">
            {/* Close Button with accessible name */}
            <button
              className="absolute top-3 right-4 text-3xl leading-none text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
              onClick={() => setModalOpen(false)}
              aria-label="Close dialog" // Provides a label for screen readers
            >
              <span aria-hidden="true">&times;</span>
            </button>

            {/* Modal Content */}
            <h2 id="modal-title" className="text-xl font-bold text-gray-800">{name}</h2>
            <h3 className="text-sm text-gray-600 mb-4 whitespace-pre-line">{title}</h3>
            <p id="modal-description" className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
              {moreInfo}
            </p>
          </div>
        </div>
      )}
    </>
  );
}