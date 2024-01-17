'use client';
export async function fetchData() {
  const url = 'https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw';
const options = {
    method: 'GET',
    headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '2e3659d649mshbd6eae1fc8d04f0p156fc4jsn324a5b3d8bd5',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
}
