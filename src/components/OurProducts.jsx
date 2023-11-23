import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { products } from "../dummy/products";

const OurProducts = () => {
  return (
    <Wrapper>
      <h3 className="prod_title">Our Products</h3>
      {products.map((product, idx) => {
        return (
          <Product
            key={idx * 20293}
            idx={idx}
            name={product.name}
            text={product.text}
            playstore={product.playstore}
            appstore={product.appstore}
            image={product.image}
            width={product?.width}
            height={product.height}
            link={product.link}
          />
        );
      })}
    </Wrapper>
  );
};

export default OurProducts;
const Wrapper = styled.section`
  margin: 5rem 0;
  .prod_title {
    font-family: "generalsans-semibold";
    font-size: 2rem;
    text-align: center;
    margin: 1rem 0;
  }
`;
