const { Socket } = require("socket.io")

module.exports = function(io) {

    const users = {}

    io.on("connection", (socket)=>{



        socket.on("new-user", (message)=>{
            const room = message.roomId
            socket.join(message.roomId)
            users[socket.id] = message.user

            io.to(message.roomId).emit("user-connected", {message:`${message.user} has joined the room ${message.roomId}`, name:"Admin", type: "received"})
           })
    

    socket.on("user-message", (message)=>{
        socket.emit("sent", {message:message.message, name: users[socket.id], type:"sent"})

        socket.to(message.roomId).emit("received", {message:message.message, name: users[socket.id], type:"received"})
    })

    // socket.on("disconnect", ()=>{
    //     console.log("user disconnected ", socket.id)
    // })
})
    
}