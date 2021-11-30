import styled from "styled-components";
import { media } from "../../styles";

export const Container = styled.div`
 width: 90vw;
 margin: 0 auto;
 /* border: 1px solid red; */
 ${media.desktop`
  width: 100%;
  max-width: 1100px;
 `}
`
