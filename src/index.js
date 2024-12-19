const { app } = require("./server")

// Define a default PORT number
const PORT = parseInt(process.env.PORT) ?? 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})