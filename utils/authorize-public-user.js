const authorize_pub_user = (req,res,next) => {
    if (!req.session.user_id) {
        res.redirect('/create-user-account');
    }else{
        next();
    }
};

module.exports = authorize_pub_user;