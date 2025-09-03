'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import ScheduleTable from '@/components/ScheduleTable';

export default function Relatedlinks() {
  const { lang } = useParams();

  const RelatedlinksData = [
    {
      sno: 1,
      title: "Ministry of Textiles, Government of India, Udyog Bhawan, New Delhi",
      titleHi: "वस्त्र मंत्रालय, भारत सरकार, उद्योग भवन, नई दिल्ली",
      link: "https://www.texmin.nic.in/"
    },
    {
      sno: 2,
      title: "Development Commissioner for Handlooms, Ministry of Textiles, Government of India, Udyog Bhawan, New Delhi",
      titleHi: "हैंडलूम के लिए विकास आयुक्त, वस्त्र मंत्रालय, भारत सरकार, उद्योग भवन, नई दिल्ली",
      link: "http://www.handlooms.nic.in/"
    },
    {
      sno: 3,
      title: "The Handloom Export Promotion Council, 34, Cathedral Garden Road, Nungambakkam, Chennai-600034",
      titleHi: "हैंडलूम निर्यात संवर्धन परिषद, 34, कैथेड्रल गार्डन रोड, नुंगमबक्कम, चेन्नई-600034",
      link: "https://www.hepcindia.com/"
    }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <ScheduleTable
        lang={lang}
        title="Related Links"
        titleHi="संबंधित लिंक"
        rows={RelatedlinksData}
      />
    </div>
  );
}
