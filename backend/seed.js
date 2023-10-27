
const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");



async function main() {
    const url = "mongodb://localhost://27017";
    const client = new MongoClient(url);

    try {
        await client.connect();
        const productsCollection = client.db("food-ordering").collection("products");
        const categoriesCollection = client.db("food-ordering").collection("categories");
        productsCollection.drop();
        categoriesCollection.drop();
        let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);
        let breakfastImageUrls= ['https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZvY2FkbyUyMHRvYXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
                        'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=700&q=60',
                        'https://images.unsplash.com/photo-1626026671041-ee71c3bbf735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0JTIwYnVycml0b3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
                        'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJlYWtmYXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'];
        let lunchImageUrls= ['https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGx1bmNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
                        'https://images.unsplash.com/photo-1627309302198-09a50ae1b209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGx1bmNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
                        'https://images.unsplash.com/photo-1543161252-42609aa0e3d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGx1bmNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
                        'https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGx1bmNofGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'];
        let dinnerImageUrls= ['https://images.unsplash.com/photo-1572862905000-c5b6244027a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGRpbm5lcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
                        'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRpbm5lcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
                        'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxkaW5uZXJ8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60',
                        'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxkaW5uZXJ8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60'];
        let drinkImageUrls= ['https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
                        'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60',
                        'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
                        'https://images.unsplash.com/photo-1605548230624-8d2d0419c517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29kYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60'];
        let products = [];
        let imageUrls= ['https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZvY2FkbyUyMHRvYXN0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
                'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=700&q=60',
                'https://images.unsplash.com/photo-1626026671041-ee71c3bbf735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0JTIwYnVycml0b3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
                'https://unsplash.com/photos/uAm1CZMdPCw'];

        for (let i = 0; i < 4; i+=1) {
            let breakfastProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: { name: 'breakfast'},
                imageUrl: breakfastImageUrls[i],

            };
            products.push(breakfastProduct);
        }
        for (let i = 0; i < 4; i+=1) {
            let lunchProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: { name: 'lunch'},
                imageUrl: lunchImageUrls[i],

            };
            products.push(lunchProduct);
        }
        for (let i = 0; i < 4; i+=1) {
            let dinnerProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: { name: 'dinner'},
                imageUrl: dinnerImageUrls[i],

            };
            products.push(dinnerProduct);
        }
        for (let i = 0; i < 4; i+=1) {
            let drinkProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: { name: 'drinks'},
                imageUrl: drinkImageUrls[i],

            };
            products.push(drinkProduct);
        }


        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();