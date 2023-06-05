import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const OnePet = (props) => {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const [update, setUpdate] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet/" + id)
      .then((res) => {
        console.log(res.data);
        setPet(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/pet/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <div className="inline-con">
          {" "}
          <h5>Details about : Garfield</h5>
          <Link to={`/`}>back to home</Link>
        </div>

        <div className="con-bord">
          <p>
            <span className="bold">PET TYPE:</span> {pet.petType}
          </p>

          <p>
            <span className="bold">DESCRIPTION:</span> {pet.petDescription}
          </p>
          <p>
            <label>
              <div className="inline-skill">
                <p>
                  {" "}
                  <span className="bold">SKILLS:</span>
                </p>
                <div>
                  <p>{pet.petSkill1}</p>
                  <p>{pet.petSkill2}</p>
                  <p>{pet.petSkill3}</p>
                </div>
              </div>
            </label>
          </p>

          <button onClick={handleDelete}>Delete Pet</button>
        </div>
      </div>
    </>
  );
};

export default OnePet;
