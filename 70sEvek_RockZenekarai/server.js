import express from 'express';
import dotenv from 'dotenv';
import mysql2 from 'mysql2';
dotenv.config();
const app = express();
app.use(express.json());
const con = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3307
});
app.get('/api/zenekarok',(req, res) => {
    con.query('SELECT * FROM zenekarok', (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})
app.post('/api/ujzenekar',(req, res) => {
    con.query(`INSERT INTO zenekarok (id,nev,stilus_id,orszag,varos,aktiv_evek,tagok,legsikeresebb_album,kep_url)
VALUES (?,?,?,?,?,?,?,?,?)`, [req.body.id, req.body.nev, req.body.stilus_id, req.body.orszag, req.body.varos, req.body.aktiv_evek, req.body.tagok, req.body.legsikeresebb_album, req.body.kep_url], (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})
app.get('/api/stilusok',(req, res) => {
    con.query('SELECT * FROM stilusok', (err,result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.listen(3307, () => {
    console.log('A szerver fut a 3307-es porton');
})