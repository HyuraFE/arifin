function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }

      function myFunction1() {
        var dots = document.getElementById("dots1");
        var moreText = document.getElementById("more1");
        var btnText = document.getElementById("myBtn1");

        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
}

document.getElementById('tombol').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah perilaku default dari <a>
  document.getElementById('kotakBaru').style.display = 'block';
});

document.getElementById('tutup').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah perilaku default dari <a>
  document.getElementById('kotakBaru').style.display = 'none';
});