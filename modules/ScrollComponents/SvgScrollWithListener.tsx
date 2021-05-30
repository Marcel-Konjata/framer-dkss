import {motion, useTransform, useViewportScroll} from "framer-motion";
import React, {useEffect, useState} from "react";

const SvgScrollWithListener = () => {
	const [isComplete, setIsComplete] = useState(false);
	const {scrollYProgress} = useViewportScroll();
	const inputRange = [0, 0.9];
	const outputValueFromRange = [0, 1];

	const yRange = useTransform(
		scrollYProgress,
		inputRange,
		outputValueFromRange
	);

	useEffect(
		() =>
			yRange.onChange((progressOutputValue) =>
				setIsComplete(progressOutputValue >= 1)
			),
		[yRange]
	);

	return (
		<motion.svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<motion.path
				d="M30 49L50 66L75.5 28"
				stroke="black"
				strokeWidth="2"
				initial={{pathLength: 0}}
				animate={{pathLength: isComplete ? 1 : 0}}
			/>
		</motion.svg>
	);
};

export default SvgScrollWithListener;
