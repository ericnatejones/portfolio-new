'use client'
import Head from 'next/head';
import Projects from '../../components/Projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>My Projects</title>
      </Head>
      <Projects/>
    </div>
  );
}
