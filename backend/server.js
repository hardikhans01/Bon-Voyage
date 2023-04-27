const app = require('./app');
const dotenv=require('dotenv');

dotenv.config({ path: './config.env' });

const port = 4040;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});