import React from "react";
import { NextPage } from "next";
import MotionDateCards from "../modules/layoutBasics/motionDateCards/MotionDateCards";
import ToolTipBar from "../modules/layoutBasics/tool-tip/ToolTipBar";
import { Simple } from "../modules/layoutBasics/morphingCards/Simple";
import Elegant from "../modules/layoutBasics/morphingCards/Elegant";

const MotionLayout: NextPage = () => {
	return (
		<div className={"flex flex-col"}>
			<div className={"my-32"}>
				<MotionDateCards />
			</div>
			<div className={"my-32"}>
				<ToolTipBar />
			</div>
			<div style={{ marginTop: "340px" }}>
				<h1>next awsome thing</h1>
			</div>
		</div>
	);
};

export default MotionLayout;
