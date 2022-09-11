// silly sounds
function addEvent(){
  document.body.addEventListener("click", play)
}
function play() {
 var audio = document.getElementById("audio");
 audio.play();
}
play();
//end silly sounds



//start sidebar 

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


//end sidebar

//start sidebar button flexible size

const openButton = document.getElementById('openbtn')


function growHamburgerMenu() {
  if (document.URL.includes('writings')) {
    if (window.innerWidth > 896) {
      openButton.setAttribute('style', 'font-size: 70px');
      openButton.style.color = "rgb(170 169 169 / 75%)";
      openButton.addEventListener('mouseenter', (event) => {
        event.target.style.color = "black"
      });
      openButton.addEventListener('mouseleave', (event) => {
        event.target.style.color = "rgb(170 169 169 / 75%)"
      });
    } else {
      openButton.setAttribute('style', 'font-size: 30px');
      openButton.addEventListener('mouseenter', (event) => {
        event.target.style.color = "black"
      });
      openButton.addEventListener('mouseleave', (event) => {
        event.target.style.color = "#68a0fa"
      });
    }
  }
}

growHamburgerMenu();


window.addEventListener('resize', growHamburgerMenu);


//end sidebar button flexible size


//start sidebar link handling

const linkItem1 = document.getElementById("toc-item-1");
        
let myVariable = "<h1>it is GOOD to be the kinnng<h1>";

function proseLink1() {
  document.getElementById("prose").innerHTML = myVariable;
}
linkItem1.addEventListener('click', proseLink1)

//----------

const linkItem2 = document.getElementById("toc-item-2");

function proseLink2() {
  document.getElementById("prose").innerHTML = "<h3>fdkljfd</h3>fdsfadsfadsfads";
}
linkItem2.addEventListener('click', proseLink2);

//----------

const linkItem3 = document.getElementById("toc-item-3");

function proseLink3() {
  document.getElementById("prose").innerHTML = "fdafd";
}
linkItem3.addEventListener("click", proseLink3);

//---------- 

const linkItem4 = document.getElementById("toc-item-4")

function proseLink4() {
  document.getElementById("prose").innerHTML = "fdsafdasf";
}

linkItem4.addEventListener('click', proseLink4);


//end sidebar link handling



