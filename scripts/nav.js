// get the content block elements
const videoBlock = document.getElementById("videoBlock")
const plotBlock = document.getElementById("plot")
const crewBlock = document.getElementById("crew")
const aboutBlock = document.getElementById("about")

// get the nav bar button elements
const videoNavButton = document.getElementById("videoNavButton")
const plotNavButton = document.getElementById("plotNavButton")
const crewNavButton = document.getElementById("crewNavButton")
const aboutNavButton = document.getElementById("aboutNavButton")

// initial display settings
videoBlock.style.display = "block"
plotBlock.style.display = "none"
crewBlock.style.display = "none"
aboutBlock.style.display = "none"

// object of elements to aid operation on elems
// keeps code DRY
const pageElements = {
    video: {
        block: videoBlock,
        nav: videoNavButton
    },
    plot: {
        block: plotBlock,
        nav: plotNavButton
    },
    crew: {
        block: crewBlock,
        nav: crewNavButton
    },
    about: {
        block: aboutBlock,
        nav: aboutNavButton
    },
}


// get an array of the different content block
// iterate through the array and add a click event listener
Object.keys(pageElements).forEach(pageElement => {
    pageElements[pageElement].nav.addEventListener("click", () => contentBlockDisplay(pageElement) );
})

// change display style of display block
const contentBlockDisplay = (target) => {
    console.clear()
    Object.keys(pageElements).forEach(element => {
        if (element === target) { // the display style of "select" block to block ie make it visible
            pageElements[element].block.style.display = "block"
        } else { // make the other block invisible or hidden
            pageElements[element].block.style.display = "none"
        }
    })
}