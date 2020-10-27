var express = require('express')
var app = express();
var port = 4000

const cors = require('cors')
const middleware = require('./middleware')
const bcrypt = require('bcrypt')
const config = require('./config/environment')
const User = require('./models/User')
const bodyParser = require('body-parser');
const authController = require('./api/authAPI')

//RUTES PUBLIQUES I PRIVADES (AMB EL MIDDLEWARE)
const publicRoutes = express.Router();
const privateRoutes = express.Router();
privateRoutes.use(middleware.ensureAuthenticated);

//API
const userAPI = require('./api/userAPI')
const postAPI = require('./api/postAPI')

app.use(cors())
app.use(bodyParser.json());
app.use('/api',privateRoutes,middleware.ensureAuthenticated)
app.use('/',publicRoutes)


//MONGO CONNECTION
const mongoose = require('./config/user_db_connection');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Conectat!!")
});

//RUTES DELS USERS
publicRoutes.post('/login',authController.login)


//RUTES DELS POSTS
privateRoutes.get('/posts',postAPI.list)
privateRoutes.post('/post',postAPI.insert)
privateRoutes.delete('/post/:postId',postAPI.delete)

app.listen(port,function(){

    User.find({}).exec((err,users) =>{
        if(err) return console.error("Init user find Error!")
        if(users.length === 0){
            bcrypt.hash(config.DEFAULT_PASSWORD, config.SALT, function(err, password){
                if(err) return console.error("Create encrypt password Error!")
                let admin = new User({user_name: config.DEFAULT_USERNAME,
                                    user_email: config.DEFAULT_EMAIL,
                                    user_password: password
                                })
                admin.save((err,admin)=>{
                    if(err) return console.log("Init user save Error!")
                })            
        
            });
        }
    })
                    
    console.log("listening at http://localhost:"+port)
})



