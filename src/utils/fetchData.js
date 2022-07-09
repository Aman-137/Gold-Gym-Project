export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ef2f6690afmsh4e3f8fb86034aedp12a969jsnd87d293e20b4',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ef2f6690afmsh4e3f8fb86034aedp12a969jsnd87d293e20b4',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };



export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}