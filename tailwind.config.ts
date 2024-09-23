import type { Config } from "tailwindcss";
import tailwindcolors from "tailwindcss/colors";
let colors: any = tailwindcolors;
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ...colors,
        info: "#085FD4",
        error: "#BB0100",
        accent: "#d3d3d3",
        success: "#0F7E3E",
        warning: "#fca503",
        primary: "#024285",
        secondary: "#ebebeb",
      },
    },
    screens: {
      xs: "380px",
      sm: "600px",
      md: "968px",
      lg: "1180px",
      xl: "1920px",
    },
  },
  extend: {},
  plugins: [],
  content: [],
};
