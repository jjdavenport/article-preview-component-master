import Card from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="flex h-full min-h-screen flex-col justify-between bg-lightGrayishBlue font-custom text-customSize">
        <div className="flex flex-1 items-center justify-center p-6 font-medium md:p-2">
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
