import { useState } from "react";
import data from "./assets/data.json";
import ShareMobile from "./share-mobile";
import ShareDesktop from "./share-desktop";
import { useMediaQuery } from "react-responsive";

const Card = () => {
  const desktop = useMediaQuery({ minWidth: 768 });
  const [active, setActive] = useState(false);
  const open = () => {
    setActive(true);
  };
  const toggle = () => {
    setActive(!active);
  };
  return (
    <>
      <main>
        <img src={data.image} />
        <p></p>
        <div className="relative">
          <div>
            <img src={data.profilePicture} />
            <span>{data.name}</span>
            <span>{data.date}</span>
            <button onClick={desktop ? toggle : open}>
              <img src={data.icon} />
            </button>
            {desktop ? <ShareDesktop /> : <ShareMobile />}
          </div>
        </div>
      </main>
    </>
  );
};

export default Card;
