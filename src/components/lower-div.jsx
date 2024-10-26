import avatar from "./assets/avatar-michelle.jpg";

const LowerDiv = ({ onClick, active }) => {
  return (
    <>
      <div className="flex items-center justify-between px-8 py-4 md:px-10 md:pb-10 md:pt-0">
        <div className="flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={avatar} alt="Profile" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-veryDarkGrayishBlue">
              Michelle Appleton
            </span>
            <span className="font-medium text-grayishBlue">28 Jun 2020</span>
          </div>
        </div>
        <button
          onClick={onClick}
          className={`${
            active ? "bg-veryDarkGrayishBlue" : "hover:bg-veryDarkGrayishBlue"
          } group cursor-pointer rounded-full bg-lightGrayishBlue p-3 transition duration-700 ease-in-out`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
            <path
              className={`${
                active ? "fill-white" : "group-hover:fill-white"
              } fill-desaturatedDarkBlue transition duration-700 ease-in-out`}
              d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default LowerDiv;
