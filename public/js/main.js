async function fetch_data() {
    const response = await fetch('/api/stations');
    const data = await response.json();
    return data;
}



fetch_data().then(data => {
    function update_section_visibility() {
        if(selected.length === 0) {
            document.getElementById("section-selected-data").style.display = "none";
        } else {
            document.getElementById("section-selected-data").style.display = "block";
        }
    }
    
    // Render the table
    let table = document.getElementById("table");
    let selected = [];
    
    data.forEach(station => {
        let row = table.insertRow(-1);

        let selected_cell = row.insertCell(0);
        let id_cell = row.insertCell(1);
        let location_cell = row.insertCell(2);

        // Insert the checkbox and add an event listener
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "selected";

        // Listen for when the checkbox is checked or unchecked
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                console.log(`Station ${station.id} selected`);
                selected.push(station);
                console.log(selected);
            } else {
                console.log(`Station ${station.id} deselected`);
                selected.pop(station);
                console.log(selected);
            }

            update_section_visibility();
        });

        selected_cell.appendChild(checkbox);
        id_cell.textContent = station.id;
        location_cell.textContent = station.location;
    });

    update_section_visibility();

    // Formatting data for the graphs
    const temperature_datasets = [
        {
        label: "",
        data: data[0].temperature
        },
        {
        label: "",
        data: data[1].temperature
        }
    ]

    const windspeed_datasets = [
        {
        label: "",
        data: data[0].windspeed
        },
        {
        label: "",
        data: data[1].windspeed
        }
    ]

    render_line_chart("temperature-chart", "Temperatuur (°C)", temperature_datasets);
    render_line_chart("windspeed-chart", "Windsnelheid (km/u)", windspeed_datasets);
});