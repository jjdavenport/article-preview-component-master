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
      <main className="flex flex-col overflow-hidden rounded-2xl bg-blue-300 md:flex-row">
        <img className="w-full md:w-5/12" src={data.image} />
        <article className="flex flex-col justify-evenly gap-2 p-4">
          <p>{data.p}</p>
          <div className="relative">
            {!desktop ? (
              !active && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={data.profilePicture}
                      alt="Profile"
                    />
                    <div className="flex flex-col">
                      <span>{data.name}</span>
                      <span>{data.date}</span>
                    </div>
                  </div>
                  <button onClick={toggle} className="bg-black">
                    <img src={data.icon} alt="Toggle" />
                  </button>
                </div>
              )
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={data.profilePicture}
                    className="w-10 rounded-full"
                    alt="Profile"
                  />
                  <div className="flex flex-col">
                    <span>{data.name}</span>
                    <span>{data.date}</span>
                  </div>
                </div>
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
        </article>
      </main>
    </>
  );
};

export default Card;
