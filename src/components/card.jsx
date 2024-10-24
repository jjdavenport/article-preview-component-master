import ShareMobile from "./share-mobile";
import ShareDesktop from "./share-desktop";
import hero from "./assets/drawers.jpg";
import avatar from "./assets/avatar-michelle.jpg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Card = () => {
  const desktop = useMediaQuery({ minWidth: 768 });
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  return (
    <>
      <main className="flex flex-col overflow-hidden rounded-2xl bg-white md:max-w-[800px] md:flex-row">
        <img className="flex w-5/12 object-cover object-left" src={hero} />
        <article className="flex flex-col justify-evenly gap-4 p-4 md:p-10">
          <h1 className="w-96 text-2xl font-bold">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="wp-96 font-medium">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="relative">
            {!desktop && active ? (
              <ShareMobile onClose={toggle} />
            ) : (
              <>
                {active && <ShareDesktop />}
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
                  <button
                    onClick={toggle}
                    className={`${active ? "bg-veryDarkGrayishBlue" : "hover:bg-veryDarkGrayishBlue"} group rounded-full bg-lightGrayishBlue p-3 transition duration-700 ease-in-out`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="13"
                    >
                      <path
                        className={`${active ? "fill-white" : "group-hover:fill-white"} fill-desaturatedDarkBlue transition duration-700 ease-in-out`}
                        d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                      />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </article>
      </main>
    </>
  );
};

export default Card;
