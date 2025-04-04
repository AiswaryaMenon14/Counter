import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

function Counter() {
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setPaused(false);
    }
  };

  const resetTimer = () => {
    setCount(0);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setPaused(false);
    startTimer();
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setPaused(true);
  };

  const restart = () => {
    startTimer();
  };

  return (
    <div className="text-center mt-4">
      <h1>Counter</h1>
      <h1>{count}</h1>
      <div className="d-flex justify-content-center mt-4">
        {!paused ? (
          <Button variant="primary" className="me-3" onClick={stopTimer}>
            STOP
          </Button>
        ) : (
          <Button variant="primary" className="me-3" onClick={restart}>
            CONTINUE
          </Button>
        )}
        <Button variant="warning" className="text-light" onClick={resetTimer}>
          RESET
        </Button>
      </div>
    </div>
  );
}

export default Counter;
