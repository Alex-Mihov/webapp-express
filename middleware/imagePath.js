function setImagePath(req, res, next) {
    // creaimo il path 
    req.imagePath = `${req.protocol}://${req.get("host")}/img/movies_cover/`;
    next()
}

module.exports = setImagePath;