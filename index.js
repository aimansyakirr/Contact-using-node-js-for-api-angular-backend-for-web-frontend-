const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv'); 
console.log(process.env)
const path = require('path'); 

dotenv.config({ 
  path: path.resolve(__dirname, `./environment/.${process.env.NODE_ENV}.env`)
});




app.use('/public', express.static(__dirname + '/public'));//make folder public


app.get('/', (req, res) => {
  res.send('Hello World!')
})
  
  //app.use('/app', require('./app/app'));

const port = process.env.PORT || 5000;
app.listen(port);
