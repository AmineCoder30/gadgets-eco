import headphone from "../assets/images/head.webp";
import kit from "../assets/images/kit.webp";
import ipad from "../assets/images/ipad.webp";
import phone from "../assets/images/phone.webp";
import ar from "../assets/images/ar.webp";
import watch from "../assets/images/watch.webp";
import product1 from "../assets/images/product-8.webp";
import Product2 from "../assets/images/product-3.webp";
import product3 from "../assets/images/product-4.webp";

const products = [
  {
    id: 1,
    name: "AirPods Pro",
    price: 249.0,
    category: "Gadgets",
    image: kit, // Replace with actual image URLs
  },
  {
    id: 2,
    name: "AirTag",
    price: 29.0,
    category: "Gadgets",
    image: ipad,
  },
  {
    id: 3,
    name: "Apple Watch Series 6",
    price: 399.0,
    category: "Gadgets",
    image: watch,
  },
  {
    id: 4,
    name: "HTC Vive Pro 2",
    price: 599.0,
    category: "Gaming",
    image: ar,
  },
  {
    id: 5,
    name: "Razer Blackshark",
    price: 159.0,
    category: "Gadgets, Gaming",
    image: headphone,
  },
  {
    id: 6,
    name: "Samsung Galaxy S21",
    price: 799.0,
    category: "Smartphones",
    image: phone,
  },
  {
    id: 7,
    name: "Valve Index Controllers",
    price: 279.0,
    category: "Gaming",
    image: product1,
  },
  {
    id: 8,
    name: "XBOX Elite Controller",
    price: 179.0,
    category: "Gaming",
    image: Product2,
  },
  {
    id: 9,
    name: "XBOX Series X",
    price: 499.0,
    category: "Gaming",
    image: product3,
  },
];

export default products;
