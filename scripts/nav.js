// content blocks
const videoBlock = document.getElementById("videoBlock")
const plotBlock = document.getElementById("plot")
const crewBlock = document.getElementById("crew")
const gearBlock = document.getElementById("gear")
const aboutBlock = document.getElementById("about")

// nav bar items
const videoNavButton = document.getElementById("videoNavButton")
const plotNavButton = document.getElementById("plotNavButton")
const crewNavButton = document.getElementById("crewNavButton")
const gearNavButton = document.getElementById("gearNavButton")
const aboutNavButton = document.getElementById("aboutNavButton")

videoBlock.style.display = "block"
plotBlock.style.display = "none"
crewBlock.style.display = "none"
gearBlock.style.display = "none"
aboutBlock.style.display = "none"

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
    gear: {
        block: gearBlock,
        nav: gearNavButton
    },
    about: {
        block: aboutBlock,
        nav: aboutNavButton
    },
}

Object.keys(pageElements).forEach(pageElement => {
    pageElements[pageElement].nav.addEventListener("click", () => contentBlockDisplay(pageElement) );
})

const contentBlockDisplay = (target) => {
    console.clear()
    Object.keys(pageElements).forEach(element => {
        if (element === target) {
            pageElements[element].block.style.display = "block"
        } else {
            pageElements[element].block.style.display = "none"
        }
    })
}