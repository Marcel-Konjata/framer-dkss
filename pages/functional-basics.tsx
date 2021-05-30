import {NextPage} from "next";
import React from "react";
import {BasicCollapsible} from "../modules/functionalBasics/basicCollapsible/BasicCollapsible.component";
import {CheckBox} from "../modules/functionalBasics/checkBox/CheckBox";
import {FormField} from "../modules/functionalBasics/formField/FormField";
import {RadioButtonsGroup} from "../modules/functionalBasics/radio/RadioButtonsGroup";
import {Switch} from "../modules/functionalBasics/switch/Switch";

const FunctionalBasics: NextPage = () => {
	return (
		<div>
			<h2 className="text-center mt-10 mb-8 uppercase ">functional basics</h2>
			<div className="grid grid-cols-3 max-w-screen-xl mx-auto gap-5">
				<div className="shadow-lg flex flex-col items-center py-7">
					<h4 className="my-4 text-gray-500 text-sm">basic switch</h4>
					<Switch/>
				</div>

				<div className="shadow-lg flex flex-col items-center py-7">
					<h4 className="my-4 text-gray-500 text-sm">svg animation</h4>
					<CheckBox/>
				</div>

				<div className="shadow-lg flex flex-col items-center py-7">
					<h4 className="my-4 text-gray-500 text-sm">
						input text placeholder animation
					</h4>
					<FormField/>
				</div>
				<div className="shadow-lg flex flex-col items-center py-7">
					<h4 className="my-4 text-gray-500 text-sm">animating height</h4>
					<BasicCollapsible/>
				</div>
				<div className="shadow-lg flex flex-col items-center py-7">
					<h4 className="my-4 text-gray-500 text-sm">
						basic two factor animation
					</h4>
					<RadioButtonsGroup/>
				</div>
			</div>
		</div>
	);
};

export default FunctionalBasics;
