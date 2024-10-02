const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const router = express.Router();

app.use(express.static('public/static'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = router;