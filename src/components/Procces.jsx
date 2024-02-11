import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

const Procces = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const numbersRef = useRef(null);

  const [counters, setCounters] = useState({
    prizes: 0,
    publicCollections: 0,
    soloExhibitions: 0,
    years: 0,
  });

  const animateCounter = (counterName, targetValue, customConfig = {}) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [counterName]: targetValue,
      [`${counterName}Config`]: customConfig, // Store customConfig in state
    }));
  };

  const handleScroll = () => {
    const element = numbersRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      const margin = 100; // Adjust the margin as needed
      const isVisible =
        rect.top - margin < window.innerHeight && rect.bottom >= 0;
      rect.bottom >= 0;
      if (isVisible && !isAnimated) {
        setIsAnimated(true);
        animateNumbers();
      } else if (!isVisible && isAnimated) {
        setIsAnimated(false);
      }
    }
  };

  const animateNumbers = () => {
    animateCounter("prizes", 5, { tension: 120, friction: 14 });
    animateCounter("publicCollections", 70, { tension: 120, friction: 14 });
    animateCounter("soloExhibitions", 60, { tension: 120, friction: 14 });
    animateCounter("years", 40, { tension: 120, friction: 14 }); // Adjust the spring configuration for slower animation
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAnimated]);

  const animatedCounters = useSpring({
    prizes: counters.prizes,
    publicCollections: counters.publicCollections,
    soloExhibitions: counters.soloExhibitions,
    years: counters.years,
    from: { prizes: 0, publicCollections: 30, soloExhibitions: 20, years: 10 },
    reset: isAnimated,
    config: (key) =>
      counters[`${key}Config`] !== undefined
        ? counters[`${key}Config`]
        : config.default,
  });

  return (
    <section id="process">
      <div className="view">
        <div className="content colors-e background-solid" />
        <div className="container" />
      </div>
      <div className="view" id="numbers">
        <img alt="" className="bg" src="images/placeholders/1920x1200-0.jpg" />
        <img alt="" className="bg" src="images/placeholders/1920x1200-1.jpg" />
        <img alt="" className="bg" src="images/placeholders/slider4.jpg" />
        <img alt="" className="bg" src="images/placeholders/slider5.jpg" />
        <div className="content half-size colors-h">
          <div className="container-fluid">
            <h3>
              Some <span className="highlight">Numbers</span>
            </h3>
            <p className="title">
              <span className="highlight">Some of the</span> facts about the
              artist
            </p>
            <div ref={numbersRef} className="row counters">
              <div className="col-md-3 counter background-35-b">
                <animated.div className="count player row heading background-10-light">
                  {animatedCounters.prizes.interpolate((value) =>
                    Math.floor(value)
                  )}
                </animated.div>
                <div className="caption">Prizes</div>
              </div>
              <div className="col-md-3 counter background-35-h">
                <animated.div className="count player row heading background-10-light">
                  {animatedCounters.publicCollections.interpolate((value) =>
                    Math.floor(value)
                  )}
                </animated.div>
                <div className="caption">Public Collections</div>
              </div>
              <div className="col-md-3 counter background-35-b">
                <animated.div className="count player row heading background-10-light">
                  {animatedCounters.soloExhibitions.interpolate((value) =>
                    Math.floor(value)
                  )}
                </animated.div>
                <div className="caption">Solo exhibitions</div>
              </div>
              <div className="col-md-3 counter background-35-h">
                <animated.div className="count player row heading background-10-light">
                  {animatedCounters.years.interpolate((value) =>
                    Math.floor(value)
                  )}
                </animated.div>
                <div className="caption">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procces;
