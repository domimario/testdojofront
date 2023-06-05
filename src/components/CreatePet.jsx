import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreatePet = (props) => {
  const navigate = useNavigate();

  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [petSkill1, setPetSkill1] = useState("");
  const [petSkill2, setPetSkill2] = useState("");
  const [petSkill3, setPetSkill3] = useState("");
  const [validation, setValidation] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pet", {
        petName,
        petType,
        petDescription,
        petSkill1,
        petSkill2,
        petSkill3,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate(`/`);
      })
      .catch((err) => {
        if (err.response.data.error === "Pet name must be unique") {
          setValidation({ petName: { message: "Pet name must be unique" } });
        } else {
          setValidation(err.response.data.errors);
        }
      });
  };

  return (
    <>
      <div>
        <div className="inline-con">
          <h1>Know a pet needing a home</h1>
          <Link to={`/`}>back to home</Link>
        </div>

        <form onSubmit={onSubmitHandler}>
          <div className="big-form">
            <div className="left-con">
              {" "}
              <div class=" col-12">
                <label>Pet Name</label>
                <p> {validation.petName ? validation.petName.message : ""}</p>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setPetName(e.target.value)}
                />
              </div>
              <div class="form-group col-md-12">
                <label>Pet Type</label>
                <p> {validation.petType ? validation.petType.message : ""}</p>
                <input
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
                  type="text"
                  class="form-control"
                  onChange={(e) => setPetSkill1(e.target.value)}
                />
              </div>
              <div class="form-group col-md-12">
                <label>Pet Skill 2</label>

                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => setPetSkill2(e.target.value)}
                />
              </div>
              <div class="form-group col-md-12">
                <label>Pet Skill 3</label>

                <input
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

export default CreatePet;
