'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Image from 'next/image';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const canvasRef = useRef(null);
  const router = useRouter();

  // Generate random captcha text
  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaText(captcha);
    return captcha;
  };

  // Draw captcha on canvas (memoized with useCallback)
  const drawCaptcha = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Fill background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw text
    ctx.font = '24px Arial';
    ctx.fillStyle = '#333';
    
    // Add some distortion
    for (let i = 0; i < captchaText.length; i++) {
      ctx.save();
      // Random vertical position and rotation
      ctx.translate(20 + i * 25, 30);
      ctx.rotate((Math.random() - 0.5) * 0.4);
      ctx.fillText(captchaText[i], 0, 0);
      ctx.restore();
    }
    
    // Add some noise
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`;
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }
  }, [captchaText]);

  // Initialize captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Redraw captcha when text changes
  useEffect(() => {
    if (captchaText) {
      drawCaptcha();
    }
  }, [captchaText, drawCaptcha]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setCaptchaError('');

    // Validate captcha first - trim whitespace and compare case-insensitive
    if (userCaptcha.trim().toLowerCase() !== captchaText.toLowerCase()) {
      setCaptchaError('Captcha verification failed. Please try again.');
      generateCaptcha();
      setUserCaptcha('');
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_Backe}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        // Store token and user data in cookies
        Cookies.set('token', data.token, { expires: 7, secure: true });
        Cookies.set('userdata', btoa(JSON.stringify(data.user)), { expires: 7, secure: true });

        router.push('/nhdc-Admin');
      } else {
        // Handle specific error message from API
        if (data.message === "Too many attempts from this IP, please try again later.") {
          setError(data.message);
        } else {
          setError(data.message || 'Invalid credentials.');
        }
        generateCaptcha();
        setUserCaptcha('');
      }
    } catch (err) {
      console.error(err);
      setError('Login failed. Please try again.');
      generateCaptcha();
      setUserCaptcha('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <Image
            height={1000}
            width={1000}
            src="/assets/NHDC.png"
            alt="Logo"
            className="w-20 h-20"
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          
          {/* Captcha Section */}
          <div className="space-y-2">
            <label className="block mb-1 text-sm font-medium text-gray-600">Captcha Verification</label>
            <div className="flex items-center space-x-2">
              <canvas 
                ref={canvasRef} 
                width="180" 
                height="50"
                className="border rounded"
                title="Captcha"
              />
              <button
                type="button"
                onClick={() => generateCaptcha()}
                className="p-2 text-blue-600 hover:text-blue-800"
                aria-label="Refresh captcha"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <input
              type="text"
              required
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the captcha text"
            />
            {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}
          </div>
          
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}