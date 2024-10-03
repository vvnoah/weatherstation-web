const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

const station_1 = {
    temperature_data: [
        { time: "0:00", temperature: 16.5 },
        { time: "1:00", temperature: 16.1 },
        { time: "2:00", temperature: 15.8 },
        { time: "3:00", temperature: 15.5 },
        { time: "4:00", temperature: 15.3 },
        { time: "5:00", temperature: 15.0 },
        { time: "6:00", temperature: 15.2 },
        { time: "7:00", temperature: 16.0 },
        { time: "8:00", temperature: 17.2 },
        { time: "9:00", temperature: 18.4 },
        { time: "10:00", temperature: 19.5 },
        { time: "11:00", temperature: 20.3 },
        { time: "12:00", temperature: 21.0 },
        { time: "13:00", temperature: 22.1 },
        { time: "14:00", temperature: 23.2 },
        { time: "15:00", temperature: 23.8 },
        { time: "16:00", temperature: 24.0 },
        { time: "17:00", temperature: 23.5 },
        { time: "18:00", temperature: 22.3 },
        { time: "19:00", temperature: 21.0 },
        { time: "20:00", temperature: 19.8 },
        { time: "21:00", temperature: 18.5 },
        { time: "22:00", temperature: 17.3 },
        { time: "23:00", temperature: 16.8 }
    ],
    windspeed_data: [
        { time: "0:00", windspeed: 16.5 },
        { time: "1:00", windspeed: 16.1 },
        { time: "2:00", windspeed: 15.8 },
        { time: "3:00", windspeed: 15.5 },
        { time: "4:00", windspeed: 15.3 },
        { time: "5:00", windspeed: 15.0 },
        { time: "6:00", windspeed: 15.2 },
        { time: "7:00", windspeed: 16.0 },
        { time: "8:00", windspeed: 17.2 },
        { time: "9:00", windspeed: 18.4 },
        { time: "10:00", windspeed: 19.5 },
        { time: "11:00", windspeed: 20.3 },
        { time: "12:00", windspeed: 21.0 },
        { time: "13:00", windspeed: 22.1 },
        { time: "14:00", windspeed: 23.2 },
        { time: "15:00", windspeed: 23.8 },
        { time: "16:00", windspeed: 24.0 },
        { time: "17:00", windspeed: 23.5 },
        { time: "18:00", windspeed: 22.3 },
        { time: "19:00", windspeed: 21.0 },
        { time: "20:00", windspeed: 19.8 },
        { time: "21:00", windspeed: 18.5 },
        { time: "22:00", windspeed: 17.3 },
        { time: "23:00", windspeed: 16.8 }
    ]
};

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/index.html'));
});

app.get('/api/station/1', (req, res) => {
    res.json(station_1);
});

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});

module.exports = router;