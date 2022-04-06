const server = require('./src/app');
const { conn } = require('./src/db')

// Sync all the models at once.
conn.sync({force: true})
.then( () => {
    server.listen(3001, () => {
        console.log(`listening on 3001`); // eslint-disable-line no-console
    })
})
