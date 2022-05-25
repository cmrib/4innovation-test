const numbers = [15, 33, 2, 47, 9, 13, 72, 27, 83]

// 1 - Crie uma função que imprima este array ordenado em ordem crescente ou decrescente
function printSortedArray(array, mode = "increasing") {

    switch (mode) {
        case 'increasing':
            console.log(array.sort((a, b) => a - b))
            break;
        case 'decreasing':
            console.log(array.sort((a, b) => b - a))
            break;
        default:
            console.log('método inválido')
    }
}


// 2 - Crie uma função que impra a soma dos itens deste array
function printArraySum(array) {
    let soma = array.reduce((acc, index) => acc + index)
    console.log(soma)
}


// 3 - Crie uma função que receba um número como parâmetro e verifique se ele existe no array imprimindo o resultado
function numberExists(number, array) {
    if ((array.includes(number))) {
        console.log(`O número ${number} existe no array indicado.`)
    } else {
        console.log(`Número não encontrado no array.`)
    }
}


// 4 - Crie uma função que receba um número como parâmetro e imprima um array com todos os números maiores que ele
function printBiggerThen(number, array) {
    let biggerThenArray = []

    array.forEach((element) => {
        if (element > number) {
            biggerThenArray.push(element)
        }
    })
    console.log(biggerThenArray)
}


// 5 - Crie uma função que imprima as posições pares do array. Resultado: [15, 2, 9, 72, 83]
function printPairIndexes(array) {
    let pairPositions = []

    for (var i = 0; i < array.length; i++) {
        if ((i % 2) == 0) {
            pairPositions.push(array[i])
        }
    }
    console.log(pairPositions)
}


// Execução das funçoes

printSortedArray(numbers);
printArraySum(numbers)
numberExists(2, numbers)
printBiggerThen(50, numbers)
printPairIndexes(numbers)