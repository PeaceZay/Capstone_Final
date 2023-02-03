const express = require('express');
const axios = require('axios');
const mysql = require('mysql2');
const dotenv = require('dotenv')
const app = express();
// dotenv.config();
// app.use(bodyParse.json())
const { config } = require('dotenv');

config();
const configs = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    maps_key: process.env.MAPS_KEY
  };

 const connection = mysql.createConnection({
  host: configs.host,
  user: configs.user,
  password: configs.password,
  database: configs.database
});
connection.connect();

app.get('/api/:id')

app.get('/api/boblist', (req, res) => {
    connection.query('SELECT * FROM boblist', (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });


app.post('/api/boblist-post', (req, res) => {
    let placeId = req.body.place_id;
    let name = req.body.name;
    let sql = "Insert into boblist (place_id, name) values (?, ?)";
    let params = [placeId, name];
    
    connection.query(sql, params, function(err, res){
        
        if(err){
            console.log("there was an error", err)
            res.sendStatus(500)
        } else {
            console.log("All good!")
            res.sendStatus(200)
        }
    })
});


app.get('/api/search', async (req, res) => {
    const search = req.query.search;
    console.log("Hit on Search API...  Searching for " + search)
    console.log("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + encodeURI(search) + "&key=" + configs.maps_key)

    const searchPlaces = async () => {
        const res = await axios.get(
            "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + encodeURI(search) + "&key=" + configs.maps_key
        );
        return res.data.results;
    };

    const searchDatabase = async () => {
        try {
            await connection.promise().query(`SELECT * FROM places WHERE maps_id LIKE '%${search}%'`);
        } catch (err) {
            if (err.code === 'ER_NO_SUCH_TABLE') {
                await connection.promise().query(`CREATE TABLE places (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    place_id VARCHAR(255) NOT NULL,
                    name VARCHAR(255) NOT NULL,
                    
                )`);
            }
        }
        const [rows] = await connection.promise().query(`SELECT * FROM places WHERE name LIKE '%${search}%'`);
        return rows;
    };

    const filterResults = async()=>{
        const places = await searchPlaces();
        const database = await searchDatabase();
        const filteredPlaces = places.filter((place) => {
            return database.some((entry) => entry.place_id === place.place_id);
        });
        // 64 returns filtered places, 65 returns unfiltered places
        // return filteredPlaces;
        return places;
        // Store places in separate table under 'recent searches'
    };

    const filteredResults = await filterResults();
    res.json(filteredResults);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server is running on port ${port}");
});

module.exports = connection;