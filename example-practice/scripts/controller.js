
import Table from "./components/table"
class Controller {
    constructor(view, services) {
        this.view = view
        this.services = services
    }
     
    init = () => {
        this.handleRenderTable()
    }

    handleRenderTable = async () => {
        // try {
          const data = await this.services.getData();
          this.view.render(data);
          const test = new Table(data)
          await this.services.testData()
        // } catch (error) {
        //   console.error('Error fetching data:', error); // TODO: update later
        // }
      };
}

export default Controller