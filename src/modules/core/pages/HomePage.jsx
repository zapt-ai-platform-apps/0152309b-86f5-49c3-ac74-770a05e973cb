import React from 'react';
import { Link } from 'react-router-dom';
import {
  LightBulbIcon,
  MapIcon,
  BookOpenIcon,
  DocumentTextIcon,
  ChartBarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import FeatureCard from '../components/FeatureCard';

function HomePage() {
  const features = [
    {
      title: 'Analisis Ide Bisnis',
      description: 'Analisis kelayakan ide bisnis Anda berdasarkan potensi pasar, persaingan, dan proyeksi finansial.',
      icon: <LightBulbIcon className="h-6 w-6 text-blue-600" />,
      link: '/analisis-ide',
    },
    {
      title: 'Panduan Langkah-demi-Langkah',
      description: 'Ikuti panduan terstruktur untuk perencanaan, eksekusi, dan pengembangan bisnis Anda.',
      icon: <MapIcon className="h-6 w-6 text-blue-600" />,
      link: '/panduan-langkah',
    },
    {
      title: 'Wawasan & Strategi Bisnis',
      description: 'Dapatkan tips praktis, studi kasus, dan pelajaran dari pengusaha sukses.',
      icon: <BookOpenIcon className="h-6 w-6 text-blue-600" />,
      link: '/wawasan-bisnis',
    },
    {
      title: 'Template & Alat Bantu Bisnis',
      description: 'Akses template siap pakai seperti Rencana Bisnis, Model Bisnis Kanvas, dan Anggaran Keuangan.',
      icon: <DocumentTextIcon className="h-6 w-6 text-blue-600" />,
      link: '/template-bisnis',
    },
    {
      title: 'Riset Pasar & Analisis Tren',
      description: 'Jelajahi data riset pasar terbaru dan analisis tren industri untuk memperkuat ide bisnis Anda.',
      icon: <ChartBarIcon className="h-6 w-6 text-blue-600" />,
      link: '/riset-pasar',
    },
    {
      title: 'Generator Ide Bisnis',
      description: 'Temukan inspirasi dengan generator ide bisnis kami berdasarkan tren pasar dan minat Anda.',
      icon: <SparklesIcon className="h-6 w-6 text-blue-600" />,
      link: '/generator-ide',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center my-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Wujudkan Visi Bisnis Anda
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Ubah ide brilian Anda menjadi bisnis yang sukses dengan platform analisis komprehensif dan panduan langkah demi langkah kami.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/analisis-ide" className="btn-primary text-lg px-6 py-3 cursor-pointer">
            Analisis Ide Bisnis
          </Link>
          <Link to="/generator-ide" className="btn-outline text-lg px-6 py-3 cursor-pointer">
            Cari Inspirasi
          </Link>
        </div>
      </section>

      {/* Main Features */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-10">Fitur Unggulan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              link={feature.link}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="my-16 bg-blue-50 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Siap Memulai Perjalanan Bisnis Anda?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Mulai validasi ide bisnis Anda sekarang dan dapatkan panduan lengkap dari perencanaan hingga eksekusi.
        </p>
        <Link to="/analisis-ide" className="btn-primary text-lg px-6 py-3 cursor-pointer">
          Mulai Sekarang
        </Link>
      </section>
    </div>
  );
}

export default HomePage;