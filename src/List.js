import React, { useState } from "react";
import uniqueID from "./helpers/uuid";

const List = () => {
  const [surahs, setSurahs] = useState([{ id: uniqueID(), surah: "Faathia" }]);
  const [val, setVal] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const deleteSurah = (e) => {
    const id = e.target.getAttribute("data-id");
    setSurahs((prevSurahs) =>
      prevSurahs.filter(({ id: itemID }) => itemID !== id)
    );
  };

  const addSurah = (e) => {
    e.preventDefault();
    if (!val.trim()) return;

    if (!isEdit) {
      setSurahs((prevSurah) => [...prevSurah, { id: uniqueID(), surah: val }]);
    } else {
      const index = surahs.findIndex(({ id }) => id === editId);
      const { id } = surahs[index];
      surahs.splice(index, 1, { id, surah: val });
    }

    setVal("");
    setEdit(false);
  };

  const editSurah = (e) => {
    const id = e.target.parentElement.getAttribute("data-id");
    const index = surahs.findIndex(({ id: itemID }) => itemID === id);
    const { surah } = surahs[index];
    setEdit(true);
    setEditId(id);
    setVal(surah);
  };

  const itemsList = surahs.map(({ id, surah }) => (
    <li data-id={id} onClick={deleteSurah} key={id}>
      {surah} <span onClick={editSurah}>edit</span>
    </li>
  ));

  const handleChange = (e) => {
    const inputVal = e.target.value;
    setVal(() => inputVal);
  };

  return (
    <>
      <h1 className="list">My List of Favourites Surah</h1>
      <form onSubmit={addSurah}>
        <input type="text" value={val} onChange={handleChange} />
        <button>{!isEdit ? "Add Surah" : "Edit Surah"}</button>
      </form>
      <ul id="list-of-surahs">{itemsList}</ul>
    </>
  );
};

export default List;
