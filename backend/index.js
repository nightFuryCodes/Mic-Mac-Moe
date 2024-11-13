const express = require("express")
const http = require("http")
const { Server } = require("socket.io")
const app = express()
const { Socket } = require("dgram")
const server = http.createServer(app)
const cors = require("cors")

const PORT = 3000
const io = new Server(server, {
    cors:{
        origin: 'https://mic-mac-moe.vercel.app', 
        methods: ['GET', 'POST'], 
        credentials: true 
    }
});


require("./gameSocket")(io);
require("./chatSocket")(io);


app.get("/", (req,res)=>{
    res.json({
        msg: "let's Play"
    })
})

server.listen(PORT, ()=>{
    console.log(`server running at port ${PORT}...`)
})
