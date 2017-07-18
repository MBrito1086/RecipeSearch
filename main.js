const results = document.querySelector('.items')
const button = document.querySelector('button')
const searchItem = document.querySelector('input')
const section = document.querySelector('section')

const url = "https://crossorigin.me/http://www.recipepuppy.com/api/?q="


button.addEventListener('click', function () {
  fetch ( url + searchItem.value )
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.results.length; i++) {
        let uls = document.createElement('ul')
        let li = document.createElement('li')
        let liNail = document.createElement('img')
        let a = document.createElement('a')
        a.href = data.results[i].href
        li.textContent = data.results[i].title
        liNail.src = data.results[i].thumbnail
          if (data.results[i].thumbnail === '') {
            liNail.src = 'http://via.placeholder.com/100x100'
          }
        section.appendChild(uls)
        uls.appendChild(a)
        a.appendChild(li)
        li.appendChild(liNail)
      }
    })
})




// I will need to take whatever string is in the search bar (click event on the search button) and search through the data that we are looping through.
