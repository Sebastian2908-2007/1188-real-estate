const authorize_user = (req,res,next) => {
    if (req.session.user_id != '88811') {
        res.redirect('/admin/login');
    }else{
        next();
    }
};

module.exports = authorize_user;