import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; 

/**
 * SmoothScroll is a functional component that provides smooth scrolling
 * behavior for its child elements using GSAP for animation and
 * ResizeObserver to adjust to changes in content size.
 */
const SmoothScroll = ({ children }) => {
  // Create a ref for the viewport to access the DOM element
  const viewportRef = useRef(null);

  // Use useEffect to set up scroll event listener and dynamic height adjustments
  useEffect(() => {
    // Function to handle scroll event
    const onScroll = () => {
      // Use GSAP to animate the scroll effect
      gsap.to(viewportRef.current, {
        duration: 1.5, // Duration of the animation in seconds
        y: -window.pageYOffset, // Translate the viewport vertically based on scroll position
        ease: "power4.out", // Easing function for smooth transition
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", onScroll);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("scroll", onScroll); // Remove scroll event listener
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Render the component
  return (
    <>
      {/* The main viewport that will scroll smoothly */}
      <div className="viewport" ref={viewportRef}>
        {children} {/* Render child elements passed to the component */}
      </div>
      {/* A fake div to ensure the height is maintained */}
      <div className="fake" />
    </>
  );
};

export default SmoothScroll;
