'use client'; // Add this directive since we're using hooks

import { useParams } from 'next/navigation';
import ScheduleTable from '@/components/ScheduleTable';

const EmployeeCornerPage = () => {
  const { lang } = useParams();

  const formsData = {
    title: lang === 'hi' ? 'प्रपत्र' : 'Forms',
    rows: [
      {
        sno: '1',
        title: lang === 'hi' ? 'कर्मचारी जमा लिंक्ड बीमा योजना' : 'Employees Deposit Linked Insurance Scheme',
         link: `${process.env.NEXT_PUBLIC_STORAGE}/public/EmployeeCorner/EMPLOYEES_DEPOSIT_LINKED_INSURANCE_SCHEME.pdf`,
      },
      {
        sno: '2',
        title: lang === 'hi' ? 'पेंशन फॉर्म' : 'Pension Form',
         link: `${process.env.NEXT_PUBLIC_STORAGE}/public/EmployeeCorner/PENSION_FORM.pdf`,
      },
      {
        sno: '3',
        title: lang === 'hi' ? 'नई समूह ग्रेच्युटी - दावा' : 'New Group Gratuity - Claim',
         link: `${process.env.NEXT_PUBLIC_STORAGE}/public/EmployeeCorner/New_Group_Gratuity_Claim.pdf`,
      },
      {
        sno: '4',
        title: lang === 'hi' ? 'पीएफ फॉर्म' : 'PF Form',
        link: `${process.env.NEXT_PUBLIC_STORAGE}/public/EmployeeCorner/PF_FORM.pdf`,
      },
      {
        sno: '5',
        title: lang === 'hi' ? 'ओपीटीबी दावा फॉर्म' : 'OPTB Claim Form',
        actions: [
                {
                    type: "view",
                    label: lang
                        ? "view - (English) "
                        : "देखें - (English)",
                    link: `${process.env.NEXT_PUBLIC_STORAGE}/public/EmployeeCorner/OPTB_Form_English.pdf`,
                },
                {
                    type: "view",
                    label: lang
                        ? "view - (Hindi) "
                        : "देखें - (Hindi)",
                   link: `${process.env.NEXT_PUBLIC_STORAGE}/public/EmployeeCorner/OPTB_Form_Hindi.pdf`,
                },
            ],
         
      },
      {
        sno: '6',
        title: lang === 'hi' ? 'एनएचडीसी टीएडीए कार्यालय आदेश' : 'NHDC TADA Office Order',
        link: `${process.env.NEXT_PUBLIC_STORAGE}/public/EmployeeCorner/Annual%20accounts%202012-13.pdf`,
       
      }
    ]
  };

  const ordersData = {
    title: lang === 'hi' ? 'कार्यालय आदेश' : 'Office Orders',
    rows: [
      {
        sno: '1',
        title: lang === 'hi' 
          ? 'महिलाओं के यौन उत्पीड़न की रोकथाम और निवारण' 
          : 'Prevention and Redressal of Sexual Harassment of Women',
        date: '13.07.2024',
         link: `${process.env.NEXT_PUBLIC_STORAGE}/public/EmployeeCorner/Prevention_and_Redressal_of_Sexual_Harassment_of_Women_13072024.pdf`,
      }
    ],
    showDate: true
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">
        {lang === 'hi' ? 'कर्मचारी कोना' : 'Employee Corner'}
      </h1>
      
      {/* Forms Table */}
      <ScheduleTable
        title={formsData.title}
        rows={formsData.rows}
        lang={lang || 'en'}
        columns={[
          lang === 'hi' ? 'क्रम संख्या' : 'Sr. No.',
          lang === 'hi' ? 'शीर्षक' : 'Title',
          lang === 'hi' ? 'कार्रवाई' : 'Action'
        ]}
      />
      
      {/* Office Orders Table */}
      <ScheduleTable
        title={ordersData.title}
        rows={ordersData.rows}
        lang={lang || 'en'}
        showDate={ordersData.showDate}
        columns={[
          lang === 'hi' ? 'क्रम संख्या' : 'Sr. No.',
          lang === 'hi' ? 'शीर्षक' : 'Title',
          lang === 'hi' ? 'कार्रवाई' : 'Action'
        ]}
      />
    </div>
  );
};

export default EmployeeCornerPage;