export default async function handler(req, res) {
  // CORS Headers (Allow frontend to call this API)
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*') 
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  // 1. Get the securely stored API key from Vercel Environment Variables
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  
  // 2. The Place ID for Harsha Technologies (You will need to set this)
  const placeId = process.env.GOOGLE_PLACE_ID; 

  if (!apiKey || !placeId) {
    return res.status(500).json({ 
      error: 'Server Misconfiguration', 
      message: 'GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID environment variable is missing in Vercel.' 
    });
  }

  try {
    // 3. Fetch data securely from Google's servers
    const googleApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;
    
    const response = await fetch(googleApiUrl);
    
    if (!response.ok) {
      throw new Error(`Google API responded with status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== "OK") {
        throw new Error(`Google API Error: ${data.status}`);
    }

    // 4. Sanitize and send ONLY necessary data back to frontend
    // We don't want to expose unnecessary Google Place internal IDs
    const safeData = {
        name: data.result.name,
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total,
        reviews: data.result.reviews.map(review => ({
            author_name: review.author_name,
            profile_photo_url: review.profile_photo_url,
            rating: review.rating,
            text: review.text,
            time: review.time,
            relative_time_description: review.relative_time_description
        }))
    };

    // Cache the response for 1 hour (3600 seconds) to save API quota and make site faster
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    
    return res.status(200).json(safeData);

  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return res.status(500).json({ error: 'Failed to fetch reviews', details: error.message });
  }
}
