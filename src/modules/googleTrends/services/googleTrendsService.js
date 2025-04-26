import * as Sentry from '@sentry/browser';

/**
 * Fetches Google Trends data through our backend API
 * @param {Array} searchTerms - Array of search terms to look up
 * @param {string} geo - Geography code (e.g., 'ID' for Indonesia)
 * @param {string} timeRange - Time range for trends data
 * @returns {Promise<Object>} - The trends data
 */
export async function fetchGoogleTrendsData(searchTerms, geo, timeRange) {
  try {
    console.log('Fetching Google Trends data with params:', { searchTerms, geo, timeRange });
    
    const response = await fetch('/api/googleTrends', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        searchTerms: Array.isArray(searchTerms) ? searchTerms : [searchTerms],
        geo,
        timeRange,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Google Trends API error:', errorData);
      throw new Error(errorData.error || 'Failed to fetch Google Trends data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error in fetchGoogleTrendsData:', error);
    Sentry.captureException(error, {
      tags: {
        component: 'googleTrendsService',
        action: 'fetchGoogleTrendsData',
      },
      extra: {
        searchTerms,
        geo,
        timeRange,
      },
    });
    throw error;
  }
}

/**
 * Processes Google Trends API response data into a format suitable for charts
 * @param {Object} trendsData - Raw trends data from the API
 * @returns {Object} - Processed data ready for charting
 */
export function processTrendsData(trendsData) {
  try {
    // Implementation will depend on the exact structure of the data
    // returned by the Google Trends API
    
    // This is a placeholder implementation
    return {
      labels: [],
      datasets: [],
      // Process the data based on the actual response structure
    };
  } catch (error) {
    console.error('Error processing trends data:', error);
    Sentry.captureException(error, {
      tags: {
        component: 'googleTrendsService',
        action: 'processTrendsData',
      },
    });
    throw error;
  }
}