import express from 'express'
import path from 'path'

//const express = require('express')
//const path = require('path')

export const startServer = (options) => {
    const {port, public_path = 'public'} = options
    
    const app = express()
//middlewears usamos use

    app.use(express.static(public_path)) // contenido estatico que esta disponible para ser servido
    //para angular y react se sube a public solo la dist o el build

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname, `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, ()=> {
        console.log(`Escuchando en el puerto ${port}`)
    })
    
}


//module.exports = {startServer}

