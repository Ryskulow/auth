import { Route } from "./types";
import login from "./view-login";
import register from "./view-register";

export const routes: Route[] = [
  {
    path: "/login",
    view: login,
  },
  {
    path: "/register",
    view: register,
  },
];

export async function router(
  app: HTMLElement,
  location: Location,
  routes: Route[]
) {
  if (location.pathname === "/") {
    location.pathname = "/login";
    return;
  }

  const match = routes.find((route) => route.path === location.pathname);

  // NOTE: THINK!!!
  if (!match) {
    return;
  }

  const el = await match.view.render();
  if (Array.isArray(el)) {
    app.replaceChildren(...el);
    return;
  }

  app.replaceChildren(el);
  return;
}
