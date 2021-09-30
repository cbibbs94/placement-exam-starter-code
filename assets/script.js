
// First, tell us your name
let yourName = "Chris Bibbs"
document.getElementById('credit').textContent = `Created by ${yourName}`

localStorage.getItem('gb-votes')

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0 
let cookieCell = document.querySelector('#qty-total')
const gbBttnMin = document.querySelector('#minus-gb')
const gbBttnPls = document.querySelector('#add-gb')
const ccBttnMin= document.querySelector('#minus-cc')
const ccBttnPls= document.querySelector('#add-cc')
const ssBttnMin = document.querySelector('#minus-sugar')
const ssBttnPls = document.querySelector('#add-sugar')

// Code for GB Button Events
let gbCell = document.querySelector('#qty-gb')

gbBttnMin.addEventListener( 'click', function(){
    if(gb > 0){
        gb = gb - 1;
        gbCell.textContent = gb;
        cookieCell.textContent = gb + cc + sugar;     
    } 
    localStorage.setItem('gb-votes', gb);
})

gbBttnPls.addEventListener('click' , function(){
    gb = gb + 1;
    gbCell.textContent = gb;
    cookieCell.textContent = gb + cc + sugar;
    localStorage.setItem('gb-votes', gb);
})

// code for CC Button Events
let ccCell = document.querySelector('#qty-cc')

ccBttnMin.addEventListener('click', function(){
   if(cc > 0){
       cc = cc - 1
       ccCell.textContent = cc;
       cookieCell.textContent = gb + cc + sugar;
   } 
   localStorage.setItem('cc-votes', cc);
})

ccBttnPls.addEventListener('click', function(){
    cc = cc + 1;
    ccCell.textContent = cc;
    cookieCell.textContent = gb + cc +sugar;
    localStorage.setItem('cc-votes', cc)
})

//Code for Sugar Button Events
let sugarCell = document.querySelector('#qty-sugar')

ssBttnMin.addEventListener('click' , function(){
    if (sugar > 0){
        sugar = sugar - 1;
        sugarCell.textContent = sugar;
        cookieCell.textContent = gb + cc + sugar; 
    }
    localStorage.setItem('sugar-votes', sugar);
})

ssBttnPls.addEventListener('click', function(){
    sugar = sugar + 1;
    sugarCell.textContent = sugar;
    cookieCell.textContent = gb + cc + sugar;
    localStorage.setItem('sugar-votes', sugar);
})