const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const station_data = {
    temperature: [
        { x: "0:00",  y: 16.5 },
        { x: "1:00",  y: 16.1 },
        { x: "2:00",  y: 15.8 },
        { x: "3:00",  y: 15.5 },
        { x: "4:00",  y: 15.3 },
        { x: "5:00",  y: 15.0 },
        { x: "6:00",  y: 15.2 },
        { x: "7:00",  y: 16.0 },
        { x: "8:00",  y: 17.2 },
        { x: "9:00",  y: 18.4 },
        { x: "10:00", y: 19.5 },
        { x: "11:00", y: 20.3 },
        { x: "12:00", y: 21.0 },
        { x: "13:00", y: 22.1 },
        { x: "14:00", y: 23.2 },
        { x: "15:00", y: 23.8 },
        { x: "16:00", y: 24.0 },
        { x: "17:00", y: 23.5 },
        { x: "18:00", y: 22.3 },
        { x: "19:00", y: 21.0 },
        { x: "20:00", y: 19.8 },
        { x: "21:00", y: 18.5 },
        { x: "22:00", y: 17.3 },
        { x: "23:00", y: 16.8 }
    ],
    windspeed: [
        { x: "0:00",  y: 40.0 },
        { x: "1:00",  y: 38.0 },
        { x: "2:00",  y: 37.0 },
        { x: "3:00",  y: 40.0 },
        { x: "4:00",  y: 34.0 },
        { x: "5:00",  y: 30.0 },
        { x: "6:00",  y: 28.0 },
        { x: "7:00",  y: 28.0 },
        { x: "8:00",  y: 28.0 },
        { x: "9:00",  y: 28.0 },
        { x: "10:00", y: 28.0 },
        { x: "11:00", y: 25.0 },
        { x: "12:00", y: 21.0 },
        { x: "13:00", y: 22.1 },
        { x: "14:00", y: 23.2 },
        { x: "15:00", y: 23.8 },
        { x: "16:00", y: 24.0 },
        { x: "17:00", y: 23.5 },
        { x: "18:00", y: 22.3 },
        { x: "19:00", y: 25.0 },
        { x: "20:00", y: 25.0 },
        { x: "21:00", y: 25.0 },
        { x: "22:00", y: 25.0 },
        { x: "23:00", y: 28.0 }
    ]
};

const router = express.Router();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/api/station/1', (req, res) => {
    res.json(station_data);
});

app.listen(port, () => {
    console.log(`Server hosting on: http://localhost:${port}`);
});

module.exports = router;