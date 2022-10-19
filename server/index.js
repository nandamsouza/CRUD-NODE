require('dotenv/config');
const app = require('../src/app');
const port = 8000

// table users
const users = require('../src/Model/User')
app.listen(port, async()=>{
    await users.sync()
    .then(console.log(`server is running on port ${port}`))
    .catch((error)=>{console.log(error)})
})
