// Your code goes here


document.querySelector(".nav-link").addEventListener("click", function(event){
    event.preventDefault()
  });



// ON CONTAINER RESIZE list page height
const heightOutput = document.querySelector('.container');
window.addEventListener('resize', reportWindowSize);

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    heightOutput.stopPropagation(onclick)};
console.log(window.onresize = reportWindowSize);




// IMG CLICK HIDE
const picGrow = document.querySelectorAll('img')[1];
console.log(picGrow);
picGrow.addEventListener('click', function (e) {
  console.log('Clicky!')
    e.target.setAttribute('style', 'display:none')
    //picGrow.classList.toggle('large');
});


// IMG DBLCLICK GROW
const picGrow2 = document.querySelectorAll('img')[0];
console.log(picGrow2);
picGrow2.addEventListener('mouseenter', function (e) {
  console.log('Clicky!')
    e.target.setAttribute('style', 'border-radius:30px')
    //picGrow.classList.toggle('large');
});

picGrow2.addEventListener('mouseleave', function (e) {
    console.log('Clicky u!')
      e.target.setAttribute('style', 'border-radius:0px')
      //picGrow.classList.toggle('large');
  });




// Footer on mouseover
let test = document.getElementsByTagName("footer");
console.log(test);
test[0].addEventListener("mouseover", function( event ) {   
   event.target.style.color = "purple";
   setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


// // ON LOAD to destination class

const log = document.querySelectorAll('h2');
console.log(log);
window.addEventListener('load', (event) => {
    log[2].style.color = "red";  
});
console.log(log[2]);

