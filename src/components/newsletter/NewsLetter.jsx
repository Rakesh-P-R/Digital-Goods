"use client";
import { useState, useEffect } from 'react';
import SectionTitle from "../elements/SectionTitle";

const NewsLetter = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the currentIndex to scroll to the next newsletter
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 10); // Assuming there are 10 newsletters
    }, 3000); // Scroll every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const scrollToNextNewsletter = () => {
    // Calculate the scroll distance based on the current index
    const scrollDistance = currentIndex * window.innerWidth;
    // Scroll horizontally to the next newsletter
    document.querySelector('.container').scrollTo({
      left: scrollDistance,
      behavior: 'smooth'
    });
  };

  return (
    <div className="axil-newsletter-area axil-section-gap pt--0" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ overflowX: 'hidden', whiteSpace: 'nowrap' }}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className={`etrade-newsletter-wrapper bg_image ${props.bgImage ? props.bgImage : "bg_image--5"}`} style={{ display: 'inline-block', width: '100vw' }}>
            <div className="newsletter-content">
              <SectionTitle 
                pClass="pr--0"
                title="Get weekly update"
                subtitle="Newsletter"
                subtitleIcon="fas fa-envelope-open"
                subColor="highlighter-primary2"
              />
              <div className="newsletter-scroll-container" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                <div className="input-group newsletter-form" style={{ display: 'inline-block', marginRight: '20px' }}>
                  <div className="position-relative newsletter-inner mb--15">
                    <input placeholder="example@gmail.com" type="text" />
                  </div>
                  <button type="submit" className="axil-btn mb--15">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default NewsLetter;
