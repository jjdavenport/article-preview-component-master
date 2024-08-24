import Card from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="flex h-full min-h-screen flex-col justify-between font-custom">
        <div className="flex flex-1 items-center justify-center p-4">
          <Card />
        </div>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
