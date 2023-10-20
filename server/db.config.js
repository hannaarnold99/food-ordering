const dbName = 'food-ordering';
const dbHost = 'localhost';
const dbPort = 27017;

module.exports = {
    url: `mongob://${dbHost}:${dbPort}/${dbName}`
}