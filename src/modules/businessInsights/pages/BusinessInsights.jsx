import React, { useState } from 'react';
import PageHeader from '../../core/components/PageHeader';

function BusinessInsights() {
  const [activeCategory, setActiveCategory] = useState('tips');

  const categories = [
    { id: 'tips', name: 'Tips Praktis' },
    { id: 'case-studies', name: 'Studi Kasus' },
    { id: 'challenges', name: 'Tantangan & Solusi' },
  ];

  const insights = {
    'tips': [
      {
        title: "Validasi Sebelum Investasi Besar",
        content: "Sebelum menginvestasikan waktu dan uang dalam jumlah besar, validasi ide bisnis Anda melalui MVP (Minimum Viable Product) atau prototype sederhana. Kumpulkan feedback dari pengguna awal untuk memahami apakah solusi Anda benar-benar memecahkan masalah mereka dan apakah mereka bersedia membayar untuk itu.",
        author: "Maya Santoso",
        role: "Founder & CEO, TechBumi"
      },
      {
        title: "Fokus pada Satu Saluran Pemasaran",
        content: "Banyak startup gagal karena mencoba menggunakan terlalu banyak saluran pemasaran sekaligus. Mulailah dengan satu saluran yang paling relevan untuk target pasar Anda dan kuasai sepenuhnya sebelum beralih ke saluran lain. Pendekatan ini memungkinkan Anda untuk mengoptimalkan hasil dengan budget terbatas.",
        author: "Randi Pratama",
        role: "Growth Marketing Specialist"
      },
      {
        title: "Bangun Sistem Sebelum Skala",
        content: "Sebelum mengejar pertumbuhan agresif, pastikan Anda memiliki sistem yang baik untuk operasional bisnis. Tanpa proses yang terstandarisasi dan sistem yang berfungsi baik, pertumbuhan cepat bisa menjadi bumerang yang menyebabkan kualitas turun dan pelanggan kecewa.",
        author: "Lina Wijaya",
        role: "Operations Director, ScaleUp Indonesia"
      },
      {
        title: "Dengarkan Tapi Jangan Selalu Ikuti",
        content: "Mendengarkan feedback pelanggan sangat penting, tapi jangan terjebak mengikuti semua saran. Bedakan antara 'nice-to-have' dengan 'must-have'. Terlalu banyak menambahkan fitur berdasarkan permintaan individual dapat membuat produk Anda kehilangan fokus dan menjadi sulit digunakan.",
        author: "Ari Nugroho",
        role: "Product Strategy Consultant"
      },
      {
        title: "Utamakan Cash Flow, Bukan Hanya Revenue",
        content: "Banyak bisnis dengan pendapatan tinggi tetap gagal karena masalah arus kas. Kelola siklus pembayaran dengan hati-hati, negosiasikan syarat pembayaran yang menguntungkan dengan pemasok, dan selalu siapkan cadangan kas untuk minimal 3-6 bulan operasional bisnis.",
        author: "Dewi Sulistiawati",
        role: "Financial Advisor for SMEs"
      }
    ],
    'case-studies': [
      {
        title: "GoTo: Dari Startup Lokal Menjadi Unicorn",
        content: "Gojek (sekarang GoTo) memulai sebagai layanan call center untuk pemesanan ojek pada 2010, kemudian bertransformasi menjadi super app melalui identifikasi kebutuhan pasar yang tepat. Kunci sukses mereka adalah membangun jaringan driver yang besar terlebih dahulu sebelum memperluas layanan, serta melakukan integrasi vertikal untuk mengatasi hambatan infrastruktur di Indonesia.",
        company: "GoTo",
        industry: "Teknologi, Transportasi, Fintech"
      },
      {
        title: "Tokopedia: Memperkuat E-commerce di Pasar Tradisional",
        content: "Tokopedia sukses dengan fokus pada pasar domestik dan memahami kebutuhan lokal. Mereka mengadaptasi model bisnis untuk mengakomodasi preferensi pembayaran lokal (termasuk COD dan transfer bank) dan berinvestasi besar pada edukasi merchant tradisional untuk beralih ke platform digital. Strategi lokalisasi yang kuat ini membantu mereka menghadapi kompetisi dari pemain global.",
        company: "Tokopedia",
        industry: "E-commerce"
      },
      {
        title: "Fore Coffee: Ekspansi Cepat dan Tantangannya",
        content: "Fore Coffee melakukan ekspansi agresif dengan membuka ratusan gerai dalam waktu singkat, didukung pendanaan venture capital yang besar. Namun, pandemi COVID-19 memaksa mereka melakukan konsolidasi dan menutup banyak gerai. Pelajaran pentingnya: ekspansi terlalu cepat tanpa memperhatikan unit economics yang solid dan tanpa rencana kontingensi dapat menjadi bumerang ketika terjadi perubahan pasar yang signifikan.",
        company: "Fore Coffee",
        industry: "F&B, Coffee Retail"
      },
      {
        title: "Evermos: Sukses dengan Social Commerce untuk Tier 2-3",
        content: "Evermos menemukan ceruk pasar yang belum terlayani dengan fokus pada model social commerce untuk kota-kota tier 2 dan 3 di Indonesia. Mereka memberdayakan reseller dari komunitas lokal untuk menjual produk, menciptakan dampak sosial sekaligus pertumbuhan bisnis. Model ini berhasil karena memahami pentingnya kepercayaan dan rekomendasi personal dalam keputusan pembelian di daerah non-metropolitan.",
        company: "Evermos",
        industry: "Social Commerce, Retail"
      },
      {
        title: "Halodoc: Mengatasi Tantangan Regulasi di Sektor Kesehatan",
        content: "Halodoc berhasil tumbuh di sektor kesehatan digital yang sangat diregulasi dengan pendekatan kolaboratif bersama stakeholder kunci, termasuk pemerintah dan asosiasi dokter. Mereka membangun model bisnis yang mematuhi regulasi kesehatan sambil tetap memberikan nilai tambah kepada pengguna. Pandemi COVID-19 mempercepat adopsi layanan telemedicine mereka dan membuktikan ketepatan visi bisnis mereka.",
        company: "Halodoc",
        industry: "Healthcare, Telemedicine"
      }
    ],
    'challenges': [
      {
        title: "Mengatasi Resistensi Pasar Terhadap Inovasi",
        challenge: "Pelanggan potensial sering menolak solusi baru karena kebiasaan atau ketidakpahaman tentang nilai yang ditawarkan.",
        solution: "1. Fokus pada early adopters yang lebih terbuka terhadap inovasi\n2. Edukasi pasar melalui konten yang menjelaskan manfaat solusi\n3. Tawarkan trial gratis atau garansi kepuasan untuk menurunkan risiko\n4. Gunakan studi kasus dan testimoni untuk membangun kredibilitas\n5. Terapkan perubahan secara bertahap daripada revolusi total",
        industry: "Teknologi, Jasa Profesional"
      },
      {
        title: "Mendapatkan Modal Awal",
        challenge: "Sulit meyakinkan investor atau mendapatkan pinjaman bank pada tahap awal bisnis tanpa traksi yang signifikan.",
        solution: "1. Mulai dengan bootstrap atau pendanaan dari keluarga dan teman\n2. Cari program inkubator atau akselerator bisnis\n3. Ikuti kompetisi startup untuk mendapatkan exposure dan hadiah\n4. Pertimbangkan crowdfunding untuk produk konsumen\n5. Fokus pada membangun MVP dengan biaya minimal untuk membuktikan konsep",
        industry: "Semua Industri"
      },
      {
        title: "Membangun Tim yang Tepat dengan Budget Terbatas",
        challenge: "Sulit menarik dan mempertahankan talent berkualitas tinggi saat belum mampu menawarkan gaji kompetitif.",
        solution: "1. Tawarkan equity atau profit sharing sebagai kompensasi tambahan\n2. Ciptakan budaya kerja yang positif dan fleksibel\n3. Rekrut berdasarkan potensi dan passion, bukan hanya pengalaman\n4. Manfaatkan freelancer atau outsourcing untuk kebutuhan spesifik\n5. Jadikan visi dan misi perusahaan sebagai daya tarik bagi talent yang value-driven",
        industry: "Teknologi, Kreatif"
      },
      {
        title: "Bersaing dengan Pemain Besar",
        challenge: "Sulit mendapatkan pangsa pasar ketika berhadapan dengan kompetitor yang sudah mapan dengan sumber daya lebih besar.",
        solution: "1. Fokus pada ceruk pasar spesifik yang kurang dilayani pemain besar\n2. Tawarkan pengalaman pelanggan yang lebih personal dan responsif\n3. Berinovasi dalam aspek yang diabaikan oleh pemain besar\n4. Bangun komunitas loyal di sekitar produk Anda\n5. Pertimbangkan kolaborasi alih-alih kompetisi langsung",
        industry: "Retail, FMCG, E-commerce"
      },
      {
        title: "Mengelola Cash Flow dalam Bisnis Seasonal",
        challenge: "Bisnis dengan pola permintaan musiman menghadapi tantangan dalam mengelola arus kas selama periode low season.",
        solution: "1. Diversifikasi produk atau layanan untuk menstabilkan pendapatan\n2. Implementasikan model langganan untuk pendapatan berulang\n3. Negosiasikan pembayaran fleksibel dengan pemasok\n4. Bangun cadangan kas dari periode high season\n5. Kurangi biaya tetap dan tingkatkan variabel cost",
        industry: "Pariwisata, F&B, Fashion"
      }
    ]
  };

  const renderContent = () => {
    switch (activeCategory) {
      case 'tips':
        return (
          <div className="space-y-8">
            {insights['tips'].map((tip, index) => (
              <div key={index} className="card hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
                <p className="text-gray-700 mb-4">{tip.content}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">{tip.author}</span>
                  <span className="mx-2">•</span>
                  <span>{tip.role}</span>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'case-studies':
        return (
          <div className="space-y-8">
            {insights['case-studies'].map((casestudy, index) => (
              <div key={index} className="card hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{casestudy.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {casestudy.industry}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{casestudy.content}</p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Perusahaan: {casestudy.company}</span>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'challenges':
        return (
          <div className="space-y-8">
            {insights['challenges'].map((challenge, index) => (
              <div key={index} className="card hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{challenge.title}</h3>
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {challenge.industry}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Tantangan:</h4>
                  <p className="text-gray-700">{challenge.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Solusi:</h4>
                  <div className="text-gray-700 whitespace-pre-line">{challenge.solution}</div>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div>
      <PageHeader 
        title="Wawasan & Strategi Bisnis" 
        description="Kumpulan tips praktis, studi kasus, dan pelajaran berharga dari para ahli industri dan pengusaha sukses." 
      />
      
      <div className="mb-8">
        <div className="flex border-b border-gray-200">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`py-4 px-6 font-medium text-sm cursor-pointer ${
                activeCategory === category.id
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {renderContent()}
    </div>
  );
}

export default BusinessInsights;