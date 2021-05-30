import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./Sorter.module.scss";
import { AnimateSharedLayout, motion } from "framer-motion";

interface SorterProps {
	activeSort: "asc" | "desc" | "shuffle";
	setActiveSort: Dispatch<SetStateAction<"asc" | "desc" | "shuffle">>;
}

export const Sorter: FC<SorterProps> = ({ activeSort, setActiveSort }) => {
	return (
		//animate shared layout implements algorithm for ALL motion elements with layoutID with same value
		//independently even when they leaves or enters DOM
		<AnimateSharedLayout>
			<div className="mt-5 flex justify-center">
				<div className="mr-10">
					<button
						className="focus:outline-none"
						onClick={() => setActiveSort("asc")}
					>
						ascendent sort
					</button>
					{/*all of this elements are tagged with same layout id this will cause visual animations, the value of id is whatever u like, but must be same*/}
					{activeSort === "asc" && <motion.div layout layoutId={"underline"} className={styles.underline} />}
				</div>
				<div>
					<button
						className="focus:outline-none"
						onClick={() => setActiveSort("desc")}
					>
						descendent sort
					</button>
					{activeSort === "desc" && <motion.div layout layoutId={"underline"} className={styles.underline} />}
				</div>
				<div className="ml-10">
					<button
						className="focus:outline-none"
						onClick={() => setActiveSort("shuffle")}
					>
						shuffle
					</button>
					{activeSort === "shuffle" && <motion.div layout layoutId={"underline"} className={styles.underline} />}
				</div>
			</div>
		</AnimateSharedLayout>
	);
};
