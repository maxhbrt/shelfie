require("dotenv").config();
const express = require("express");
const {getProperties} = require('./controller');
const app = express();
const massive = require("massive");

const {SERVER_PORT, CONNECTION_STRING } = process.env;


app.use(express.json());
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log("database connected");
});

app.get('/api/properties', getProperties )




app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));


