const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const authRoutes = require('./routes/auth-routes.js');
const c = console.log;


//set up view engine
app.set('view engine','ejs');

//setup auth/<routes> routes
app.use('/auth',authRoutes);




app.get('/',(req,res)=>{
	res.render('home');
})







//listen on port
app.listen(port,(err)=>{
	if(!err){
		c('listening on port:',3000);
	}else{
		c('err',err);
	}
})