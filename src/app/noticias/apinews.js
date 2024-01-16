export async function fetchData() {
  const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/theguardian';
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b77c225c5dmsh4e1d62edcee39e3p168dfbjsn0d8babd40c6c",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    // Asegúrate de que result.data es una matriz
    if (Array.isArray(result.data)) {
      return result.data;
    } else {
      throw new Error("Datos de formato incorrecto recibidos de la API");
    }
  } catch (error) {
    console.error("Error fetching data from the API:", error.message);
    throw new Error("Error fetching data from the API");
  }
}
