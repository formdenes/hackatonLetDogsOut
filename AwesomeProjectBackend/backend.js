'use strict'

const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql');
const env = require('dotenv');
env.config();
const conn = mysql.createConnection({
  host: process.env.RDS_HOST,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
  port: process.env.RDS_PORT
});

app.use(express.json())

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
})

app.get('/', (req, res) => {
  allData()
    .then((rows) =>
      res.send({ rows })
    )
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
});

app.post('/addFav', (req, res) => {
  let data = req.body;
  addFavorite(data)
    .then((rows) => {
      res.send({rows})
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    })
});

app.post('/delFav', (req, res) => {
  let data = req.body;
  deleteFavorite(data)
    .then((rows) => {
      res.send({rows})
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    })
});

const allData = () => {
  return new Promise((res, rej) => {
    conn.query(`SELECT * FROM Favorites ORDER BY fav_id DESC`, (err, rows) => {
      if (err) {
        rej(err);
      } else {
        res(rows);
      }
    });
  });
};

const addFavorite = (data) => {
  return new Promise((res, rej) => {
    conn.query(
      `INSERT INTO Favorites (title,href,ingredients,thumbnail) VALUES (${mysql.escape(data.title)},${mysql.escape(data.href)},${mysql.escape(data.ingredients)},${mysql.escape(data.thumbnail)})`, (err, insInfo) => {
        if (err) {
          rej(err);
        } else {
          res(insInfo);
        }
      });
  });
};

const deleteFavorite = (data) => {
  return new Promise((res, rej) => {
    conn.query(
      `DELETE FROM Favorites WHERE fav_id=${mysql.escape(data.fav_id)};`, (err, insInfo) => {
        if (err) {
          rej(err);
        } else {
          res(insInfo);
        }
      });
  });
};