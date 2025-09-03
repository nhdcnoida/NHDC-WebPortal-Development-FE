'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import ScheduleTable from '@/components/ScheduleTable';

function MSME() {
  const { lang } = useParams();

  const mouData = [
    {
      sno: '1',
      title: "Annual Procurement Plan from MSME's for FY 2016-17",
      titleHi: 'वित्त वर्ष 2016-17 के लिए एमएसएमई से वार्षिक खरीद योजना',
      date: '14.12.2016',
      link: '/assets/pdfs/Annual Procurement Plan MSEs 2016-17.pdf'
    },
    {
      sno: '2',
      title: 'Procurement Plan Through MSME Suppliers 2017-18',
      titleHi: 'एमएसएमई आपूर्तिकर्ताओं के माध्यम से खरीद योजना 2017-18',
      date: '20.11.2017',
      link: '/assets/pdfs/Procurement Plan through MSME Suppliers 2017-18.pdf'
    },
    {
      sno: '3',
      title: 'Procurement Plan Through MSME Suppliers 2023-24',
      titleHi: 'एमएसएमई आपूर्तिकर्ताओं के माध्यम से खरीद योजना 2023-24',
      date: '03.01.2025',
      link: '/assets/pdfs/Annual_Procurement_Plan_23-24.pdf'
    },
    {
      sno: '4',
      title: 'Procurement Plan Through MSME Suppliers 2024-25',
      titleHi: 'एमएसएमई आपूर्तिकर्ताओं के माध्यम से खरीद योजना 2024-25',
      date: '03.01.2025',
      link: '/assets/pdfs/Annual_Procurement_Plan_24-25.pdf'
    },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <ScheduleTable
        lang={lang}
        title="MSME's Procurement"
        titleHi="एमएसएमई की खरीद"
        rows={mouData}
        showDate={true}
      />
    </div>
  );
}

export default MSME;
