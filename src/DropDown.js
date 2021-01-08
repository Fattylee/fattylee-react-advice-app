import React, { Fragment, useState, useEffect, useRef } from "react";

const testCookie = () => {
  let isCookieEnable = navigator.cookieEnabled;
  if (typeof navigator.cookieEnabled === "undefined" && !isCookieEnable) {
    document.cookie = "abu=lulu";
    const getCookie = document.cookie.includes("abu");
    isCookieEnable = !!getCookie;
  }
  console.log(typeof isCookieEnable, isCookieEnable);
};
const DropDown = () => {
  const [color, setColor] = useState("");
  const selectRef = useRef();

  useEffect(() => {
    const colorValue = document.cookie
      ?.split("; ")
      ?.find((e) => e.includes("color"))
      ?.split("=")[1];

    if (colorValue) {
      setColor(colorValue);
      selectRef.current.value = colorValue;
    }
    testCookie();
  }, []);

  useEffect(() => {
    document.cookie = `color=${color};max-age=${60 * 60 * 24 * 30}`;
  });

  const handleOnSelect = (e) => {
    setColor(e.target.value);
  };

  return (
    <Fragment>
      <div
        id="dropdown"
        style={{ background: [color], textTransform: "capitalize" }}
      >
        <select id="" ref={selectRef} name="" onChange={handleOnSelect}>
          <option value="">Select Option</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="crimson">Crimson</option>
        </select>
        <h2 style={{ color: "white" }}>{color}</h2>
      </div>
    </Fragment>
  );
};

export default DropDown;
