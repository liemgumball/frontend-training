const js_style = () => {
    const button = document.getElementById('jsstyle')
    const text = document.getElementById('text')
    button.addEventListener('click',(event) => {
        text.style.fontFamily = "Times New Roman"
        text.style.color = "#deb887"
        text.style.fontWeight = 900
    })
}

export default js_style()