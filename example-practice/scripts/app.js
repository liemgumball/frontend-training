import View from "./view";
import Service from "./services";
import Controller from "./controller";

export class App {
    constructor() {}

    startApp() {
        // Init the customer controller
        const controller = new Controller(new View(), new Service());
        controller.init();
    }
}

