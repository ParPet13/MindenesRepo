const express = require("express")
const fs = require("fs/promises")
const mysql2 = require("mysql2")
const dotenv = require ("dotenv")
const nodemon = require("nodemon")
const path = require("path")

const app = express()
const port = 3000
app.use(express.json())

const adatok = path.join(__dirname,"datas.json")
function readJson(filePath){
    try{
        const data = fs.readFile(filePath,'utf-8');
        return JSON.parse(data)
    }catch(error){
        if (error.code === 'ENOENT') return []
        throw error
    }
}

function writeJson(filePath,data){
    fs.writeFile(filePath,JSON.stringify(data,null,2),'utf-8')
}








app.listen({port}, () =>  console.log("Az app a" + {port} + "-on fut"))