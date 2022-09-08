import react, { useContext } from "react";
import { Products, SingleProduct } from "..";

const About = () => {
  let value = useContext(SingleProduct);
  return <h1>{value}</h1>;
};

export default About;
