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
  console.log(e.currentTarget.dataset.hamberger === "closed");
});
/********** Primary Dropdown With Hamberger **********/

 
  


let dropdownbox = document.querySelector('#headermenu');
new ResizeObserver((objects) => {

  for (object of objects) {
    if (object.contentRect.width < 1199) {

      // alert(object.contentRect.width);
      /****************** Mobile Click Dropdown active ************/

      let primaryMenu = document.querySelectorAll('.primary-menu');
      let primaryTrigger;
      let submenu;
      primaryMenu.forEach((element, index) => {

        primaryTrigger = element.querySelector('.primary-links');
        submenu = element.querySelector('.submenu-container');
console.log(element);
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



      /****************** Sub Dropdown  ************/
      let secondaryMenu = document.querySelectorAll('.submenu-1');
      let secondaryTrigger;
      let submenudrop;
      secondaryMenu.forEach((element, index) => {

        secondaryTrigger = element.querySelector('.nested-subhead');

        secondaryTrigger.addEventListener('click', () => {
          //console.log(element);


          if (element.classList.contains("second-drop-active")) {
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px -1px #2b2a2b";
            element.classList.remove("second-drop-active");
            element.querySelector('ul.nested-submenu').classList.add("submenu-hide");
            element.querySelector('span.nested-subhead').classList.remove("secondary-link-color");

          } else {
            element.classList.add("second-drop-active");
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px 0px #000";
            element.querySelector('ul.nested-submenu').classList.remove("submenu-hide");
            element.querySelector('span.nested-subhead').classList.add("secondary-link-color");
          }

        });

      });


      let secondaryMenu2 = document.querySelectorAll('.submenu-2');
      let secondaryTrigger2;
      let submenudrop2;
      secondaryMenu2.forEach((element, index) => {


        secondaryTrigger2 = element.querySelector('.nested-subhead');

        secondaryTrigger2.addEventListener('click', () => {
          //console.log(element);


          if (element.classList.contains("second-drop-active")) {
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px -1px #2b2a2b";
            element.classList.remove("second-drop-active");
            element.querySelector('ul.nested-submenu').classList.add("submenu-hide");
            element.querySelector('span.nested-subhead').classList.remove("secondary-link-color");

          } else {
            element.classList.add("second-drop-active");
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px 0px #000";
            element.querySelector('ul.nested-submenu').classList.remove("submenu-hide");
            element.querySelector('span.nested-subhead').classList.add("secondary-link-color");
          }

        });

      });



      let secondaryMenu3 = document.querySelectorAll('.submenu-3');
      let secondaryTrigger3;
      let submenudrop3;
      secondaryMenu3.forEach((element, index) => {


        secondaryTrigger3 = element.querySelector('.nested-subhead');

        secondaryTrigger3.addEventListener('click', () => {
          //console.log(element);


          if (element.classList.contains("second-drop-active")) {
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px -1px #2b2a2b";
            element.classList.remove("second-drop-active");
            element.querySelector('ul.nested-submenu').classList.add("submenu-hide");
            element.querySelector('span.nested-subhead').classList.remove("secondary-link-color");

          } else {
            element.classList.add("second-drop-active");
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px 0px #000";
            element.querySelector('ul.nested-submenu').classList.remove("submenu-hide");
            element.querySelector('span.nested-subhead').classList.add("secondary-link-color");
          }

        });

      });



      let secondaryMenu4 = document.querySelectorAll('.submenu-4');
      let secondaryTrigger4;
      let submenudrop4;
      secondaryMenu4.forEach((element, index) => {


        secondaryTrigger4 = element.querySelector('.nested-subhead');

        secondaryTrigger4.addEventListener('click', () => {
          //console.log(element);


          if (element.classList.contains("second-drop-active")) {
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px -1px #2b2a2b";
            element.classList.remove("second-drop-active");
            element.querySelector('ul.nested-submenu').classList.add("submenu-hide");
            element.querySelector('span.nested-subhead').classList.remove("secondary-link-color");

          } else {
            element.classList.add("second-drop-active");
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px 0px #000";
            element.querySelector('ul.nested-submenu').classList.remove("submenu-hide");
            element.querySelector('span.nested-subhead').classList.add("secondary-link-color");
          }

        });

      });



      let secondaryMenu5 = document.querySelectorAll('.submenu-5');
      let secondaryTrigger5;
      let submenudrop5;
      secondaryMenu5.forEach((element, index) => {


        secondaryTrigger5 = element.querySelector('.nested-subhead');

        secondaryTrigger5.addEventListener('click', () => {
          //console.log(element);


          if (element.classList.contains("second-drop-active")) {
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px -1px #2b2a2b";
            element.classList.remove("second-drop-active");
            element.querySelector('ul.nested-submenu').classList.add("submenu-hide");
            element.querySelector('span.nested-subhead').classList.remove("secondary-link-color");

          } else {
            element.classList.add("second-drop-active");
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px 0px #000";
            element.querySelector('ul.nested-submenu').classList.remove("submenu-hide");
            element.querySelector('span.nested-subhead').classList.add("secondary-link-color");
          }

        });

      });



      let secondaryMenu6 = document.querySelectorAll('.submenu-6');
      let secondaryTrigger6;
      let submenudrop6;
      secondaryMenu6.forEach((element, index) => {


        secondaryTrigger6 = element.querySelector('.nested-subhead');

        secondaryTrigger6.addEventListener('click', () => {
          //console.log(element);


          if (element.classList.contains("second-drop-active")) {
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px -1px #2b2a2b";
            element.classList.remove("second-drop-active");
            element.querySelector('ul.nested-submenu').classList.add("submenu-hide");
            element.querySelector('span.nested-subhead').classList.remove("secondary-link-color");

          } else {
            element.classList.add("second-drop-active");
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px 0px #000";
            element.querySelector('ul.nested-submenu').classList.remove("submenu-hide");
            element.querySelector('span.nested-subhead').classList.add("secondary-link-color");
          }

        });

      });



      let secondaryMenu7 = document.querySelectorAll('.submenu-7');
      let secondaryTrigger7;
      let submenudrop7;
      secondaryMenu7.forEach((element, index) => {


        secondaryTrigger7 = element.querySelector('.nested-subhead');

        secondaryTrigger7.addEventListener('click', () => {
          //console.log(element);


          if (element.classList.contains("second-drop-active")) {
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px -1px #2b2a2b";
            element.classList.remove("second-drop-active");
            element.querySelector('ul.nested-submenu').classList.add("submenu-hide");
            element.querySelector('span.nested-subhead').classList.remove("secondary-link-color");

          } else {
            element.classList.add("second-drop-active");
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px 0px #000";
            element.querySelector('ul.nested-submenu').classList.remove("submenu-hide");
            element.querySelector('span.nested-subhead').classList.add("secondary-link-color");
          }

        });

      });


      let secondaryMenu8 = document.querySelectorAll('.submenu-8');
      let secondaryTrigger8;
      let submenudrop8;
      secondaryMenu8.forEach((element, index) => {


        secondaryTrigger8 = element.querySelector('.nested-subhead');

        secondaryTrigger8.addEventListener('click', () => {
          //console.log(element);


          if (element.classList.contains("second-drop-active")) {
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px -1px #2b2a2b";
            element.classList.remove("second-drop-active");
            element.querySelector('ul.nested-submenu').classList.add("submenu-hide");
            element.querySelector('span.nested-subhead').classList.remove("secondary-link-color");

          } else {
            element.classList.add("second-drop-active");
            element.querySelector('.nested-subhead').style = "text-shadow:0px 0px 0px #000";
            element.querySelector('ul.nested-submenu').classList.remove("submenu-hide");
            element.querySelector('span.nested-subhead').classList.add("secondary-link-color");
          }

        });

      });

      /****************** Sub Dropdown  ************/
    }
  }

}).observe(dropdownbox);