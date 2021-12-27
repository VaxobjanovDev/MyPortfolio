import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { Anchor, Link } from "./Img/svg";

const Container = styled.div`
  position: relative;
`;
const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  color: ${(props) => props.theme.text};
  .chain {
    transform: rotate(135deg);
  }
`;

const PreAnchor = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
  color: ${(props) => props.theme.text};
`;

const AnchorComponent = ({ number }) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let differenceBetw = Math.max(bodyHeight - (scrollPosition + windowSize));

      let differencePosit = (differenceBetw * 100) / (bodyHeight - windowSize);
      if (ref.current) {
        ref.current.style.transform = `translateY(${-differencePosit}%)`;
      }

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = "none";
      }
      if (hiddenRef.current) {
        hiddenRef.current.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <PreAnchor ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill="currentColor" />
      </PreAnchor>
      <Slider ref={ref}>
        {[...Array(number)].map((item, id) => (
          <Link
            to="/"
            key={id}
            width={30}
            height={30}
            fill="currentColor"
            className="chain"
          />
        ))}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default AnchorComponent;
