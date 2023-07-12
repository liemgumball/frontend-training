 getAttributes = () => {
    const link = document.querySelector("#w3r")
    const info = document.createElement('p')
    info.innerHTML =  "<br/>id: " + link.getAttribute("id")
    + "<br/>type: " + link.getAttribute("type")
    + "<br/>hreflang: " + link.getAttribute("hreflang")
    + "<br/>target: " + link.getAttribute("target")
    + "<br/>href: " + link.getAttribute("href")

    document.querySelector(".main").appendChild(info)
}
