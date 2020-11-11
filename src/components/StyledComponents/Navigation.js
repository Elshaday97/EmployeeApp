import styled from "styled-components";

export default styled.nav`
  background: #333333;
  height: 60px;
  width: 100%;
  position: fixed;
  ul {
    background: #333333;
    display: flex;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    height: 100%;
    align-items: center;
  li {
    list-style-type: none;
    display: flex;
    padding: 10px;
    a {
      color: white;
      text-decoration: none;
    }
  }
`;
