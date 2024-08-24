import icons from "./assets/icons.json";
import data from "./assets/icons.json";

const ShareDesktop = () => {
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
      </div>
    </>
  );
};

export default ShareDesktop;
