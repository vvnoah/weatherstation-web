function render_line_chart(chart_element_id, chart_title, chart_datasets) {
  const config = {
    type: 'line',
    data: {
      datasets: chart_datasets
    },
    options: {
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index',
      },
      plugins: {
        title: {
            display: true,
            text: chart_title,
            position: "left",
        }
      }
    }
  };

  const chart = new Chart(
    document.getElementById(chart_element_id),
    config
  );
}