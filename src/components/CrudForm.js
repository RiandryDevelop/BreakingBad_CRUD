import React, { useState, useEffect } from "react";

const initialForm = {
  id: 0,
  name: "",
  img: "",
  birthday: 0,
  occupation: "",
  status: "",
  nickname: "",
  portrayed: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.img]: e.target.value,
      [e.target.birthday]: e.target.value,
      [e.target.occupation]: e.target.value,
      [e.target.status]: e.target.value,
      [e.target.nickname]: e.target.value,
      [e.target.portrayed]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      alert("Incomplete Data");
      return;
    }
    if (!form.img) {
      alert("Incomplete Data");
      return;
    }
    if (!form.birthday) {
      alert("Incomplete Data");
      return;
    }
    if (!form.occupation) {
      alert("Incomplete Data");
      return;
    }
    if (!form.status) {
      alert("Incomplete Data");
      return;
    }
    if (!form.nickname) {
      alert("Incomplete Data");
      return;
    }
    if (!form.portrayed) {
      alert("Incomplete Data");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Edit a Character " : "Add a Character"}</h3>
      <form onSubmit={handleSubmit} className="grid-explicit">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          onChange={handleChange}
          value={form.status}
        />
        <input
          type="text"
          name="img"
          placeholder="Img"
          onChange={handleChange}
          value={form.img}
        />
        <input
          type="text"
          name="birthday"
          placeholder="Birthday"
          onChange={handleChange}
          value={form.birthday}
        />
        <input
          type="text"
          name="portrayed"
          placeholder="Portrayed"
          onChange={handleChange}
          value={form.portrayed}
        />
        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          onChange={handleChange}
          value={form.occupation}
        />
        <input
          type="text"
          name="nickname"
          placeholder="Nickname"
          onChange={handleChange}
          value={form.nickname}
        />
        <input type="submit" value="Send" />
        <input type="reset" value="Clean" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
