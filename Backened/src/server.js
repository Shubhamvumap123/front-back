const app = require("./index")

const connect = require("./configs/db")

app.listen(5000,async()=>{
    try {
        await connect();
        console.log("listening to posrt 5000");
    } catch (error) {
        console.log("error",error)
    }
    
})