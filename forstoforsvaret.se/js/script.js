
//öpnna flygvapen overlay
function showFlygplan() {
    document.getElementById("flyg-overlay").classList.remove("hidden");
  }
  
  function closeFlygOverlay() {
    document.getElementById("flyg-overlay").classList.add("hidden");
  }
 
//öppna armen overlay
  function showArmenOverlay() {
  document.getElementById("armen-overlay").classList.remove("hidden");
}

function closeArmenOverlay() {
  document.getElementById("armen-overlay").classList.add("hidden");
}
//öppna marinen overlay
function showMarinenOverlay() {
  document.getElementById("marinen-overlay").classList.remove("hidden");
}

function closeMarinenOverlay() {
  document.getElementById("marinen-overlay").classList.add("hidden");
}
//öppna civilt försvar overlay
function showCiviltOverlay() {
  document.getElementById("civilt-overlay").classList.remove("hidden");
}

function closeCiviltOverlay() {
  document.getElementById("civilt-overlay").classList.add("hidden");
}



// Vänta tills sidan är färdigladdad
document.addEventListener("DOMContentLoaded", function () {

  // 1. Skapa kartan och sätt mittpunkt över Sverige
  var map = L.map('map').setView([59.4, 14.5], 6); // lat, long, zoom

  // 2. Ladda in kartbakgrund (darkmode-stil)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // 3. Lägg till markörer med popup-info

  // Karlstad
  L.marker([59.3793, 13.5040])
    .addTo(map)
    .bindPopup("<b>Karlstad</b><br>MSB:s huvudkontor och civil samordning.");

  // Linköping
  L.marker([58.4109, 15.6216])
    .addTo(map)
    .bindPopup("<b>Linköping</b><br>Flygindustrin SAAB och flygbas.");

  // Värmland (t.ex. Hammarö)
  L.marker([59.3000, 13.4667])
    .addTo(map)
    .bindPopup("<b>Värmland</b><br>Regional krisberedskap, Hammarö med omnejd.");

  // Stockholm
  L.marker([59.3293, 18.0686])
    .addTo(map)
    .bindPopup("<b>Stockholm</b><br>Försvarsstaben, MSB och krisledning.");
});


function showJasOverlay() {
  document.getElementById("jas-overlay").classList.remove("hidden");
}

function closeJasOverlay() {
  document.getElementById("jas-overlay").classList.add("hidden");
}

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

const lightboxImages = [
  'images/jas_detail.jpg',
  'images/jas_detail2.jpg',
  'images/jas_detail3.jpg'
];

let currentIndex = 0;

function openLightbox(src) {
  currentIndex = lightboxImages.indexOf(src);
  if (currentIndex === -1) currentIndex = 0;
  updateLightboxImage();
  document.getElementById('lightbox').style.display = 'flex';
}

function updateLightboxImage() {
  document.getElementById('lightbox-img').src = lightboxImages[currentIndex];
}

function nextImage(event) {
  event.stopPropagation();
  currentIndex = (currentIndex + 1) % lightboxImages.length;
  updateLightboxImage();
}

function prevImage(event) {
  event.stopPropagation();
  currentIndex = (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
}

function closeLightbox(event) {
  if (event.target.id === 'lightbox' || event.target.id === 'lightbox-close') {
    document.getElementById('lightbox').style.display = 'none';
  }
}