import React, { useState, useRef, useEffect } from 'react';
import * as Sentry from '@sentry/browser';

function GoogleTrendsEmbed() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerms, setSearchTerms] = useState(['']);
  const [comparison, setComparison] = useState(false);
  const [geo, setGeo] = useState('ID');
  const [timeRange, setTimeRange] = useState('today 12-m');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
    try {
      // Use the correct embed format URL
      const baseUrl = 'https://trends.google.com/trends/embed/explore/TIMESERIES';
      
      // Get non-empty terms and properly encode them
      const terms = comparison 
        ? searchTerms.filter(term => term.trim()).map(term => encodeURIComponent(term.trim()))
        : [encodeURIComponent(searchTerm.trim())];
        
      // Validate terms
      if (terms.length === 0 || terms[0] === '') {
        return null;
      }
      
      // Build query parameters
      const params = new URLSearchParams();
      
      // Add each term as a separate 'q' parameter
      terms.forEach(term => params.append('q', term));
      
      // Add other parameters
      if (geo) params.append('geo', geo);
      params.append('date', timeRange);
      params.append('hl', 'id'); // Language set to Indonesian
      params.append('tz', '420'); // Timezone offset for Indonesia (GMT+7)
      
      console.log(`Google Trends URL: ${baseUrl}?${params.toString()}`);
      return `${baseUrl}?${params.toString()}`;
    } catch (error) {
      console.error('Error generating Google Trends URL:', error);
      Sentry.captureException(error, {
        tags: {
          component: 'GoogleTrendsEmbed',
          action: 'generateTrendsUrl'
        },
        extra: {
          searchTerm,
          searchTerms,
          comparison,
          geo,
          timeRange
        }
      });
      setError('Terjadi kesalahan saat membuat URL Google Trends');
      return null;
    }
  };
  
  const handleSearch = () => {
    setLoading(true);
    setError(null);
    
    try {
      const url = generateTrendsUrl();
      if (!url) {
        setLoading(false);
        setError('Mohon masukkan kata kunci pencarian yang valid');
        return;
      }
      
      if (iframeRef.current) {
        // Clear the iframe first
        iframeRef.current.src = '';
        
        // Set timeout to ensure the iframe is reset before setting new URL
        setTimeout(() => {
          iframeRef.current.src = url;
        }, 100);
      }
    } catch (error) {
      console.error('Error in handleSearch:', error);
      Sentry.captureException(error, {
        tags: {
          component: 'GoogleTrendsEmbed',
          action: 'handleSearch'
        }
      });
      setLoading(false);
      setError('Terjadi kesalahan saat memuat Google Trends');
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
  
  // When switching to comparison mode, initialize with the current search term
  useEffect(() => {
    if (comparison) {
      setSearchTerms([searchTerm || '']);
    }
  }, [comparison, searchTerm]);
  
  const handleIframeLoad = () => {
    setLoading(false);
  };
  
  const handleIframeError = () => {
    setLoading(false);
    setError('Tidak dapat memuat data Google Trends. Mohon coba kata kunci atau parameter lain.');
    
    // Log the error
    console.error('Google Trends iframe failed to load');
    Sentry.captureMessage('Google Trends iframe failed to load', {
      level: 'error',
      tags: {
        component: 'GoogleTrendsEmbed'
      },
      extra: {
        searchTerm,
        searchTerms,
        comparison,
        geo,
        timeRange
      }
    });
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
              className="input box-border"
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
                  className="input box-border"
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
              className="input box-border"
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
              className="input box-border"
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
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}
      
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
          frameBorder="0"
          scrolling="no"
          style={{ border: 0 }}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          sandbox="allow-scripts allow-same-origin allow-popups"
          title="Google Trends Data"
        ></iframe>
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        <p>Data tren dari Google Trends dapat membantu Anda memahami popularitas relatif kata kunci terkait bisnis Anda.</p>
        <p className="mt-1">Gunakan analisis ini untuk mengevaluasi minat pasar dan mengidentifikasi tren musiman yang mungkin mempengaruhi permintaan.</p>
        <p className="mt-3 text-xs border-t pt-2">Catatan: Jika tren tidak muncul, coba gunakan kata kunci yang lebih umum atau ubah parameter pencarian.</p>
      </div>
    </div>
  );
}

export default GoogleTrendsEmbed;