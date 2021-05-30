import { NextPage } from "next";
import React from "react";
import { Slider } from "../modules/basicStateTranistions/basicSlider/Slider.component";
import { Stepper } from "../modules/basicStateTranistions/stepper/Stepper.component";
import BasicDropDown from "../modules/basicStateTranistions/basicDropDown/BasicDropDown.component";
import StepperForm from "../modules/basicStateTranistions/stepperForm/StepperForm";

const StateTransitionPage: NextPage = () => {
	return (
		<div className="flex flex-col">
			<div className="my-20 ml-14">
				<BasicDropDown />
			</div>
			<div className="my-20">
				<Stepper />
			</div>
			<div className="flex justify-center my-6 mb-11">
				<Slider />
			</div>
			<div className="my-20">
				<StepperForm />
			</div>
		</div>
	);
};

export default StateTransitionPage;
