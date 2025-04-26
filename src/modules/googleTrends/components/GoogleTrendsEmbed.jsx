import React, { useState, useRef, useEffect } from 'react';

function GoogleTrendsEmbed() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerms, setSearchTerms] = useState(['']);
  const [comparison, setComparison] = useState(false);
  const [geo, setGeo] = useState('ID');
  const [timeRange, setTimeRange] = useState('today 12-m');
  const [loading, setLoading] = useState(false);
  const iframeRef = useRef(null);
  
  const geoOptions = [
    { value: 'ID', label: 'Indonesia' },
    { value: 'US', label: 'Amerika Serikat' },
    { value: 'GB', label: 'Inggris' },
    { value: 'SG', label: 'Singapura' },
    { value: 'MY', label: 'Malaysia' },
    { value: '', label: 'Seluruh Dunia' },
  ];
  
  const timeOptions = [
    { value: 'now 1-H', label: '1 Jam Terakhir' },
    { value: 'now 4-H', label: '4 Jam Terakhir' },
    { value: 'now 1-d', label: '1 Hari Terakhir' },
    { value: 'now 7-d', label: '7 Hari Terakhir' },
    { value: 'today 1-m', label: '30 Hari Terakhir' },
    { value: 'today 3-m', label: 'Tiga Bulan Terakhir' },
    { value: 'today 12-m', label: '12 Bulan Terakhir' },
    { value: 'today 5-y', label: '5 Tahun Terakhir' },
    { value: 'all', label: 'Sejak 2004' },
  ];
  
  const generateTrendsUrl = () => {
    let baseUrl = 'https://trends.google.com/trends/embed/explore/TIMESERIES';
    
    const terms = comparison 
      ? searchTerms.filter(term => term.trim()).map(term => encodeURIComponent(term))
      : [encodeURIComponent(searchTerm)];
      
    if (terms.length === 0 || terms[0] === '') {
      return null;
    }
    
    const queryParams = new URLSearchParams();
    terms.forEach(term => queryParams.append('q', term));
    
    if (geo) queryParams.append('geo', geo);
    queryParams.append('date', timeRange);
    queryParams.append('hl', 'id');
    
    return `${baseUrl}?${queryParams.toString()}&tz=420`;
  };
  
  const handleSearch = () => {
    setLoading(true);
    
    const url = generateTrendsUrl();
    if (!url) {
      setLoading(false);
      return;
    }
    
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }
  };
  
  const addComparisonTerm = () => {
    if (searchTerms.length < 5) {
      setSearchTerms([...searchTerms, '']);
    }
  };
  
  const updateComparisonTerm = (index, value) => {
    const newTerms = [...searchTerms];
    newTerms[index] = value;
    setSearchTerms(newTerms);
  };
  
  const removeComparisonTerm = (index) => {
    if (searchTerms.length > 1) {
      const newTerms = searchTerms.filter((_, i) => i !== index);
      setSearchTerms(newTerms);
    }
  };
  
  useEffect(() => {
    if (comparison) {
      setSearchTerms([searchTerm || '']);
    }
  }, [comparison, searchTerm]);
  
  const handleIframeLoad = () => {
    setLoading(false);
  };
  
  return (
    <div className="card">
      <h3 className="text-2xl font-semibold flex items-center mb-4">
        <svg className="w-6 h-6 mr-2 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
        </svg>
        Google Trends
      </h3>
      <p className="text-gray-600 mb-6">
        Jelajahi tren pencarian untuk mengetahui minat pasar terhadap bisnis Anda
      </p>
      
      <div className="mb-6">
        <div className="flex justify-between mb-3">
          <label className="label">Mode Pencarian</label>
          <div className="flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600"
                checked={comparison}
                onChange={() => setComparison(!comparison)}
              />
              <span className="ml-2 text-sm text-gray-700">Mode Perbandingan</span>
            </label>
          </div>
        </div>
        
        {!comparison ? (
          <div className="mb-4">
            <input
              type="text"
              className="input"
              placeholder="Masukkan kata kunci pencarian..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        ) : (
          <div className="space-y-2 mb-4">
            {searchTerms.map((term, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  className="input"
                  placeholder={`Kata kunci ${index + 1}...`}
                  value={term}
                  onChange={(e) => updateComparisonTerm(index, e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => removeComparisonTerm(index)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 cursor-pointer"
                  disabled={searchTerms.length <= 1}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
            
            {searchTerms.length < 5 && (
              <button
                type="button"
                onClick={addComparisonTerm}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer"
              >
                + Tambah kata kunci perbandingan
              </button>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="label">Lokasi</label>
            <select
              className="input"
              value={geo}
              onChange={(e) => setGeo(e.target.value)}
            >
              {geoOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="label">Rentang Waktu</label>
            <select
              className="input"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              {timeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <button
          className="btn-primary w-full cursor-pointer flex items-center justify-center"
          onClick={handleSearch}
          disabled={loading || (!comparison && !searchTerm) || (comparison && !searchTerms.some(term => term.trim()))}
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Memuat...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              Lihat Tren
            </>
          )}
        </button>
      </div>
      
      <div className="bg-white border rounded-lg overflow-hidden h-[500px] relative">
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-10">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-2 text-gray-600">Memuat data tren...</p>
            </div>
          </div>
        )}
        
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src=""
          frameBorder="0"
          allowFullScreen
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        <p>Data tren dari Google Trends dapat membantu Anda memahami popularitas relatif kata kunci terkait bisnis Anda.</p>
        <p className="mt-1">Gunakan analisis ini untuk mengevaluasi minat pasar dan mengidentifikasi tren musiman yang mungkin mempengaruhi permintaan.</p>
      </div>
    </div>
  );
}

export default GoogleTrendsEmbed;