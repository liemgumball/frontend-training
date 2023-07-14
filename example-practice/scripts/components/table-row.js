class TableRow {
    constructor(data) {
        this.id = data.id
        this.avatar = data.avatar
        this.name = data.name
        this.country = data.country
        
        
        const editPopup = () => {
            const over_lay = document.querySelector(".over-lay")
            over_lay.classList.remove("hidden");
            const action_box = document.querySelector(".action-box")
            action_box.classList.remove("hidden");

            action_box.firstElementChild.firstElementChild.setAttribute('value', this.name)
            action_box.firstElementChild.getElementsByTagName('input')['lname'].setAttribute('value', this.country)
        
            over_lay.addEventListener('click', () => {
                over_lay.classList.add("hidden");
                action_box.classList.add("hidden");
            })
        }

        this.action_btn = document.createElement('button')
        this.action_btn.innerHTML = "Edit"
        this.action_btn.addEventListener('click', editPopup)
    }

    
    render() {
        const html_row = document.createElement("tr")
        html_row.innerHTML = `
        <td class="table-data">
        <div class="img-container">   
            <img src=${this.avatar} alt="avatar" />
        </div>
        </td>
            <td class="table-data">${this.name}</td>
            <td class="table-data">${this.country}</td>
            <td class="table-data">
        </td>
    `

    html_row.lastElementChild.appendChild(this.action_btn)
    return html_row
    }
}

export default TableRow