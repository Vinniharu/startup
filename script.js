const navBtn = document.getElementById('navbtn');
const sidebar = document.getElementById('sidebar');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');

navBtn.addEventListener('click', () =>{
   if(navBtn.name == "apps"){
      sidebar.style.animation = "linkToggle 0.4s ease-in-out forwards";
      navBtn.name = "close";
   } else{
      navBtn.name = "apps";
      sidebar.style.animation = "navToggle 0.4s ease-in-out forwards";
   }
})

const num1Counter = () =>{
   let num1Holder = 0;
   let num1Interval = setInterval(() =>{
      if (num1Holder !== 32) {
        num1Holder++;
        num1.innerHTML = `${num1Holder}`;
      } else{
         clearInterval(num1Interval);
      }
   }, 100)
}

const num2Counter = () => {
  let num2Holder = 0;
  let num2Interval = setInterval(() => {
    if (num2Holder !== 100) {
      num2Holder++;
      num2.innerHTML = `${num2Holder}+`;
    } else {
      clearInterval(num2Interval);
    }
  }, 100);
};

const num3Counter = () => {
  let num3Holder = 0;
  let num3Interval = setInterval(() => {
    if (num3Holder !== 5) {
      num3Holder++;
      num3.innerHTML = `${num3Holder}k`;
    } else {
      clearInterval(num3Interval);
    }
  }, 100);
};

const num4Counter = () => {
  let num4Holder = 0;
  let num4Interval = setInterval(() => {
    if (num4Holder !== 65) {
      num4Holder++;
      num4.innerHTML = `${num4Holder}`;
    } else {
      clearInterval(num4Interval);
    }
  }, 100);
};

num1Counter();
num2Counter();
num3Counter();
num4Counter();
