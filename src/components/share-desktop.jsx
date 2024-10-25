import facebookIcon from "./assets/icon-facebook.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import pinterestIcon from "./assets/icon-pinterest.svg";

const ShareDesktop = () => {
  return (
    <>
      <div className="absolute -top-24 right-40">
        <dialog className="z-50 m-0 flex items-center gap-3 rounded-lg border-none bg-veryDarkGrayishBlue px-10 py-4">
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
        </dialog>
      </div>
    </>
  );
};

export default ShareDesktop;
