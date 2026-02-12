async function getWeather() {
  // Get input value
  const city = document.getElementById("city").value.trim();
  const output = document.getElementById("output");

  // Reset previous output
  output.innerHTML = "";

  // If input empty → stop function
  if (!city) {
    output.innerHTML = "Please enter a city name";
    return;
  }

  try {
    //  Fetch city coordinates from Geo API
    const geo = await axios.get(
      `https://geocoding-api.open-meteo/v1/search?name=${city}`,
    );

    // Check if city exists
    if (!geo.data.results || geo.data.results.length === 0) {
      throw new Error("City not found");
    }

    // Extract first matching city
    const { latitude, longitude, name, country } = geo.data.results[0];

    // Fetch weather using coordinates
    const weatherResponse = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    );

    const w = weatherResponse.data.current_weather;

    // Show data on UI
    output.innerHTML = `
      <b>${name}, ${country}</b><br>
      Temp: ${w.temperature} °C <br>
      Wind: ${w.windspeed} km/h <br>
      Time: ${w.time}
    `;
  } catch (err) {
    // Handle any error
    output.innerHTML = `<span style="color:red;">${err.message}</span>`;
  }
}
