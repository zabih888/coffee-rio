import { Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import * as alterData from "../../data";
import styled from "styled-components";
import { media, setColor } from "../../styles";
import Section from "../../components/Global/Section";
const AlternativeHome = () => {
  const matchesMobile = useMediaQuery("(min-width: 480px)");
  return (
    <Section>
      <AlterList>
        {alterData.alternativeData.map((item) => (
          <section>
            <Grid className="alterImg" component={Link} to="/">
              <img src={item.img} />
            </Grid>
            <div
              className="alterSvg"
              style={{ backgroundImage: `url(${item.imgSvg})` }}
            />
            {!matchesMobile ? undefined : <h2>{item.text}</h2>}
          </section>
        ))}
      </AlterList>
    </Section>
  );
};

export default AlternativeHome;

export const AlterList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.7rem;
  grid-row-gap: 0.7rem;
  max-width: 1100px;
  margin: auto;
  width: 100vw;
  ${media.mobile`
  width: 80vw;`}
  ${media.tablet`
  width: 70vw;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  grid-row-gap: 1.5rem;
  `}

  section {
    display: flex;
    position: relative;
    overflow: hidden;
  }
  .alterImg {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
      transition: 0.3s ease-in-out;
    }
    &:hover {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      &::after {
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: 0.3s ease-in-out;
      }
    }
  }
  
  .alterSvg {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  h2 {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${setColor.white};
    &:hover {
      pointer-events: none;
    }
  }
`;
