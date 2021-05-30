import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "./Sorter.module.scss";
import {AnimateSharedLayout, motion} from "framer-motion";

interface SorterProps {
  activeSort: "asc" | "desc" | "shuffle";
  setActiveSort: Dispatch<SetStateAction<"asc" | "desc" | "shuffle">>;
}

export const Sorter: FC<SorterProps> = ({ activeSort, setActiveSort }) => {
	return (
		<AnimateSharedLayout>
			<div className="mt-5 flex justify-center">
				<div className="mr-10">
					<button
						className="focus:outline-none"
						onClick={() => setActiveSort("asc")}
					>
          ascendent sort
					</button>
					{activeSort === "asc" && <div className={styles.underline} />}
				</div>
				<div>
					<button
						className="focus:outline-none"
						onClick={() => setActiveSort("desc")}
					>
          descendent sort
					</button>
					{activeSort === "desc" && <div className={styles.underline} />}
				</div>
				<div className="ml-10">
					<button
						className="focus:outline-none"
						onClick={() => setActiveSort("shuffle")}
					>
          shuffle
					</button>
					{activeSort === "shuffle" && <div className={styles.underline} />}
				</div>
			</div>
		</AnimateSharedLayout>
	);
};
