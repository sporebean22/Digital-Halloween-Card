
function SetImage(source)
{
  const imagesource = document.getElementById('image');
  imagesource.src = source;
}

function SetImageFromApi() {
  const url = 'https://source.unsplash.com/collection/395888/';
  fetch(url)
    .then(data => SetImage(data.url));
}
