import React, { FC, useState } from "react";
import styles from "./Slider.module.scss";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useThrottledCallback } from "use-debounce";

type directionType = "left" | "right";

const INDEX_LIMIT = 3;

const variants: Variants = {
	//the custom property is passed down into variant as function see #https://www.framer.com/api/motion/animate-presence/#animatepresenceprops.custom
	initial: (direction: directionType) => ({
		x: direction === "right" ? "-100%" : "100%",
	}),
	animate: {
		x: "0%",
	},
	exit: (direction: directionType) => ({
		x: direction === "right" ? "100%" : "-100%",
	}),
};

export const Slider: FC = () => {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [direction, setDirection] = useState<directionType>("right");

	const handleLeftButton = () => {
		setDirection("left");
		if (currentIndex === 1) {
			setCurrentIndex(INDEX_LIMIT);
			return;
		}
		setCurrentIndex((state) => state - 1);
	};
	const handleRightButton = () => {
		setDirection("right");
		if (currentIndex === INDEX_LIMIT) {
			setCurrentIndex(1);
			return;
		}
		setCurrentIndex((state) => state + 1);
	};

	const left = useThrottledCallback(handleLeftButton, 310);
	const right = useThrottledCallback(handleRightButton, 310);

	return (
		<div className="flex flex-col">
			<div
				className={`${styles.sliderContainer} shadow-md relative flex items-center justify-center`}
			>
				<button
					className={`shadow-md p-2 rounded-lg ${styles.button} ${styles.left}`}
					onClick={left}
				>
					<BiLeftArrow size={20} />
				</button>
				<button
					className={`shadow-md p-2 rounded-lg ${styles.button} ${styles.right}`}
					onClick={right}
				>
					<BiRightArrow size={20} />
				</button>
				<div className={`overflow-hidden relative ${styles.imageWrapper}`}>
					{/*the custom property will pass down state of your choise to set condition in animation on dom exiting, hence exiting animation is out of react completely this is necessary to remembr*/}
					<AnimatePresence initial={false} custom={direction}>
						{currentIndex === 1 && (
							<motion.div
								custom={direction}
								variants={variants}
								key={1}
								initial="initial"
								animate="animate"
								exit="exit"
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className={styles.imageContainer}
								style={{ backgroundImage: "url(\"/blonde.jpg\")" }}
							/>
						)}

						{currentIndex === 2 && (
							<motion.div
								custom={direction}
								key={2}
								variants={variants}
								initial="initial"
								animate="animate"
								exit="exit"
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className={styles.imageContainer}
								style={{ backgroundImage: "url(\"/brunnette.jpg\")" }}
							/>
						)}

						{currentIndex === 3 && (
							<motion.div
								custom={direction}
								key={3}
								variants={variants}
								initial="initial"
								animate="animate"
								exit="exit"
								className={styles.imageContainer}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								style={{ backgroundImage: "url(\"/redhead.jpg\")" }}
							/>
						)}
					</AnimatePresence>
				</div>
			</div>
			<h5 className="mt-6">
				{currentIndex}/{INDEX_LIMIT}
			</h5>
		</div>
	);
};
