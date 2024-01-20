exports.middlewareGlobal = (req,res,next) =>{
    if(req.body.cliente){
        console.log(`Client is connected ${req.body.cliente}`);
    }
    next(); 
}; 