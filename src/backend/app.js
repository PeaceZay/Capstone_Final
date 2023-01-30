const express = require('express');
const axios = require('axios');
const mysql = require('mysql2');

const app = express();

const config = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    maps_key: process.env.MAPS_KEY
  };

const connection = mysql.createConnection({
  host: config.database,
  user: config.user,
  password: config.password,
  database: config.database
});

app.get('/api/:id')

app.get('/api/search', async (req, res) => {
    const search = req.query.search;
    console.log("Hit on Search API...  Searching for " + search)
    console.log("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + encodeURI(search) + "&key=" + config.maps_key)

    const searchPlaces = async () => {
        const res = await axios.get(
            "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + encodeURI(search) + "&key=" + config.maps_key
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