import styled from "styled-components";
import { media, setColor, setFlex } from "../../styles";

export const UniqueMain = styled.main`
  direction: rtl;
  max-width: 1100px;
  margin: auto;
`;

export const UniqueWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
export const UniqueIntro = styled.section`
  flex-direction: column;
  ${media.mobile`
  flex-direction: row;
  `}
  ${setFlex({ x: "space-between", y: "start" })};
  background-color: #e6e6e6;
  .img {
    width: 100%;
    ${media.mobile`
     width: 40%;
    `}
    ${media.tablet`
     width: 50%;
    `}
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detail {
    ${media.mobile`
     width: 60%;
    `}
    ${media.tablet`
     width: 50%;
    `}
    padding: 3rem;

    .detailText {
      color: ${setColor.subtitle};
      display: flex;
      margin-top: 1rem;
      span {
        margin-left: 1rem;
      }
    }
    .title {
      border-bottom: 1px solid ${setColor.iconColor};
      padding-bottom: 1rem;
    }
  }
`;
export const UniqueDesc = styled.section`
  margin-top: 2rem;
`;
export const UniqueDescItems = styled.div`
  box-shadow: 1px 1px 15px rgb(0 0 0 / 15%);
  padding: 1.5rem;

  .information {
    p {
      line-height: 1.7;
    }
  }
  .moreInfo {
    display: flex;
    justify-content: space-between;

    .label {
      width: 30%;
      li {
        background-color: #e6e6e6;
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 10px;
      }
    }
    .answer {
      width: 70%;
      margin-right: 1rem;
      li {
        background-color: #e6e6e6;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 10px;
      }
    }
  }
  .discussion {
    .nameEmailWrapper {
      margin: 1rem 0 1rem 0;
      display: flex;
      justify-content: space-between;
      input {
        width: 30vw;
      }
    }
  }
`;
export const UniqueDescButtons = styled.div`
  display: inline-block;
`;
