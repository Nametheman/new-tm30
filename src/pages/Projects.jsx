import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import { projects } from "../dummy/products";
import Product from "../components/Product";

const Projects = () => {
  return (
    <Wrapper>
      <div className="heroWrapper">
        <Hero
          title="Projects"
          text="Take a look at some of our existing projects."
        />
      </div>
      <ProductsWrapper>
        {" "}
        <h3 className="prod_title">Our Projects</h3>
        {projects.map((product, idx) => {
          return (
            <Product
              key={idx * 20293}
              idx={idx}
              name={product.name}
              text={product.text}
              text2={product.text2}
              playstore={product.playstore}
              appstore={product.appstore}
              image={product.image}
              link={product.link}
              width={product.width}
            />
          );
        })}
      </ProductsWrapper>
    </Wrapper>
  );
};

export default Projects;
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
