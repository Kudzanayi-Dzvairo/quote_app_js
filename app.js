const btn = document.querySelector('#btn')
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')

let url = 'https://quota.glitch.me/random'

btn.addEventListener('click', getData)

function getData() {

    fetch(url)
    .then(res => res.json())
    .then(quotes => {
        console.log(quotes)
        let number = Math.floor(Math.random() * quotes.length)

        quote.innerHTML = '<span>"</span>' + quotes[number].quote+'<span>"</span>'
        author.innerHTML = '<span>---</span>' + quotes[number].quote+'<span>"</span>'

    })
    .catch(error => {
    //if there is an error
    })
}