import React, { useEffect, useState } from "react";
import { sub, pub } from "./pubsub";

function B() {
  let [notification, setNotification] = useState("");
  useEffect(() => {
    sub(text => {
      console.log(text);
      setNotification(text);
    });
  }, []);

  return <div>B got notification: {notification}</div>;
}

export default B;
