import express from 'express';
const app = express(); // Esta es la creación de la instancia.
const PORT = 3000;

app.use(express.json()); 

// 1. INTERFACE INFORMACION DE USUARIOS (DEBITO)
interface Customer {
    id: string;
    name: string;
    cc: string;
    email: string;
    birthDate: string;
    cel: string;
    address: string;
} 
// 1. INTERFACE INFORMACION  DE USUARIOS (CREDITO)( CB)
interface  Customer1 {
    id: string;
    name: string;
    cc: string;
    email: string;
    birthDate: string;
    cel: string;
    address: string;
}


// 1. TRAER INFORMACION DE USUARIOS DEBITO
let customersDB: Customer[] = [
    {
        id: "1",
        name: "pepito",
        cc: "1234",
        email: "pepito@gmail.com",
        birthDate: "01/01/1990",
        cel: "3001234567",
        address: "cll falsa # 123"
    },

    {
        id: "2",
        name: "fulanito",
        cc: "0000",
        email: "fulanito@gmail.com",
        birthDate: "01/01/1975",
        cel: "3001234568",
        address: "cll falsa # 124"
    },
     
    
];

// 1. TRAER INFORMACION DE USUARIOS CREDITO
let customersCB: Customer1[] = [
{
    id: "1",
    name: "juanito",
    cc: "8540",
    email: "pepito@gmail.com",
    birthDate: "01/01/1990",
    cel: "3001234567",
    address: "cll falsa # 123"
},
{
    id: "2",
    name: "pachanguito",
    cc: "1111",
    email: "pachanguito@gmail.com",
    birthDate: "01/01/1972",
    cel: "3435673421",
    address: "cll falsa # 124"
},
 
]

/// 1. TRAER INFORMACION DE CLIENTES (DEBITO)

app.get('/customers', function (request, response) {
    
    response.json(customersDB);
});

app.get('/customers/:id', function (request, response) {
    const id = request.params.id;
    const result = customersDB.filter(item => item.id === id);
    response.json(result);
});


app.post('/customers', function (request, response) {
    const body = request.body;
    customersDB.push(body);
    response.send('El cliente se ha guardado');
});

app.put('/customers/:id', function (request, response) {
   
    const id = request.params.id;
    const body = request.body;
    const customerIndex = customersDB.findIndex(item => item.id === id);
    console.log("customerIndex", customerIndex);
    customersDB[customerIndex] = body;
    response.send('Cliente actualizado correctamente');
});

app.delete('/customers/:id', function (request, response) {
    const id = request.params.id;
    const result = customersDB.filter(item => item.id !== id);
    customersDB = result;
    response.json("Cliente eliminado correctamente");
});



//CREDITO



app.get('/customers', function (request, response) {
    
    response.json(customersCB);
});

app.get('/customers/:id', function (request, response) {
    const id = request.params.id;
    const result = customersCB.filter(item => item.id === id);
    response.json(result);
});

app.post('/customers', function (request, response) {
    const body = request.body;
    customersCB.push(body);
    response.send('El cliente se ha guardado');
});

app.put('/customers/:id', function (request, response) {
   
    const id = request.params.id;
    const body = request.body;
    const customerIndex = customersCB.findIndex(item => item.id === id);
    console.log("customerIndex", customerIndex);
    customersCB[customerIndex] = body;
    response.send('Cliente actualizado correctamente');
});

app.delete('/customers/:id', function (request, response) {
    const id = request.params.id;
    const result = customersCB.filter(item => item.id !== id);
    customersCB = result;
    response.json("Cliente eliminado correctamente");
});


app.listen(PORT, function () {
    console.log("La aplicación es está ejecutando en: https//localhost:" + PORT);
});

