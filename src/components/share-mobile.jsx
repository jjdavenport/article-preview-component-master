import icons from "./assets/icons.json";
import data from "./assets/data.json";
import { useState } from "react";

const ShareMobile = () => {
  const [button, setButton] = useState(false);
  const open = () => {
    setButton(true);
  };
  return (
    <>
      <div className="flex">
        <p>{data.share}</p>
        <ul>
          {icons.map((i) => (
            <li key={i.img}>
              <img src={i.img} />
            </li>
          ))}
        </ul>
        <button onClick={open}>
          <img src={data.icon} />
        </button>
      </div>
    </>
  );
};

export default ShareMobile;
