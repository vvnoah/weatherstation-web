async function fetch_data() {
    const response = await fetch('/api/station/1');
    const data = await response.json();
    return data;
}

fetch_data().then(data => render(data))

function render(data) {
  render_line_chart("temperature-chart", data.temperature);
  render_line_chart("windspeed-chart", data.windspeed);
}

function render_line_chart(chart_elemnt_id, chart_data) {
  const data = {
    datasets: [{
      label: 'Station',
      data: chart_data
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      maintainAspectRatio: true,
    }
  };

  const chart = new Chart(
    document.getElementById(chart_elemnt_id),
    config
  );
}