import app from './src/app.js'
import {connectDB} from "./src/config/database";
import {config} from "./src/config/config.js";

connectDB()

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})
