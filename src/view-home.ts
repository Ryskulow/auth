// NOTE: better with class of course
import { localAnchor } from "./link";

const home = {
  async render() {
    const h2 = document.createElement("h2");
    h2.innerText = "Home Page";

    // NOTE: for SPA you will always need custom links
    const a = localAnchor("/about");
    a.innerText = "Goto About";

    return [h2, a];
  },
};

export default home;
