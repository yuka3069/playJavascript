const count = 10;
const apiKey = "-AychDWElHhEzu0KQFYoxNTEqvaXTd0DT3SaK-oEfrM";
const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${count}`;
let photoArray = [];
//get photo from api

async function getPhotos() {
  try {
    const resp = await fetch(apiUrl);
    photoArray = await resp.json();
    console.log(photoArray);
    display();
  } catch (error) {}
}
async function display() {
  photoArray.forEach((photo) => {
    $("#image-container").append("<p>");
  });
}

//On load

getPhotos();
