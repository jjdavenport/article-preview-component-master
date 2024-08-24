import icons from "./assets/icons.json";
import data from "./assets/data.json";

const ShareMobile = ({ onClose }) => {
  return (
    <>
      <div className="flex bg-black">
        <p>{data.share}</p>
        <ul>
          {icons.map((i) => (
            <li key={i.img}>
              <img src={i.img} />
            </li>
          ))}
        </ul>
        <button onClick={onClose}>
          <img src={data.icon} />
        </button>
      </div>
    </>
  );
};

export default ShareMobile;
