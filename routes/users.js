const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    // Function logic executed
    res.json({
        message: "JSON response sent!"
    });
});

router.get("/new", (req, res)=> {
    // Function logic executed
    res.json({
        message: "New user details here!"
    });
});

router.get("/:id", (req, res)=> {
    // Function logic executed
    res.json({
        message: "Getting a specific user detail"
    });
});

router.patch("/:id", (req, res)=> {
    // Function logic executed
    res.json({
        message: "Editing something specific from the specific user"
    });
});

module.exports = router
