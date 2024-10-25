import facebookIcon from "./assets/icon-facebook.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import pinterestIcon from "./assets/icon-pinterest.svg";

const ShareDesktop = ({ active }) => {
  return (
    <>
      <div
        className={`absolute -right-[60px] -top-20 ${active ? "scale-100 opacity-100" : "scale-95 opacity-0"} transition-all duration-300`}
      >
        <dialog className="relative z-50 m-0 flex items-center gap-3 rounded-lg border-none bg-veryDarkGrayishBlue px-10 py-4">
          <span className="uppercase tracking-[0.3em] text-grayishBlue">
            Share
          </span>
          <ul className="flex items-center gap-3">
            <li className="h-5 w-5">
              <img src={facebookIcon} />
            </li>
            <li className="flex h-5 w-5">
              <img src={twitterIcon} />
            </li>
            <li className="h-5 w-5">
              <img src={pinterestIcon} />
            </li>
          </ul>
          <div className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 translate-y-full transform border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-veryDarkGrayishBlue"></div>
        </dialog>
      </div>
    </>
  );
};

export default ShareDesktop;
