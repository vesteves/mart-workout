import styled from "styled-components";
import { Link as LinkReact } from "react-router-dom";

export const Wrapper = styled.div`
  background: #333;
`;

export const Container = styled.div`
  margin: 0 20px;
`;

export const Link = styled(LinkReact)`
  text-decoration: none;
  color: #fff;
`;
