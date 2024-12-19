const checkIfAdmin = (req, res, next) => {
    if (req.body.isAdmin == true) {
        req.auth = {
            isAdmin: true
        };
        req.isAdmin = true;
    } else {
        res.json({
            error: "Not an authorised user!"
        })
    }

    console.log("Checked if the user is admin or not")
    // Move on to the next middleware
    next();
}

module.exports = {
    checkIfAdmin
}