window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




function downloadCV() {
    // Replace 'path-to-cv.pdf' with the actual path to your CV file
    const link = document.createElement('a');
    link.href = 'cv.pdf';
    link.download = 'cv.pdf';
    link.click();
}


// Disable right-click
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable F12 (Developer Tools)
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
     return false;
  }
};








document.getElementById('learnMoreBtn').addEventListener('click', function() {
    alert('Thank you for your interest! More information will be available soon.');
});
