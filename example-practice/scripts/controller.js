
class Controller {
    constructor(view, services) {
        this.view = view
        this.services = services
    }
     
    init = () => {
        this.handleRenderTable()
    }

    handleRenderTable = async () => {
        try {
          const data = await this.services.getData();
          this.view.renderData(data);
        } catch (error) {
          console.error('Error fetching data:', error); // TODO: update later
        }
      };
}

export default Controller