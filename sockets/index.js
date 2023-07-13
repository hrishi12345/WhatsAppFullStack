import {Server} from  "socket.io"

const io=new Server(8000,{
    cors:{
        origin:'http://localhost:3000'
    }
})
//storing active users
let users=[]

const addUser=(userData,socketId)=>{
   !users.some(user=>user.sub==userData.sub)  && users.push({...userData,socketId})
}
const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}
const getUsers=(userId)=>{
    return users.find(user=>user.sub===userId)
}
io.on('connection',(socket)=>{
    console.log('user connected');
    
    socket.on("addUsers",userData=>{
        
        addUser(userData,socket.id)
        io.emit("getUsers",users)
    })
    socket.on("sendMessage",data=>{
        const user=getUsers(data.receiverId)
        io.to(user.socketId).emit('getMessage',data)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})