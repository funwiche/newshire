export const $app = {
  iso: "NU",
  name: "Newshire University",
  email: "info@dencologistics.com",
  // email: "admissions@newshire.co.uk",
  host: "newshire.co.uk",
  domain: "www.newshire.co.uk",
  phone: "+44 (0)1620 89 3344",
  baseUrl: "https://newshire.co.uk",
  city: "North Berwick", // East Lothian
  country: "Scotland",
};

export const fixedBody = (val: boolean) => {
  if (val) document.documentElement.style.overflow = "hidden";
  else document.documentElement.style.overflow = "auto";
};
export const $rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
export const $pad = (val: any, pad = 2) => val.toString().padStart(pad, "0");
export const delay = (millisecs = 2000) =>
  new Promise((r) => setTimeout(r, millisecs));
export const validate = {
  email(val: string) {
    return val.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
      ? true
      : false;
  },
  password(val: string) {
    return val.length >= 6 ? true : false;
  },
};
export const toSlug = (val: string) =>
  val.replaceAll(",", "").replaceAll(" ", "-").toLowerCase();
export const scotland = [
  {
    title: "Glasgow",
    msg: " Glasgow is one of Europe’s most vibrant, dynamic and stylish cities. Its music scene, pubs and restaurants could keep you busy every night of the week. ",
    path: "/student-life/living-in-scotland/glasgow",
    src: "/sliders/glasgow.jpg",
  },
  {
    title: "Edinburgh",
    msg: " Although not on the west coast, Scotland's capital city is easily accessible from Glasgow. It's a lively and cultured city with lots to explore. ",
    path: "/student-life/living-in-scotland/edinburgh",
    src: "/sliders/edinburgh.jpg",
  },
  {
    title: "Culture & Heritage",
    msg: " From haggis to the Highland Fling, Scotland is home to some unique cultural traditions which every student should experience during their time here. ",
    path: "/student-life/living-in-scotland/culture-heritage",
    src: "/sliders/culture-and-heritage.jpg",
  },
  {
    title: "Escape the city",
    msg: " For those wishing to escape the city and experience the great outdoors, Scotland has plenty of beautiful countryside to explore and wildlife to discover. ",
    path: "/student-life/living-in-scotland/escape-the-city",
    src: "/sliders/escape-the-city.jpg",
  },
];

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};
export function getValidity(val: any, type = "text") {
  if (val.typeMismatch) {
    if (type == "email") return "Enter a valid email";
    if (type == "url")
      return "Website must start with http://, https:// or www";
    return "The value entered is of an incorrect type";
  } else if (val.valueMissing) return "This field is required";
  else if (val.badInput) return "Bad input";
}
