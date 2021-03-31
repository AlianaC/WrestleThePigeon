import { getTopArtists } from './Spotify';

const {
    SONGKICK: key
  } = process.env;

var userArtistData = {};

export default async (req, res) => {
    let code = req.query.code;
    const response = await getTopArtists(code);
    const { items } = await response.json();

    //console.log("ITEMS: " + items);
    
    var topArtists = items.map(artist => artist.name).slice(0,10);
    //console.log(topArtists);
    var ids = [];

    await Promise.all(
        topArtists.map(async (artist) => {
            var url = `https://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=`;
            const res = await fetch(url + artist);
            const id = await res.json();
            //console.log(artist + " " + id.resultsPage.results.artist[0].id);
            ids.push(id.resultsPage.results.artist[0].id);
        })
    )

    //await addAllEvents(4441173); //'Nothing But Thieves', 
    
    await Promise.all(
        ids.map(async (id) => {
            await addAllEvents(id);
        })
    )
    //console.log(userArtistData);
    
    return res.status(200).json({ items, userArtistData });
      
};

const addAllEvents = async (id) => {
    var events = await getEvents(id);
    var totalEntries = events.resultsPage.totalEntries;
    var perPage = events.resultsPage.perPage;
    var totalPages = Math.ceil(totalEntries / perPage);
    var pages = Array(totalPages).fill(null).map((_, i) => i + 1);

    await Promise.all(
        pages.map(async (p) => {
            var url = `https://api.songkick.com/api/3.0/artists/${id}/gigography.json?apikey=${key}&page=${pages[p]}`;
            const res = await fetch(url);
            const page = await res.json();
            const data = page.resultsPage.results.event;

            data.forEach(event => {
                var country = event.venue.metroArea.country.displayName;
                if (country == "US"){
                    var state = event.venue.metroArea.state.displayName;

                    if(!userArtistData.hasOwnProperty(state)){
                        userArtistData[state] = 1;
                    }else{
                        userArtistData[state] += 1;
                    }
                }
            })
        })
    )
}

const getEvents = async (id) => {
    var url = `https://api.songkick.com/api/3.0/artists/${id}/gigography.json?apikey=${key}`;
    var events = await fetch(url);
    events = await events.json();
    return events;
}