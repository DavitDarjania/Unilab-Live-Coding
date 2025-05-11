const leftBtn = document.querySelector('.left_generator')
const rightBtn = document.querySelector('.right_generator')

const leftPar = document.querySelector('.left_joke_par')
const rightPar = document.querySelector('.right_joke_par')

const lengthInd = document.querySelector('.length_indicator')
const wordInd = document.querySelector('.word_indicator')
const matchInd = document.querySelector('.matching_indicator')

let leftTextContent = ''
let rightTextContent = ''
leftBtn.addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
        if(!data.setup == ''){
            leftPar.textContent = data.setup
            leftTextContent = data.setup
        }
        else{
            leftPar.textContent = data.joke
            leftTextContent = data.joke
        }
        length_compare(leftTextContent, rightTextContent)
        word_compare(leftTextContent, rightTextContent)
        match_compare(leftTextContent, rightTextContent)
})
})

rightBtn.addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
        if(!data.setup == ''){
            rightPar.textContent = data.setup
            rightTextContent = data.setup
        }
        else{
            rightPar.textContent = data.joke
            rightTextContent = data.joke
        }
        length_compare(leftTextContent, rightTextContent)
        word_compare(leftTextContent, rightTextContent)
        match_compare(leftTextContent, rightTextContent)
})
})

function length_compare(left, right){
    const leftLength = left.length
    const rigthLength = right.length
    const compareValue = Math.abs(leftLength - rigthLength)
    lengthInd.textContent = compareValue + ' length difference'
}

function word_compare(left, right){
    const leftWords = left.split(' ')
    const rightWords = right.split(' ')
    const leftLength = leftWords.length
    const rigthLength = rightWords.length
    const compareValue = Math.abs(leftLength - rigthLength)
    wordInd.textContent = compareValue + ' word difference'
}

function match_compare(left, right){
    let counter = 0
    const leftWords = left.split(' ')
    const rightWords = right.split(' ')
    leftWords.forEach(element => {
        if(rightWords.includes(element)){
            counter ++
        }
    });
    matchInd.textContent = counter + ' match'
}
