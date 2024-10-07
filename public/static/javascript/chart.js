async function fetchTemperatureData() {
    const response = await fetch('/api/temperature');
    const data = await response.json();
    return data;
  }

  function renderChart(data) {
    const ctx = document.getElementById('temperatureChart').getContext('2d');
    const timeLabels = data.map(d => d.time);
    const temperatureValues = data.map(d => d.temperature);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [{
          label: 'Temperatuur (°C)',
          data: temperatureValues,
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
              text: 'Tijd (Uren)'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Temperatuur (°C)'
            },
            beginAtZero: false
          }
        }
      }
    });
  }

  // Haal de data op en render de grafiek
  fetchTemperatureData().then(data => {
    renderChart(data);
  });