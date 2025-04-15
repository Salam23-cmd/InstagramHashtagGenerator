export default async function handler(req, res) {
    const keyword = req.query.keyword || '';
    const key = process.env.RAPIDAPI_KEY;

    if (!key) {
        return res.status(500).json({ error: 'Missing RapidAPI key' });
    }

    try {
        const response = await fetch(`https://hashtagy-generate-hashtags.p.rapidapi.com/v1/insta/tags?keyword=${encodeURIComponent(keyword)}&mode=smart`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'hashtagy-generate-hashtags.p.rapidapi.com',
                'x-rapidapi-key': key
            }
        });

        const data = await response.json();
        res.status(200).json({ hashtags: data.data.hashtags || [] });

    } catch (error) {
        console.error('Error fetching hashtags:', error);
        res.status(500).json({ error: 'Failed to fetch hashtags' });
    }
}