import { signal } from "./abortSignal";
import pushState from "./pushState";

export function localAnchor(href: string) {
  const a = document.createElement("a");
  a.href = href;
  a.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      pushState({ href }, "", href);
    },
    { signal }
  );

  return a;
}
