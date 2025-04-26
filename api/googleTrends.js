import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

export default async function handler(req, res) {
  try {
    console.log('Google Trends API request received:', req.method);
    
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { searchTerms, geo, timeRange } = req.body;
    
    console.log('Processing Google Trends request with params:', {
      searchTerms,
      geo,
      timeRange
    });
    
    if (!searchTerms || !Array.isArray(searchTerms) || searchTerms.length === 0) {
      return res.status(400).json({ error: 'Invalid search terms provided' });
    }
    
    const baseUrl = 'https://trends.google.com/trends/api/explore';
    
    // Build the proper request payload that Google Trends API expects
    const requestPayload = {
      comparisonItem: searchTerms.map(term => ({
        keyword: term,
        geo: geo || '',
        time: timeRange || 'today 12-m'
      })),
      category: 0,
      property: ''
    };
    
    console.log('Sending request to Google Trends API');
    
    // Make the request to Google Trends API
    const response = await fetch(`${baseUrl}?hl=id&tz=420`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
      },
      body: JSON.stringify(requestPayload)
    });
    
    if (!response.ok) {
      console.error('Google Trends API error:', response.status, response.statusText);
      return res.status(response.status).json({ 
        error: 'Failed to fetch from Google Trends',
        details: response.statusText
      });
    }
    
    // Google Trends returns a response with ")]}'\n" prefix that needs to be removed
    const responseText = await response.text();
    const cleanedResponse = responseText.substring(responseText.indexOf('\n') + 1);
    
    try {
      const parsedData = JSON.parse(cleanedResponse);
      console.log('Successfully fetched and parsed Google Trends data');
      return res.status(200).json(parsedData);
    } catch (error) {
      console.error('Error parsing Google Trends response:', error);
      Sentry.captureException(error, {
        extra: { responseText: responseText.substring(0, 200) + '...' }
      });
      return res.status(500).json({ error: 'Error parsing Google Trends response' });
    }
    
  } catch (error) {
    console.error('Google Trends API handler error:', error);
    Sentry.captureException(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}