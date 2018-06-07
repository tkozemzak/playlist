let topDiv = document.querySelector('.topDiv')
let middleDiv = document.querySelector('.middleDiv')





fetch('https://lit-fortress-6467.herokuapp.com/object')
.then(function(data){
  return data.json()
}).then(function(results){





  console.log(results)
  for(let i=0; i<5; i++){

    let newImg = document.createElement('img')
  newImg.setAttribute('src', '../images/'+results.results[i].cover_art);
  newImg.style.width = '50px';
  newImg.style.height = '50px';
  newImg.style.margin = '10px';
  newImg.setAttribute('id', results.results[i].id)
  newImg.addEventListener('click', addToMiddle)
  topDiv.appendChild(newImg)

  function addToMiddle(){
    let albumInfo = document.createElement('p');
    albumInfo.innerText = results.results[i].artist + ': ' + results.results[i].title;
    middleDiv.appendChild(albumInfo)

  }
  console.log(results.results[i].artist + ': ' + results.results[i].title);

}
})
