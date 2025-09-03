'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import ScheduleTable from '@/components/ScheduleTable';

function Empanelment() {
  const { lang } = useParams();

  const empanelmentData = [
    {
      sno: '1',
      title: 'D&C Supplier Empanelment Application Form',
      titleHi: 'डी एंड सी सप्लायर पैनलमेंट आवेदन पत्र',
      link: '/assets/pdfs/D_C_Supplier_Empanelment_Application_Form.pdf'
    },
    {
      sno: '2',
      title: 'Mill Empanelment Application Form',
      titleHi: 'मिल पैनलमेंट आवेदन पत्र',
      link: '/assets/pdfs/Mill_Empanelment_Application_Form.pdf'
    },
    {
      sno: '3',
      title: 'Empanelment List for Infra Vendors',
      titleHi: 'इन्फ्रा विक्रेताओं के लिए पैनलमेंट सूची',
      link: '/assets/pdfs/Empanelment_List for_Infra_Vendors.pdf'
    },
    {
      sno: '4',
      title:
        'List of Empanelled Agency for Providing Infrastructure Works, Publicity/Printing Including Security Services for Exhibitions Across Country',
      titleHi:
        'देशभर में प्रदर्शनियों के लिए बुनियादी ढांचा कार्य, प्रचार/मुद्रण सहित सुरक्षा सेवाएं प्रदान करने वाली पैनल में शामिल एजेंसियों की सूची',
      link: '/assets/pdfs/ListEmpanelledAgencyProvidingInfrastructureWorks.pdf'
    },
    {
      sno: '5',
      title: 'Organization of Special Handloom Expos (Silk Fab / Wool Fab), during the F.Y. 2019-20',
      titleHi: 'विशेष हथकरघा एक्सपो (सिल्क फैब / वूल फैब) का आयोजन, वित्तीय वर्ष 2019-20 के दौरान',
      link: '/assets/pdfs/OrganizationSpecialHandloomExpos-2019-20.pdf'
    },
    {
      sno: '6',
      title: 'Prospective Suppliers of Yarn and Dyes & Chemicals',
      titleHi: 'सूत्र और डाई एवं रसायनों के संभावित आपूर्तिकर्ता',
      link: '/assets/pdfs/RFP_FOR_EMPANELMENT_2017.pdf'
    },
    {
      sno: '7',
      title: 'Form For Participation in Special Handloom Expos',
      titleHi: 'विशेष हथकरघा एक्सपो में भागीदारी के लिए प्रपत्र',
      link: '/assets/pdfs/ParticipationSpecialHandloomExpos.pdf'
    }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <ScheduleTable
        lang={lang}
        title="Empanelment"
        titleHi="पैनलमेंट"
        rows={empanelmentData}
      />
    </div>
  );
}

export default Empanelment;
