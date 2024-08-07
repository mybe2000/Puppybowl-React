import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPuppy() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.imageUrl) {
      formData.imageUrl = "";
    }
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/players`, formData)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          alert("successfully added");
          navigate("/");
        }
      })

      .catch((err) => console.log(err));
    console.log(formData);
  };

  return (
    <>
      <form className="add-puppy-form" onSubmit={handleSubmit}>
        <label>
          Player's Name:
          <input type="text" name="name" onChange={handleInput} />
        </label>
        <label>
          Breed:
          <input type="text" name="breed" onChange={handleInput} />
        </label>
        <label>
          Status:
          <select name="status" defaultValue="bench" onChange={handleInput}>
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>
        <label>
          Image Url:
          <input type="text" name="imageUrl" onChange={handleInput} />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default AddPuppy;
