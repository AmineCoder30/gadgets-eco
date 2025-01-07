import React from "react";
import {
  PageTitle,
  ProductsList,
  Subscribe,
  ContactSection,
  ContactInfo,
} from "../components/layout";
import products from "../constants/products";
function Contact() {
  return (
    <div>
      <PageTitle classes="py-[140px]  " />
      <ContactInfo />
      <ContactSection />
      <ProductsList products={products.slice(0, 6)} />
      <Subscribe />
    </div>
  );
}

export default Contact;
