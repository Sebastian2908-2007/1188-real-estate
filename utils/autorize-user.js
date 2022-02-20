const authorize_user = (req,res,next) => {
    if (!req.sesion.user_id) {
        res.redirect('/api/users/login');
    }else{
        next();
    }
};

module.exports = authorize_user;