import React from 'react';

const GlobalTable = ({ headers, data, lang = 'en', striped = true, borderColor = '#A1A1A1', headerBgColor = '#F7D7D8' }) => {
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full divide-y border border-[${borderColor}]`}>
        <thead className={`bg-[${headerBgColor}]`}>
          <tr className={`border border-[${borderColor}] text-3xl font-bold`}>
            {headers.map((header, index) => (
              <th 
                key={index}
                className={`px-6 border border-[${borderColor}] py-3 text-left text-base font-medium uppercase tracking-wider`}
              >
                {header.translate ? (lang === 'hi' ? header.hiText : header.enText) : header.text}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`bg-white divide-y divide-gray-200 border border-[${borderColor}]`}>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={striped && rowIndex % 2 === 0 ? `bg-white border border-[${borderColor}]` : `bg-gray-50 border border-[${borderColor}]`}
            >
              {headers.map((header, colIndex) => {
                const cellData = row[header.dataKey];
                
                // Handle translated content
                if (header.translate && typeof cellData === 'object') {
                  return (
                    <td 
                      key={colIndex}
                      className={`px-6 border border-[${borderColor}] py-4 whitespace-nowrap text-sm`}
                    >
                      {lang === 'hi' ? cellData.hi : cellData.en}
                    </td>
                  );
                }
                
                // Handle regular content
                return (
                  <td 
                    key={colIndex}
                    className={`px-6 border border-[${borderColor}] py-4 whitespace-nowrap text-sm`}
                  >
                    {cellData}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GlobalTable;