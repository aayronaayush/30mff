const aayush = document.getElementById("aayush")
const alia = document.getElementById("alia")
const ali = document.getElementById("ali")

aayush.addEventListener("mouseenter", () => handleMouseEnter(aayush))
alia.addEventListener("mouseenter", () => handleMouseEnter(alia))
ali.addEventListener("mouseenter", () => handleMouseEnter(ali))

aayush.addEventListener("mouseleave", () => handleMouseLeave(aayush))
alia.addEventListener("mouseleave", () => handleMouseLeave(alia))
ali.addEventListener("mouseleave", () => handleMouseLeave(ali))

const handleMouseEnter = (elem) => {
    const crewInfo = elem.getElementsByClassName("crewInfo")[0]
    const imageContainer = elem.getElementsByClassName("crewImage")[0]
    imageContainer.style.width = "110%"
    crewInfo.style.display = "block"
}

const handleMouseLeave = (elem) => {
    const crewInfo = elem.getElementsByClassName("crewInfo")[0]
    const imageContainer = elem.getElementsByClassName("crewImage")[0]
    imageContainer.style.width = "100%"
    crewInfo.style.display = "none"
}