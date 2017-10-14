//all routes here will render with
// /auth/<route>

const router = require('express').Router();


router.get("/register",(req,res)=>{
	res.render('register');
})

//auth login route
router.get("/login",(req,res)=>{
	res.render('login');
})

router.get('/logout',(req,res)=>{
	//handle with passport
	res.send('logging out');
})


//auth with google
router.get('/google',(req,res)=>{
	//handle with passport
	res.send('login with google');
})

module.exports = router;