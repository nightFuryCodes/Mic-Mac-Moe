const { Socket } = require("socket.io")

module.exports = function(io) {

    const users = {}

    io.on("connection", (socket)=>{

        socket.on("roomId", room=>{
            socket.join(room)
        })

        socket.on("x-turn", value=>{
            socket.to(value.roomId).emit("o-turn", value)
        })
        
    })

    // socket.on("disconnect", ()=>{
    //     console.log("user disconnected ", socket.id)
    // })
}
    