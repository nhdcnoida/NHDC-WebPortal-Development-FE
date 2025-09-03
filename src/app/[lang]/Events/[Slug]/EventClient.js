// app/[lang]/events/[Slug]/EventClient.js
'use client';

import Image from 'next/image';
import { useState } from 'react';

const EventClient = ({ firstItem, lang, Slug, archiveView: initialArchiveView }) => {
  const [isArchiveView, setIsArchiveView] = useState(initialArchiveView);

  // Determine which tables to use based on language
  const tables = lang === 'hi' ? firstItem.HiTables : firstItem.EnTables;

  // Sort tables by date (newest first)
  const sortedTables = [...tables].sort((a, b) => {
    const dateA = new Date(a.TableDate || 0);
    const dateB = new Date(b.TableDate || 0);
    return dateB - dateA;
  });

  // Get the latest table (if any)
  const latestTable = sortedTables.length > 0 ? sortedTables[0] : null;

  // Get archive tables (all except the latest)
  const archiveTables = sortedTables.length > 1 ? sortedTables.slice(1) : [];

  // Transform the data to match table format
  const transformTableData = (table) => {
    return {
      title: table.title,
      date: table.TableDate,
      headers: table.headers,
      rows: table.rows.map((row, index) => ({
        sno: index + 1,
        cells: row.cells,
      }))
    };
  };

  const transformedLatestData = latestTable ? transformTableData(latestTable) : null;
  const transformedArchiveData = archiveTables.map(transformTableData);

  // Toggle archive view
  const toggleArchiveView = () => {
    setIsArchiveView(!isArchiveView);
    // Update URL without page reload
    const newUrl = new URL(window.location);
    if (!isArchiveView) {
      newUrl.searchParams.set('archive', 'true');
    } else {
      newUrl.searchParams.delete('archive');
    }
    window.history.replaceState({}, '', newUrl);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Event Heading */}
      <h1 className="text-4xl w-full font-bold mb-6 text-start text-[#62402A]">
        {lang === 'hi' ? firstItem?.HiName : firstItem?.EnName || 'Event'}
      </h1>

      

      {/* Show latest content if not in archive view */}
      {!isArchiveView && (
        <>
          {/* Event Image */}
          {firstItem?.ImagesLink?.length > 0 && (
            <div className="mb-8 max-h-96 overflow-hidden shadow-md rounded-xl border border-gray-300 bg-[#F7D7D8] relative w-full aspect-video">
              <Image
                src={`${process.env.NEXT_PUBLIC_STORAGE}${firstItem.ImagesLink[0].Link}`}
                alt={lang === 'hi' ? firstItem?.HiName : firstItem?.EnName || 'Event'}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                priority
              />
            </div>
          )}

          {/* HTML Content */}
          {firstItem && (
            <div
              dangerouslySetInnerHTML={{
                __html: (lang === 'hi' ? firstItem?.HiHtmlData : firstItem?.HtmlData || ''),
              }}
            />
          )}

          {/* Latest Table */}
          {transformedLatestData && (
            <div className="px-5 font-sans mt-8">
              <div className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-[#63412b]">
                  {transformedLatestData.title}
                  
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#F7D7D8] text-[#63412b]">
                        <th className="p-2 border border-gray-300">S. No.</th>
                        {transformedLatestData.headers.map((header, i) => (
                          <th key={i} className="p-2 border border-gray-300 ">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {transformedLatestData.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                          <td className="p-2 border border-gray-300">{row.sno}</td>
                          {row.cells.map((cell, cellIndex) => (
                            <td key={cellIndex} className="p-2 border border-gray-300">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Show archive content if in archive view */}
      {isArchiveView && archiveTables.length > 0 && (
        <div className="px-5 font-sans">
          <h2 className="text-2xl font-bold mb-6 text-[#62402A]">
            {lang === 'hi' ? 'आर्काइव' : 'Archive'}
          </h2>
          
          {transformedArchiveData.map((tableData, index) => (
            <div key={index} className="mb-10">
              <h3 className="mb-4 text-xl font-semibold text-[#63412b]">
                {tableData.title}
                
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#F7D7D8] text-[#63412b]">
                      <th className="p-2 border border-gray-300">S. No.</th>
                      {tableData.headers.map((header, i) => (
                        <th key={i} className="p-2 border border-gray-300 ">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="hover:bg-gray-50">
                        <td className="p-2 border border-gray-300">{row.sno}</td>
                        {row.cells.map((cell, cellIndex) => (
                          <td key={cellIndex} className="p-2 border border-gray-300">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

{/* Archive Button */}
      {archiveTables.length > 0 && (
        <div className="mb-6 flex justify-end">
          <button 
            onClick={toggleArchiveView}
            className="bg-[#F7D7D8] hover:bg-[#ecc6c7] text-[#62402A] font-semibold py-2 px-4 rounded transition-colors"
          >
            {isArchiveView 
              ? (lang === 'hi' ? 'वर्तमान देखें' : 'View Current') 
              : (lang === 'hi' ? 'आर्काइव देखें' : 'View Archive')
            }
          </button>
        </div>
      )}
      
      {/* Show message if no archive data */}
      {isArchiveView && archiveTables.length === 0 && (
        <div className="px-5 font-sans text-center py-10">
          <h2 className="text-2xl font-bold mb-4 text-[#62402A]">
            {lang === 'hi' ? 'कोई आर्काइव डेटा नहीं' : 'No Archive Data'}
          </h2>
          <p className="text-gray-600">
            {lang === 'hi' 
              ? 'इस इवेंट के लिए कोई आर्काइव डेटा उपलब्ध नहीं है।' 
              : 'No archive data is available for this event.'
            }
          </p>
        </div>
      )}
    </div>
  );
}

export default EventClient;