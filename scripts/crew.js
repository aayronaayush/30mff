// get DOM element for each crew member
const aayush = document.getElementById("aayush")
const alia = document.getElementById("alia")
const ali = document.getElementById("ali")

// add add event listener to handle the case for when mouse is over the photo
aayush.addEventListener("mouseenter", () => handleMouseEnter(aayush))
alia.addEventListener("mouseenter", () => handleMouseEnter(alia))
ali.addEventListener("mouseenter", () => handleMouseEnter(ali))

// add add event listener to handle the case for when mouse has left the photo
aayush.addEventListener("mouseleave", () => handleMouseLeave(aayush))
alia.addEventListener("mouseleave", () => handleMouseLeave(alia))
ali.addEventListener("mouseleave", () => handleMouseLeave(ali))

// show the crew information and make photo sligthly bigger
const handleMouseEnter = (elem) => {
    const crewInfo = elem.getElementsByClassName("crewInfo")[0]
    const imageContainer = elem.getElementsByClassName("crewImage")[0]
    imageContainer.style.width = "110%"
    crewInfo.style.display = "block"
}

// hide crew information and make photo normal size
const handleMouseLeave = (elem) => {
    const crewInfo = elem.getElementsByClassName("crewInfo")[0]
    const imageContainer = elem.getElementsByClassName("crewImage")[0]
    imageContainer.style.width = "100%"
    crewInfo.style.display = "none"
}