import React, { FC, useState } from "react";
import {motion, Transition} from "framer-motion";

const greenColor = "rgba(52, 211, 153,1)";
const greyColor = "rgba(229, 231, 235,1)";

export const Switch: FC = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<motion.div

			animate={{ backgroundColor: isActive ? greenColor : greyColor }}
			className={`w-16 ring-1 ring-offset-gray-900 h-8 rounded-2xl flex ${
				isActive ? "justify-end" : "justify-start"
			}`}
			onClick={() => setIsActive((state) => !state)}
		>
			<motion.div layout className="bg-white w-8 h-8 rounded-full self-center" />
		</motion.div>
	);
};
