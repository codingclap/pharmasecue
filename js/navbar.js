

/********** Primary Dropdown With Hamberger **********/
let toggleMenu = document.querySelector('.menu-toggle');
toggleMenu.addEventListener('click', (e) => {
  if (e.currentTarget.dataset.hamberger === "closed") {
    e.currentTarget.dataset.hamberger = 'open';
    document.querySelector('.page-header .burger span:nth-child(1)').style = "top:8px;transform:rotate(135deg);";
    document.querySelector('.page-header .burger span:nth-child(2)').style = "left:-10px;opacity:0";
    document.querySelector('.page-header .burger span:nth-child(3)').style = "top:8px;transform:rotate(-135deg);";

    document.querySelector('.headermenu-main').style = "height:100vh;padding-bottom: 6em;";
  } else {
    e.currentTarget.dataset.hamberger = 'closed';
    document.querySelector('.page-header .burger span:nth-child(1)').style = "top:0px;transform:rotate(0deg);";
    document.querySelector('.page-header .burger span:nth-child(2)').style = "left:0;opacity:1";
    document.querySelector('.page-header .burger span:nth-child(3)').style = "top:16px;transform:rotate(0deg);";

    document.querySelector('.headermenu-main').style = "";
  }
  // console.log(e.currentTarget.dataset.hamberger === "closed");
});
/********** Primary Dropdown With Hamberger **********/


let dropdownbox = document.querySelector('#headermenu');
new ResizeObserver((objects) => {

  for (object of objects) {
    if (object.contentRect.width < 1199) {


let dropmenu = document.querySelector('#subdrop');
dropmenu.addEventListener('click', () => {
  let dropbox = document.querySelector('.nested-submenu');

  if (dropbox.classList.contains("drop-active")) {
    dropbox.classList.remove("drop-active");
    dropbox.style="display:none";
  } else {
    dropbox.classList.add("drop-active");
    dropbox.style="display:block";
  }
});


// alert(object.contentRect.width);
/****************** Mobile Click Dropdown active ************/

let primaryMenu = document.querySelectorAll('.primary-menu');
let primaryTrigger;
let submenu;
primaryMenu.forEach((element, index) => {

  primaryTrigger = element.querySelector('.primary-links');
  submenu = element.querySelector('.submenu-container');
  //console.log(element);
  primaryTrigger.addEventListener('click', () => {

    if (element.classList.contains("primary-nav-active")) {
      element.classList.remove("primary-nav-active");
      // element.querySelector('a.primary-links').classList.remove("primary-link-color");
      element.querySelector('.submenu-container').classList.remove("primary-dropdown-display");

    } else {
      element.classList.add("primary-nav-active");
      // element.querySelector('a.primary-links').classList.add("primary-link-color");
      element.querySelector('.submenu-container').classList.add("primary-dropdown-display");
    }

  });

});
      /****************** Mobile Click Dropdown active ************/

   }
  }

}).observe(dropdownbox);
/****************** Sub Dropdown  ************/
