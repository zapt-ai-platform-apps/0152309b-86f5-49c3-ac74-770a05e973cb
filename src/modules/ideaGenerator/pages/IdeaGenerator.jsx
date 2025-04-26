import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageHeader from '../../core/components/PageHeader';
import { LightBulbIcon } from '@heroicons/react/24/outline';

function IdeaGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const industries = [
    "E-commerce", "Fintech", "EdTech", "HealthTech", "AgriTech",
    "Food & Beverage", "Retail", "Travel & Hospitality", "Entertainment",
    "Real Estate", "Transportation & Logistics", "Green Technology",
    "Fashion & Apparel", "Beauty & Personal Care", "Home Services"
  ];

  const businessTypes = [
    "Software as a Service (SaaS)", "Marketplace", "D2C (Direct to Consumer)",
    "Subscription Business", "E-commerce Store", "Mobile App", "Content Platform",
    "Service Provider", "Manufacturing", "Franchise", "Social Enterprise"
  ];

  const targetMarkets = [
    "B2C (Business to Consumer)", "B2B (Business to Business)",
    "B2B2C (Business to Business to Consumer)", "C2C (Consumer to Consumer)"
  ];

  const investmentLevels = [
    "Rendah (< Rp 50 juta)", "Sedang (Rp 50 juta - Rp 500 juta)",
    "Tinggi (> Rp 500 juta)"
  ];

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
    // This is a simplified simulation of idea generation based on user preferences
    // In a real app, this could be an AI-powered API call
    
    const ideas = [
      {
        title: "Marketplace Bahan Baku Lokal untuk UMKM",
        description: "Platform yang menghubungkan produsen bahan baku lokal langsung dengan UMKM di industri F&B, fashion, dan kerajinan, mengurangi rantai distribusi dan menjamin keaslian dan kualitas produk.",
        businessModel: "Marketplace + Layanan Verifikasi Kualitas",
        targetMarket: "B2B (UMKM di industri manufaktur)",
        investmentLevel: "Sedang",
        potentialScore: 87,
        uniqueValue: "Verifikasi kualitas dan autentisitas, jaringan logistik khusus, dan pembayaran fleksibel untuk UMKM."
      },
      {
        title: "Aplikasi Wellness untuk Karyawan Korporat",
        description: "Aplikasi kesehatan holistik untuk perusahaan yang ingin meningkatkan kesehatan dan produktivitas karyawan, mencakup meditasi, aktivitas fisik, manajemen stres, dan tracking kebiasaan sehat.",
        businessModel: "SaaS B2B dengan Subscription Bulanan",
        targetMarket: "Perusahaan menengah dan besar",
        investmentLevel: "Rendah - Sedang",
        potentialScore: 85,
        uniqueValue: "Dashboard analytics untuk HR, program yang dipersonalisasi per karyawan, dan integrasi dengan benefit perusahaan."
      },
      {
        title: "Platform Micro-Learning untuk Skill Digital",
        description: "Platform pembelajaran dengan format mikro (5-15 menit) fokus pada keterampilan digital praktis yang dibutuhkan di dunia kerja, dengan sertifikasi dan penilaian kemampuan.",
        businessModel: "Freemium + Subscription",
        targetMarket: "Profesional muda dan mahasiswa",
        investmentLevel: "Rendah - Sedang",
        potentialScore: 82,
        uniqueValue: "Format mikro yang adaptif dengan jadwal sibuk, pembelajaran berbasis proyek nyata, dan verifikasi skill untuk CV."
      },
      {
        title: "Layanan Delivery Makanan Sehat Berlangganan",
        description: "Layanan pengiriman makanan sehat dengan paket berlangganan mingguan/bulanan, menu dirotasi dan disesuaikan dengan preferensi diet dan tujuan kesehatan pelanggan.",
        businessModel: "Subscription + D2C",
        targetMarket: "Profesional urban dengan kesadaran kesehatan",
        investmentLevel: "Sedang",
        potentialScore: 79,
        uniqueValue: "Menu personalisasi berbasis tujuan kesehatan, packaging ramah lingkungan, dan konsultasi nutrisi terintegrasi."
      },
      {
        title: "Marketplace Jasa Kreatif Lokal",
        description: "Platform yang menghubungkan freelancer kreatif lokal (desainer grafis, videographer, copywriter, dll) dengan bisnis yang membutuhkan jasa kreatif berkualitas dengan budget terjangkau.",
        businessModel: "Marketplace dengan Komisi",
        targetMarket: "UMKM dan Startup",
        investmentLevel: "Rendah - Sedang",
        potentialScore: 76,
        uniqueValue: "Pencarian berdasarkan gaya kreatif, sistem escrow untuk pembayaran, dan portfolio terverifikasi."
      }
    ];
    
    // Add relevance score based on alignment with user preferences
    ideas.forEach(idea => {
      // Random simulation of relevance calculation based on preferences
      const industryMatch = Math.random() > 0.3;
      const investmentMatch = idea.investmentLevel.includes(preferences.investmentLevel) || Math.random() > 0.4;
      const targetMatch = idea.targetMarket.includes(preferences.targetMarket) || Math.random() > 0.5;
      
      idea.relevanceScore = (industryMatch ? 35 : 20) + 
                            (investmentMatch ? 35 : 15) + 
                            (targetMatch ? 30 : 10);
      
      // Adjust potential score slightly based on preferences
      idea.potentialScore = Math.min(100, idea.potentialScore + (Math.random() > 0.5 ? 3 : -2));
    });
    
    // Sort ideas by combination of potential and relevance
    ideas.sort((a, b) => {
      const scoreA = (a.potentialScore * 0.6) + (a.relevanceScore * 0.4);
      const scoreB = (b.potentialScore * 0.6) + (b.relevanceScore * 0.4);
      return scoreB - scoreA;
    });
    
    return {
      ideas,
      preferences
    };
  };

  return (
    <div>
      <PageHeader 
        title="Generator Ide Bisnis" 
        description="Temukan ide bisnis potensial berdasarkan tren pasar, minat, dan preferensi Anda." 
      />
      
      {!generatedIdeas ? (
        <div className="card max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Preferensi Ide Bisnis Anda</h3>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="industries" className="label">Industri yang Diminati</label>
              <select
                id="industries"
                className="input"
                {...register("industry", { required: "Pilih setidaknya satu industri" })}
              >
                <option value="">Pilih Industri</option>
                {industries.map((industry, index) => (
                  <option key={index} value={industry}>{industry}</option>
                ))}
              </select>
              {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>}
            </div>
            
            <div>
              <label htmlFor="businessType" className="label">Jenis Bisnis</label>
              <select
                id="businessType"
                className="input"
                {...register("businessType", { required: "Pilih jenis bisnis" })}
              >
                <option value="">Pilih Jenis Bisnis</option>
                {businessTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType.message}</p>}
            </div>
            
            <div>
              <label htmlFor="targetMarket" className="label">Target Pasar</label>
              <select
                id="targetMarket"
                className="input"
                {...register("targetMarket", { required: "Pilih target pasar" })}
              >
                <option value="">Pilih Target Pasar</option>
                {targetMarkets.map((market, index) => (
                  <option key={index} value={market}>{market}</option>
                ))}
              </select>
              {errors.targetMarket && <p className="text-red-500 text-sm mt-1">{errors.targetMarket.message}</p>}
            </div>
            
            <div>
              <label htmlFor="investmentLevel" className="label">Tingkat Investasi</label>
              <select
                id="investmentLevel"
                className="input"
                {...register("investmentLevel", { required: "Pilih tingkat investasi" })}
              >
                <option value="">Pilih Tingkat Investasi</option>
                {investmentLevels.map((level, index) => (
                  <option key={index} value={level}>{level}</option>
                ))}
              </select>
              {errors.investmentLevel && <p className="text-red-500 text-sm mt-1">{errors.investmentLevel.message}</p>}
            </div>
            
            <div>
              <label htmlFor="interests" className="label">Keahlian atau Minat Anda</label>
              <textarea
                id="interests"
                rows="3"
                className="input"
                placeholder="Mis. Marketing digital, teknologi, desain, kuliner, dll."
                {...register("interests")}
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="problems" className="label">Masalah yang Ingin Anda Pecahkan (Opsional)</label>
              <textarea
                id="problems"
                rows="3"
                className="input"
                placeholder="Mis. Kesulitan mendapatkan bahan organik, inefisiensi dalam proses X, dll."
                {...register("problems")}
              ></textarea>
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
              <h3 className="text-xl font-semibold">Ide Bisnis Berdasarkan Preferensi Anda</h3>
              <button 
                onClick={() => setGeneratedIdeas(null)} 
                className="btn-outline text-sm cursor-pointer"
              >
                Ubah Preferensi
              </button>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-blue-800 mb-2">Preferensi yang Digunakan:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Industri:</span> {generatedIdeas.preferences.industry}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Jenis Bisnis:</span> {generatedIdeas.preferences.businessType}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Target Pasar:</span> {generatedIdeas.preferences.targetMarket}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Tingkat Investasi:</span> {generatedIdeas.preferences.investmentLevel}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {generatedIdeas.ideas.map((idea, index) => (
              <div key={index} className="card hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{idea.title}</h3>
                  <div className="flex gap-2">
                    <div className={`rounded-full px-3 py-1 text-sm font-medium ${
                      idea.potentialScore >= 85 
                        ? 'bg-green-100 text-green-800' 
                        : idea.potentialScore >= 75 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {idea.potentialScore}/100
                    </div>
                    <div className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium">
                      Relevansi: {idea.relevanceScore}%
                    </div>
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
                </div>
                
                <div>
                  <span className="block text-sm font-medium text-gray-700">Nilai Unik / Diferensiasi</span>
                  <span className="block text-gray-800">{idea.uniqueValue}</span>
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