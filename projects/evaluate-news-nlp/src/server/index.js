const express = require('express');
const cors =  require('cors');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
dotenv.config(); 

//express config
const app = express();
app.use(express.static('dist'));

//cors config
app.use(cors());

//body parser config
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/apiCall', async (req, res) => {


    console.log("debug test")
    const formText = req.body.name
    const lang = 'en';
    const apiKey = process.env.API_KEY;

    const formData = new FormData();
    formData.append("key", apiKey);
    formData.append("url", formText);
    formData.append("lang", lang);

    const requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        .then(response => response.json())
        .then(data => res.send(data))
        .catch(error => console.log('error', error));
}
)

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
