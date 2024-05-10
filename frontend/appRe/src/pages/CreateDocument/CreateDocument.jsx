import ButtonBack from "../../components/ButtonBack/ButtonBack"
import "./CreateDocument.css"
import { useState } from "react";

export default function CreateDocument(){

    const [name, setName] = useState("")

    const handleInputChange = (event) => {
        setName(event.target.value);
        console.log(name)
    }

    return(
        <div className="container">
            <h2>Create Document</h2>
            <div className="box">
                <div className="input-boxes">
                    <h4>Název</h4>
                    <input type="text" className="input-text" value={name}/>    
                </div>
                <div className="input-boxes">
                    <h4>Vedoucí práce</h4>
                    <input type="text" className="input-text" />
                </div>
                <div className="input-boxes">
                    <h4>Doporučené obory</h4>
                    <input type="text" className="input-text" />
                </div>
                <div className="input-box-abstract">
                    <h4>Abstrakt</h4>
                    <textarea className="abstract" type="text" rows="30"/>
                </div>
                <button className="create-btn" onClick={handleInputChange}>Create</button>
            </div>
            <ButtonBack/>
        </div>
    )
}

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCat } from "../../models/Cat";

export default function CreateDocument() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const cat = await createCat(formData);
    if (cat.status === 201) {
      redirectToSuccessPage(cat.payload._id);
    } else {
      setInfo(cat.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdcat/${id}`);
  };

  return (
    <>
      <h1>Document create</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Zadejte Název"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="legs"
          placeholder="Zadejte Vedoucího práce"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="color"
          placeholder="Zadejte Doporučené obory"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create cat</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}