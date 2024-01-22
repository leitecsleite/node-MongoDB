exports.middlewareGlobal = (req,res,next) =>{
    if(req.body.cliente){
        console.log(`Client is connected ${req.body.cliente}`);
    }
    next(); 
}; 

exports.checkcsrf = (err,req,res,next) =>{
  if(err && err.code === 'EBADCSRFTOKEN'){
    return res.status(403).send('Bad CSRF Token');
  }
}; 

exports.csrfMiddleware = (err,req,res,next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}