const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const user = require('./routes/users.route')

app.use(cors());
app.use(express.static('public/'))
app.use(bodyParser.urlencoded({'extended':true}))
app.use('/user', user);

app.get('/',(req, res)=>{
    res.status(200).send({
        'success':true,
        'data':[]
    })
})

// route issue
app.use((req, res, next) => {
    res.status(404).send({'success': false, 'error': 'Invalid route'})
});

// server issue
app.use((err, req, res, next) => {
    res.status(500).send({'success': false, 'error': err.stack})
});

module.exports = app