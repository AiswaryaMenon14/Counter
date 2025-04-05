import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
