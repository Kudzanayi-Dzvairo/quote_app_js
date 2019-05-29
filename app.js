const btn = document.querySelector('#btn')
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')

let url = 'https://quota.glitch.me/random'

btn.addEventListener('click', getData)

function getData() {

    fetch(url)
    .then(res => res.json())
    .then(quotes => {
        
    })
}