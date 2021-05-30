import React from "react";
import { motion, useViewportScroll } from "framer-motion";
import { NextPage } from "next";
import styled from "styled-components";
import SvgScrollWithListener from "../modules/ScrollComponents/SvgScrollWithListener";

const StyledH1 = styled(motion.h1)`
	margin: auto;
	text-align: center;
`;

const StickyProgressBar = styled(motion.div)`
	position: sticky;
	top: 0;
	left: 0;
`;

const ProgressLine = styled(motion.div)`
	width: 100%;
	height: 2px;
	background: blue;
`;

const Container = styled.div`
	min-height: 200vh;
`;

const ScrollProgress = styled.div`
	position: fixed;
	bottom: 120px;
	right: 20px;
`;

const ProgressScrollPage: NextPage = () => {
	const { scrollYProgress } = useViewportScroll();

	console.log({ scrollYProgress });
	return (
		<Container>
			<StickyProgressBar>
				<StyledH1>progress scroll</StyledH1>
				<ProgressLine
					style={{ scaleX: scrollYProgress, transformOrigin: "0 50% 0" }}
				/>
			</StickyProgressBar>
			<ScrollProgress>
				<SvgScrollWithListener />
			</ScrollProgress>
		</Container>
	);
};

export default ProgressScrollPage;
