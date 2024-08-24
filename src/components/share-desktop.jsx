import icons from "./assets/icons.json";
import data from "./assets/data.json";

const ShareDesktop = () => {
  return (
    <>
      <div className="absolute -right-5 -top-10 z-10 m-0 flex border-none p-0">
        <p>{data.share}</p>
        <ul className="flex">
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
