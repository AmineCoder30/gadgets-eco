export const filterProducts = (products, filter) => {
  if (!filter) return products;
  return products.filter((product) =>
    product.category.toLowerCase().includes(filter.toLowerCase())
  );
};
export const getProductByTitle = (products, title) => {
  return products.find(
    (product) => product.name.toLowerCase().split(" ").join("-") === title
  );
};

export const handleMouseMove = (event, setPosition) => {
  if (!event || !event.target) return;

  const { left, top, width, height } = event.target.getBoundingClientRect();
  const x = ((event.clientX - left) / width) * 100;
  const y = ((event.clientY - top) / height) * 100;

  setPosition({ x, y });
};
