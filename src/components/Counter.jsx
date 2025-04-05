import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let intrvl;
    if (isCounting) {
      intrvl = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intrvl);
  }, [isCounting]);

  const toggleCounting = () => {
    setIsCounting((prevState) => !prevState);
  };

  const resetCounter = () => {
    setCounter(0);
    setIsCounting(true);
  };

  return (
    <div className="text-center mt-4">
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="primary" className="me-3" onClick={toggleCounting}>
          {isCounting ? "STOP" : "CONTINUE"}
        </Button>
        <Button variant="warning" className="text-light" onClick={resetCounter}>
          RESET
        </Button>
      </div>
    </div>
  );
}

export default Counter;
