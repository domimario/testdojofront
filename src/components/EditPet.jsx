import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
const EditPet = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [update, setUpdate] = useState(true);
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [petSkill1, setPetSkill1] = useState("");
  const [petSkill2, setPetSkill2] = useState("");
  const [petSkill3, setPetSkill3] = useState("");
  const [validation, setValidation] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet/" + id)
      .then((res) => {
        console.log(res.data);
        const petData = res.data;
        setPetName(petData.petName);
        console.log("PetName" + petName);
        setPetType(petData.petType);
        setPetDescription(petData.petDescription);
        setPetSkill1(petData.petSkill1);
        setPetSkill2(petData.petSkill2);
        setPetSkill3(petData.petSkill3);
        setUpdate(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8000/api/pet/` + id, {
        petName,
        petType,
        petDescription,
        petSkill1,
        petSkill2,
        petSkill3,
      })
      .then((res) => {
        console.log(res);
        navigate(`/`);
      })
      .catch((err) => {
        setError(err.response.data.errors.petName.message);
      });
  };
  return (
    <>
      <div>
        <div className="inline-con">
          <h4>Edit garfield</h4>
          <Link to={`/`}>back to home</Link>
        </div>

        <form onSubmit={updateHandler}>
          <div className="big-form">
            <div className="left-con">
              {" "}
              <div class=" col-12">
                <label>Pet Name</label>
                <p> {validation.petName ? validation.petName.message : ""}</p>
                <input
                  value={petName}
                  type="text"
                  class="form-control"
                  onChange={(e) => setPetName(e.target.value)}
                />
              </div>
              <div class="form-group col-md-12">
                <label>Pet Type</label>
                <p> {validation.petType ? validation.petType.message : ""}</p>
                <input
                  value={petType}
                  type="text"
                  class="form-control"
                  onChange={(e) => setPetType(e.target.value)}
                />
              </div>
              <div class="form-group col-md-12">
                <label>Pet Description</label>
                <p>
                  {" "}
                  {validation.petDescription
                    ? validation.petDescription.message
                    : ""}
                </p>
                <input
                  value={petDescription}
                  type="text"
                  class="form-control"
                  onChange={(e) => setPetDescription(e.target.value)}
                />
              </div>
              <div>
                {" "}
                <button type="submit" class="btn btn-primary">
                  ADD Pet
                </button>
              </div>
            </div>
            <div className="right-con">
              <h5>SKILLS</h5>
              <div class="form-group col-md-12">
                <label>Pet Skill 1</label>

                <input
                  value={petSkill1}
                  type="text"
                  class="form-control"
                  onChange={(e) => setPetSkill1(e.target.value)}
                />
              </div>
              <div class="form-group col-md-12">
                <label>Pet Skill 2</label>

                <input
                  value={petSkill2}
                  type="text"
                  class="form-control"
                  onChange={(e) => setPetSkill2(e.target.value)}
                />
              </div>
              <div class="form-group col-md-12">
                <label>Pet Skill 3</label>

                <input
                  value={petSkill3}
                  type="text"
                  class="form-control"
                  onChange={(e) => setPetSkill3(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPet;
