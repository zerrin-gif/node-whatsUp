/*** Required External Modules */
const express = require('express')
const path = require('path')
const app = express()
const port = 8000

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port port!`))


/*** App Variables */
app.set('view engine', 'pug');


/***  App Configuration */
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")));



/*** Routes Definitions */
app.get('/',(req,res)=>{res.render('index', {title:'Home'})}) 
app.get("/user", (req, res) => {

    res.render("user", {title:"Profile", userProfile:'Auth0'});
    
    });

app.get('/logout',(req,res)=>{res.redirect('/')}) 


/*** Server Activation */
app.listen(port, () => console.log(`Example app listening on port port!`))

