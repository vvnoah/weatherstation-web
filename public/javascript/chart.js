async function fetch_station_data() {
    const response = await fetch('/api/station/1');
    const data = await response.json();
    return data[0];
}

function render_chart(canvas_id, object, chart_title, scale_x_title, scale_y_title) {
  const element = document.getElementById(canvas_id).getContext('2d');

  new Chart(element, {
    type: 'line',
    data: {
      labels: object.labels,
      datasets: [{
        label: chart_title,
        data: object.data,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: scale_x_title
          }
        },
        y: {
          title: {
            display: true,
            text: scale_y_title
          },
          beginAtZero: false
        }
      }
    }
  });
}

  // Haal de data op en render de grafiek
fetch_station_data().then(data => {
  console.log(data)

  const temperature = {
    labels: data.temperature_data.map(item => item.time),
    data: data.temperature_data.map(item => item.temperature)
  };

  const windspeed = {
    labels: data.windspeed_data.map(item => item.time),
    data: data.windspeed_data.map(item => item.windspeed)
  }

  console.log(temperature);

  render_chart("temperature-chart", temperature, "Temperatuur (C°)", "Tijd (uur)", "Temperatuur (C°)");
  render_chart("windspeed-chart", windspeed, "Windsnelheid (km/u)", "Tijd (uur)", "Windsnelheid (km/u)");
});