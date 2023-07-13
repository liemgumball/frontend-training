class View {
    constructor() {
        this.table = document.querySelector('tbody');
    }

    renderData(datalist) {
        console.log(datalist)
        const html = datalist.map((data) => 
            `
            <tr class="table-body">
                <td class="table-data">${data.name}</td>
            </tr>
            `
        )
        this.table.innerHTML = html.join("")
    }

}
export default View