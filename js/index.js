let toggler = document.querySelector(".toglerbtn");
let menu = document.querySelector(".nav__menu");
const buttonRight = document.getElementById('slideRight--testimonial');
const buttonLeft = document.getElementById('slideLeft--testimonial');
const buttonRightTeachers = document.getElementById('slideRight--teachers');
const buttonLeftTeachers = document.getElementById('slideLeft--teachers');
const textExpander1 = document.getElementById('text__expander1');
const textExpander2 = document.getElementById('text__expander2');
const textExpander3 = document.getElementById('text__expander3');
const expandableText1 = document.querySelector('.faqp1');
const expandableText2 = document.querySelector('.faqp2');
const expandableText3 = document.querySelector('.faqp3');


toggler.addEventListener("click", function(){
    if(menu.classList.contains("nav__menu")){
        menu.classList.replace("nav__menu", "nav__menu--mobile");
    }
    else{
        menu.classList.replace("nav__menu--mobile", "nav__menu");
    }
});


buttonRight.onclick = function () {
    document.getElementById('scrollable--testimonial').scrollLeft += 300;
  };
  buttonLeft.onclick = function () {
    document.getElementById('scrollable--testimonial').scrollLeft -= 300;
  };
  

  buttonRightTeachers.onclick = function () {
    document.getElementById('scrollable--teachers').scrollLeft += 300;
  };
  buttonLeftTeachers.onclick = function () {
    document.getElementById('scrollable--teachers').scrollLeft -= 300;
  };

  textExpander1.addEventListener("click", function(){
    if(expandableText1.classList.contains("faqp1"))
    {
        expandableText1.classList.replace("faqp1", "faqpV");
    }
    else
    {
        expandableText1.classList.replace("faqpV", "faqp1"); 
    }
  });


  textExpander2.addEventListener("click", function(){
    if(expandableText2.classList.contains("faqp2"))
    {
        expandableText2.classList.replace("faqp2", "faqpV");
    }
    else
    {
        expandableText2.classList.replace("faqpV", "faqp2"); 
    }
  });


  textExpander3.addEventListener("click", function(){
    if(expandableText3.classList.contains("faqp3"))
    {
        expandableText3.classList.replace("faqp3", "faqpV");
    }
    else
    {
        expandableText3.classList.replace("faqpV", "faqp3"); 
    }
  });

  
