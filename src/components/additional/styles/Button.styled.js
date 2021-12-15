import styled from "styled-components";

export const ButtonStyle = styled.button`
  position:absolute;
  transform:translate(-50%,-50%);
	z-index:3;
	cursor:pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  position: fixed;
  margin: 2rem auto;
  left: 50%;

  background-color: #f2efe2;

  text-decoration: none;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 3px #7a5b19, 0px 4px #6d5117, 0px 5px #604814, 0px 6px #543f11,
    0px 7px #47350f, 0px 8px #36280b, 0px 12px 6px -1px rgba(0, 0, 0, 0.5),
    inset 0 1px 1px rgba(255, 255, 255, 0.7),
    inset 0 0 3px rgba(252, 252, 252, 0.6);
  transition: transform 100ms, box-shadow 100ms, background-color 200ms,
    color 200ms;

  &:hover {
    background-color: #000000;
  }

  &:active {
    transform: translateY(5px);
    box-shadow: 0px 3px #7a5b19, 0px 1px #47350f,
      0px 5px 2px 0px rgba(0, 0, 0, 0.4),
      inset 0 1px 1px rgba(255, 255, 255, 0.7),
      inset 0 0 3px rgba(252, 252, 252, 0.6);
  }
`;
