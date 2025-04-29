import React, { useState, useEffect } from 'react';
import styles from '../static/Carousel.module.css'; // Import your CSS file for styling
import shuco_salchicha from '../assets/carousel_img/ShucoSalchicha.JPG';
import garnachas from '../assets/carousel_img/Garnachas.JPG';
import churrasco_chapin from '../assets/carousel_img/ChurrascoChapin.JPG';

const Carousel = () => {
  // Array of images for the carousel
  const images = [
    shuco_salchicha,
    garnachas,
    churrasco_chapin,
  ];

  // The useState hook to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

    // Auto-slide every 7 seconds
    useEffect(() => {
      const interval = setInterval(goToNext, 7000); // 7000 ms = 7 seconds
      return () => clearInterval(interval); // Clear on unmount
    }, [currentIndex]); // Optional: [currentIndex] resets timer on manual nav

  return (
    <div className={styles.carousel}>
        <button className={styles.button.left} onClick={goToPrevious}>&#8249;</button>
        <img src={images[currentIndex]} alt={`carousel slide ${currentIndex}`} className={styles.image} />
        <button className={styles.button.right} onClick={goToNext}>&#8250;</button>
    </div>
  );
};

export default Carousel;