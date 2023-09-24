import { Link } from "react-router-dom";
import AboutUs from "../component/aboutUs/AboutUs";
import Home from "../component/Home";
import HowWeWork from "../component/howWeWork/HowWeWork";
import Industries from "../component/industries/Industries";
import OurServices from "../component/ourServices/OurServices";
import OurValues from "../component/ourValues/OurValues";
import SegmentsServices from "../component/segmentsServices/SegmentsServices";
import HomeBody from "../component/homeBody/HomeBody";

export const contents = [
  {
    name: "Home",
    to: "/",
    component: <HomeBody />,
  },
  {
    name: "About Us",
    to: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Segments & Services",
    to: "/segments-services",
    component: <SegmentsServices />,
  },
  {
    name: "Industries",
    to: "/industries",
    component: <Industries />,
  },
  {
    name: "Our Services",
    to: "/our-services",
    component: <OurServices />,
  },
  {
    name: "Our Values",
    to: "/our-values",
    component: <OurValues />,
  },
];
