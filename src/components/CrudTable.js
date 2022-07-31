import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <>
      <h3 className="characters-title">Characters:</h3>
        <div className="grid-responsive">
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <div>
              <h3 colSpan="3">No data</h3>
            </div>
          )}
        
      </div>
    </>
  );
};

export default CrudTable;
