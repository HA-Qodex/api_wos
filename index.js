require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT;
const URL = process.env.URL;

app.listen(PORT, URL, () => {
    console.log(`server has been started successfully at http://${URL}:${PORT}`)
})