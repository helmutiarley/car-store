export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '2978e4e688mshb9cc13832d0deabp1b7158jsnfad6e49018d7',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=toyota', {
        headers,
    });

    const result = await response.json();

    return result;
}