export interface View {
  render(): Promise<HTMLElement | HTMLElement[]>;
}

export type Route = {
  path: string;
  view: View;
};
