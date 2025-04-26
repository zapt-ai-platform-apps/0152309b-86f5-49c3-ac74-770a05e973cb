import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PageHeader from '../../core/components/PageHeader';

function IdeaAnalysis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setIsAnalyzing(true);
    
    // Simulating API call for analysis
    setTimeout(() => {
      const result = generateAnalysisResult(data);
      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 1500);
  };

  const generateAnalysisResult = (data) => {
    // Generate scores based on input data
    const marketPotentialScore = Math.floor(Math.random() * 40) + 60; // 60-100
    const competitionScore = Math.floor(Math.random() * 40) + 60;
    const financialViabilityScore = Math.floor(Math.random() * 40) + 60;
    const overallScore = Math.floor((marketPotentialScore + competitionScore + financialViabilityScore) / 3);
    
    return {
      overallScore,
      marketPotential: {
        score: marketPotentialScore,
        feedback: getMarketFeedback(marketPotentialScore, data)
      },
      competition: {
        score: competitionScore,
        feedback: getCompetitionFeedback(competitionScore, data)
      },
      financialViability: {
        score: financialViabilityScore,
        feedback: getFinancialFeedback(financialViabilityScore, data)
      },
      recommendations: getRecommendations(overallScore, data)
    };
  };

  // Helper functions to generate feedback based on scores and input data
  const getMarketFeedback = (score, data) => {
    if (score > 80) {
      return `Ide ${data.ideaName} menunjukkan potensi pasar yang sangat kuat. ${data.targetMarket} adalah target pasar yang tepat dengan permasalahan yang jelas.`;
    } else if (score > 70) {
      return `Ide ${data.ideaName} memiliki potensi pasar yang baik. Perlu lebih spesifik dalam menentukan segmen pasar di dalam ${data.targetMarket}.`;
    } else {
      return `Perlu riset lebih lanjut untuk memvalidasi potensi pasar dari ${data.ideaName}. Pertimbangkan untuk memperjelas nilai unik yang Anda tawarkan.`;
    }
  };

  const getCompetitionFeedback = (score, data) => {
    if (score > 80) {
      return `${data.ideaName} memiliki diferensiasi yang kuat dibandingkan dengan kompetitor yang Anda sebutkan. Keunggulan kompetitif Anda terlihat jelas.`;
    } else if (score > 70) {
      return `${data.ideaName} memiliki beberapa keunggulan kompetitif, namun perlu memperkuat diferensiasi dari pesaing yang sudah mapan.`;
    } else {
      return `Persaingan di pasar ini cukup ketat. Pertimbangkan untuk memperjelas bagaimana ${data.ideaName} berbeda dari solusi yang sudah ada.`;
    }
  };

  const getFinancialFeedback = (score, data) => {
    if (score > 80) {
      return `Model bisnis ${data.ideaName} menunjukkan potensi keuntungan yang menjanjikan dengan sumber pendapatan yang jelas.`;
    } else if (score > 70) {
      return `Model bisnis ${data.ideaName} cukup layak secara finansial, namun perlu memperjelas strategi monetisasi jangka panjang.`;
    } else {
      return `Perlu meninjau kembali model bisnis dan struktur biaya untuk meningkatkan kelayakan finansial dari ${data.ideaName}.`;
    }
  };

  const getRecommendations = (score, data) => {
    if (score > 80) {
      return [
        "Lanjutkan dengan pengembangan MVP (Minimum Viable Product)",
        "Mulai validasi pasar dengan sekelompok kecil pengguna potensial",
        "Kembangkan rencana bisnis terperinci",
        "Persiapkan strategi pemasaran awal"
      ];
    } else if (score > 70) {
      return [
        "Lakukan riset pasar lebih lanjut untuk memvalidasi asumsi",
        "Perjelas proposisi nilai unik produk/layanan Anda",
        "Identifikasi dan pelajari kompetitor utama secara mendalam",
        "Kembangkan model bisnis yang lebih terperinci"
      ];
    } else {
      return [
        "Pertimbangkan untuk menyesuaikan konsep bisnis berdasarkan feedback",
        "Lakukan wawancara dengan calon pelanggan untuk memahami kebutuhan mereka",
        "Analisis kembali model bisnis dan struktur biaya",
        "Identifikasi diferensiasi yang lebih kuat dari kompetitor"
      ];
    }
  };

  return (
    <div>
      <PageHeader 
        title="Analisis Ide Bisnis" 
        description="Evaluasi kelayakan ide bisnis Anda berdasarkan potensi pasar, tingkat persaingan, dan proyeksi finansial." 
      />

      {!analysisResult ? (
        <div className="card max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Detail Ide Bisnis Anda</h3>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="ideaName" className="label">Nama Ide Bisnis</label>
              <input
                type="text"
                id="ideaName"
                className="input"
                placeholder="mis. FreshMeal - Layanan Pengiriman Makanan Sehat"
                {...register("ideaName", { required: "Nama ide bisnis wajib diisi" })}
              />
              {errors.ideaName && <p className="text-red-500 text-sm mt-1">{errors.ideaName.message}</p>}
            </div>
            
            <div>
              <label htmlFor="description" className="label">Deskripsi Singkat</label>
              <textarea
                id="description"
                rows="4"
                className="input"
                placeholder="Jelaskan secara singkat ide bisnis Anda dan bagaimana ide tersebut memecahkan masalah tertentu"
                {...register("description", { required: "Deskripsi wajib diisi" })}
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>
            
            <div>
              <label htmlFor="targetMarket" className="label">Target Pasar</label>
              <input
                type="text"
                id="targetMarket"
                className="input"
                placeholder="mis. Profesional muda berusia 25-35 tahun yang sadar kesehatan"
                {...register("targetMarket", { required: "Target pasar wajib diisi" })}
              />
              {errors.targetMarket && <p className="text-red-500 text-sm mt-1">{errors.targetMarket.message}</p>}
            </div>
            
            <div>
              <label htmlFor="problemSolved" className="label">Permasalahan yang Dipecahkan</label>
              <textarea
                id="problemSolved"
                rows="3"
                className="input"
                placeholder="Jelaskan permasalahan spesifik yang ingin Anda pecahkan"
                {...register("problemSolved", { required: "Permasalahan wajib diisi" })}
              ></textarea>
              {errors.problemSolved && <p className="text-red-500 text-sm mt-1">{errors.problemSolved.message}</p>}
            </div>
            
            <div>
              <label htmlFor="competitors" className="label">Kompetitor Utama</label>
              <input
                type="text"
                id="competitors"
                className="input"
                placeholder="mis. Gojek, Grab Food, HappyFresh"
                {...register("competitors")}
              />
            </div>
            
            <div>
              <label htmlFor="uniqueValue" className="label">Nilai Unik / Diferensiasi</label>
              <textarea
                id="uniqueValue"
                rows="3"
                className="input"
                placeholder="Apa yang membuat ide Anda berbeda dari solusi yang sudah ada?"
                {...register("uniqueValue", { required: "Nilai unik wajib diisi" })}
              ></textarea>
              {errors.uniqueValue && <p className="text-red-500 text-sm mt-1">{errors.uniqueValue.message}</p>}
            </div>
            
            <div>
              <label htmlFor="revenueModel" className="label">Model Pendapatan</label>
              <input
                type="text"
                id="revenueModel"
                className="input"
                placeholder="mis. Langganan bulanan, komisi per transaksi, freemium"
                {...register("revenueModel", { required: "Model pendapatan wajib diisi" })}
              />
              {errors.revenueModel && <p className="text-red-500 text-sm mt-1">{errors.revenueModel.message}</p>}
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="btn-primary px-6 py-3 flex items-center cursor-pointer" 
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Menganalisis...
                  </>
                ) : (
                  'Analisis Ide Bisnis'
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="card max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold">Hasil Analisis Ide Bisnis</h3>
            <button 
              onClick={() => setAnalysisResult(null)} 
              className="btn-outline text-sm cursor-pointer"
            >
              Analisis Ide Lain
            </button>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold">Skor Kelayakan Keseluruhan</h4>
              <div className="flex items-center">
                <span className={`text-2xl font-bold ${
                  analysisResult.overallScore >= 80 ? 'text-green-600' : 
                  analysisResult.overallScore >= 70 ? 'text-yellow-600' : 
                  'text-red-600'
                }`}>
                  {analysisResult.overallScore}/100
                </span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
              <div 
                className={`h-4 rounded-full ${
                  analysisResult.overallScore >= 80 ? 'bg-green-600' : 
                  analysisResult.overallScore >= 70 ? 'bg-yellow-500' : 
                  'bg-red-500'
                }`} 
                style={{ width: `${analysisResult.overallScore}%` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Potensi Pasar</span>
                  <span className={`font-bold ${
                    analysisResult.marketPotential.score >= 80 ? 'text-green-600' : 
                    analysisResult.marketPotential.score >= 70 ? 'text-yellow-600' : 
                    'text-red-600'
                  }`}>
                    {analysisResult.marketPotential.score}/100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full ${
                      analysisResult.marketPotential.score >= 80 ? 'bg-green-600' : 
                      analysisResult.marketPotential.score >= 70 ? 'bg-yellow-500' : 
                      'bg-red-500'
                    }`} 
                    style={{ width: `${analysisResult.marketPotential.score}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Kompetisi</span>
                  <span className={`font-bold ${
                    analysisResult.competition.score >= 80 ? 'text-green-600' : 
                    analysisResult.competition.score >= 70 ? 'text-yellow-600' : 
                    'text-red-600'
                  }`}>
                    {analysisResult.competition.score}/100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full ${
                      analysisResult.competition.score >= 80 ? 'bg-green-600' : 
                      analysisResult.competition.score >= 70 ? 'bg-yellow-500' : 
                      'bg-red-500'
                    }`} 
                    style={{ width: `${analysisResult.competition.score}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Kelayakan Finansial</span>
                  <span className={`font-bold ${
                    analysisResult.financialViability.score >= 80 ? 'text-green-600' : 
                    analysisResult.financialViability.score >= 70 ? 'text-yellow-600' : 
                    'text-red-600'
                  }`}>
                    {analysisResult.financialViability.score}/100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full ${
                      analysisResult.financialViability.score >= 80 ? 'bg-green-600' : 
                      analysisResult.financialViability.score >= 70 ? 'bg-yellow-500' : 
                      'bg-red-500'
                    }`} 
                    style={{ width: `${analysisResult.financialViability.score}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Analisis Potensi Pasar</h4>
              <p className="text-gray-700">{analysisResult.marketPotential.feedback}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Analisis Kompetisi</h4>
              <p className="text-gray-700">{analysisResult.competition.feedback}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Analisis Kelayakan Finansial</h4>
              <p className="text-gray-700">{analysisResult.financialViability.feedback}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Rekomendasi Langkah Selanjutnya</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {analysisResult.recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IdeaAnalysis;