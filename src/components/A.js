import React, { useEffect, useState } from "react";
import { sub, pub } from "./pubsub";

function A() {
  let [notification, setNotification] = useState("");
  useEffect(() => {
    sub(text => {
      console.log(text);
      setNotification(text);
    });
  }, []);

  return <div>A got notification: {notification}</div>;
}

export default A;
