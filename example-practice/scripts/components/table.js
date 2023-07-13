import TableRow from "./table-row"
class Table {
    constructor(data=[]) {
        this.rows = []
        data.forEach(element => {
            this.rows.push(new TableRow(element));
        });
    }

    render() {
        const html = document.createElement('tbody')
        this.rows.forEach(element => {
            html.appendChild(element.render())
        })
        return html
    }
}

export default Table