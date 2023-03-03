const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

const createUser = () => {
    const newFake = {
        password: faker.random.alphaNumeric(12),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.number()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.datatype.number(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFake;
}

const newFakeUser = createUser();

const newFakeCompany = createCompany();

// GET route that returns a new user
app.get("/api/users/new", (req, res) => {
    res.json( newFakeUser );
});

// GET route that returns a new company
app.get("/api/companies/new", (req, res) => {
    res.json( newFakeCompany );
});

// GET route that returns both a new user and a new company
app.get("/api/user/company", (req, res) => {
    res.json( newFakeUser );
    res.json( newFakeCompany );
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );