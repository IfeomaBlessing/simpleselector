let arrowDown = document.getElementById('arrow-down');
let menuText = document.getElementById('menu-text');
let menuField = document.getElementById('menu-field');
let menuList = document.getElementById('menu-list');
let options= document.querySelectorAll('.options');



menuField.addEventListener('click', function(){
   menuList.style.display = 'block';
   arrowDown.classList.toggle("rotate");
})





   options.forEach(function(option){
      option.addEventListener("click", function(){
         menuText.innerHTML = this.textContent; 
         menuList.style.display = 'none';
         arrowDown.classList.toggle("rotate");
      })
   })



