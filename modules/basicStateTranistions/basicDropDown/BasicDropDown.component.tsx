import React, { FC, useReducer, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {FoodActions, selectedItemsInitState, selectedItemsReducer} from "./exampleReducer";
import styles from "./BasicDropdown.module.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import DropItem from "./DropItem.component";

const food = {
	deserts: ["vanilkova zmrzlina", "coko muffin", "cheezCake"],
	hlavniChod: ["jehneci kotlety", "salamova pizza", "angus steak"],
	priloha: ["hranolky", "knedlik", "cibulove krouzky"],
};

const dropDownVariants: Variants = {
	out: {
		opacity: 0,
		y: -20,
		x: 10,
	},
	in: { opacity: 1, y: 0, x: 0 },
};

const BasicDropDown: FC = () => {
	const [isExpandedDropdown, setIsExpandedDropdown] = useState(false);
	const [items, dispatchItems] = useReducer(
		selectedItemsReducer,
		selectedItemsInitState
	);

	return (
		<div className={"relative"}>
			<button
				className={`${styles.dropButton} shadow block border py-2 px-5`}
				onClick={() => setIsExpandedDropdown((s) => !s)}
			>
				<AnimatePresence>
					{isExpandedDropdown ? (
						<motion.span>zavřít</motion.span>
					) : (
						<motion.span className={"mr-2 text-md"}>vybrat jidlo</motion.span>
					)}
				</AnimatePresence>
				<motion.div className={"ml-auto"}>
					<AiFillPlayCircle size={20} />
				</motion.div>
			</button>

			<AnimatePresence initial={false}>
				{isExpandedDropdown && (
					<motion.div
						variants={dropDownVariants}
						animate="in"
						exit="out"
						initial="out"
						className={`${styles.dropBody} shadow-lg`}
					>
						<div className={styles.foodSection}>
							{food.hlavniChod.map((item) => (
								<DropItem
									key={item}
									item={item}
									isChecked={items.hlavniChod?.includes(item)}
									onClick={() =>
										dispatchItems({ type: FoodActions.addHlavniChod, payload: item })
									}
								/>
							))}
						</div>
						<div className={styles.foodSection}>
							{food.priloha.map((item) => (
								<DropItem
									key={item}
									item={item}
									isChecked={items.priloha?.includes(item)}
									onClick={() =>
										dispatchItems({ type: FoodActions.addPriloha, payload: item })
									}
								/>
							))}
						</div>
						<div className={styles.foodSection}>
							{food.deserts.map((item) => (
								<DropItem
									key={item}
									item={item}
									isChecked={items.desert?.includes(item)}
									onClick={() => dispatchItems({type: FoodActions.addDesert, payload: item})}
								/>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default BasicDropDown;
