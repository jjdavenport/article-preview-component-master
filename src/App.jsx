import Card from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="flex h-full min-h-screen flex-col justify-between font-custom text-customSize">
        <div className="flex flex-1 items-center justify-center p-4 md:p-10">
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
