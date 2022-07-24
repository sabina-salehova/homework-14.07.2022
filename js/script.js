let menu_icon = document.querySelector('#menu-icon');
let sidebar_div=document.querySelector('#sidebar');
menu_icon.addEventListener('click', function(){    
    sidebar_div.classList.toggle('active');
    console.log('salam');
})

function myFunction(x) {
    x.classList.toggle("change");
  }


  let search_id=document.getElementById("search_id");
  let search_div=document.querySelector(".search");

  search_id.addEventListener('click',function(){
    search_div.classList.toggle('search_active');
  });


  let search_icon=document.getElementById("search_icon_id");

  search_icon.addEventListener('click',function(){
    search_div.classList.remove('search_active');
  });


  let az=document.getElementById('az_id');
  let az_icon_id=document.querySelector('#az_id .rigth i');
  let box_add=document.getElementById('box-add');;
  az.addEventListener('click',function(){    
    az_icon_id.classList.toggle('rotate');
    az_icon_id.classList.add('rotate-icon');
    box_add.classList.toggle('lang_active');
  });