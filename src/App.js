import React, { useState, useEffect } from "react";
import useFetch from "./useFetch.js";

export default function App() {
  const [settings, setSettings] = useState({});

  const { get } = useFetch("https://react-tutorial-demo.firebaseio.com/");

  useEffect(() => {
    get("settings.json")
      .then((res) => setSettings(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <p>
      Welcome {settings.type}. <br />
      You have {settings.push_notifications ? "enabled" : "disabled"} push
      notifications and {settings.dark_mode ? "enabled" : "disabled"} dark mode.
    </p>
  );
}
