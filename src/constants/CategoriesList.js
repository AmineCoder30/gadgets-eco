import laptopsCover from "../assets/images/category-laptops.webp";
import dronesCover from "../assets/images/category-drones-2.webp";
import phonesCover from "../assets/images/category-phones.webp";
import gamingCover from "../assets/images/category-gaming.webp";
const Categories = [
  {
    title: "Laptops",
    count: 245,
    image: laptopsCover, // Replace with actual image URL
    grid: "col-span-4 lg:col-span-2  row-span-4 hover:bg-[#fcb900]",
    position: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ",
  },
  {
    title: "Drones",
    count: 28,
    image: dronesCover, // Replace with actual image URL
    grid: "col-span-4 lg:col-span-2 col-span-2 row-span-2 hover:bg-[#5B38ED]",
    position: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ",
  },
  {
    title: "Smartphones",
    count: 273,
    image: phonesCover, // Replace with actual image URL
    grid: "col-span-4 md:col-span-2 lg:col-span-1 row-span-2 hover:bg-[#00d084]",
    position: "left-1/2 -translate-x-1/2 bottom-0 ",
  },
  {
    title: "Gaming",
    count: 25,
    image: gamingCover, // Replace with actual image URL
    grid: "col-span-4 md:col-span-2 lg:col-span-1 row-span-2 hover:bg-[#111518]",
    position: "right-0 bottom-0 ",
  },
];

export default Categories;
