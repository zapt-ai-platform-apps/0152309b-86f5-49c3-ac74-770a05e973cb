import React, { useState } from 'react';
import PageHeader from '../../core/components/PageHeader';
import { DocumentTextIcon, CalculatorIcon } from '@heroicons/react/24/outline';

function BusinessTemplates() {
  const [activeTab, setActiveTab] = useState('templates');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  
  const templates = [
    {
      id: 'business-plan',
      title: 'Rencana Bisnis (Business Plan)',
      description: 'Template lengkap untuk membuat rencana bisnis profesional yang mencakup ringkasan eksekutif, analisis pasar, strategi, proyeksi keuangan, dan lainnya.',
      format: 'DOCX, PDF',
      pages: '15-20 halaman',
      sections: [
        'Ringkasan Eksekutif',
        'Deskripsi Perusahaan',
        'Analisis Pasar dan Industri',
        'Strategi Pemasaran',
        'Rencana Operasional',
        'Tim Manajemen',
        'Proyeksi Keuangan',
        'Analisis Risiko',
        'Rencana Pendanaan',
        'Lampiran'
      ]
    },
    {
      id: 'business-model-canvas',
      title: 'Model Bisnis Kanvas',
      description: 'Framework visual untuk menggambarkan, mengevaluasi, dan merencanakan model bisnis Anda dalam satu halaman.',
      format: 'PDF, PPT',
      pages: '1-3 halaman',
      sections: [
        'Segmen Pelanggan',
        'Proposisi Nilai',
        'Saluran',
        'Hubungan Pelanggan',
        'Arus Pendapatan',
        'Sumber Daya Utama',
        'Aktivitas Utama',
        'Kemitraan Utama',
        'Struktur Biaya'
      ]
    },
    {
      id: 'financial-projections',
      title: 'Proyeksi Keuangan',
      description: 'Template untuk membuat proyeksi keuangan bisnis Anda, termasuk arus kas, laporan laba rugi, dan neraca untuk periode 3-5 tahun.',
      format: 'XLSX',
      pages: '5-10 sheet',
      sections: [
        'Asumsi-asumsi',
        'Proyeksi Pendapatan',
        'Proyeksi Biaya',
        'Proyeksi Arus Kas',
        'Proyeksi Laba Rugi',
        'Proyeksi Neraca',
        'Break-Even Analysis',
        'Analisis Rasio Keuangan',
        'Valuasi Sederhana'
      ]
    },
    {
      id: 'marketing-plan',
      title: 'Rencana Pemasaran',
      description: 'Template komprehensif untuk merencanakan strategi pemasaran bisnis Anda, termasuk target pasar, positioning, taktik pemasaran, dan budget.',
      format: 'DOCX, PDF',
      pages: '10-15 halaman',
      sections: [
        'Ringkasan Eksekutif',
        'Analisis Situasi Pasar',
        'Target Pasar',
        'Positioning dan USP',
        'Strategi Produk',
        'Strategi Harga',
        'Strategi Distribusi',
        'Strategi Promosi',
        'Timeline dan Budget',
        'Metrik Keberhasilan'
      ]
    },
    {
      id: 'swot-analysis',
      title: 'Analisis SWOT',
      description: 'Template untuk mengidentifikasi dan menganalisis Strengths (Kekuatan), Weaknesses (Kelemahan), Opportunities (Peluang), dan Threats (Ancaman) bisnis Anda.',
      format: 'PDF, PPT',
      pages: '1-5 halaman',
      sections: [
        'Pengenalan dan Konteks',
        'Kekuatan (Strengths)',
        'Kelemahan (Weaknesses)',
        'Peluang (Opportunities)',
        'Ancaman (Threats)',
        'Matriks SWOT',
        'Strategi SO (Kekuatan-Peluang)',
        'Strategi WO (Kelemahan-Peluang)',
        'Strategi ST (Kekuatan-Ancaman)',
        'Strategi WT (Kelemahan-Ancaman)',
        'Rekomendasi Aksi'
      ]
    },
    {
      id: 'pitch-deck',
      title: 'Pitch Deck',
      description: 'Template presentasi untuk menarik investor, mencakup visi perusahaan, masalah yang dipecahkan, solusi, model bisnis, traksi, dan kebutuhan pendanaan.',
      format: 'PPT, PDF',
      pages: '10-15 slide',
      sections: [
        'Cover dan Tagline',
        'Masalah',
        'Solusi',
        'Model Bisnis',
        'Teknologi/Product',
        'Pasar dan Kompetisi',
        'Traksi dan Milestone',
        'Tim',
        'Proyeksi Finansial',
        'Kebutuhan Pendanaan',
        'Kontak'
      ]
    }
  ];
  
  const tools = [
    {
      id: 'break-even-calculator',
      title: 'Kalkulator Break-Even Point',
      description: 'Alat bantu untuk menghitung jumlah penjualan yang diperlukan untuk mencapai titik impas (break-even point).',
      icon: <CalculatorIcon className="h-6 w-6 text-blue-600" />,
      inputs: [
        { label: 'Biaya Tetap per Bulan (Rp)', id: 'fixed-cost', type: 'number', placeholder: 'Mis. 5000000' },
        { label: 'Harga Jual per Unit (Rp)', id: 'unit-price', type: 'number', placeholder: 'Mis. 100000' },
        { label: 'Biaya Variabel per Unit (Rp)', id: 'variable-cost', type: 'number', placeholder: 'Mis. 60000' }
      ],
      calculate: (inputs) => {
        const fixedCost = parseFloat(inputs['fixed-cost']) || 0;
        const unitPrice = parseFloat(inputs['unit-price']) || 0;
        const variableCost = parseFloat(inputs['variable-cost']) || 0;
        
        if (unitPrice <= variableCost) {
          return {
            error: 'Harga jual harus lebih besar dari biaya variabel per unit'
          };
        }
        
        const contributionMargin = unitPrice - variableCost;
        const breakEvenUnits = Math.ceil(fixedCost / contributionMargin);
        const breakEvenSales = breakEvenUnits * unitPrice;
        const contributionMarginRatio = (contributionMargin / unitPrice) * 100;
        
        return {
          breakEvenUnits,
          breakEvenSales: new Intl.NumberFormat('id-ID').format(breakEvenSales),
          contributionMargin: new Intl.NumberFormat('id-ID').format(contributionMargin),
          contributionMarginRatio: contributionMarginRatio.toFixed(2)
        };
      }
    },
    {
      id: 'roi-calculator',
      title: 'Kalkulator ROI (Return on Investment)',
      description: 'Alat bantu untuk menghitung persentase pengembalian investasi dari proyek atau investasi bisnis.',
      icon: <CalculatorIcon className="h-6 w-6 text-blue-600" />,
      inputs: [
        { label: 'Investasi Awal (Rp)', id: 'initial-investment', type: 'number', placeholder: 'Mis. 50000000' },
        { label: 'Pendapatan/Penghematan Tahunan (Rp)', id: 'annual-return', type: 'number', placeholder: 'Mis. 20000000' },
        { label: 'Biaya Operasional Tahunan (Rp)', id: 'annual-cost', type: 'number', placeholder: 'Mis. 5000000' },
        { label: 'Periode Waktu (Tahun)', id: 'time-period', type: 'number', placeholder: 'Mis. 3' }
      ],
      calculate: (inputs) => {
        const initialInvestment = parseFloat(inputs['initial-investment']) || 0;
        const annualReturn = parseFloat(inputs['annual-return']) || 0;
        const annualCost = parseFloat(inputs['annual-cost']) || 0;
        const timePeriod = parseFloat(inputs['time-period']) || 0;
        
        if (initialInvestment <= 0) {
          return {
            error: 'Investasi awal harus lebih besar dari 0'
          };
        }
        
        const netAnnualReturn = annualReturn - annualCost;
        const totalReturn = netAnnualReturn * timePeriod;
        const netProfit = totalReturn - initialInvestment;
        const roi = (netProfit / initialInvestment) * 100;
        const annualRoi = roi / timePeriod;
        
        return {
          netAnnualReturn: new Intl.NumberFormat('id-ID').format(netAnnualReturn),
          totalReturn: new Intl.NumberFormat('id-ID').format(totalReturn),
          netProfit: new Intl.NumberFormat('id-ID').format(netProfit),
          roi: roi.toFixed(2),
          annualRoi: annualRoi.toFixed(2),
          paybackPeriod: (initialInvestment / netAnnualReturn).toFixed(2)
        };
      }
    },
    {
      id: 'cashflow-calculator',
      title: 'Proyektor Arus Kas',
      description: 'Alat bantu untuk memproyeksikan arus kas bisnis Anda dalam periode tertentu.',
      icon: <CalculatorIcon className="h-6 w-6 text-blue-600" />,
      inputs: [
        { label: 'Saldo Kas Awal (Rp)', id: 'initial-cash', type: 'number', placeholder: 'Mis. 10000000' },
        { label: 'Penjualan Bulanan (Rp)', id: 'monthly-sales', type: 'number', placeholder: 'Mis. 15000000' },
        { label: 'Pertumbuhan Penjualan Bulanan (%)', id: 'sales-growth', type: 'number', placeholder: 'Mis. 5' },
        { label: 'Biaya Tetap Bulanan (Rp)', id: 'monthly-fixed-cost', type: 'number', placeholder: 'Mis. 5000000' },
        { label: 'Biaya Variabel (% dari Penjualan)', id: 'variable-cost-percent', type: 'number', placeholder: 'Mis. 30' },
        { label: 'Jumlah Bulan', id: 'months', type: 'number', placeholder: 'Mis. 12' }
      ],
      calculate: (inputs) => {
        const initialCash = parseFloat(inputs['initial-cash']) || 0;
        const monthlySales = parseFloat(inputs['monthly-sales']) || 0;
        const salesGrowth = parseFloat(inputs['sales-growth']) || 0;
        const monthlyFixedCost = parseFloat(inputs['monthly-fixed-cost']) || 0;
        const variableCostPercent = parseFloat(inputs['variable-cost-percent']) || 0;
        const months = parseInt(inputs['months']) || 0;
        
        if (months <= 0 || months > 36) {
          return {
            error: 'Jumlah bulan harus antara 1 dan 36'
          };
        }
        
        let cashFlow = [];
        let runningCash = initialCash;
        let currentSales = monthlySales;
        
        for (let i = 1; i <= months; i++) {
          const variableCost = (currentSales * variableCostPercent) / 100;
          const totalCost = monthlyFixedCost + variableCost;
          const monthlyProfit = currentSales - totalCost;
          runningCash += monthlyProfit;
          
          cashFlow.push({
            month: i,
            sales: new Intl.NumberFormat('id-ID').format(currentSales),
            costs: new Intl.NumberFormat('id-ID').format(totalCost),
            profit: new Intl.NumberFormat('id-ID').format(monthlyProfit),
            runningCash: new Intl.NumberFormat('id-ID').format(runningCash)
          });
          
          // Apply growth for next month
          currentSales += (currentSales * salesGrowth) / 100;
        }
        
        return {
          cashFlow,
          finalCash: new Intl.NumberFormat('id-ID').format(runningCash),
          lowestCash: new Intl.NumberFormat('id-ID').format(
            Math.min(...cashFlow.map(item => parseFloat(item.runningCash.replace(/\./g, '').replace(',', '.'))))
          ),
          highestCash: new Intl.NumberFormat('id-ID').format(
            Math.max(...cashFlow.map(item => parseFloat(item.runningCash.replace(/\./g, '').replace(',', '.'))))
          )
        };
      }
    }
  ];
  
  // State for tool calculations
  const [toolInputs, setToolInputs] = useState({});
  const [calculationResult, setCalculationResult] = useState(null);
  
  const handleToolInputChange = (toolId, inputId, value) => {
    setToolInputs(prev => ({
      ...prev,
      [toolId]: {
        ...(prev[toolId] || {}),
        [inputId]: value
      }
    }));
  };
  
  const calculateToolResult = (tool) => {
    const inputs = toolInputs[tool.id] || {};
    const result = tool.calculate(inputs);
    setCalculationResult(result);
  };
  
  const renderToolCalculation = (tool) => {
    if (!calculationResult) return null;
    
    if (calculationResult.error) {
      return (
        <div className="mt-4 p-4 bg-red-50 rounded-lg">
          <p className="text-red-700">{calculationResult.error}</p>
        </div>
      );
    }
    
    if (tool.id === 'break-even-calculator') {
      return (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Hasil Perhitungan Break-Even Point</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-gray-700 block">Jumlah Unit Titik Impas:</span>
              <span className="text-blue-700 font-semibold text-xl">{calculationResult.breakEvenUnits} unit</span>
            </div>
            <div>
              <span className="text-gray-700 block">Nilai Penjualan Titik Impas:</span>
              <span className="text-blue-700 font-semibold text-xl">Rp {calculationResult.breakEvenSales}</span>
            </div>
            <div>
              <span className="text-gray-700 block">Margin Kontribusi per Unit:</span>
              <span className="text-blue-700 font-semibold">Rp {calculationResult.contributionMargin}</span>
            </div>
            <div>
              <span className="text-gray-700 block">Rasio Margin Kontribusi:</span>
              <span className="text-blue-700 font-semibold">{calculationResult.contributionMarginRatio}%</span>
            </div>
          </div>
        </div>
      );
    }
    
    if (tool.id === 'roi-calculator') {
      return (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Hasil Perhitungan ROI</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-gray-700 block">Return on Investment (ROI):</span>
              <span className="text-blue-700 font-semibold text-xl">{calculationResult.roi}%</span>
            </div>
            <div>
              <span className="text-gray-700 block">ROI Tahunan:</span>
              <span className="text-blue-700 font-semibold text-xl">{calculationResult.annualRoi}%</span>
            </div>
            <div>
              <span className="text-gray-700 block">Pengembalian Bersih Tahunan:</span>
              <span className="text-blue-700 font-semibold">Rp {calculationResult.netAnnualReturn}</span>
            </div>
            <div>
              <span className="text-gray-700 block">Total Pengembalian:</span>
              <span className="text-blue-700 font-semibold">Rp {calculationResult.totalReturn}</span>
            </div>
            <div>
              <span className="text-gray-700 block">Keuntungan Bersih:</span>
              <span className="text-blue-700 font-semibold">Rp {calculationResult.netProfit}</span>
            </div>
            <div>
              <span className="text-gray-700 block">Periode Payback:</span>
              <span className="text-blue-700 font-semibold">{calculationResult.paybackPeriod} tahun</span>
            </div>
          </div>
        </div>
      );
    }
    
    if (tool.id === 'cashflow-calculator') {
      return (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Proyeksi Arus Kas</h4>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="text-gray-700 block">Saldo Akhir:</span>
              <span className="text-blue-700 font-semibold">Rp {calculationResult.finalCash}</span>
            </div>
            <div>
              <span className="text-gray-700 block">Saldo Terendah:</span>
              <span className="text-blue-700 font-semibold">Rp {calculationResult.lowestCash}</span>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bulan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penjualan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Biaya</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Saldo Kas</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {calculationResult.cashFlow.map((flow) => (
                  <tr key={flow.month}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{flow.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rp {flow.sales}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rp {flow.costs}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rp {flow.profit}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rp {flow.runningCash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    
    return null;
  };

  return (
    <div>
      <PageHeader 
        title="Template & Alat Bantu Bisnis" 
        description="Akses berbagai template siap pakai dan kalkulator untuk membantu perencanaan dan pengelolaan bisnis Anda." 
      />
      
      <div className="mb-8">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('templates')}
            className={`py-4 px-6 font-medium text-sm cursor-pointer ${
              activeTab === 'templates'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Template Bisnis
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`py-4 px-6 font-medium text-sm cursor-pointer ${
              activeTab === 'tools'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Alat Bantu Kalkulasi
          </button>
        </div>
      </div>
      
      {activeTab === 'templates' && (
        <div>
          {selectedTemplate ? (
            <div className="card">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold">{selectedTemplate.title}</h3>
                <button 
                  onClick={() => setSelectedTemplate(null)} 
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">{selectedTemplate.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="bg-gray-100 rounded-full px-3 py-1">
                    <span className="font-medium text-gray-700">Format: </span>
                    <span className="text-gray-600">{selectedTemplate.format}</span>
                  </div>
                  <div className="bg-gray-100 rounded-full px-3 py-1">
                    <span className="font-medium text-gray-700">Ukuran: </span>
                    <span className="text-gray-600">{selectedTemplate.pages}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Bagian dalam Template:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedTemplate.sections.map((section, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{section}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <button className="btn-primary flex items-center cursor-pointer">
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  Unduh Template
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {templates.map((template) => (
                <div 
                  key={template.id} 
                  className="card hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedTemplate(template)}
                >
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <div className="flex gap-2 text-sm">
                    <div className="bg-gray-100 rounded-full px-3 py-1">
                      <span className="text-gray-600">{template.format}</span>
                    </div>
                    <div className="bg-gray-100 rounded-full px-3 py-1">
                      <span className="text-gray-600">{template.pages}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      {activeTab === 'tools' && (
        <div>
          {selectedTool ? (
            <div className="card">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-semibold">{selectedTool.title}</h3>
                <button 
                  onClick={() => {
                    setSelectedTool(null);
                    setCalculationResult(null);
                  }} 
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-700 mb-6">{selectedTool.description}</p>
              
              <div className="space-y-4 mb-6">
                {selectedTool.inputs.map((input) => (
                  <div key={input.id}>
                    <label htmlFor={input.id} className="label">{input.label}</label>
                    <input
                      type={input.type}
                      id={input.id}
                      className="input"
                      placeholder={input.placeholder}
                      value={(toolInputs[selectedTool.id]?.[input.id] || '')}
                      onChange={(e) => handleToolInputChange(selectedTool.id, input.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>
              
              <button 
                className="btn-primary cursor-pointer"
                onClick={() => calculateToolResult(selectedTool)}
              >
                Hitung
              </button>
              
              {renderToolCalculation(selectedTool)}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <div 
                  key={tool.id} 
                  className="card hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedTool(tool)}
                >
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BusinessTemplates;