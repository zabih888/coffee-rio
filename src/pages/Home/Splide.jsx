import React from "react";
import styled from "styled-components";
import { media, setColor } from "../../styles";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import * as data from "../../data";
import { PrimaryBtn, SecondaryBtn } from "../../components/Global/Buttons";

const SplideHome = () => {
  return (
    <>
      <Splide>
        {data.splideData.map((item) => (
          <SplideSlide>
            <SplideItem>
              <div>
                <img src={item.img} />
              </div>
              <h2 className="textUp">{item.fristText}</h2>
              <h2 className="textDown">{item.secondText}</h2>
              <SecondaryBtn>{item.linkText}</SecondaryBtn>
            </SplideItem>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default SplideHome;

export const SplideItem = styled.div`
  div {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
      opacity: 1;
    }
    img {
      width: 100%;
      height: 580px;
      ${media.SmallMobile`
      height: 800px;
    `}
      object-fit: cover;
    }
  }

  h2 {
    position: absolute;
    color: ${setColor.white};
    font-size: 1.5rem;
    ${media.SmallMobile`
      font-size: 2rem;
    `}
    ${media.mobile`
      font-size: 2.5rem;
    `}
    ${media.tablet`
    font-size: 3rem  ;  
    `}
  }
  .textUp {
    top: 50%;
    right: 15%;
  }
  .textDown {
    top: 60%;
    right: 15%;
  }
  a {
    position: absolute;
    top: 70%;
    right: 15%;
    /* line-height: 2; */
  }
`;
