import React from "react";
import PlanosCard from "../components/PlanosCard/index";
import Title from "./../components/Title/index";

function Planos() {
  return (
    <div>
      <Title title={"Planos"} text={"Veja abaixo os planos disponíveis:"} />
      {<PlanosCard />}
    </div>
  );
}

export default Planos;
