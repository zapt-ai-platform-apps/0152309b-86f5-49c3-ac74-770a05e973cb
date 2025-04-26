import React, { useState } from 'react';
import PageHeader from '../../core/components/PageHeader';

function PlanningGuide() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "Fase 1: Validasi Ide",
      steps: [
        {
          title: "Identifikasi Masalah & Solusi",
          description: "Tentukan permasalahan spesifik yang ingin Anda pecahkan dan bagaimana solusi Anda dapat mengatasi masalah tersebut dengan lebih baik dari yang sudah ada.",
          tasks: [
            "Definisikan permasalahan target dengan jelas (siapa yang mengalami masalah ini dan seberapa signifikan)",
            "Jelaskan solusi yang Anda tawarkan secara spesifik",
            "Identifikasi nilai unik dari solusi Anda dibandingkan alternatif yang ada"
          ],
          tips: "Lakukan wawancara dengan minimal 10 calon pelanggan potensial untuk memvalidasi masalah"
        },
        {
          title: "Riset Pasar Awal",
          description: "Kumpulkan data untuk memahami ukuran pasar, tren, dan dinamika industri terkait ide bisnis Anda.",
          tasks: [
            "Analisis ukuran pasar (TAM, SAM, SOM)",
            "Identifikasi tren utama dalam industri",
            "Analisis perilaku dan preferensi target pasar",
            "Pelajari model bisnis yang berhasil di industri serupa"
          ],
          tips: "Gunakan kombinasi riset primer (survei, wawancara) dan riset sekunder (laporan industri, data statistik)"
        },
        {
          title: "Analisis Kompetitor",
          description: "Identifikasi dan analisis pesaing langsung dan tidak langsung untuk menemukan celah pasar.",
          tasks: [
            "Buat daftar pesaing langsung dan tidak langsung",
            "Analisis kekuatan dan kelemahan masing-masing pesaing",
            "Identifikasi diferensiasi Anda dari pesaing",
            "Tetapkan keunggulan kompetitif yang jelas"
          ],
          tips: "Coba produk/layanan pesaing untuk pengalaman langsung dan temukan kekurangan yang bisa Anda perbaiki"
        }
      ]
    },
    {
      title: "Fase 2: Perencanaan Bisnis",
      steps: [
        {
          title: "Tentukan Model Bisnis",
          description: "Definisikan bagaimana bisnis Anda akan menghasilkan pendapatan dan menciptakan nilai bagi pelanggan.",
          tasks: [
            "Pilih model pendapatan yang sesuai (langganan, transaksional, freemium, dll)",
            "Tentukan struktur harga dan strategi penetapan harga",
            "Identifikasi saluran distribusi utama",
            "Tentukan metrik kunci bisnis"
          ],
          tips: "Gunakan Business Model Canvas untuk memvisualisasikan seluruh model bisnis secara komprehensif"
        },
        {
          title: "Rencana Finansial Dasar",
          description: "Perkirakan kebutuhan dana, proyeksi pendapatan, dan titik impas untuk menilai kelayakan finansial.",
          tasks: [
            "Hitung kebutuhan modal awal",
            "Buat proyeksi pendapatan dan pengeluaran untuk 12-24 bulan pertama",
            "Hitung titik impas (break-even point)",
            "Identifikasi sumber pendanaan potensial"
          ],
          tips: "Buat beberapa skenario (pesimis, moderat, optimis) untuk antisipasi berbagai kondisi pasar"
        },
        {
          title: "Rencana Pemasaran Awal",
          description: "Tentukan strategi untuk menjangkau dan mendapatkan pelanggan pertama Anda.",
          tasks: [
            "Definisikan persona pelanggan ideal",
            "Pilih saluran pemasaran awal berdasarkan target pasar",
            "Tentukan strategi akuisisi pelanggan (organic vs paid)",
            "Hitung biaya akuisisi pelanggan perkiraan"
          ],
          tips: "Fokus pada 1-2 saluran pemasaran utama di awal daripada mencoba semua saluran sekaligus"
        }
      ]
    },
    {
      title: "Fase 3: Eksekusi & Peluncuran",
      steps: [
        {
          title: "Bangun MVP (Minimum Viable Product)",
          description: "Kembangkan versi minimal dari produk/layanan Anda yang masih menghadirkan nilai inti.",
          tasks: [
            "Daftar fitur-fitur utama yang harus ada dalam MVP",
            "Tentukan timeline pengembangan",
            "Buat prototipe dan uji dengan pengguna awal",
            "Iterasi berdasarkan feedback"
          ],
          tips: "Fokus pada pemecahan masalah inti daripada menambahkan fitur tambahan yang bisa ditambahkan nanti"
        },
        {
          title: "Bangun Tim Awal",
          description: "Identifikasi kebutuhan keterampilan kunci dan rekrut anggota tim atau partner.",
          tasks: [
            "Identifikasi peran kunci yang dibutuhkan",
            "Tentukan struktur kepemilikan dan equity (jika ada co-founder)",
            "Kembangkan job description untuk peran kunci",
            "Tentukan apakah akan merekrut langsung atau outsourcing"
          ],
          tips: "Cari co-founder atau tim awal yang melengkapi keterampilan Anda, bukan yang sama"
        },
        {
          title: "Strategi Go-to-Market",
          description: "Rencanakan peluncuran produk secara detail untuk memaksimalkan momentum awal.",
          tasks: [
            "Tentukan timeline dan milestone peluncuran",
            "Siapkan konten pemasaran dan materi promosi",
            "Rencanakan aktivitas PR dan media outreach",
            "Buat strategi untuk mendapatkan feedback awal"
          ],
          tips: "Pertimbangkan soft launch ke kelompok kecil sebelum peluncuran publik untuk menyempurnakan proses"
        }
      ]
    },
    {
      title: "Fase 4: Pertumbuhan & Optimisasi",
      steps: [
        {
          title: "Pengukuran & Analisis",
          description: "Bangun sistem untuk memantau metrik kunci dan menghasilkan insights untuk pengambilan keputusan.",
          tasks: [
            "Tentukan Key Performance Indicators (KPI)",
            "Siapkan dashboard untuk pelacakan metrik",
            "Implementasikan sistem analitik untuk pelacakan perilaku pengguna",
            "Tetapkan proses review metrik secara berkala"
          ],
          tips: "Prioritaskan 3-5 metrik utama dan hindari 'analysis paralysis' karena terlalu banyak data"
        },
        {
          title: "Feedback & Iterasi",
          description: "Kumpulkan dan terapkan feedback pengguna untuk menyempurnakan produk/layanan Anda.",
          tasks: [
            "Buat sistem untuk mengumpulkan feedback pelanggan secara konsisten",
            "Prioritaskan perbaikan berdasarkan dampak dan effort",
            "Kembangkan roadmap pengembangan produk",
            "Lakukan A/B testing untuk fitur utama"
          ],
          tips: "Pastikan semua departemen memiliki akses ke feedback pelanggan, bukan hanya tim produk atau customer service"
        },
        {
          title: "Skalabilitas",
          description: "Siapkan bisnis Anda untuk mengakomodasi pertumbuhan tanpa hambatan berarti.",
          tasks: [
            "Identifikasi potensi bottleneck dalam operasi",
            "Otomatisasi proses manual yang repetitif",
            "Kembangkan SOP untuk fungsi bisnis utama",
            "Rencanakan kebutuhan sumber daya untuk pertumbuhan"
          ],
          tips: "Selalu pertimbangkan skalabilitas saat membangun sistem baru — apakah akan berfungsi baik jika bisnis 10x lebih besar?"
        }
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Panduan Langkah-demi-Langkah" 
        description="Ikuti panduan terstruktur untuk mengembangkan ide bisnis Anda dari konsep hingga peluncuran dan pertumbuhan." 
      />

      <div className="card mb-8">
        <h3 className="text-xl font-semibold mb-4">Fase Pengembangan Bisnis</h3>
        <p className="text-gray-600 mb-6">
          Panduan ini membagi proses pengembangan bisnis menjadi 4 fase utama, dari validasi ide hingga pertumbuhan dan optimisasi.
          Setiap fase berisi langkah-langkah spesifik yang perlu Anda ikuti untuk meningkatkan peluang kesuksesan.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {phases.map((phase, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`p-4 rounded-lg text-center font-medium transition-all cursor-pointer ${
                activePhase === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {phase.title.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-semibold mb-2">{phases[activePhase].title}</h3>
        
        <div className="mt-6 space-y-8">
          {phases[activePhase].steps.map((step, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
              <p className="text-gray-600 mb-4">{step.description}</p>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2">Tugas:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {step.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-blue-800 text-sm">{step.tips}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setActivePhase(prev => Math.max(0, prev - 1))}
            disabled={activePhase === 0}
            className={`btn-outline cursor-pointer ${
              activePhase === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Fase Sebelumnya
          </button>
          
          <button
            onClick={() => setActivePhase(prev => Math.min(phases.length - 1, prev + 1))}
            disabled={activePhase === phases.length - 1}
            className={`btn-primary cursor-pointer ${
              activePhase === phases.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Fase Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanningGuide;