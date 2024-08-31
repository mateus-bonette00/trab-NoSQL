const pg = require('./db/pg');
const mongo = require('./db/mongo');
const router = require('./router');

const main = async () => {
    try {
        console.log('connecting pg');
        await pg.connect();
    } catch (error) {
        console.error('failed to connect pg', error)   
    }
    
    try {
        console.log('connecting mongo');
        await mongo.connect();
    } catch (error) {
        console.error('failed to connect mongo', error)   
    }

    router.start()
};

main().catch(e => process.exitCode = 1)