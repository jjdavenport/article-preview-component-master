import icons from "./assets/icons.json";
import data from "./assets/data.json";

const ShareMobile = ({ onClose }) => {
  return (
    <>
      <div className="flex">
        <p className="uppercase tracking-widest">{data.share}</p>
        <ul className="flex">
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
