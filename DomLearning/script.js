const heading  = document.getElementsByClassName('heading')

const head = document.querySelector('.heading')
console.log(heading);

console.log(head);


const div = document.createElement('div')
div.className = "main"
const addText = document.createTextNode("chai aur code")
div.appendChild(addText)
document.body.appendChild(div)

function addLanguage(language){
    const li = document.createElement('li')
    li.innerHTML = `${language}`
    document.querySelector('.language')
    .appendChild(li)
}

function addLanguageOptimizeWay(language){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(language))
    document.querySelector('.language')
    .appendChild(li)
}
addLanguage('Python')
addLanguage('Cpp')

addLanguageOptimizeWay('Ruby')