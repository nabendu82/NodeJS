var faker = require('faker');

// console.log(faker.commerce.product());
for(var i=0 ; i<10 ; i++)
    console.log(faker.fake("{{commerce.productName}} - {{commerce.price}}"));