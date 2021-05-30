import React, { FC, useReducer, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
	FoodActions,
	selectedItemsInitState,
	selectedItemsReducer,
} from "./exampleReducer";
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
				{/*animated presence highways dom and lets you use transition on exit and enter the dom node, this is mainly used for page transitions*/}
				{/*OR! this is use for very complex steppers like bubbles of filled state 1 - 2 for example on carvago transaction steps icons etc */}
				{/*initial false means that very first animation is skipped, exitBefore enter describes itself*/}
				{/*every single node that u want animate has to have UNIQUE key*/}
				<AnimatePresence exitBeforeEnter={true} initial={false}>
					{isExpandedDropdown ? (
						<motion.span
							key={"close"}
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ x: -10, opacity: 0 }}
						>
							zavřít
						</motion.span>
					) : (
						<motion.span
							key={"pick"}
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ x: -10, opacity: 0 }}
							className={"mr-2 text-md"}
						>
							vybrat jidlo
						</motion.span>
					)}
				</AnimatePresence>
				<motion.div animate={{rotate: isExpandedDropdown ? 90 : 0}} className={"ml-auto"}>
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
										dispatchItems({
											type: FoodActions.addHlavniChod,
											payload: item,
										})
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
										dispatchItems({
											type: FoodActions.addPriloha,
											payload: item,
										})
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
									onClick={() =>
										dispatchItems({
											type: FoodActions.addDesert,
											payload: item,
										})
									}
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
