const navBtn = document.getElementById('navbtn');
const sidebar = document.getElementById('sidebar');

navBtn.addEventListener('click', () =>{
   if(navBtn.name == "apps"){
      sidebar.style.animation = "linkToggle 0.4s ease-in-out forwards";
      navBtn.name = "close";
   } else{
      navBtn.name = "apps";
      sidebar.style.animation = "navToggle 0.4s ease-in-out forwards";
   }
})