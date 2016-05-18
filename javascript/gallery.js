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
