

document.getElementById('tombol').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah perilaku default dari <a>
  document.getElementById('kotakBaru').style.display = 'block';
});

document.getElementById('tutup').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah perilaku default dari <a>
  document.getElementById('kotakBaru').style.display = 'none';
});

function toggleReadMore(dots1, more1, btn1) {
  const dots = document.getElementById(dots1);
  const moreText = document.getElementById(more1);

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btn.innerHTML = "Read more";
  } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btn.innerHTML = "Read less";
  }
}

function toggleReadMore(dots2, more2, btn2) {
  const dots = document.getElementById(dots2);
  const moreText = document.getElementById(more2);

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btn.innerHTML = "Read more";
  } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btn.innerHTML = "Read less";
  }
}

// kalkulator jawascript
let layar = document.getElementById("layar"); 
 
    function tambahAngka(nilai) { 
      layar.value += nilai; 
    } 
 
    function clearLayar() {       layar.value = ""; 
    } 
 
    function hapusSatu() { 
      layar.value = layar.value.slice(0, -1); 
    } 
 
    function hitung() { 
      try { 
        layar.value = eval(layar.value); 
      } catch {         layar.value = "Error!"; 
      } 
    } 
