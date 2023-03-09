// NOTE: better with class of course
import { localAnchor } from "./link";

const about = {
  async render() {
    const h2 = document.createElement("h2");
    h2.innerText = "About Page";

    // NOTE: for SPA you will always need custom links
    const a = localAnchor("/");
    a.innerText = "Goto Home";

    return [h2, a];
  },
};

export default about;
