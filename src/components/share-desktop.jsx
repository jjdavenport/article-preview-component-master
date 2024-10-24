import facebookIcon from "./assets/icon-facebook.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import pinterestIcon from "./assets/icon-pinterest.svg";

const ShareDesktop = () => {
  return (
    <>
      <div className="absolute right-72">
        <dialog className="z-50 m-0 flex items-center gap-3 rounded-lg border-none bg-veryDarkGrayishBlue px-8 py-4">
          <span className="uppercase tracking-widest text-desaturatedDarkBlue">
            Share
          </span>
          <ul className="flex items-center gap-3">
            <li className="h-4 w-4">
              <img src={facebookIcon} />
            </li>
            <li className="flex h-4 w-4">
              <img src={twitterIcon} />
            </li>
            <li className="h-4 w-4">
              <img src={pinterestIcon} />
            </li>
          </ul>
        </dialog>
      </div>
    </>
  );
};

export default ShareDesktop;
