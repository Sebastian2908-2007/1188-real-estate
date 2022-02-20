const authorize_user = (req,res,next) => {
    if (!req.session.user_id) {
        res.status(404).json({message:'you need to be logged in first'});
    }else{
        next();
    }
};

module.exports = authorize_user;