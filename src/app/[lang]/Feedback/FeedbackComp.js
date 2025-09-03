"use client"

import Image from "next/image"
import { useState } from "react"
import { useParams } from "next/navigation"
import { FaArrowsRotate } from "react-icons/fa6"
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

// Content remains the same...
const content = {
  en: {
    title: "Feedback",
    formTitle: "Please enter your form details",
    fullName: "Full name",
    email: "Email address",
    phone: "Phone",
    fax: "Fax",
    mobile: "Mobile",
    suggestions: "Please enter any suggestion you have...",
    captchaPlaceholder: "Enter captcha",
    reloadCaptcha: "Reload Captcha",
    submit: "Submit Feedback",
    thankYou: "Thank You!",
    thankYouMessage: "Thank you for your feedback. We will get back to you soon.",
    ok: "OK",
    errors: {
      fullName: "Full name is required",
      email: {
        required: "Email is required",
        invalid: "Please enter a valid email"
      },
      phone: {
        required: "Phone number is required",
        invalid: "Please enter a valid phone number (10-15 digits)"
      },
      captcha: "Invalid captcha code"
    }
  },
  hi: {
    title: "प्रतिक्रिया",
    formTitle: "कृपया अपना फॉर्म विवरण दर्ज करें",
    fullName: "पूरा नाम",
    email: "ईमेल पता",
    phone: "फोन",
    fax: "फैक्स",
    mobile: "मोबाइल",
    suggestions: "कृपया कोई सुझाव दर्ज करें...",
    captchaPlaceholder: "कैप्चा दर्ज करें",
    reloadCaptcha: "कैप्चा पुनः लोड करें",
    submit: "प्रतिक्रिया सबमिट करें",
    thankYou: "धन्यवाद!",
    thankYouMessage: "आपकी प्रतिक्रिया के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।",
    ok: "ठीक है",
    errors: {
      fullName: "पूरा नाम आवश्यक है",
      email: {
        required: "ईमेल आवश्यक है",
        invalid: "कृपया एक वैध ईमेल दर्ज करें"
      },
      phone: {
        required: "फोन नंबर आवश्यक है",
        invalid: "कृपया एक वैध फोन नंबर दर्ज करें (10-15 अंक)"
      },
      captcha: "अमान्य कैप्चा कोड"
    }
  }
}

function Feedback() {
  const params = useParams()
  const lang = params?.lang || 'en'
  const t = content[lang] || content.en
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    fax: "",
    mobile: "",
    suggestions: "",
    captcha: "",
  })

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    captcha: "",
  })

  const [captchaCode, setCaptchaCode] = useState("CP9WF2")
  const [charCount, setCharCount] = useState(0)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [snackbarSeverity, setSnackbarSeverity] = useState("error")
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false)

  const validateForm = () => {
    let valid = true
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      captcha: "",
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.errors.fullName
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = t.errors.email.required
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.errors.email.invalid
      valid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.errors.phone.required
      valid = false
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = t.errors.phone.invalid
      valid = false
    }

    if (formData.captcha !== captchaCode) {
      newErrors.captcha = t.errors.captcha
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }

    if (name === "suggestions") {
      setCharCount(value.length)
    }
  }

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setCaptchaCode(result)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          fax: formData.fax,
          mobile: formData.mobile,
          suggestions: formData.suggestions,
          captcha: formData.captcha,
          expectedCaptcha: captchaCode
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit feedback')
      }

      setOpenSuccessDialog(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        fax: "",
        mobile: "",
        suggestions: "",
        captcha: "",
      })
      setCharCount(0)
      generateCaptcha()

    } catch (err) {
      console.error("Submit error:", err)
      setSnackbarMessage(err.message || "Something went wrong while submitting your feedback")
      setSnackbarSeverity("error")
      setOpenSnackbar(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false)
  }

  return (
    <>
      <main className="relative w-full min-h-screen">
        {/* Background Image - Responsive height */}
        <div className="relative w-full h-44 sm:h-20 md:h-76">
          <Image 
            src="/assets/bg.png" 
            alt="Decorative background pattern" 
            fill 
            className="object-cover object-bottom"
            priority
            sizes="100vw"
          />
        </div>

        {/* Main Content Container */}
        <div className="absolute top-0 left-0 right-0 min-h-screen py-4 sm:py-8 px-2 sm:px-4">
          {/* Feedback Title - Positioned above the form */}
          <header className="flex justify-center mt-16 sm:mt-12 md:mt-20 mb-18 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-lg z-20 relative">
              {t.title}
            </h1>
          </header>

          {/* Form Container with Background Image */}
          <section className="flex justify-center" aria-labelledby="feedback-form-title">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-2">
              {/* Feedback Background Image */}
              <div className="relative w-full">
                <Image
                  src="/assets/feedback_bg.png"
                  alt=""
                  width={650}
                  height={600}
                  className="w-full h-auto object-contain scale-110 scale-y-125 sm:scale-100 sm:scale-y-100 md:scale-100 md:scale-y-100"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Form Content - Positioned absolutely on the background image */}
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-4 md:p-6 lg:p-8">
                  <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <h2 id="feedback-form-title" className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-3 sm:mb-4 md:mb-6 text-center">
                      {t.formTitle}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 md:space-y-4" noValidate>
                      {/* Full Name - Responsive input */}
                      <div>
                        <label htmlFor="fullName" className="sr-only">
                          {t.fullName}
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          placeholder={t.fullName}
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          aria-invalid={errors.fullName ? 'true' : 'false'}
                          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                          className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-xs sm:text-sm"
                        />
                        {errors.fullName && (
                          <p id="fullName-error" className="text-red-500 text-xs mt-1" role="alert">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Email and Phone Row - Stack on mobile */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div>
                          <label htmlFor="email" className="sr-only">
                            {t.email}
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder={t.email}
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-xs sm:text-sm"
                          />
                          {errors.email && (
                            <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="sr-only">
                            {t.phone}
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder={t.phone}
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            aria-invalid={errors.phone ? 'true' : 'false'}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                            className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-xs sm:text-sm"
                          />
                          {errors.phone && (
                            <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Fax and Mobile Row - Stack on mobile */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div>
                          <label htmlFor="fax" className="sr-only">
                            {t.fax}
                          </label>
                          <input
                            type="text"
                            id="fax"
                            name="fax"
                            placeholder={t.fax}
                            value={formData.fax}
                            onChange={handleInputChange}
                            className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-xs sm:text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="mobile" className="sr-only">
                            {t.mobile}
                          </label>
                          <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            placeholder={t.mobile}
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-xs sm:text-sm"
                          />
                        </div>
                      </div>

                      {/* Suggestions Textarea - Responsive rows */}
                      <div className="relative">
                        <label htmlFor="suggestions" className="sr-only">
                          {t.suggestions}
                        </label>
                        <textarea
                          id="suggestions"
                          name="suggestions"
                          placeholder={t.suggestions}
                          value={formData.suggestions}
                          onChange={handleInputChange}
                          maxLength={500}
                          rows={3}
                          aria-describedby="suggestions-counter"
                          className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-gray-50 text-xs sm:text-sm"
                        />
                        <div id="suggestions-counter" className="absolute bottom-1 right-1 sm:right-2 text-xs text-gray-400" aria-live="polite">
                          ({charCount}/500)
                        </div>
                      </div>

                      {/* Captcha Section - Responsive layout */}
                      <fieldset className="space-y-1 sm:space-y-2">
                        <legend className="sr-only">Captcha verification</legend>
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                          <div 
                            className="bg-gray-200 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md font-mono text-sm sm:text-base font-bold text-red-600 tracking-wider min-w-[80px] sm:min-w-[100px] text-center w-full sm:w-auto"
                            aria-label={`Captcha code: ${captchaCode}`}
                            role="img"
                          >
                            {captchaCode}
                          </div>
                          <div className="flex-1 w-full">
                            <label htmlFor="captcha" className="sr-only">
                              {t.captchaPlaceholder}
                            </label>
                            <input
                              type="text"
                              id="captcha"
                              name="captcha"
                              placeholder={t.captchaPlaceholder}
                              value={formData.captcha}
                              onChange={handleInputChange}
                              required
                              aria-invalid={errors.captcha ? 'true' : 'false'}
                              aria-describedby={errors.captcha ? 'captcha-error' : 'captcha-help'}
                              className="w-full px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-xs sm:text-sm"
                            />
                            <div id="captcha-help" className="sr-only">
                              Enter the captcha code shown above
                            </div>
                            {errors.captcha && (
                              <p id="captcha-error" className="text-red-500 text-xs mt-1" role="alert">
                                {errors.captcha}
                              </p>
                            )}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          aria-label="Generate new captcha code"
                          className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded text-xs justify-center sm:justify-start w-full sm:w-auto p-1"
                        >
                          <FaArrowsRotate className="w-3 h-3" aria-hidden="true" />
                          {t.reloadCaptcha}
                        </button>
                      </fieldset>

                      {/* Submit Button - Responsive sizing */}
                      <div className="text-center pt-2 sm:pt-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          aria-describedby={isSubmitting ? 'submit-status' : undefined}
                          className="bg-amber-800 hover:bg-amber-900 disabled:bg-amber-600 disabled:cursor-not-allowed text-white font-semibold py-1.5 sm:py-2 px-4 sm:px-6 rounded-full transition-colors duration-200 shadow-lg text-xs sm:text-sm w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg 
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span id="submit-status" aria-live="polite">
                                Submitting...
                              </span>
                            </span>
                          ) : (
                            t.submit
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Decorative Threads Section */}
      <section className="h-44 w-full scale-50 sm:scale-75 md:scale-100 relative" aria-hidden="true">
        <Image
          src="/assets/threads.png"
          alt=""
          fill
          className="object-contain"
          priority={false}
          sizes="100vw"
        />
      </section>

      {/* MUI Snackbar for error messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity} 
          sx={{ width: '100%' }}
          role="alert"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* MUI Dialog for success message */}
      <Dialog
        open={openSuccessDialog}
        onClose={handleCloseSuccessDialog}
        aria-labelledby="success-dialog-title"
        aria-describedby="success-dialog-description"
        role="dialog"
      >
        <DialogTitle id="success-dialog-title" className="text-center">
          {t.thankYou}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="success-dialog-description" className="text-center">
            {t.thankYouMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions className="justify-center">
          <Button
            onClick={handleCloseSuccessDialog}
            autoFocus
            variant="contained"
            color="primary"
          >
            {t.ok}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Feedback
