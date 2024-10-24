import facebookIcon from "./assets/icon-facebook.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import pinterestIcon from "./assets/icon-pinterest.svg";

const ShareDesktop = () => {
  return (
    <>
      <div className="absolute right-0">
        <dialog className="z-50 m-0 flex border-none p-0">
          <p>Share</p>
          <ul className="flex">
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
        </dialog>
      </div>
    </>
  );
};

export default ShareDesktop;
