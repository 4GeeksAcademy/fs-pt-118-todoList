import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SemaforoHolder from "./semaforoHolder.jsx";
import Semav2 from "./semav2.jsx";
import Formulario from "./formulario.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			


			<Formulario/>















			<SemaforoHolder />
			<Semav2/>
		</div>
	);
};

export default Home;