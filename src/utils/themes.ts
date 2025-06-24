export interface Theme {
  header: string;
  primary: string;
  secondary: string;
  footer: string;
}

export interface Themes {
  default: Theme;
  dark: Theme;
  ocean: Theme;
  [key: string]: Theme;
}

export const themes: Themes = {
  default: {
    header: "bg-primary text-white",       // azul
    primary: "bg-light text-dark",         // gris claro
    secondary: "bg-white text-dark",            // blanco
    footer: "bg-dark text-white"           // negro
  },
  dark: {
    header: "bg-dark text-white",          // negro
    primary: "bg-dark text-white",    // gris oscuro
    secondary: "bg-secondary text-light",            // negro
    footer: "bg-black text-light"          // negro más oscuro
  },
  ocean: {
    header: "bg-info text-white",          // celeste
    primary: "bg-light text-primary",      // blanco con azul
    secondary: "bg-white text-info",            // blanco con celeste
    footer: "bg-primary text-white"        // azul fuerte
  }
};
