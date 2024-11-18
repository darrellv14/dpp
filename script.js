// let text = document.getElementById('text');
// let leaf = document.getElementById('leaf');
// let hill1 = document.getElementById('hill1');
// let hill2 = document.getElementById('hill2');
// let hill3 = document.getElementById('hill3');
// let hill4 = document.getElementById('hill4');
// let hill5 = document.getElementById('hill5');
// let tree = document.getElementById('tree');
// let phone1 = document.getElementById('phone1');
// let phone2 = document.getElementById('phone2');
// let phone3 = document.getElementById('phone3');
// let phone4 = document.getElementById('phone4');
// let phone5 = document.getElementById('phone5');
// let deskripsi = document.getElementById('deskripsi');
// let logo = document.getElementById('logo-img');
// let content = document.getElementById('content');

// let pengenalanSection = document.querySelector('.pengenalan');


// window.addEventListener('scroll', () => {
//   let value = window.scrollY;

//   text.style.marginTop = value * 2.5 + 'px';
//   leaf.style.top = value * -1.5 + 'px';
//   leaf.style.left = value * 1.5 + 'px';
//   hill5.style.left = value * 1 + 'px';
//   hill4.style.left = value * -0.2 + 'px';
//   hill1.style.top = value * -0.15 + 'px';
//   hill2.style.left = value * -0.5 + 'px';
//   hill3.style.left = value * 0.15 + 'px';
//   tree.style.top = value * 0.25 + 'px';
//   tree.style.left = value * 0.25 + 'px';
//   phone1.style.right = Math.min(value * 1, 400) + 'px';
//   phone2.style.right = Math.min(value * 1.2, 300) + 'px';
//   phone3.style.right = Math.min(value * 1.5, 515) + 'px';
//   phone4.style.right = Math.min(value * 1.7, 230) + 'px';
//   phone5.style.right = Math.min(value * 2, 600) + 'px';
//   deskripsi.style.left = Math.min(value * 2, 450) + 'px';

//   let pengenalanOffsetTop = pengenalanSection.offsetTop;
//   let pengenalanHeight = pengenalanSection.offsetHeight;

//   if (value > pengenalanOffsetTop + pengenalanHeight * 0.2) {
//     logo.style.left = Math.min(value * 1, 350) + 'px';
//     logo.style.top = Math.min(value * 1.5, 5) + '%';
//     content.style.right = Math.min(value * 1, 200) + 'px';
//     content.style.top = Math.min(value * 1.5, 8) + '%';
//   } else {
//     logo.style.left = '0px';
//     logo.style.top = '0%';
//     content.style.right = '-200px';
//     content.style.top = '0%';
//   }
  
// });



let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');
let phone1 = document.getElementById('phone1');
let phone2 = document.getElementById('phone2');
let phone3 = document.getElementById('phone3');
let phone4 = document.getElementById('phone4');
let phone5 = document.getElementById('phone5');
let deskripsi = document.getElementById('deskripsi');
let logo = document.getElementById('logo-img');
let content = document.getElementById('content');

let pengenalanSection = document.querySelector('.pengenalan');
let fiturSection = document.querySelector('.feature-section'); // Selector untuk section fitur
let featureContainers = document.querySelectorAll('.feature-container'); // Semua container fitur

// Cek posisi scroll untuk memulai animasi fitur
let pengenalanOffsetTop = pengenalanSection.offsetTop; // Posisi awal section pengenalan
let pengenalanHeight = pengenalanSection.offsetHeight; // Tinggi section pengenalan

let fiturOffsetTop = fiturSection.offsetTop; // Posisi awal section fitur
let fiturHeight = fiturSection.offsetHeight; // Tinggi section fitur

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  // Animasi di bagian pengenalan
  text.style.marginTop = value * 2.5 + 'px';
  leaf.style.top = value * -1.5 + 'px';
  leaf.style.left = value * 1.5 + 'px';
  hill5.style.left = value * 1 + 'px';
  hill4.style.left = value * -0.2 + 'px';
  hill1.style.top = value * -0.15 + 'px';
  hill2.style.left = value * -0.5 + 'px';
  hill3.style.left = value * 0.15 + 'px';
  tree.style.top = value * 0.25 + 'px';
  tree.style.left = value * 0.25 + 'px';
  phone1.style.right = Math.min(value * 1, 300) + 'px';
  phone2.style.right = Math.min(value * 1.2, 200) + 'px';
  phone3.style.right = Math.min(value * 1.5, 415) + 'px';
  phone4.style.right = Math.min(value * 1.7, 130) + 'px';
  phone5.style.right = Math.min(value * 2, 500) + 'px';
  deskripsi.style.left = Math.min(value * 2, 15) + '%';

  // Animasi logo dan content di bagian pengenalan
  if (value > pengenalanOffsetTop + pengenalanHeight * 0.2) {
    logo.style.left = Math.min(value * 1, 150) + 'px';
    logo.style.top = Math.min(value * 1.5, 5) + '%';
    content.style.right = Math.min(value * 1, 70) + 'px';
    content.style.top = Math.min(value * 1.5, 12) + '%';
  } else {
    logo.style.left = '0px';
    logo.style.top = '0%';
    content.style.right = '-200px';
    content.style.top = '0%';
  }

  // Animasi di bagian fitur, hanya dimulai jika pengenalan sudah selesai
  if (value > pengenalanOffsetTop + pengenalanHeight * 0.2) {
    featureContainers.forEach(container => {
      if (value > container.offsetTop - window.innerHeight * 0.7) {
        container.style.transform = "translateY(0)";
        container.style.opacity = "1";
      } else {
        container.style.transform = "translateY(100px)";
        container.style.opacity = "0";
      }
    });
  } else {
    featureContainers.forEach(container => {
      container.style.transform = "translateY(100px)";
      container.style.opacity = "0";
    });
  }
});
