'use client'
import Head from 'next/head';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Contact Info</title>
      </Head>
      <Contact/>
    </div>
  );
}
