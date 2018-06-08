let rightDiv = document.querySelector('rightDiv')
let topAlbum = document.getElementById('topAlbum')
let middleAlbum = document.getElementById('middleAlbum')
let bottomAlbum = document.getElementById('bottomAlbum')

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomSoFar = [];

fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(data) {
    return data.json()
  }).then(function(results) {
    let random = getRandom(0, 4)

    topAlbum.setAttribute('src', '../images/' + results.results[random].cover_art)
    randomSoFar.push(random)
    console.log(randomSoFar);


  })

fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(data) {
    return data.json()
  }).then(function(results) {
    let random = getRandom(0, 4)
    randomSoFar.push(random)
    console.log(randomSoFar);
    for (let i = 0; i < randomSoFar.length; i++) {
      if (randomSoFar[i] !== random) {
        //random = getRandom(0, 4);
        randomSoFar.push(random)

        middleAlbum.setAttribute('src', '../images/' + results.results[random].cover_art)
      } else {
        middleAlbum.setAttribute('src', '../images/' + results.results[random].cover_art)
      }
    }

  })

fetch('https://lit-fortress-6467.herokuapp.com/object')
  .then(function(data) {
    return data.json()
  }).then(function(results) {
    let random = getRandom(0, 4)

    bottomAlbum.setAttribute('src', '../images/' + results.results[random].cover_art)

    randomSoFar.push(random)
    console.log(randomSoFar);
    if (randomSoFar.includes(random)) {
      random = getRandom(0, 4);
      bottomAlbum.setAttribute('src', '../images/' + results.results[random].cover_art)
    } else {
      bottomAlbum.setAttribute('src', '../images/' + results.results[random].cover_art)
    }



  })
