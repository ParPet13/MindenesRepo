const express = require("express")
const fs = require("fs/promises")
const mysql2 = require("mysql2/promise")
const dotenv = require ("dotenv")
const nodemon = require("nodemon")
const path = require("path")


const app = express()
const env = dotenv.config()
const port = 3307
const fajl = path.join(__dirname,'datas.json')


app.use(express.json())

app.get('/', (req,res) => {
    res.json({
        uzenet: 'Kezdő Iskolai REST API fut',
        elerheto_vegpontok: [
            'GET /api/osztalyok',
            'GET /api/osztalyok/:id',
            'GET /api/osztalyok/:id/diakok',
            'GET /api/diakok',
            'GET /api/diakok/:id',
            'GET /api/diakok?aktiv=1',
        ]
    })
})
const dbPool = mysql2.createPool({
    host: process.env.DB_HOST,      // Adatbázis szerver címe
    user: process.env.DB_USER,         // Adatbázis felhasználónév
    password: process.env.DB_PASSWORD, // Adatbázis jelszó
    database: process.env.DB_NAME, // Adatbázis név
    port: process.env.DB_PORT,   });

async function getOsztaly(){
    const data = await fs.readFile(fajl,'utf-8')
}

app.get('/api/osztalyok', async (req, res) => {
    try {
      const osztalyok = await getOsztaly();
      res.json(osztalyok);
    } catch (error) {
      res.status(500).json({ üzenet: 'Hiba a fájl olvasásakor', hiba: error.message });
    }
  });


app.listen({port}, () =>  console.log("Az app a 3000-es porton fut"))