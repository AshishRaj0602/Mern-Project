const app=require('./app');

const dotenv=require('dotenv');

const connectDatabase = require('./config/database');

process.on('uncaughtException',error => {
    console.log(`Error: ${error.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
    
})

dotenv.config({path:"backend/config/.env"});

connectDatabase();

const server=app.listen(process.env.PORT, (req, res) => {
    console.log(`server listening on http://localhost:${process.env.PORT}`);
});




// UnHandled Promise Rejection
process.on('unhandledRejection',error => {
    console.log(`Error: ${error.message}`);
    console.log(`Shutting down the server due to UnHandled Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    });
})