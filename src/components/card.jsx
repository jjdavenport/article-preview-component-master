import { useState } from "react";
import data from "./assets/data.json";
import ShareMobile from "./share-mobile";
import ShareDesktop from "./share-desktop";
import { useMediaQuery } from "react-responsive";

const Card = () => {
  const desktop = useMediaQuery({ minWidth: 768 });
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  return (
    <>
      <main className="rounded-lg">
        <img className="overflow-hidden" src={data.image} />
        <p>{data.p}</p>
        <div className="relative">
          {!desktop ? (
            !active && (
              <div className="flex">
                <img src={data.profilePicture} alt="Profile" />
                <span>{data.name}</span>
                <span>{data.date}</span>
                <button onClick={toggle}>
                  <img src={data.icon} alt="Toggle" />
                </button>
              </div>
            )
          ) : (
            <div className="flex">
              <img src={data.profilePicture} alt="Profile" />
              <span>{data.name}</span>
              <span>{data.date}</span>
              <button onClick={toggle}>
                <img src={data.icon} alt="Toggle" />
              </button>
            </div>
          )}
          {active ? (
            desktop ? (
              <ShareDesktop />
            ) : (
              <ShareMobile onClose={toggle} />
            )
          ) : null}
        </div>
      </main>
    </>
  );
};

export default Card;
