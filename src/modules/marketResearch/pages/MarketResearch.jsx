import React, { useState } from 'react';
import PageHeader from '../../core/components/PageHeader';
import { ChartBarIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function MarketResearch() {
  const [activeTab, setActiveTab] = useState('industries');
  const [searchTerm, setSearchTerm] = useState('');
  
  const industries = [
    {
      id: 'e-commerce',
      name: 'E-commerce',
      trends: [
        {
          title: 'Social Commerce',
          description: 'Integrasi antara platform e-commerce dan media sosial semakin meningkat, memungkinkan pembeli melakukan transaksi langsung melalui platform sosial tanpa harus beralih ke website terpisah.',
          growth: 'Tinggi',
          timeframe: 'Saat ini - 5 tahun ke depan',
          opportunities: [
            'Membuat platform yang memudahkan penjual tradisional memanfaatkan sosial media',
            'Mengembangkan tools analitik untuk social commerce',
            'Layanan fulfillment khusus untuk penjual social commerce'
          ]
        },
        {
          title: 'Quick Commerce',
          description: 'Pengiriman barang dalam waktu sangat cepat (15-30 menit) untuk kebutuhan mendesak, terutama untuk grocery dan kebutuhan sehari-hari.',
          growth: 'Tinggi',
          timeframe: 'Saat ini - 3 tahun ke depan',
          opportunities: [
            'Layanan fulfillment mikro-warehouse di area urban',
            'Solusi routing dan optimasi pengiriman cepat',
            'Platform aggregator untuk toko kelontong lokal'
          ]
        },
        {
          title: 'Voice Commerce',
          description: 'Pembelian melalui perangkat berbasis suara seperti smart speaker, memungkinkan pengalaman belanja hands-free.',
          growth: 'Sedang',
          timeframe: '2-5 tahun ke depan',
          opportunities: [
            'Aplikasi voice shopping untuk Bahasa Indonesia',
            'Integrasi e-commerce dengan asisten virtual',
            'Solusi keamanan untuk verifikasi transaksi berbasis suara'
          ]
        }
      ],
      statistics: [
        { label: 'Ukuran Pasar (2023)', value: 'Rp 526 triliun' },
        { label: 'Pertumbuhan Tahunan', value: '20-25%' },
        { label: 'Penetrasi Online', value: '63% populasi internet' },
        { label: 'Kategori Terbesar', value: 'Fashion, Elektronik, FMCG' }
      ]
    },
    {
      id: 'fintech',
      name: 'Financial Technology (Fintech)',
      trends: [
        {
          title: 'Embedded Finance',
          description: 'Layanan keuangan yang terintegrasi ke dalam platform non-finansial, memungkinkan perusahaan non-bank menawarkan produk keuangan dalam ekosistem mereka sendiri.',
          growth: 'Tinggi',
          timeframe: 'Saat ini - 5 tahun ke depan',
          opportunities: [
            'Solusi white-label untuk layanan keuangan',
            'API untuk integrasi layanan keuangan ke platform lain',
            'Compliance-as-a-service untuk regulasi keuangan'
          ]
        },
        {
          title: 'BNPL (Buy Now Pay Later)',
          description: 'Layanan kredit mikro yang memungkinkan konsumen membayar secara cicilan tanpa bunga atau dengan bunga rendah, terutama untuk pembelian online.',
          growth: 'Tinggi',
          timeframe: 'Saat ini - 3 tahun ke depan',
          opportunities: [
            'BNPL untuk segmen B2B atau UMKM',
            'Solusi risk assessment untuk BNPL',
            'Integrasi BNPL dengan platform e-commerce lokal'
          ]
        },
        {
          title: 'Wealth Tech',
          description: 'Platform yang menyederhanakan investasi dan pengelolaan kekayaan, membuat layanan yang dulunya hanya untuk kalangan atas menjadi tersedia untuk pasar yang lebih luas.',
          growth: 'Sedang',
          timeframe: '1-5 tahun ke depan',
          opportunities: [
            'Platform micro-investing untuk pemula',
            'Robo-advisor dengan penyesuaian lokal',
            'Edukasi finansial terintegrasi dengan alat investasi'
          ]
        }
      ],
      statistics: [
        { label: 'Ukuran Pasar (2023)', value: 'Rp 378 triliun' },
        { label: 'Pertumbuhan Tahunan', value: '34-38%' },
        { label: 'Jumlah Fintech', value: '~360 perusahaan' },
        { label: 'Segmen Terbesar', value: 'Payment, Lending, Investment' }
      ]
    },
    {
      id: 'edtech',
      name: 'Educational Technology (EdTech)',
      trends: [
        {
          title: 'Upskilling & Reskilling Platforms',
          description: 'Platform pelatihan keterampilan untuk mempersiapkan tenaga kerja menghadapi perubahan kebutuhan pasar dan teknologi baru.',
          growth: 'Tinggi',
          timeframe: 'Saat ini - 5 tahun ke depan',
          opportunities: [
            'Platform pelatihan skill digital untuk generasi senior',
            'Kursus nano-degree bekerjasama dengan industri',
            'Solusi assessment skill untuk perusahaan'
          ]
        },
        {
          title: 'Adaptive Learning',
          description: 'Sistem pembelajaran yang menyesuaikan konten dan metode berdasarkan kemampuan dan perkembangan individu pelajar.',
          growth: 'Sedang',
          timeframe: '2-5 tahun ke depan',
          opportunities: [
            'Platform bimbingan belajar personalisasi',
            'Tools analitik perkembangan pembelajaran',
            'Konten kurikulum adaptif berbahasa Indonesia'
          ]
        },
        {
          title: 'Gamification of Learning',
          description: 'Penerapan elemen game dalam proses pembelajaran untuk meningkatkan engagement dan retensi informasi.',
          growth: 'Sedang',
          timeframe: '1-3 tahun ke depan',
          opportunities: [
            'Platform pembelajaran berbasis game untuk K-12',
            'Sistem reward dan achievement untuk pendidikan tinggi',
            'Simulasi interaktif untuk pelatihan kejuruan'
          ]
        }
      ],
      statistics: [
        { label: 'Ukuran Pasar (2023)', value: 'Rp 28.5 triliun' },
        { label: 'Pertumbuhan Tahunan', value: '29-32%' },
        { label: 'Segmen Pengguna Terbesar', value: 'K-12, Perguruan Tinggi' },
        { label: 'Tingkat Adopsi', value: '42% institusi pendidikan' }
      ]
    },
    {
      id: 'healthtech',
      name: 'Health Technology (HealthTech)',
      trends: [
        {
          title: 'Telemedicine',
          description: 'Konsultasi medis jarak jauh melalui video call atau chat, memungkinkan akses layanan kesehatan dari mana saja.',
          growth: 'Tinggi',
          timeframe: 'Saat ini - 3 tahun ke depan',
          opportunities: [
            'Telemedicine untuk spesialisasi khusus',
            'Integrasi dengan asuransi kesehatan',
            'Layanan telemedicine untuk daerah terpencil'
          ]
        },
        {
          title: 'Digital Health Records',
          description: 'Sistem penyimpanan dan pengelolaan rekam medis secara digital yang bisa diakses oleh pasien dan tenaga medis dari berbagai layanan kesehatan.',
          growth: 'Sedang',
          timeframe: '2-5 tahun ke depan',
          opportunities: [
            'Interoperabilitas antar layanan kesehatan',
            'Portal pasien untuk akses rekam medis',
            'Analitik kesehatan berbasis big data'
          ]
        },
        {
          title: 'Mental Health Tech',
          description: 'Aplikasi dan platform untuk mendukung kesehatan mental, mulai dari meditation apps hingga konseling virtual.',
          growth: 'Tinggi',
          timeframe: 'Saat ini - 5 tahun ke depan',
          opportunities: [
            'Platform konseling online terjangkau',
            'Aplikasi well-being untuk karyawan korporat',
            'Tools monitoring kesehatan mental berbasis AI'
          ]
        }
      ],
      statistics: [
        { label: 'Ukuran Pasar (2023)', value: 'Rp 18.7 triliun' },
        { label: 'Pertumbuhan Tahunan', value: '26-31%' },
        { label: 'Adopsi Telemedicine', value: '28% populasi urban' },
        { label: 'Segmen Terbesar', value: 'Telemedicine, Health Information Systems' }
      ]
    },
    {
      id: 'agritech',
      name: 'Agricultural Technology (AgriTech)',
      trends: [
        {
          title: 'Supply Chain Digitalization',
          description: 'Digitalisasi rantai pasok pertanian untuk menghubungkan petani langsung dengan pasar dan konsumen, mengurangi peran tengkulak.',
          growth: 'Tinggi',
          timeframe: 'Saat ini - 3 tahun ke depan',
          opportunities: [
            'Platform agregasi hasil pertanian',
            'Sistem penjaminan kualitas produk',
            'Solusi logistik untuk produk pertanian'
          ]
        },
        {
          title: 'Precision Farming',
          description: 'Penerapan teknologi seperti IoT, drone, dan sensor untuk memantau kondisi lahan dan tanaman secara tepat, meningkatkan hasil dan efisiensi.',
          growth: 'Sedang',
          timeframe: '2-5 tahun ke depan',
          opportunities: [
            'Sensor terjangkau untuk petani kecil',
            'Drone untuk pemetaan dan pemantauan lahan',
            'Aplikasi analisis tanah dan rekomendasi pupuk'
          ]
        },
        {
          title: 'Alternative Farming',
          description: 'Metode pertanian alternatif seperti vertical farming, hidroponik, dan aquaponik yang memungkinkan produksi di area urban atau dengan lahan terbatas.',
          growth: 'Sedang',
          timeframe: '1-5 tahun ke depan',
          opportunities: [
            'Kit hidroponik skala rumah tangga',
            'Sistem otomasi untuk vertical farming',
            'Model bisnis urban farming berkelanjutan'
          ]
        }
      ],
      statistics: [
        { label: 'Ukuran Pasar (2023)', value: 'Rp 9.5 triliun' },
        { label: 'Pertumbuhan Tahunan', value: '22-25%' },
        { label: 'Adopsi di Petani', value: '19% petani komersial' },
        { label: 'Segmen Terbesar', value: 'Supply Chain, Financial Services for Farmers' }
      ]
    }
  ];
  
  const consumerInsights = [
    {
      id: 'gen-z',
      title: 'Preferensi dan Perilaku Gen Z',
      insights: [
        {
          title: 'Value-Based Consumption',
          description: 'Gen Z cenderung memilih merek yang sejalan dengan nilai-nilai personal mereka seperti keberlanjutan, inklusi, dan dampak sosial.',
          implications: 'Bisnis perlu mengkomunikasikan nilai dan dampak sosial mereka secara jelas, serta memastikan praktik bisnis sesuai dengan nilai-nilai yang diklaim.'
        },
        {
          title: 'Digital Natives',
          description: 'Sebagai generasi yang tumbuh dengan teknologi digital, Gen Z menganggap pengalaman online dan offline sebagai satu kesatuan yang menyatu.',
          implications: 'Pengalaman omnichannel yang mulus, integrasi sosial media, dan kemampuan untuk beralih antar platform sangat penting.'
        },
        {
          title: 'Kurator Konten',
          description: 'Gen Z cenderung menjadi kurator konten, menyaring dan membagikan informasi yang mereka anggap relevan dengan lingkaran sosial mereka.',
          implications: 'Konten yang shareable, autentik, dan bernilai akan mendapatkan penyebaran organik dari Gen Z.'
        },
        {
          title: 'Preferensi Visual',
          description: 'Format visual seperti video pendek, augmented reality, dan konten interaktif sangat disukai dibandingkan teks panjang.',
          implications: 'Strategi pemasaran harus memprioritaskan video pendek, visual yang menarik, dan pengalaman interaktif.'
        }
      ],
      statistics: [
        { label: 'Persentase Populasi Indonesia', value: '27.94%' },
        { label: 'Pengeluaran Online Bulanan Rata-rata', value: 'Rp 1.2 juta' },
        { label: 'Platform Sosial Favorit', value: 'TikTok, Instagram, YouTube' },
        { label: 'Nilai Utama', value: 'Autentisitas, Inklusivitas, Sustainability' }
      ]
    },
    {
      id: 'millennials',
      title: 'Tren Konsumsi Millennials',
      insights: [
        {
          title: 'Experience Over Possession',
          description: 'Millennials lebih menghargai pengalaman dibandingkan kepemilikan barang, mendorong tren ekonomi berbagi dan layanan berbasis akses.',
          implications: 'Bisnis dapat menawarkan model subscription, layanan rental, atau pengalaman unik yang shareable di sosial media.'
        },
        {
          title: 'Financial Wellness',
          description: 'Millennial Indonesia semakin sadar akan perencanaan keuangan, investasi, dan keamanan finansial jangka panjang.',
          implications: 'Peluang untuk produk finansial yang mudah dipahami, transparansi biaya, dan edukasi keuangan terintegrasi.'
        },
        {
          title: 'Work-Life Integration',
          description: 'Batas antara kehidupan profesional dan pribadi semakin kabur, dengan preferensi terhadap fleksibilitas dan keseimbangan.',
          implications: 'Produk dan layanan yang membantu efisiensi, manajemen waktu, dan mendukung gaya hidup fleksibel akan diminati.'
        },
        {
          title: 'Health Consciousness',
          description: 'Millennial semakin sadar kesehatan, mencari produk dan layanan yang mendukung gaya hidup sehat dan preventif.',
          implications: 'Merek perlu menawarkan transparansi kandungan produk, fungsi kesehatan tambahan, dan mendukung well-being secara holistik.'
        }
      ],
      statistics: [
        { label: 'Persentase Populasi Indonesia', value: '25.87%' },
        { label: 'Pengeluaran Online Bulanan Rata-rata', value: 'Rp 2.1 juta' },
        { label: 'Preferensi Pembayaran', value: 'E-wallet, BNPL, Transfer Bank' },
        { label: 'Kategori Belanja Terbesar', value: 'F&B, Travel, Fashion, Gadgets' }
      ]
    },
    {
      id: 'middle-class',
      title: 'Tumbuhnya Kelas Menengah Indonesia',
      insights: [
        {
          title: 'Aspirational Consumption',
          description: 'Kelas menengah Indonesia memiliki pola konsumsi aspirasional, dengan preferensi terhadap merek dan produk yang memberikan status sosial.',
          implications: 'Premium positioning yang terjangkau (affordable luxury) dan ekslusivitas dapat menjadi strategi efektif untuk segmen ini.'
        },
        {
          title: 'Value Seekers',
          description: 'Konsumen kelas menengah sangat memperhatikan nilai dari pengeluaran mereka, mencari keseimbangan antara kualitas, harga, dan prestise.',
          implications: 'Komunikasikan dengan jelas value proposition produk atau layanan, dengan penekanan pada kualitas dan durabilitas.'
        },
        {
          title: 'Family-Centric',
          description: 'Keputusan pembelian sering berdasarkan kebutuhan dan aspirasi keluarga, terutama untuk pendidikan dan kesehatan anak.',
          implications: 'Produk dan layanan yang menawarkan manfaat untuk seluruh keluarga atau memiliki fokus pada pengembangan anak akan mendapat perhatian.'
        },
        {
          title: 'Digital Adoption',
          description: 'Tingkat adopsi digital yang tinggi, terutama untuk mobile banking, e-commerce, dan layanan on-demand.',
          implications: 'Bisnis harus memiliki presence digital yang kuat dengan user experience yang optimal pada perangkat mobile.'
        }
      ],
      statistics: [
        { label: 'Ukuran Kelas Menengah Indonesia', value: '~52 juta (19% populasi)' },
        { label: 'Pertumbuhan Tahunan', value: '4-6%' },
        { label: 'Pengeluaran Diskresioner', value: '30-40% dari pendapatan' },
        { label: 'Prioritas Pengeluaran', value: 'Pendidikan, Properti, Kesehatan, Hiburan' }
      ]
    }
  ];
  
  const competitiveAnalysis = [
    {
      industry: 'E-commerce',
      domainArea: 'Marketplace General',
      leaders: [
        { name: 'Tokopedia', strengths: ['Penetrasi pasar luas', 'Ekosistem terintegrasi', 'Brand awareness tinggi'], weaknesses: ['Tingkat persaingan tinggi', 'Biaya akuisisi user meningkat'] },
        { name: 'Shopee', strengths: ['Strategi harga agresif', 'Gamifikasi yang kuat', 'Integrasi sosial'], weaknesses: ['Persepsi kualitas produk bervariasi', 'Ketergantungan pada subsidi'] }
      ],
      opportunities: [
        'Marketplace vertikal dengan fokus kategori spesifik yang kurang dilayani',
        'Solutions for SMEs beyond marketplace (inventory, analytics, etc)',
        'Layanan fulfillment terintegrasi untuk seller kecil'
      ]
    },
    {
      industry: 'Fintech',
      domainArea: 'Payment & Digital Wallet',
      leaders: [
        { name: 'GoPay', strengths: ['Ekosistem GoTo', 'User base besar', 'Integrasi dengan layanan lain'], weaknesses: ['Ketergantungan pada promo', 'Persaingan ketat'] },
        { name: 'OVO', strengths: ['Kemitraan strategis (Grab, Tokopedia)', 'Fitur investasi terintegrasi'], weaknesses: ['Biaya akuisisi tinggi', 'Unit economics belum optimal'] }
      ],
      opportunities: [
        'Solusi pembayaran B2B untuk perusahaan menengah',
        'Infrastruktur pembayaran untuk daerah kurang terlayani',
        'Integrasi remitansi dan transfer internasional'
      ]
    },
    {
      industry: 'SaaS',
      domainArea: 'Business Software',
      leaders: [
        { name: 'Mekari', strengths: ['Suite produk terintegrasi', 'Pemahaman kebutuhan lokal', 'Kepatuhan regulasi'], weaknesses: ['Penetrasi UMKM masih terbatas', 'Customer acquisition cost tinggi'] },
        { name: 'Jurnal', strengths: ['UX yang baik', 'Integrasi dengan layanan perbankan', 'Support'], weaknesses: ['Kompetisi dari produk internasional', 'Segmentasi terbatas'] }
      ],
      opportunities: [
        'SaaS untuk industri spesifik (F&B, Retail, Healthcare)',
        'Solusi affordable untuk digitalisasi UMKM tradisional',
        'Business intelligence dan analitik untuk perusahaan menengah'
      ]
    }
  ];
  
  const filteredIndustries = industries.filter(industry => 
    industry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredInsights = consumerInsights.filter(insight => 
    insight.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    insight.insights.some(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const filteredAnalysis = competitiveAnalysis.filter(analysis => 
    analysis.industry.toLowerCase().includes(searchTerm.toLowerCase()) || 
    analysis.domainArea.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <PageHeader 
        title="Riset Pasar & Analisis Tren" 
        description="Akses data riset pasar terbaru dan analisis tren industri untuk memperkuat ide bisnis Anda." 
      />
      
      <div className="mb-8">
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white max-w-lg">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-3" />
          <input
            type="text"
            className="w-full outline-none"
            placeholder="Cari industri, tren, atau insight..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('industries')}
            className={`py-4 px-6 font-medium text-sm cursor-pointer ${
              activeTab === 'industries'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Analisis Industri & Tren
          </button>
          <button
            onClick={() => setActiveTab('consumer')}
            className={`py-4 px-6 font-medium text-sm cursor-pointer ${
              activeTab === 'consumer'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Wawasan Konsumen
          </button>
          <button
            onClick={() => setActiveTab('competitive')}
            className={`py-4 px-6 font-medium text-sm cursor-pointer ${
              activeTab === 'competitive'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Analisis Kompetitif
          </button>
        </div>
      </div>
      
      {activeTab === 'industries' && (
        <div className="space-y-12">
          {filteredIndustries.length > 0 ? (
            filteredIndustries.map(industry => (
              <div key={industry.id} className="card">
                <h3 className="text-2xl font-semibold mb-6">{industry.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  {industry.statistics.map((stat, index) => (
                    <div key={index} className="p-4 bg-blue-50 rounded-lg">
                      <span className="block text-sm text-gray-600">{stat.label}</span>
                      <span className="block text-xl font-semibold text-blue-700">{stat.value}</span>
                    </div>
                  ))}
                </div>
                
                <h4 className="text-xl font-semibold mb-4">Tren Utama</h4>
                <div className="space-y-6 mb-6">
                  {industry.trends.map((trend, index) => (
                    <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h5 className="text-lg font-semibold">{trend.title}</h5>
                        <div className="flex gap-2">
                          <span className={`text-xs font-medium px-2 py-1 rounded ${
                            trend.growth === 'Tinggi' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            Pertumbuhan: {trend.growth}
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                            {trend.timeframe}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{trend.description}</p>
                      
                      <div>
                        <h6 className="font-medium text-gray-800 mb-2">Peluang Bisnis:</h6>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {trend.opportunities.map((opportunity, opIndex) => (
                            <li key={opIndex}>{opportunity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada hasil ditemukan</h3>
              <p className="text-gray-500">Coba ubah kata kunci pencarian Anda</p>
            </div>
          )}
        </div>
      )}
      
      {activeTab === 'consumer' && (
        <div className="space-y-12">
          {filteredInsights.length > 0 ? (
            filteredInsights.map(item => (
              <div key={item.id} className="card">
                <h3 className="text-2xl font-semibold mb-6">{item.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  {item.statistics.map((stat, index) => (
                    <div key={index} className="p-4 bg-amber-50 rounded-lg">
                      <span className="block text-sm text-gray-600">{stat.label}</span>
                      <span className="block text-xl font-semibold text-amber-700">{stat.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {item.insights.map((insight, index) => (
                    <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-semibold mb-3">{insight.title}</h4>
                      <p className="text-gray-700 mb-4">{insight.description}</p>
                      
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h5 className="font-medium text-amber-900 mb-2">Implikasi Bisnis:</h5>
                        <p className="text-amber-800">{insight.implications}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada hasil ditemukan</h3>
              <p className="text-gray-500">Coba ubah kata kunci pencarian Anda</p>
            </div>
          )}
        </div>
      )}
      
      {activeTab === 'competitive' && (
        <div className="space-y-12">
          {filteredAnalysis.length > 0 ? (
            filteredAnalysis.map((analysis, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold">{analysis.industry}</h3>
                  <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                    {analysis.domainArea}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold mb-4">Market Leaders</h4>
                <div className="space-y-4 mb-6">
                  {analysis.leaders.map((leader, leaderIndex) => (
                    <div key={leaderIndex} className="p-4 border border-gray-200 rounded-lg">
                      <h5 className="text-lg font-semibold mb-3">{leader.name}</h5>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="font-medium text-green-700 mb-2">Kekuatan:</h6>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {leader.strengths.map((strength, strIndex) => (
                              <li key={strIndex}>{strength}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h6 className="font-medium text-red-700 mb-2">Kelemahan:</h6>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {leader.weaknesses.map((weakness, weakIndex) => (
                              <li key={weakIndex}>{weakness}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">Peluang Pasar</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {analysis.opportunities.map((opportunity, opIndex) => (
                      <li key={opIndex} className="text-green-800">{opportunity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada hasil ditemukan</h3>
              <p className="text-gray-500">Coba ubah kata kunci pencarian Anda</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MarketResearch;