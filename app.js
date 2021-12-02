var modalButton1 = document.querySelector('.serviceItem1')
var modalButton2 = document.querySelector('.serviceItem2')
var modalButton3 = document.querySelector('.serviceItem3')
var modalBg1 = document.querySelector('.modalOverlayDev')
var modalBg2 = document.querySelector('.modalOverlayUi')
var modalBg3 = document.querySelector('.modalOverlayBrand')
var backButton1 = document.querySelector('.close1')
var backButton2 = document.querySelector('.close2')
var backButton3 = document.querySelector('.close3')

//OPEN AND CLOSE MODAL DEVELOPER//
modalButton1.addEventListener('click', function () {
  modalBg1.classList.add('modalShow')
})

backButton1.addEventListener('click', function () {
  modalBg1.classList.remove('modalShow')
})

//OPEN AND CLOSE MODAL UI/UX//
modalButton2.addEventListener('click', function () {
  modalBg2.classList.add('modalShow')
})

backButton2.addEventListener('click', function () {
  modalBg2.classList.remove('modalShow')
})

//OPEN AND CLOSE MODAL BRAND//
modalButton3.addEventListener('click', function () {
  modalBg3.classList.add('modalShow')
})

backButton3.addEventListener('click', function () {
  modalBg3.classList.remove('modalShow')
})
