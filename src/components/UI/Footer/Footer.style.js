import styled from "styled-components";
import { setColor, setFlex, media } from "../../../styles";
export const FooterMain = styled.main`
  direction: rtl;
  background-color: ${setColor.footerColor};
  color: ${setColor.backgroundColor};

  a {
    color: ${setColor.backgroundColor};
    display: block;
    margin-bottom: 0.5rem;
  }
  .title {
    border-bottom: 1px solid ${setColor.descColor};
    padding-bottom: 1rem;
  }
`;

export const FooterWrapper = styled.section`
  margin-top: -4rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  ${media.tablet`
   grid-template-columns: repeat(2, 1fr);
  `}
  ${media.laptop`
   grid-template-columns: repeat(4, 1fr);
  `}
`;
export const FooterIntro = styled.div`
  p {
    line-height: 1.7;
  }
`;
export const FooterServices = styled.div``;
export const FooterContact = styled.div``;
export const FooterSymbol = styled.div`
  div {
    text-align: center;
  }
`;
