// const tri = document.querySelector('.hero__thumb-triatlon');
// const run = document.querySelector('.hero__thumb-run');

// let touchstartX = 0;
// let touchendX = 0;
// let touchstartY = 0;
// let touchendY = 0;

// function checkDirection() {
//   let difX = touchstartX - touchendX;
//   let difY = touchstartY - touchendY;
//   if (Math.abs(difX) > Math.abs(difY)) {
//     if (touchendX < touchstartX) {
//       /*left*/
//       return;
//     }
//     if (touchendX > touchstartX) {
//       /*right*/
//       return;
//     }
//   } else {
//     if (touchendY < touchstartY) {
//       /*up*/
//       //   console.log(run);
//       document.location.href = '../run.html';
//     }
//     if (touchendY > touchstartY) {
//       /*down*/
//       //   console.log(tri);
//       document.location.href = '../triatlon.html';
//     }
//   }
// }

// document.addEventListener('touchstart', e => {
//   //   e.preventDefault();
//   touchstartX = e.changedTouches[0].screenX;
//   touchstartY = e.changedTouches[0].screenY;
// });

// document.addEventListener('touchend', e => {
//   //   e.preventDefault();
//   //   console.log('e :>> ', e.target);

//   touchendX = e.changedTouches[0].screenX;
//   touchendY = e.changedTouches[0].screenY;
//   console.log('e.changedTouches[0] :>> ', e.changedTouches[0]);
//   //   console.log('touchendX :>> ', touchendX);
//   //   console.log('touchendY :>> ', touchendY);

//   //   if (screenY > 680) {
//   //     checkDirection();
//   //   }
//   //   if (e.target === tri || e.target === run) {
//   //     checkDirection();
//   //   }
//   return;
// });
