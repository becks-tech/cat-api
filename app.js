fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => {
    const catImageUrl = data[0].url;
    const catImageContainer = document.querySelector('#cat-image-container');
    catImageContainer.innerHTML = `<img src="${catImageUrl}" alt="Random cat image">`;
  });

  //create generate button and style it better