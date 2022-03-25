var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')


var notes = localStorage.getItem('notes')

if (notes){
  textarea.textContent = notes
}
else{
  textarea.textContent = "Type your to-do's here."
}

var user
var cookieSplit = document.cookie.split('; ')
var personName = cookieSplit.find(function(cookie){
return cookie.startsWith('name')
})
if(personName){
  user = personName.split('=')[1]
  nameSpan.textContent = user
}

formEl.onsubmit = function(e) {
  e.preventDefault()


  document.cookie = "name=" + nameSpan.textContent + ";"
  localStorage.setItem( 'notes' , textarea.value,)

  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  textarea.textContent = " "
  localStorage.clear()

  this.classList.add('emoji')
}

function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp