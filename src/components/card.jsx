import ShareMobile from "./share-mobile";
import ShareDesktop from "./share-desktop";
import hero from "./assets/drawers.jpg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useSpring, animated } from "react-spring";
import LowerDiv from "./lower-div";

const Card = () => {
  const desktop = useMediaQuery({ minWidth: 768 });
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  const springProps = useSpring({
    opacity: active ? 1 : 0,
    transform: active ? "translateY(0)" : "translateY(20px)",
    config: { tension: 250, friction: 20 },
  });

  return (
    <main className="flex flex-col overflow-hidden rounded-2xl bg-white md:max-w-[70vw] md:flex-row md:overflow-visible">
      <div>
        <img
          className="flex w-full object-cover md:h-full md:w-[300px] md:rounded-l-2xl md:object-left"
          src={hero}
          alt="Hero"
        />
      </div>
      <article className="flex flex-col gap-4 md:w-[500px] md:min-w-[490px] md:gap-6">
        <div className="flex flex-col justify-evenly gap-4 px-8 pt-8 md:px-10 md:pb-0">
          <h1 className="text-base font-bold text-veryDarkGrayishBlue md:text-2xl">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="font-medium leading-[1.35rem] text-desaturatedDarkBlue">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <div className="relative">
          {desktop && <ShareDesktop active={active} />}
          {desktop || !active ? (
            <LowerDiv active={active} onClick={toggle} />
          ) : (
            <animated.div style={springProps}>
              <ShareMobile active={active} onClose={toggle} />
            </animated.div>
          )}
        </div>
      </article>
    </main>
  );
};

export default Card;
