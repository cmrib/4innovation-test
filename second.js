const data = [
    {
        id: 1,
        name: "João da Silva",
        birthday: "2000-10-03",
        address: {
            street: "Rua A",
            addressNumber: "35",
            district: "Beija Flor",
            complement: null,
            city: "JUNDIAÍ",
            state: "SP",
        }
    },
    {
        id: 2,
        name: "Antônio José",
        birthday: "1983-01-09",
        address: {
            street: "Rua de Trás",
            addressNumber: "798",
            district: "São José",
            complement: "Apto 21",
            postalcode: "13250-010",
            city: "Itatiba",
            state: "SP",
        }
    },
    {
        id: 3,
        name: "Maria Antônia",
        birthday: "2007-06-03",
        address: {
            street: "Rua Floriano Peixoto",
            adressNumber: "340",
            district: "Centro",
            complement: "Bloco A Apto 45",
            postalcode: "19800-010",
            city: "Assis",
            state: "SP"
        }
    },
    {
        id: 4,
        name: "Italo Alves",
        birthday: "2010-12-10",
        address: {
            street: "Rua Alagoas",
            adressNumber: "35",
            district: "Centro",
            complement: null,
            postalcode: "86300-000",
            city: "Cornélio Procópio",
            state: "PR"
        }
    },
    {
        id: 5,
        name: "Miguel",
        birthday: "2010-12-10",
        address: {
            street: "Rua da Pedreira",
            addressNumber: "10",
            district: "Vila Tortuga",
            complement: null,
            postalcode: "28951-806",
            city: "Armação dos Búzios",
            state: "RJ"
        }
    }
]

// 1 - Crie uma função que imprima o nome e a idade de cada pessoa
function printNameAndAge(clients) {
    clients.forEach((client) => {
        const ageDifMs = Date.now() - new Date(client.birthday).getTime();
        const ageDate = new Date(ageDifMs);
        const actualAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        console.log(`Nome: ${client.name}, idade: ${actualAge}`)
    })
}


// 2 - Crie uma função que imprima quantas pessoas o endereço não tem complemento
function clientsWithoutComplement(clients) {
    let numberOfClients = 0
    clients.forEach((client) => {
        if (client.address.complement == null) {
            numberOfClients++
        }
    })
    console.log(`${numberOfClients} clientes não possuem complemento cadastrado`)
}


// 3 - Crie uma função que imprima o array ordenado pelo nome da pessoa
function orderedByName(clients) {
    console.log(clients.sort((a, b) => a.name.localeCompare(b.name)))
}


// 4 - Crie uma função que remova uma pessoa pelo id e imprima a pessoa removida
function removeById(id, clients) {
    var newArray = clients.filter((client) => {
        client.id == id ? console.log(`Cliente removido: ${client.name}`) : null
        return client.id != id
    })
    console.log(newArray)
}


// 5 - Crie uma função que imprima o nome da pessoa e em qual cidade ela reside
function printCity(name, clients) {
    clients.forEach((client) => {
        if (client.name == name) {
            console.log(`${client.name} reside em ${client.address.city}`)
        }
    })
}

// Execução das funçoes

printNameAndAge(data)
clientsWithoutComplement(data)
orderedByName(data)
removeById(3, data)
printCity('Miguel', data)