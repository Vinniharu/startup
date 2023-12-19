const navBtn = document.getElementById('navbtn');
const sidebar = document.getElementById('sidebar');

navBtn.addEventListener('click', () =>{
   if(navBtn.name == "apps-outline"){
      sidebar.style.animation = "m";
      navBtn.name = "close-outline";
   } else{
      navBtn.name = "apps-outline";
      sidebar.style.animation = "navToggle 0.4s ease-in-out forwards";
   }
})