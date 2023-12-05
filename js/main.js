document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value
    console.log(choice)
    const url = `https://openlibrary.org/isbn/${choice}.json`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            localStorage.setItem('books', data.title)

            document.querySelector('#name').innerText = localStorage.getItem('books')


        })
        .catch(err => {
            console.log(`error ${err}`)
        });

    const caturl = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1'
    fetch(caturl)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            localStorage.setItem('fact', data.text)

            document.querySelector('#facts').innerText = localStorage.getItem('fact')


        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

