const Input = document.getElementById('listName')
const InputButton = document.getElementById('addList')
const ul = document.getElementById('list')
InputButton.addEventListener('click', NewList)
function NewList(e) {
    //make new list
    const liBaru = document.createElement('li')
    //list name
    e = Input.value
    //close and done button
    const CloseBTN = document.createElement('button')
    CloseBTN.innerHTML = 'X'
    const DoneBTN = document.createElement('button')
    DoneBTN.innerHTML = 'Done'
    CloseBTN.classList.add('close')
    DoneBTN.classList.add('Done')
    //combine
    liBaru.innerHTML += e
    liBaru.appendChild(CloseBTN)
    liBaru.appendChild(DoneBTN)
    ul.appendChild(liBaru)
    Input.value = ''
}
ul.addEventListener('click', function (e) {
    if (e.target.className == 'close') {
        e.target.parentElement.remove()
    }else if (e.target.className == 'Done') {
        e.target.parentElement.style.textDecoration= 'line-through'
    }
})