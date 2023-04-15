import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Current Time: {time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;
