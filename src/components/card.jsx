import { useState } from "react";
import ShareMobile from "./share-mobile";
import ShareDesktop from "./share-desktop";
import { useMediaQuery } from "react-responsive";
import hero from "./assets/drawers.jpg";
import avatar from "./assets/avatar-michelle.jpg";
import shareIcon from "./assets/icon-share.svg";

const Card = () => {
  const desktop = useMediaQuery({ minWidth: 768 });
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  return (
    <>
      <main className="flex flex-col rounded-2xl bg-blue-300 md:flex-row">
        <img className="w-full md:w-5/12" src={hero} />
        <article className="flex flex-col justify-evenly gap-2 p-4">
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="relative">
            {!desktop ? (
              !active && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={avatar}
                      alt="Profile"
                    />
                    <div className="flex flex-col">
                      <span>Michelle Appleton</span>
                      <span>28 Jun 2020</span>
                    </div>
                  </div>
                  <button onClick={toggle} className="bg-black">
                    <img src={shareIcon} alt="Toggle" />
                  </button>
                </div>
              )
            ) : (
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={avatar}
                    className="w-10 rounded-full"
                    alt="Profile"
                  />
                  <div className="flex flex-col">
                    <span>Michelle Appleton</span>
                    <span>28 Jun 2020</span>
                  </div>
                </div>
                <button onClick={toggle}>
                  <img src={shareIcon} alt="Toggle" />
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
