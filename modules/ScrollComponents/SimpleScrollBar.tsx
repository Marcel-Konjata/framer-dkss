import {motion, useTransform, useViewportScroll} from "framer-motion";
import React from "react";
import styled from "styled-components";

const ProgressLine = styled(motion.div)`
	width: 100%;
	height: 2px;
	background: blue;
`;

const SimpleScrollBar = () => {
	const { scrollYProgress } = useViewportScroll();

	return (
		<ProgressLine
			style={{ scaleX: scrollYProgress, transformOrigin: "0 50% 0" }}
		/>
	);
};

export default SimpleScrollBar;
