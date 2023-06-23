// script.js

const repoOwner = 'jonybabe1';
const repoName = 'photo-upload-site';
const photoContainer = document.getElementById('photo-container');

fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents`)
  .then(response => response.json())
  .then(data => {
    const photos = data.filter(item => item.type === 'file' && item.name.match(/\.(jpeg|jpg|png|gif)$/i));
    photos.forEach(photo => {
      const imgElement = document.createElement('img');
      imgElement.src = photo.download_url;
      photoContainer.appendChild(imgElement);
    });
  })
  .catch(error => {
    console.error('Failed to fetch repository contents:', error);
  });
