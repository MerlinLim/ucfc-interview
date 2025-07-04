'use client';
import React, { useEffect, useState } from 'react';

type QuestionsData = {
  [section: string]: string[] | { [subSection: string]: string[] } | { [key: string]: string };
};

export default function Questionnaire2() {
  const [data, setData] = useState<QuestionsData | null>(null);

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    fetch('/questions2.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="max-w-4xl mx-auto p-6 text-sm md:text-base bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Find a junior to interview!</h1>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 no-print"
          >
            Print / Save as PDF
          </button>
        </div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          {Object.entries(data["personalInfo"] as Record<string, string>).map(([label]) => (
            <div key={label}>
              <label className="block font-semibold">{label}:</label>
              <textarea className="w-full border border-gray-300 rounded p-2 mt-1" rows={1}></textarea>
            </div>
          ))}
        </div>

        {/* Other Sections */}
        {Object.entries(data).map(([section, content]) => {
          if (section === 'personalInfo') return null;

          return (
            <div key={section} className="mt-8">
              <h2 className="text-xl font-semibold mb-4">{section}</h2>

              {Array.isArray(content) ? (
                // Regular sections with array of questions
                content.map((q, i) => (
                  <div key={i} className="mb-4">
                    <p className="font-medium">{q}</p>
                    <textarea className="w-full border border-gray-300 rounded p-2 mt-1" rows={3}></textarea>
                  </div>
                ))
              ) : (
                // Sections with subsections
                Object.entries(content as Record<string, string[]>).map(([sub, qs]) => (
                  <div key={sub} className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">{sub}</h3>
                    {qs.map((q, i) => (
                      <div key={i} className="mb-4">
                        <p className="font-medium">{q}</p>
                        <textarea className="w-full border border-gray-300 rounded p-2 mt-1" rows={3}></textarea>
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}