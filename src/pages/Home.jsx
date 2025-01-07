import {
  Hero,
  Categories,
  InfoCards,
  UculusVr,
  Subscribe,
  IconCards,
  ProductShowcase,
  ProductsList,
  BlogsList,
} from "../components/layout";
import products from "../constants/products";
import { Title } from "../components/ui";

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <InfoCards />
      <UculusVr />
      <div className="mt-20 ">
        <Title
          title="Featured Products"
          subtitle="Feugiat pretium nibh ipsum consequat commodo"
          link="products"
        />
        <ProductsList products={products.slice(0, 6)} />
      </div>
      <ProductShowcase />

      <IconCards />
      <div className="mt-20 px-5">
        <Title
          title="Latest News"
          subtitle="Feugiat pretium nibh ipsum consequat commodo"
          link="/blog"
        />
        <BlogsList />
      </div>
      <Subscribe />
    </div>
  );
}

export default Home;
