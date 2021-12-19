import styled from "styled-components";

export const ButtonStyle = styled.button`
  position: fixed;
  transform: translate(-50%, 0);
  z-index: 3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  left: 50%;
  top: 2rem;
  text-decoration: none;

  &:hover {
    background-color: #000000;
  }
`;
