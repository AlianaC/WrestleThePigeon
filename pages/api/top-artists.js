import { getTopArtists } from './Spotify';

export default async (req, res) => {
    let code = req.query.code;
    const response = await getTopArtists(code);
    const { items } = await response.json();

    //    console.log("ITEMS: " + items);

    return res.status(200).json({ items });
      
};