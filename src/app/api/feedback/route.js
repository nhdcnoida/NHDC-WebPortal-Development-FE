// src/app/api/feedback/route.js
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()
    const {
      fullName,
      email,
      phone,
      fax,
      mobile,
      suggestions,
      captcha,
      expectedCaptcha,
    } = body

    if (!captcha || captcha !== expectedCaptcha) {
      return NextResponse.json({ success: false, message: 'Invalid captcha' }, { status: 400 })
    }

    if (!fullName || !email || !suggestions) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 })
    }

    const backendResponse = await fetch(`${process.env.NEXT_PUBLIC_API}Feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      'public-x-token': process.env.NEXT_PUBLIC_TOKEN
      },
      body: JSON.stringify({
        FullName: fullName,
        Email: email,
        PhoneNumber: phone,
        Fax: fax,
        Mobile: mobile,
        Suggestion: suggestions,
      }),
    })

    if (!backendResponse.ok) {
      const error = await backendResponse.json()
      return NextResponse.json({ success: false, message: error.message || 'Failed to submit' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Feedback submitted' })
  } catch (err) {
    console.error('Feedback POST Error:', err)
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}
