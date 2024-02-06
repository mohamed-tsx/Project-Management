import React from "react";
import AddClientModal from "../Components/AddClientModal";
import Projects from "../Components/Projects";
import Clients from "../Components/Clients";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-5">
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
