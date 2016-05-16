// gallery toggle var for cake/cupcake
var galleryToggle = null;

//drop down cake gallery function
$('#cakeButton').on('click', function(){
  if (galleryToggle == false || galleryToggle == null) {
    $('#cupcakeGallery').slideUp();
    $('#cakeGallery').delay(500).slideDown();
    galleryToggle = true;
  }
});

//drop down cupcake gallery funtion
$('#cupcakeButton').on('click', function(){
  if (galleryToggle == true || galleryToggle == null) {
    $('#cakeGallery').slideUp();
    $('#cupcakeGallery').delay(500).slideDown();
    galleryToggle = false;
  }
});



//Lightbox code
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');
//add image to overlay
$overlay.append($image);
$overlay.append($caption);

//add overlay
$('body').append($overlay);

//capture click event for cake gallery on link to an image
$('#cakeGallery a').click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr('href');
  $image.attr('src', imageLocation);
  console.log(imageLocation);
  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//capture click event for cupcake gallery on link to an image
$('#cupcakeGallery a').click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr('href');
  $image.attr('src', imageLocation);
  console.log(imageLocation);
  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function() {
  $overlay.hide();
});