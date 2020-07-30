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
 * 
 * 
 */

var numberOfSections = document.getElementsByTagName('section').length;

//Define Global Variables
const Sections = [];

for (let index = 0; index < numberOfSections; index++) {
    let currentSection = document.getElementsByTagName('section')[index];
    let currentSectionId = currentSection.getAttribute("id")

    let currentSectionData = currentSection.getAttribute("data-nav")

    Sections.push({ id: currentSectionId, dataNav: currentSectionData });


}
// 








//create list items
for (let index = 0; index < Sections.length; index++) {
    let listItem = document.createElement('li');

    listItem.textContent = Sections[index].dataNav;
    document.querySelector('ul').appendChild(listItem);
    //add event listner
    listItem.addEventListener("click", () => {
        // removeActiveNav();

        listItem.classList.add("active");
        let myId = Sections[index].id;
        let targetScroll = document.getElementById(myId);
        //scroll to current section
        targetScroll.scrollIntoView();
        removeActiveSection();
        removeActiveNav();
        document.getElementById(myId).classList.add("your-active-class");
    });
    // if (document.querySelectorAll('li')[index].textContent === Sections[index].dataNav) {
    //     document.querySelectorAll('li')[index].classList.add("active");
    // }

}
//console.log(document.querySelector('ul')[index].textContent);
// helper Functions

const removeActiveSection = () => {
    for (let index = 0; index < Sections.length; index++) {
        let section = document.getElementById(Sections[index].id);
        let contain = section.classList.contains("your-active-class");
        if (contain) {
            section.classList.remove("your-active-class");
        }

    }
}


const removeActiveNav = () => {

    for (let index = 0; index < document.getElementsByTagName('li').length; index++) {
        let contain = document.querySelectorAll('li')[index].classList.contains("active");
        if (contain) {
            document.querySelectorAll('li')[index].classList.remove("active");
        }

    }
}

//end help function 

//start our scrolling buuton
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
    scrollingViewPortOverSections();

};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    removeActiveNav();
    removeActiveSection();
}


// viewport: 
function scrollingViewPort(sectionId) {
    let section = document.getElementById(sectionId);
    let sectionBound = section.getBoundingClientRect();
    y = sectionBound.top;
    console.log(sectionId, y);
    // y <= 112 && y >= -88
    if (y <= 112 && y >= -88) {
        removeActiveSection();
        removeActiveNav();
        document.getElementById(sectionId).classList.add("your-active-class");
        for (let index = 0; index < Sections.length; index++) {
            if (Sections[index].id === sectionId) {
                let currentListItem = document.querySelectorAll('li')[index];
                console.log("List Item", currentListItem);
                currentListItem.classList.add("active");
            }

        }
        //alert ("Top: " + y);
    } else {
        document.getElementById(sectionId).classList.remove("your-active-class");
        // removeActiveNav();
    }
}

function scrollingViewPortOverSections() {
    for (let index = 0; index < Sections.length; index++) {
        let sectionId = Sections[index].id;
        scrollingViewPort(sectionId);

    }
}

// collapse:

let collapseSection = document.getElementsByClassName("collapse");

for (let i = 0; i < collapseSection.length; i++) {
    collapseSection[i].addEventListener("click", function() {
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}