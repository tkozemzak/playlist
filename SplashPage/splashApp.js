let rightDiv = document.querySelector('rightDiv')
let topAlbum = document.getElementById('topAlbum')
let middleAlbum = document.getElementById('middleAlbum')
let bottomAlbum = document.getElementById('bottomAlbum')

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


fetch('https://lit-fortress-6467.herokuapp.com/object')
.then(function(data){
  return data.json()
}).then(function(results){
  let random = getRandom(0,4)

        topAlbum.setAttribute('src', '../images/'+results.results[random].cover_art)



})

fetch('https://lit-fortress-6467.herokuapp.com/object')
.then(function(data){
  return data.json()
}).then(function(results){
  let random = getRandom(0,4)

        middleAlbum.setAttribute('src', '../images/'+results.results[random].cover_art)



})

fetch('https://lit-fortress-6467.herokuapp.com/object')
.then(function(data){
  return data.json()
}).then(function(results){
  let random = getRandom(0,4)

        bottomAlbum.setAttribute('src', '../images/'+results.results[random].cover_art)



})




































// let body = document.querySelector('body');
//
// let nav = document.createElement('nav');
// nav.style.border = 'solid green';
// nav.style.width = '100vw';
// nav.style.height = '5vh';
// nav.style.backgroundColor = '#9B9B8C';
// body.appendChild(nav);
//
// let bigDiv = document.createElement('div');
// bigDiv.style.display = 'flex';
// bigDiv.style.width = '100vw';
// bigDiv.style.height = '85vh';
// body.appendChild(bigDiv);
//
// //leftDiv
// let leftDiv = document.createElement('div');
// leftDiv.style.border = 'solid';
// leftDiv.style.width = '50vw';
// leftDiv.style.display = 'flex';
// leftDiv.style.justifyContent = 'center';
// leftDiv.style.flexDirection = 'column';
// leftDiv.style.textAlign = 'center'
// bigDiv.appendChild(leftDiv);
//
// let header = document.createElement('h1');
// header.innerText = 'track bin';
// header.style.color = 'purple';
// header.style.fontSize = '50px';
// leftDiv.appendChild(header);
//
// let button = document.createElement('button');
// button.innerText = 'choose tracks';
// leftDiv.appendChild(button);
//
//
//
//
//
//
// //rightDiv
// let rightDiv = document.createElement('div');
// rightDiv.style.border = 'solid red';
// rightDiv.style.backgroundImage = "url('fadedTrack.jpg')"
// rightDiv.style.backgroundPosition = 'center'
// rightDiv.style.backgroundSize = 'contain';
// rightDiv.style.width = '50vw';
// //rightDiv.style.height = '85vh';
// bigDiv.appendChild(rightDiv);
//
//
//
//
// let footer = document.createElement('footer');
// footer.style.border = 'solid blue';
// footer.style.width = '100vw';
// footer.style.height = '5vh';
// footer.style.backgroundColor = '#9B9B8C';
// body.appendChild(footer);
