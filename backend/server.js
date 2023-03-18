const express = require('express')
const cors= require('cors')
const app = express();
var mysql = require('mysql2');
const moment = require('moment');
app.use(cors());
app.get("/weather", async (req, res) => {
const config = require('./config.json');
const connection = mysql.createConnection(config.database);

  connection.query("SELECT * FROM weather_data", async (error, results) => {
    if (error) throw error;

    const formattedData = results.map((data) => {
      const date = moment(data.timestamp).format("YYYY-MM-DD HH:mm:ss"); // sformatuj datę przy użyciu moment.js
      return {
        ...data,
        timestamp: date,
      };
    });

    res.send(formattedData);
    
  });


});

app.listen(5001, () => console.log(`listening on port 5001...`));
