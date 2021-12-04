import { css } from "styled-components";

export const setColor = {
  iconColor: "#ccc",
  descColor: "#808080",
  backgroundColor: "#f6f6f6",
  subtitle: "#4d4d4d",
  gold: "#d7b46a",
  Black: "#000000",
  white: "#ffffff",
  footerColor: "#333333",
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x}`;
};

const sizes = {
  SmallMobile: 320,
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
};
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `transition: ${property} ${time} ${timing}`;
};
