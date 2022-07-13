'use strict';

// window.addEventListener('DOMContentLoaded', () => {
//   let cardElem = document.querySelectorAll('.seven_card'),
//     // activeCard = document.querySelectorAll('.seven_card_active'),

//     elemTitle = document.querySelectorAll('.card_title'),
//     elemDescr = document.querySelectorAll('.card_descr'),
//     elemNumber = document.querySelectorAll('.card_number'),
//     elemSymbol = document.querySelectorAll('.card_symbol'),
//     elemCardDescr = document.querySelectorAll('.second_card_desc'),
//     elemButton = document.querySelectorAll('.card_button');

// cardElem.forEach(function(cardElem, i) {
// cardElem.addEventListener('mouseover', function() {
// hideCard();
// this.classList.add('seven_card_active');
// elemTitle[i].classList.add('card_title_active');
// elemDescr[i].classList.add('card_descr_active');
// elemNumber[i].classList.add('card_number_active');
// elemSymbol[i].classList.add('card_symbol_active');
// elemCardDescr[i].classList.add('second_card_desc_active');
// elemButton[i].classList.add('card_button_active');

// });
// });

// function hideCard() {
//     cardElem.forEach((item) => {
//         item.classList.remove('seven_card_active');
//       });
//       elemTitle.forEach((item) => {
//         item.classList.remove('card_title_active');
//       });
//       elemDescr.forEach((item) => {
//         item.classList.remove('card_descr_active');
//       });
//       elemNumber.forEach((item) => {
//         item.classList.remove('card_number_active');
//       });
//       elemSymbol.forEach((item) => {
//         item.classList.remove('card_symbol_active');
//       });
//       elemCardDescr.forEach((item) => {
//         item.classList.remove('second_card_desc_active');
//       });
//       elemButton.forEach((item) => {
//         item.classList.remove('card_button_active');
//       });
// }

window.addEventListener('DOMContentLoaded', () => {
  let cardElem = document.querySelectorAll('.seven_card'),
    // activeCard = document.querySelectorAll('.seven_card_active'),

    elemTitle = document.querySelectorAll('.card_title'),
    elemDescr = document.querySelectorAll('.card_descr'),
    elemNumber = document.querySelectorAll('.card_number'),
    elemSymbol = document.querySelectorAll('.card_symbol'),
    elemCardDescr = document.querySelectorAll('.second_card_desc'),
    elemButton = document.querySelectorAll('.card_button');

cardElem.forEach(function(cardElem, i) {
cardElem.addEventListener('pointerover', function() {
hideCard();
this.classList.add('seven_card_active');
elemTitle[i].classList.add('card_title_active');
elemDescr[i].classList.add('card_descr_active');
elemNumber[i].classList.add('card_number_active');
elemSymbol[i].classList.add('card_symbol_active');
elemCardDescr[i].classList.add('second_card_desc_active');
elemButton[i].classList.add('card_button_active');

});
});

function hideCard() {
    cardElem.forEach((item) => {
        item.classList.remove('seven_card_active');
      });
      elemTitle.forEach((item) => {
        item.classList.remove('card_title_active');
      });
      elemDescr.forEach((item) => {
        item.classList.remove('card_descr_active');
      });
      elemNumber.forEach((item) => {
        item.classList.remove('card_number_active');
      });
      elemSymbol.forEach((item) => {
        item.classList.remove('card_symbol_active');
      });
      elemCardDescr.forEach((item) => {
        item.classList.remove('second_card_desc_active');
      });
      elemButton.forEach((item) => {
        item.classList.remove('card_button_active');
      });
}



  const menu = document.querySelector('.menu_for_adapive'),
        menuItem = document.querySelectorAll('.main_nav_elem_ad'),
        gamburger = document.querySelector('.gamburger');

      gamburger.addEventListener('click', () => {
      gamburger.classList.toggle('gamburger_active');
      menu.classList.toggle('menu_for_adapive_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          gamburger.classList.toggle('gamburger_active');
          menu.classList.toggle('menu_for_adapive_active');
      })
  })
});


// window.addEventListener('DOMContentLoaded', () => {
// 
// 
// let Form = document.querySelector('.main_form');
// let trackButton = document.querySelector('.main_button');
// 


// trackButton.addEventListener('click', () => {
//   console.log('Верно');
// });
  
//   // trackButton.addEventListener('onclick', () => {
//   //   // showError.classList.add('error_active');
//   //   // console.log('Верно');
    
//   // });

// // console.log(input.value);

// // if (inutValue == "" && inutValue != ruleEmail) {
// //   showError.classList.add('error_active');
// // }
// });

let trackButton = document.querySelector('.main_button');
let inputElem = document.querySelector('.main_input');
let inutValue = document.querySelector('.main_input').value;
let ruleEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
let showError = document.querySelector('.error');
// console.log(trackButton);





trackButton.addEventListener('click', function () {
  event.preventDefault();
  if(inutValue == "" && inutValue != ruleEmail) {
    // alert("ноль");
    showError.classList.add('error_active');
  }
  hideActiveClass ();
});
function hideActiveClass () {
  inputElem.addEventListener('mousedown', function () {
    showError.classList.remove('error_active');
  });
}

let violetFormButton = document.querySelector('.forth_button');
let violetFormInput = document.querySelector('.input_email');
let violetFormValue = document.querySelector('.input_email').value;
let ruleEmail2 = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
let showError2 = document.querySelector('.error_2');
// console.log(trackButton);





violetFormButton.addEventListener('click', function () {
  event.preventDefault();
  if(violetFormValue == "" && inutValue != ruleEmail2) {
    // alert("ноль");
    showError2.classList.add('error_2_active');
  }
  hideActiveClass2 ();
});
function hideActiveClass2 () {
  violetFormInput.addEventListener('mousedown', function () {
    showError2.classList.remove('error_2_active');
  });
}

function scroll () {
  let cardButton = document.querySelectorAll('.card_button');
  let scrollFinish = document.querySelector('.eight_title');

  cardButton.forEach(function(card) {
    card.addEventListener('click', function () {
      scrollFinish.scrollIntoView({
        behavior: "smooth",
        block:    "start" 
     });
  });

  });
}
scroll ();





// $("a[href^='#']").click(function(){
//   const _href = $(this).attr("href");
//   $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//   return false;
// });

