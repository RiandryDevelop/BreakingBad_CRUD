import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, img, id, birthday, occupation, status, nickname, portrayed } = el;
const divStyleWidth = {
  width: "18rem",
};
  
  return (
  <>
  <div className="card"  style={divStyleWidth}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h3 className="card-title">{name}</h3>
    <ul className="list-group list-none">
    <li><h5>Birthday:</h5><p className="card-text">{occupation}</p></li>
    <li><h5>Birthday:</h5><p className="card-text">{birthday}</p></li>
    <li><h5>Status:</h5><p className="card-text">{status}</p></li>
    <li><h5>NickName:</h5><p className="card-text">{nickname}</p></li>
    <li><h5>Portrayed:</h5><p className="card-text">{portrayed}</p>
    </li>
    </ul>
    <button onClick={() => setDataToEdit(el)}>Editar</button>
  <button onClick={() => deleteData(id)}>Eliminar</button>
  </div>
</div>
  </>
  );
};
export default CrudTableRow;
