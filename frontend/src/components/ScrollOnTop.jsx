// components/ScrollToTopButton.jsx
import { useEffect, useState, useRef } from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const ScrollToTopButton = () => {
  const [isVisible, setShowButton] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowButton(false); // hide at top
      } else if (currentScrollY < lastScrollY.current ) {
        setShowButton(true); // scrolling up -> show button
      } else {
        setShowButton(false); // scrolling down -> hide button
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    isVisible && (
      <IconButton
        icon={<ArrowUpIcon />}
        aria-label="Scroll to top"
        position="fixed"
        bottom="30px"
        right="30px"
        colorScheme="white"
        size="lg"
        zIndex="1000"
        onClick={scrollToTop}
        variant={"outline"}
      />
    )
  );
};

export default ScrollToTopButton;
