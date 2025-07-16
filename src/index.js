const express = require('express')
const bodyParser = require('body-parser')
const ServerConfig = require('./config/serverConfig')
const connectDB = require('./config/dbConfig')
const userRouter = require('./route/userRoute')
const cors = require('cors');
const app = express()

// If request is in JSON, text, urlencoded it correctly reads by Express Server
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());
app.use(cors());  

app.post('/ping', (req, res) => {
  console.log(req.body);
  return res.json({ message: 'pong' });
});

app.use('/users', userRouter);

app.listen(ServerConfig.PORT, async () => {
  await connectDB();
  console.log(`Example app listening on port ${ServerConfig.PORT}...`)
})

// git remote add new-origin <new_repository_url>
// git fetch origin
// git push new-origin --all

// git add .
// git commit -m "Your commit message"

// git push new-origin <branch_name>

