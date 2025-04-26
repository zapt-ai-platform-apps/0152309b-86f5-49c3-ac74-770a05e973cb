import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageHeader from '../../core/components/PageHeader';
import { LightBulbIcon } from '@heroicons/react/24/outline';

function IdeaGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Categories (jenis usaha)
  const categories = [
    "E-commerce", "Service/Jasa", "Produksi", "Retail", "Franchise", 
    "Teknologi", "Makanan dan Minuman", "Pendidikan", "Kesehatan", "Kreatif"
  ];

  // Fields (bidang)
  const fields = {
    "E-commerce": ["Fashion", "Elektronik", "Kesehatan & Kecantikan", "Makanan & Minuman", "Hobi & Hiburan"],
    "Service/Jasa": ["Konsultasi", "Pemasaran", "Teknologi", "Kesehatan", "Pendidikan", "Jasa Rumah Tangga"],
    "Produksi": ["Makanan & Minuman", "Fashion", "Kerajinan", "Furnitur", "Elektronik"],
    "Retail": ["Supermarket", "Toko Khusus", "Department Store", "Convenience Store", "Outlet Merek"],
    "Franchise": ["Makanan & Minuman", "Retail", "Pendidikan", "Kesehatan & Kecantikan", "Otomotif"],
    "Teknologi": ["Software", "Hardware", "Fintech", "Edtech", "Healthtech", "Agritech"],
    "Makanan dan Minuman": ["Restoran", "Kafe", "Katering", "Produksi Makanan", "Minuman Spesial"],
    "Pendidikan": ["Kursus", "Pelatihan", "Sekolah", "Bimbingan Belajar", "Media Pembelajaran"],
    "Kesehatan": ["Klinik", "Apotek", "Alat Kesehatan", "Konsultasi", "Suplemen"],
    "Kreatif": ["Design", "Video", "Musik", "Fotografi", "Penulisan", "Seni"]
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [availableFields, setAvailableFields] = useState([]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setAvailableFields(category ? fields[category] || [] : []);
  };

  const onSubmit = (data) => {
    setIsGenerating(true);
    
    // Simulating API call for generating ideas
    setTimeout(() => {
      const result = generateBusinessIdeas(data);
      setGeneratedIdeas(result);
      setIsGenerating(false);
    }, 2000);
  };

  const generateBusinessIdeas = (preferences) => {
    // Improved idea generation logic to create more comprehensive business ideas
    // In a real implementation, this would be an API call to an AI service
    
    const categoryFields = {
      "E-commerce": {
        "Fashion": [
          {
            title: "Platform Fashion Berkelanjutan",
            description: "Marketplace khusus untuk produk fashion berkelanjutan dan ramah lingkungan, memberikan kesempatan kepada desainer lokal yang fokus pada fashion etis dan ekologis.",
            businessModel: "Marketplace + Subscription untuk Fitur Premium",
            targetMarket: "Konsumen urban peduli lingkungan (25-45 tahun), dengan penghasilan menengah-atas",
            investmentLevel: "Sedang (Rp 200-500 juta)",
            uniqueSellingPoint: "Sertifikasi dan transparansi rantai pasok, program daur ulang pakaian lama, sistem reputasi designer eco-friendly",
            potentialChallenges: "Persaingan dengan marketplace umum, biaya verifikasi produk berkelanjutan, edukasi pasar"
          },
          {
            title: "Layanan Styling Fashion Pribadi Virtual",
            description: "Aplikasi yang menghubungkan pengguna dengan stylist profesional untuk konsultasi mode secara virtual, termasuk rekomendasi personalisasi dan pembelian langsung.",
            businessModel: "Freemium + Komisi Penjualan",
            targetMarket: "Profesional muda (25-40 tahun) dengan kesadaran mode namun waktu terbatas",
            investmentLevel: "Rendah-Sedang (Rp 50-200 juta)",
            uniqueSellingPoint: "AI untuk penyaringan awal, stylist tersertifikasi, integrasi dengan brand lokal dan internasional",
            potentialChallenges: "Mempertahankan kualitas stylist, mencapai volume transaksi yang cukup, pengembangan teknologi AI"
          }
        ],
        "Elektronik": [
          {
            title: "Marketplace Gadget Refurbished Premium",
            description: "Platform jual beli perangkat elektronik refurbished yang telah melalui proses pengujian ketat dan mendapat garansi, fokus pada kualitas dan kepercayaan.",
            businessModel: "Marketplace + Layanan Garansi Premium",
            targetMarket: "Konsumen tech-savvy yang budget-conscious, sekolah dan institusi pendidikan, UKM",
            investmentLevel: "Sedang-Tinggi (Rp 400-800 juta)",
            uniqueSellingPoint: "Sistem pengujian 50+ titik, garansi hingga 1 tahun, sertifikasi keaslian dan performa",
            potentialChallenges: "Kontrol kualitas, manajemen logistik dan retur, membangun kepercayaan konsumen"
          }
        ]
      },
      "Teknologi": {
        "Fintech": [
          {
            title: "Platform Investasi Mikro Otomatis",
            description: "Aplikasi investasi yang memungkinkan pengguna berinvestasi dengan nominal sangat kecil (mulai Rp 10.000) secara otomatis dari sisa pembulatan transaksi harian.",
            businessModel: "Freemium + Subscription untuk Fitur Premium",
            targetMarket: "Milenial dan Gen-Z yang baru mulai berinvestasi, pengguna dengan penghasilan menengah",
            investmentLevel: "Tinggi (Rp 800 juta - 1,5 miliar)",
            uniqueSellingPoint: "Integrasi dengan e-wallet dan perbankan, diversifikasi otomatis, gamifikasi target investasi",
            potentialChallenges: "Regulasi OJK, partnership dengan institusi keuangan, edukasi pasar tentang investasi"
          }
        ],
        "Software": [
          {
            title: "Platform Otomatisasi Bisnis UMKM",
            description: "Solusi software terintegrasi untuk otomatisasi proses bisnis UMKM, mencakup manajemen inventori, POS, CRM, dan laporan keuangan dalam satu platform.",
            businessModel: "SaaS dengan Subscription Bertingkat",
            targetMarket: "UMKM dengan 5-50 karyawan di berbagai sektor, fokus pada retail dan F&B",
            investmentLevel: "Sedang-Tinggi (Rp 500 juta - 1 miliar)",
            uniqueSellingPoint: "Onboarding dan setup sederhana, integrasi dengan marketplace dan e-commerce, template khusus per industri",
            potentialChallenges: "Persaingan dengan solusi internasional, kebutuhan customization per industri, biaya akuisisi pelanggan"
          }
        ]
      },
      "Makanan dan Minuman": {
        "Kafe": [
          {
            title: "Jaringan Kafe Co-Working Premium",
            description: "Konsep kafe yang menggabungkan kopi specialty dengan ruang co-working yang nyaman dan profesional, dengan sistem keanggotaan dan reservasi ruang meeting.",
            businessModel: "Hybrid (F&B + Keanggotaan Co-Working)",
            targetMarket: "Profesional, freelancer, entrepreneur dan mahasiswa S2/S3 di kota besar",
            investmentLevel: "Sedang-Tinggi (Rp 500 juta - 1 miliar per outlet)",
            uniqueSellingPoint: "Kopi specialty dari petani lokal, ruang meeting dengan teknologi konferensi terkini, program komunitas dan networking",
            potentialChallenges: "Lokasi strategis berbiaya tinggi, keseimbangan antara kafe dan co-working, persaingan di kota besar"
          }
        ],
        "Produksi Makanan": [
          {
            title: "Pusat Produksi Makanan Beku Sehat",
            description: "Fasilitas produksi untuk makanan beku sehat dengan resep chef profesional, fokus pada diet khusus (keto, plant-based, gluten-free) dengan distribusi D2C dan B2B.",
            businessModel: "Produksi + Subscription + B2B",
            targetMarket: "Keluarga urban, profesional sibuk, Hotel/Resto/Katering, layanan meal-prep",
            investmentLevel: "Tinggi (Rp 1-3 miliar)",
            uniqueSellingPoint: "Resep dari chef berpengalaman, proses flash-freezing untuk mempertahankan nutrisi, packaging eco-friendly dan smart-portion",
            potentialChallenges: "Investasi peralatan produksi tinggi, logistik cold-chain, persaingan dengan makanan segar"
          }
        ]
      }
    };
    
    // Get ideas based on selected category and field
    let ideas = [];
    if (categoryFields[preferences.category] && categoryFields[preferences.category][preferences.field]) {
      ideas = categoryFields[preferences.category][preferences.field];
    }
    
    // If no specific ideas for this combination, generate generic ideas
    if (ideas.length === 0) {
      ideas = [
        {
          title: `${preferences.field} Inovatif untuk ${preferences.category}`,
          description: `Platform ${preferences.field} yang menghubungkan pelaku ${preferences.category} dengan konsumen secara langsung, menawarkan pengalaman personalisasi dan efisiensi proses bisnis.`,
          businessModel: "Marketplace + Layanan Premium",
          targetMarket: `Pelaku usaha ${preferences.category} skala kecil-menengah dan konsumen urban milenial`,
          investmentLevel: "Sedang (Rp 200-500 juta)",
          uniqueSellingPoint: `Teknologi AI untuk personalisasi, integrasi dengan platform ${preferences.category} yang sudah ada, sistem verifikasi kualitas`,
          potentialChallenges: "Akuisisi pengguna awal, membangun kepercayaan pasar, kompetisi dengan platform serupa"
        },
        {
          title: `Solusi ${preferences.field} Berkelanjutan untuk ${preferences.category}`,
          description: `Layanan yang menyediakan solusi ${preferences.field} ramah lingkungan untuk industri ${preferences.category}, dengan fokus pada pengurangan limbah dan efisiensi sumber daya.`,
          businessModel: "SaaS + Konsultasi",
          targetMarket: `Perusahaan ${preferences.category} menengah-besar yang memiliki program keberlanjutan`,
          investmentLevel: "Sedang-Tinggi (Rp 500 juta - 1 miliar)",
          uniqueSellingPoint: `Sertifikasi eco-friendly, dashboard pengukuran dampak lingkungan, program penghargaan keberlanjutan untuk klien ${preferences.category}`,
          potentialChallenges: "Edukasi pasar tentang nilai keberlanjutan, investasi teknologi pengukuran dampak, regulasi yang berubah"
        },
        {
          title: `Platform Komunitas ${preferences.field} untuk ${preferences.category}`,
          description: `Hub komunitas digital untuk para pelaku dan peminat ${preferences.field} dalam sektor ${preferences.category}, menyediakan forum diskusi, resources edukasi, dan marketplace talent.`,
          businessModel: "Freemium + Marketplace Talent",
          targetMarket: `Profesional ${preferences.field}, mahasiswa, dan pelaku usaha ${preferences.category}`,
          investmentLevel: "Rendah-Sedang (Rp 100-300 juta)",
          uniqueSellingPoint: `Konten eksklusif dari pakar industri, program mentorship, acara networking virtual dan offline, sistem reputasi profesional`,
          potentialChallenges: "Membangun massa kritikal pengguna, moderasi konten komunitas, monetisasi tanpa mengurangi nilai komunitas"
        }
      ];
    }
    
    // Add additional metrics and analysis
    ideas.forEach(idea => {
      // Calculate and add potential score (85-95 for authentic ideas, 70-85 for generic ideas)
      const isAuthentic = categoryFields[preferences.category]?.[preferences.field]?.includes(idea);
      idea.potentialScore = isAuthentic ? Math.floor(85 + Math.random() * 10) : Math.floor(70 + Math.random() * 15);
      
      // Add market growth potential
      idea.marketPotential = {
        growthRate: `${Math.floor(8 + Math.random() * 22)}% per tahun`,
        competitionLevel: ["Rendah", "Sedang", "Tinggi"][Math.floor(Math.random() * 3)],
        trendsSupport: Math.random() > 0.3 ? "Positif" : "Netral"
      };
      
      // Add implementation details
      idea.implementation = {
        timeToMarket: `${Math.floor(3 + Math.random() * 9)} bulan`,
        keyResources: ["Tim Teknologi", "Marketing", "Operasional", "Kemitraan"].slice(0, 2 + Math.floor(Math.random() * 3)),
        initialMilestones: [
          "Validasi produk dengan target pasar",
          "Pembangunan MVP (Minimum Viable Product)",
          "Akuisisi pelanggan awal",
          "Pengembangan fitur berdasarkan feedback"
        ]
      };
    });
    
    return {
      ideas,
      preferences
    };
  };

  return (
    <div>
      <PageHeader 
        title="Generator Ide Bisnis Otomatis" 
        description="Temukan ide bisnis potensial secara instan hanya dengan memilih kategori dan bidang yang diminati." 
      />
      
      {!generatedIdeas ? (
        <div className="card max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Buat Ide Bisnis Otomatis</h3>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="category" className="label">Kategori Jenis Usaha</label>
              <select
                id="category"
                className="input"
                {...register("category", { required: "Pilih kategori jenis usaha" })}
                onChange={handleCategoryChange}
              >
                <option value="">Pilih Kategori</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
            </div>
            
            <div>
              <label htmlFor="field" className="label">Bidang Usaha</label>
              <select
                id="field"
                className="input"
                {...register("field", { required: "Pilih bidang usaha" })}
                disabled={!selectedCategory}
              >
                <option value="">Pilih Bidang</option>
                {availableFields.map((field, index) => (
                  <option key={index} value={field}>{field}</option>
                ))}
              </select>
              {errors.field && <p className="text-red-500 text-sm mt-1">{errors.field.message}</p>}
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="btn-primary px-6 py-3 flex items-center cursor-pointer"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Menghasilkan Ide...
                  </>
                ) : (
                  <>
                    <LightBulbIcon className="h-5 w-5 mr-2" />
                    Hasilkan Ide Bisnis
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="card mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Ide Bisnis untuk {generatedIdeas.preferences.category} - {generatedIdeas.preferences.field}</h3>
              <button 
                onClick={() => setGeneratedIdeas(null)} 
                className="btn-outline text-sm cursor-pointer"
              >
                Buat Ide Baru
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {generatedIdeas.ideas.map((idea, index) => (
              <div key={index} className="card hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{idea.title}</h3>
                  <div className={`rounded-full px-3 py-1 text-sm font-medium ${
                    idea.potentialScore >= 85 
                      ? 'bg-green-100 text-green-800' 
                      : idea.potentialScore >= 75 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-red-100 text-red-800'
                  }`}>
                    Potensi: {idea.potentialScore}/100
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{idea.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="block text-sm font-medium text-gray-700">Model Bisnis</span>
                    <span className="block text-gray-800">{idea.businessModel}</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-700">Target Pasar</span>
                    <span className="block text-gray-800">{idea.targetMarket}</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-700">Tingkat Investasi</span>
                    <span className="block text-gray-800">{idea.investmentLevel}</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-700">Pertumbuhan Pasar</span>
                    <span className="block text-gray-800">{idea.marketPotential.growthRate}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="block text-sm font-medium text-gray-700">Nilai Unik / Diferensiasi</span>
                  <span className="block text-gray-800">{idea.uniqueSellingPoint}</span>
                </div>
                
                <div className="mb-4">
                  <span className="block text-sm font-medium text-gray-700">Tantangan Potensial</span>
                  <span className="block text-gray-800">{idea.potentialChallenges}</span>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Implementasi Awal</h4>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-gray-700">Estimasi Waktu ke Pasar:</span>
                      <span className="text-sm ml-2">{idea.implementation.timeToMarket}</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-xs font-medium text-gray-700">Sumber Daya Utama:</span>
                      <span className="text-sm ml-2">{idea.implementation.keyResources.join(", ")}</span>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-700">Milestone Awal:</span>
                      <ul className="list-disc list-inside text-sm mt-1">
                        {idea.implementation.initialMilestones.map((milestone, idx) => (
                          <li key={idx}>{milestone}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default IdeaGenerator;