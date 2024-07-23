const popupOverlay = document.getElementById("popup-overlay");
const popup = document.getElementById("popup");
const popupPoint = document.getElementById("popup-point");
const popupP = document.getElementById("popup-p");


const cityes = document.getElementById("cityes");
const msc = document.getElementById("msc").onclick = function(){
  city.innerText = 'Москва';
  closePopup();
};
const spb = document.getElementById("spb").onclick = function(){
  city.innerText = 'Санкт-Петербург';
  closePopup();
};
const ekb = document.getElementById("ekb").onclick = function(){
  city.innerText = 'Екатеринбург';
  closePopup();
};

const city = document.getElementById("city");



function showPopup() {
  popupOverlay.style.display = "block";
}
 
function hidePopup() {
  popupOverlay.style.display = "none";
}


function send()
{
  hidePopup();
  alert("Заявка Отправлена");
} 




function openPopup() {
  popupPoint.style.display = "block";
}
 
function closePopup() {
  popupPoint.style.display = "none";
}

