/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


const sectionsList = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navBar
function buildTheNav() {
  const navBarMenu = document.querySelector('#navbar__list');
  sectionsList.forEach(function(section){
    const sectionName = section.id;
    const newListNode = document.createElement("li");
    const aref = document.createElement("a");
    aref.appendChild(document.createTextNode(sectionName));
    aref.setAttribute("class", "menu__link");
    aref.setAttribute("href", '#' + sectionName);
    newListNode.appendChild(aref);
    newListNode.setAttribute("class", sectionName + 'node');
    navBarMenu.appendChild(newListNode);
  });
}

// Set sections as active
function updateState() {
  sectionsList.forEach(function (section) {
    const currentListItem = section.id + "node";
    const listMenu = document.getElementsByClassName(currentListItem)[0];
    const CheckedSectionData = section.getBoundingClientRect();
    if (CheckedSectionData.top <= 150 && CheckedSectionData.bottom >= 150) {
      section.setAttribute("class", "your-active-class");
      //Add active status to the nav bar item 
      listMenu.classList.add("active__link");
    }
    else {
      CheckedSectionData.top == 0 && CheckedSectionData.bottom == 0;
      // Remove class 'active' from section when you are no longer browsing it
      section.removeAttribute("class", "your-active-class");
      listMenu.classList.remove("active__link");
    }
  });
}

//To Be Made Later : Change The NavBar css style
function hideNav()
{
//console.log("you are not using me");

}

//In version 2: Call The Nave Function 
buildTheNav(sectionsList);

//Call the Updating Function When Scrolling Happens
document.addEventListener('scroll', updateState);



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
// Scroll to section on link click



