'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import ScheduleTable from '@/components/ScheduleTable';
import Pagination from './Pagination';

export default function CareerClientPage({ lang, initialRows, pagination, showArchived }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Create toggle URL
  const getToggleUrl = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('show', showArchived ? 'current' : 'archive');
    newParams.set('page', '1');
    return `?${newParams.toString()}`;
  };

  // Handle button click
  const toggleArchiveView = () => {
    router.push(getToggleUrl());
  };

  return (
    <div
      style={{
        padding: "0 20px",
        fontFamily: "Arial, sans-serif",
        position: 'relative',
        minHeight: '80vh',
      }}
    >
      <ScheduleTable
        title={showArchived ? "Archived Openings" : "Current Openings"}
        titleHi={showArchived ? "पुरानी रिक्तियाँ" : "वर्तमान रिक्तियाँ"}
        rows={initialRows}
        // showDate={fale}
        lang={lang}
      />

      <div style={{ marginTop: "30px", display: 'flex', justifyContent: 'center' }}>
        {pagination && pagination.pages > 1 && (
          <Pagination
            currentPage={pagination.page}
            totalPages={pagination.pages}
          />
        )}
      </div>

      <div className="mb-6 flex justify-end">
        <button
          onClick={toggleArchiveView}
          className="bg-[#F7D7D8] hover:bg-[#ecc6c7] text-[#63412b] font-semibold py-2 px-6 rounded-lg shadow-md transition-colors"
        >
          {showArchived
            ? (lang === 'hi' ? 'वर्तमान देखें' : 'View Current')
            : (lang === 'hi' ? 'आर्काइव देखें' : 'View Archive')}
        </button>
      </div>
    </div>
  );
}
