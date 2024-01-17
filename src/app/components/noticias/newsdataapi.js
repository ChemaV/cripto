"use client";
// newsdataapi.js
// Latest News (Gratis 200 consultas diarias)

export async function fetchData() {
  const url = 'https://newsdata.io/api/1/news?apikey=pub_366115d2243782cf6679aea73bb2ba5cf3410&size=10';
  
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching data from the API");
  }
}

  