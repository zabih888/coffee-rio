import React from "react";
import styled from "styled-components";
import { media, setColor, setTransition } from "../../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  background-color: ${setColor.gold};
  color: ${setColor.white};
  padding: 10px 20px;
  border: 1px solid ${setColor.gold};
  cursor: pointer;
  ${setTransition({ time: ".4s" })};
  &:hover {
    background-color: transparent;
    color: ${setColor.gold};
  }
`;

export const PrimaryShop = styled.button`
  display: flex;
  justify-content: center;

  width: 100%;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  background-color: ${setColor.gold};
  color: ${setColor.white};
  padding: 10px 20px;
  border: 1px solid ${setColor.gold};
  cursor: pointer;
  /* ${setTransition({ time: ".2s" })}; */
  &:hover {
    background-color: #b58b30;
    span{
      transform: translateX(15px);
      ${setTransition({ time: ".4s" })};
    }
  }

  span {
    margin-left: 0.7rem;
    ${setTransition({ time: ".4s" })};
  }
`;

export const SecondaryBtn = styled.a`
  background: ${setColor.gold};
  color: ${setColor.white};
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  line-height: 2;

  &:hover {
    background: transparent;
    color: ${setColor.gold};
    &:before {
      width: 100%;
      transition: 800ms ease all;
    }
    &::after {
      width: 100%;
      transition: 800ms ease all;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: ${setColor.gold};
    transition: 400ms ease all;

    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: ${setColor.gold};
    transition: 400ms ease all;
  }
`;
