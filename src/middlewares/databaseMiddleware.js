async function getUsersFromDatabase(req, res, next){
    // Query would run here and we would get the list of users from the database
    req.userData = [
        "John", "Alice", "Mary", "Bob", "Ethan", "Hendric"
    ];
    next();
}

module.exports = {
    getUsersFromDatabase
}