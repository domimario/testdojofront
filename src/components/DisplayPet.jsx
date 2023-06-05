import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const DisplayPet = (props) => {
  const [pet, setPet] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pet`)
      .then((res) => {
        console.log(res.data);
        setPet(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="inline-con">
        {" "}
        <h4>These pets are lookling for a good home</h4>
        <Link to={`/pets/new`}>
          {" "}
          <p>add a pet to a shelter</p>
        </Link>
      </div>

      <div>
        <table className="tab-con">
          <thead>
            <tr>
              <th scope="col" className="th-1">
                Name
              </th>
              <th scope="col" className="th-1">
                Type
              </th>
              <th scope="col" className="th-1">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {pet.map((pet) => (
              <tr key={pet._id}>
                <td className="td-1">{pet.petName}</td>
                <td className="td-1">{pet.petType}</td>
                <td className="td-1">
                  <Link to={`/pets/${pet._id}`}>details</Link> |{" "}
                  <Link to={`/pets/${pet._id}/edit`}>edit </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayPet;
