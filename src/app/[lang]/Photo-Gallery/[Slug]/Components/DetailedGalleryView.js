'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Close, NavigateBefore, NavigateNext, PlayArrow } from '@mui/icons-material';
import { BsFillCameraReelsFill, BsShare } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';

export default function DetailedGalleryView({ galleryItem, lang }) {
  const [open, setOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(0);
  const [imageLoadError, setImageLoadError] = useState({});
  const videoRef = useRef(null);
  const isHindi = lang === 'hi';

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const isYoutubeVideo = (url) => {
    if (!url) return false;
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  const isVideoFile = (url) => {
    if (!url) return false;
    return url.match(/\.(mp4|mov|avi|webm|mkv)$/i);
  };

  const getYoutubeEmbedUrl = (url) => {
    if (!isYoutubeVideo(url)) return url;
    
    // Extract video ID from various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : url;
  };

  const handleOpen = (index) => {
    setSelectedMedia(index);
    setOpen(true);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setOpen(false);
  };
  
  const handleNext = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    const nextIndex = (selectedMedia + 1) % galleryItem.mediaItems.length;
    setSelectedMedia(nextIndex);
  };

  const handlePrevious = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    const prevIndex = (selectedMedia - 1 + galleryItem.mediaItems.length) % galleryItem.mediaItems.length;
    setSelectedMedia(prevIndex);
  };

  const handleImageError = (index) => {
    setImageLoadError(prev => ({ ...prev, [index]: true }));
  };

  const getMediaUrl = (url, index) => {
    if (imageLoadError[index]) {
      return url.startsWith('/') ? url : `/${url}`;
    }
    return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_STORAGE || ''}${url}`;
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: isHindi ? galleryItem.HiName : galleryItem.EnName,
        text: isHindi ? 
          'एनएचडीसी फोटो गैलरी देखें' : 
          'Check out this NHDC Photo Gallery',
        url: window.location.href
      });
    } catch (err) {
      navigator.clipboard.writeText(window.location.href);
      alert(isHindi ? 'लिंक कॉपी हो गया!' : 'Link copied!');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Enhanced Header Section */}
      <div className="w-full bg-white shadow-md px-6 py-6 flex justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-6 max-w-5xl w-full">
          {/* Polaroid-style preview of first 3 images */}
          <div className="relative w-[100px] h-[100px] mb-4 sm:mb-0">
            <Image 
              height={1000} 
              width={1000} 
              src="/assets/strip2.png" 
              alt="img3" 
              className="w-[80px] h-[80px] object-cover absolute rotate-[15deg] top-[30px] left-[20px] z-10 shadow-lg border border-white" 
            />
            <Image 
              height={1000} 
              width={1000} 
              src="/assets/strip3.png" 
              alt="img2" 
              className="w-[80px] h-[80px] object-cover absolute rotate-[-10deg] top-[10px] left-[10px] z-20 shadow-lg border border-white" 
            />
            <Image 
              height={1000} 
              width={1000} 
              src="/assets/sari.png" 
              alt="img1" 
              className="w-[80px] h-[80px] object-cover absolute rotate-[5deg] top-0 left-0 z-30 shadow-lg border border-white" 
            />
          </div>

          {/* Centered Heading Text */}
          <div className="text-center flex-1 flex flex-col items-center px-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {isHindi ? galleryItem.HiName : galleryItem.EnName}
            </h1>
            <p className="text-gray-600 mt-1 text-sm max-w-xl">
              {isHindi ? 'इस इवेंट के सभी मीडिया देखें' : 'View all media from this event'}
            </p>
            <div className="mt-2 flex justify-center gap-6">
              <button 
                className="flex items-center gap-2 text-sm font-semibold border border-blue-600 text-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition"
                onClick={handleShare}
              >
                <BsShare />
                <span>{isHindi ? 'शेयर करें' : 'Share'}</span>
              </button>
              <button className="flex items-center gap-2 text-sm font-semibold border-b-2 border-black text-black hover:text-black transition">
                <RiInboxArchiveLine />
                <span>{isHindi ? 'सभी मीडिया' : 'All Media'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Event Info Section */}
          {/* <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="mt-3 text-sm text-gray-500">
              {new Date(galleryItem.uploadDate).toLocaleDateString(lang, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div> */}
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-6">
            {galleryItem.mediaItems.map((media, idx) => {
              const isYoutube = isYoutubeVideo(media.link);
              const isVideo = isVideoFile(media.link);
              const mediaUrl = getMediaUrl(media.link, idx);
              
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition group relative"
                  onClick={() => handleOpen(idx)}
                >
                  {isYoutube ? (
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={`https://img.youtube.com/vi/${getYoutubeEmbedUrl(media.link).split('/embed/')[1].split('?')[0]}/hqdefault.jpg`}
                        alt={isHindi ? media.HiCaption || galleryItem.HiName : media.EnCaption || galleryItem.EnName}
                        fill
                        className="object-cover group-hover:opacity-90 transition"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized={true}
                      />
                      <div className="absolute inset-0 flex items-center justify-center  bg-transparent ">
                        <PlayArrow className="text-white text-4xl h-10 w-10" />
                      </div>
                    </div>
                  ) : isVideo ? (
                    <div className="aspect-[4/3] relative">
                      <video 
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        disablePictureInPicture
                        preload="metadata"
                      >
                        <source src={mediaUrl} type={`video/${media.link.split('.').pop()}`} />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-transparent ">
                        <PlayArrow className="text-white text-4xl h-10 w-10" />
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={mediaUrl}
                        alt={isHindi ? media.HiCaption || galleryItem.HiName : media.EnCaption || galleryItem.EnName}
                        fill
                        className="object-cover group-hover:opacity-90 transition"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => handleImageError(idx)}
                        unoptimized={true}
                      />
                    </div>
                  )}
                  {(media.HiCaption || media.EnCaption) && (
                    <div className="p-4 text-center text-sm text-gray-600">
                      {isHindi ? media.HiCaption : media.EnCaption}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* MUI Media Viewer */}
          <Dialog
            open={open}
            onClose={handleClose}
            fullScreen={fullScreen}
            maxWidth="lg"
            fullWidth
          >
            <DialogContent className="relative p-0 bg-black">
              <div className="absolute top-2 right-2 z-10">
                <IconButton onClick={handleClose} color="inherit">
                  <Close className="text-white" />
                </IconButton>
              </div>
              
              <div className="flex items-center justify-center h-full">
                <IconButton 
                  onClick={handlePrevious} 
                  className="absolute left-2 text-white z-10"
                  size="large"
                >
                  <NavigateBefore fontSize="large" />
                </IconButton>
                
                <div className="relative w-full h-[80vh] flex items-center justify-center">
                  {isYoutubeVideo(galleryItem.mediaItems[selectedMedia].link) ? (
                    <iframe
                      src={getYoutubeEmbedUrl(galleryItem.mediaItems[selectedMedia].link)}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : isVideoFile(galleryItem.mediaItems[selectedMedia].link) ? (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      playsInline
                    >
                      <source 
                        src={getMediaUrl(galleryItem.mediaItems[selectedMedia].link, selectedMedia)} 
                        type={`video/${galleryItem.mediaItems[selectedMedia].link.split('.').pop()}`}
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      height={1000}
                      width={1000}
                      src={getMediaUrl(galleryItem.mediaItems[selectedMedia].link, selectedMedia)}
                      alt={isHindi ? 
                        galleryItem.mediaItems[selectedMedia].HiCaption || galleryItem.HiName : 
                        galleryItem.mediaItems[selectedMedia].EnCaption || galleryItem.EnName
                      }
                      className="object-contain w-full h-full"
                      onError={(e) => {
                        e.target.src = galleryItem.mediaItems[selectedMedia].link.startsWith('/') 
                          ? galleryItem.mediaItems[selectedMedia].link 
                          : `/${galleryItem.mediaItems[selectedMedia].link}`;
                      }}
                    />
                  )}
                </div>
                
                <IconButton 
                  onClick={handleNext} 
                  className="absolute right-2 text-white z-10"
                  size="large"
                >
                  <NavigateNext fontSize="large" />
                </IconButton>
              </div>
              
              {(galleryItem.mediaItems[selectedMedia].HiCaption || 
               galleryItem.mediaItems[selectedMedia].EnCaption) && (
                <div className="absolute bottom-4 left-0 right-0 text-center text-white p-2 bg-black bg-opacity-50">
                  {isHindi ? 
                    galleryItem.mediaItems[selectedMedia].HiCaption : 
                    galleryItem.mediaItems[selectedMedia].EnCaption
                  }
                </div>
              )}
              
              <div className="absolute bottom-2 right-2 text-white text-sm">
                {selectedMedia + 1} / {galleryItem.mediaItems.length}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}