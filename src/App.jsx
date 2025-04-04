import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Header />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
