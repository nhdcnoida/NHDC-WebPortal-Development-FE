'use client';
import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Link from 'next/link';

function convertFirstSToSuperscript(text) {
  const match = text.match(/^(\d)(s)/i); // matches patterns like 2s, 3S at the beginning
  if (match) {
    const superscriptS = 'ˢ';
    const digit = match[1];
    return text.replace(/^(\d)s/i, `${digit}${superscriptS}`);
  }
  return text;
}

const YarnRatePDF = ({ yarnType, mills, effectiveDate, lang }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>{lang === 'hi' ? 'यार्न दर विवरण' : 'Yarn Rate Details'}</Text>
          <Text style={styles.subtitle}>
            {lang === 'hi' ? 'प्रभावी तिथि' : 'Effective Date'}: {new Date(effectiveDate).toLocaleDateString()}
          </Text>
          <Text style={styles.yarnType}>
            {lang === 'hi' ? 'यार्न प्रकार' : 'Yarn Type'}: {yarnType.Prefix} - {yarnType.Name}
          </Text>
        </View>
        
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableHeader]}>{lang === 'hi' ? 'क्रमांक' : 'S.No.'}</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>{lang === 'hi' ? 'मिल का नाम' : 'Mill Name'}</Text>
            <Text style={[styles.tableCell, styles.tableHeader]}>{lang === 'hi' ? 'प्रति किलो दर' : 'Rate per K.G.'}</Text>
          </View>
          
          {mills.map((mill, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{index + 1}</Text>
              <Text style={styles.tableCell}>{lang === 'hi' ? mill.Mill.HiName : mill.Mill.EnName}</Text>
              <Text style={styles.tableCell}>{mill.Rate.toFixed(2)}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  yarnType: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    width: '33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableHeader: {
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
  },
});

export default function YarnRatePage({ yarnrates }) {
  const { lang } = useParams();
  const [openIndex, setOpenIndex] = useState(null);

  // Memoize the latest rate calculation
  const { latestRate, effectiveDate, mainPdfLink, yarnData } = useMemo(() => {
    const latestRate = yarnrates.data.reduce((prev, current) => {
      return new Date(prev.EffectiveDateMonth) > new Date(current.EffectiveDateMonth) 
        ? prev 
        : current;
    });
    
    const effectiveDate = latestRate.EffectiveDateMonth;
    const mainPdfLink = latestRate.MainFileLink;
    
    const yarnData = latestRate.Rates.map(rate => ({
      type: `${rate.YarnType.Prefix} - ${rate.YarnType.Name}`,
      mills: rate.MillRates.map(millRate => ({
        EnName: millRate.Mill.EnName,
        HiName: millRate.Mill.HiName,
        rate: millRate.Rate,
        millData: millRate.Mill
      })),
      yarnTypeData: rate.YarnType,
      millRatesData: rate.MillRates
    }));

    return { latestRate, effectiveDate, mainPdfLink, yarnData };
  }, [yarnrates.data]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#fdf6f6] flex justify-center py-12 px-4">
      <div className="w-full max-w-[90%]">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {lang === 'hi' ? 'यार्न दर' : 'Yarn Rate'}{" "}
            <span className="font-normal">
              ({lang === 'hi' ? 'प्रभावी तिथि' : 'w.e.f.'}{" "}
              {new Date(effectiveDate).toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
              )
            </span>
          </h1>

          {mainPdfLink && (
            <Link
              href={`${process.env.NEXT_PUBLIC_STORAGE}${mainPdfLink}`}
              target='_blank'
              className="flex items-center gap-2 bg-[#f7dede] hover:bg-[#f5cccc] px-4 py-2 rounded-md transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              {lang === 'hi' ? 'पूर्ण पीडीएफ डाउनलोड करें' : 'Download Full PDF'}
            </Link>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {yarnData.map((item, index) => (
            <div
              key={index}
              className="w-full border border-[#cba5a5] rounded-md overflow-hidden shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full h-[51px] px-4 flex justify-between items-center bg-[#f7dede] hover:bg-[#f5cccc] transition-colors duration-200"
              >
                <span className="text-[16px] font-medium text-[#333]">
                  {convertFirstSToSuperscript(item.type)}
                </span>
                <div className="flex items-center gap-4">
                  <PDFDownloadLink 
                    document={
                      <YarnRatePDF 
                        yarnType={item.yarnTypeData} 
                        mills={item.millRatesData} 
                        effectiveDate={effectiveDate}
                        lang={lang}
                      />
                    }
                    fileName={`${item.type}-${lang === 'hi' ? 'दर' : 'Rates'}-${new Date(effectiveDate).toLocaleDateString()}.pdf`}
                    className="text-[#333] hover:text-[#555] flex items-center"
                  >
                    {({ loading }) => (
                      loading ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-spin" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )
                    )}
                  </PDFDownloadLink>
                  <span className="text-lg text-[#333]">
                    {openIndex === index ? '▲' : '▼'}
                  </span>
                </div>
              </button>

              {openIndex === index && (
                <div className="bg-white px-4 py-4">
                  <table className="w-full table-auto text-left border-collapse text-[15px]">
                    <thead>
                      <tr className="text-[#333] font-semibold border-b border-gray-300">
                        <th className="py-2">{lang === 'hi' ? 'क्रमांक' : 'S.No.'}</th>
                        <th className="py-2">{lang === 'hi' ? 'मिलों का नाम' : 'Name of Mills'}</th>
                        <th className="py-2">{lang === 'hi' ? 'प्रति किलो दर' : 'Rate per K.G.'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.mills.map((mill, i) => (
                        <tr key={i} className="border-b border-gray-100">
                          <td className="py-2">{i + 1}</td>
                          <td className="py-2">{lang === 'hi' ? mill.HiName : mill.EnName}</td>
                          <td className="py-2">{mill.rate.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}