import facebookIcon from "./assets/icon-facebook.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import pinterestIcon from "./assets/icon-pinterest.svg";

const ShareMobile = ({ onClose, active }) => {
  return (
    <>
      <div className="flex h-[72px] w-full items-center justify-between bg-veryDarkGrayishBlue px-8 py-4">
        <div className="flex items-center gap-3">
          <span className="uppercase tracking-[0.3em] text-grayishBlue">
            Share
          </span>
          <ul className="flex items-center gap-3">
            <li>
              <img src={facebookIcon} />
            </li>
            <li>
              <img src={twitterIcon} />
            </li>
            <li>
              <img src={pinterestIcon} />
            </li>
          </ul>
        </div>
        <button
          onClick={onClose}
          className={`${active ? "bg-desaturatedDarkBlue" : "hover:bg-veryDarkGrayishBlue"} group h-fit cursor-pointer rounded-full bg-lightGrayishBlue p-3 transition duration-700 ease-in-out`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
            <path
              className={`${active ? "fill-white" : "group-hover:fill-white"} fill-desaturatedDarkBlue transition duration-700 ease-in-out`}
              d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ShareMobile;
