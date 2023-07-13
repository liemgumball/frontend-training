import Table from "./components/table";
class View {
    constructor() {
        this.main = document.querySelector('main');
        this.table_html = document.querySelector('table');
    }

    
    render(datalist) {
        this.renderTable(datalist)
    }

    renderTable(datalist) {
        console.log(datalist)
        this.table = new Table(datalist)
        this.table_html.appendChild(this.table.render());
    }
}
export default View