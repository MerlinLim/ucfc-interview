'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center mb-4">UCFC Interview System</h1>
        <button
          onClick={() => router.push('/freshie-interviewer')}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Freshie Interviewer
        </button>
        <button
          onClick={() => router.push('/senior-interviewer')}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Senior Interviewer
        </button>
      </div>
    </div>
  );
}
