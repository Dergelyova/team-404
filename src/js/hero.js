const tri = document.querySelector('.hero__thumb-triatlon');
const run = document.querySelector('.hero__thumb-run');

tri.addEventListener(
  'touchstart',
  () => {
    tri.addEventListener('touchend', endFncTri);
  },
  true
);

const endFncTri = e => {
  let y = e.changedTouches[0].screenY;
  console.log('y :>> ', y);
  if (y > 550) {
    document.location.href = '../triatlon.html';
  }
  return;
};

run.addEventListener(
  'touchstart',
  () => {
    run.addEventListener('touchend', endFncRun);
  },
  true
);

const endFncRun = e => {
  let y = e.changedTouches[0].screenY;
  //   console.log('window.requestAnimFrame :>> ', window.requestAnimationFrame);
  //   console.log('y :>> ', y);
  if (y < 300) {
    document.location.href = '../run.html';
  }
  return;
};

// const onAnimFrame = () => {
//   //   if (!rafPending) {
//   //     return;
//   //   }

//   let differenceInX = initialTouchPos.x - lastTouchPos.x;
//   let newXTransform = currentXPosition - differenceInX + 'px';
//   let transformStyle = 'translateX(' + newXTransform + ')';

//   swipeFrontElement.style.webkitTransform = transformStyle;
//   swipeFrontElement.style.MozTransform = transformStyle;
//   swipeFrontElement.style.msTransform = transformStyle;
//   swipeFrontElement.style.transform = transformStyle;

//   //   rafPending = false;
// };
