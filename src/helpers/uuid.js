const uniqueID = () =>
  Array(30)
    .fill(0)
    .map((item) => ((Math.random() * 36) | 0).toString(36))
    .join("");

export default uniqueID;
