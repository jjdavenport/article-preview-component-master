import facebookIcon from "./assets/icon-facebook.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import pinterestIcon from "./assets/icon-pinterest.svg";
import shareIcon from "./assets/icon-share.svg";

const ShareMobile = ({ onClose }) => {
  return (
    <>
      <div className="flex">
        <p className="uppercase tracking-widest">Share</p>
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
        <button onClick={onClose}>
          <img src={shareIcon} />
        </button>
      </div>
    </>
  );
};

export default ShareMobile;
