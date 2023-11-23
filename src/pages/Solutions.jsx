import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import { solutions } from "../dummy/products";
import Solution from "../components/Solution";

const SolutionsPage = () => {
  return (
    <Wrapper>
      <div className="heroWrapper">
        <Hero title="Solutions" text="Take a look at our solutions." />
      </div>
      <ProductsWrapper>
        {" "}
        <h3 className="prod_title">Our Solutions</h3>
        {solutions.map((product, idx) => {
          return (
            <Solution
              key={idx * 20293}
              idx={idx}
              name={product.name}
              text={product.text}
              text2={product.text2}
              playstore={product.playstore}
              appstore={product.appstore}
              image={product.image}
              link={product.link}
              height={product.height}
              width={product.width}
              id={product.id}
            />
          );
        })}
      </ProductsWrapper>
    </Wrapper>
  );
};

export default SolutionsPage;
const Wrapper = styled.section`
  margin-top: 80px;

  .heroWrapper {
    padding: 2rem 9rem 5rem;
  }
  .textHd {
    text-align: center;
    font-family: "mollen-light";
    line-height: 1.7;
    font-size: 1.1rem;
    width: 55%;
    margin: 2rem auto 0;
    color: #667085;
  }
  @media only screen and (max-width: 900px) {
    .heroWrapper {
      padding: 2rem 4rem 5rem;
    }
  }
  @media only screen and (max-width: 680px) {
    .heroWrapper {
      padding: 2rem 2rem 5rem;
    }
  }
  @media only screen and (max-width: 790px) {
    .textHd {
      font-size: 0.8rem;
    }
  }
`;

const ProductsWrapper = styled.section`
  margin: 5rem 0;
  .prod_title {
    font-family: "generalsans-semibold";
    font-size: 2rem;
    text-align: center;
    margin: 1rem 0;
  }
`;
