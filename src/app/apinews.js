// apinews.js
export async function fetchData() {
    const url = "https://crypto-news16.p.rapidapi.com/news/top/5";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b77c225c5dmsh4e1d62edcee39e3p168dfbjsn0d8babd40c6c",
        "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching data from the API");
    }
  }
  