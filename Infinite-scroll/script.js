const count = 30;
const apiKey = "-AychDWElHhEzu0KQFYoxNTEqvaXTd0DT3SaK-oEfrM";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let photoArray = [];
let imagesLoadedNum = 0;
let ready = false;
//get photo from api

let totalImage = 0;

function imageLoaded() {
  imagesLoadedNum++;
  if (imagesLoadedNum === totalImage) {
    ready = true;
    $("#loader").hide();
    imagesLoadedNum = 0;
  }
}
async function getPhotos() {
  try {
    const resp = await fetch(apiUrl);
    photoArray = await resp.json();
    totalImage = photoArray.length;
    display();
  } catch (error) {}
}
async function display() {
  photoArray.forEach((photo) => {
    const item = $("<a></a>");
    item.attr("href", photo.links.html);
    item.attr("target", "_blank");

    const img = $("<img>");
    img.attr("src", photo.urls.regular);
    img.attr("alt", photo.alt_description);
    img.attr("title", photo.alt_description);

    // put img into item and put item into imagecontainer
    item.append(img);
    // check if image loaded
    img.on("load", imageLoaded);
    $("#image-container").append(item);
  });
} // need a helper function
$(window).on("scroll", () => {
  if (
    $(window).innerHeight() + $(window).scrollTop() >=
      $(document).height() - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});
//On load
getPhotos();
