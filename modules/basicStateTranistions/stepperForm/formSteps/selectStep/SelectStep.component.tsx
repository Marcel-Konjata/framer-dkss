import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { FC, useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import styles from "./SelectStep.module.scss";

interface IPharmacySelect {
	selectedAddress: string;
	addresses: string[];
	setAddressSelect: (value: string) => void;
}

const accordionVariant: Variants = {
	initial: { height: 0 },
	animate: { height: "auto" },
	exit: { height: 0 },
};

const SelectStepComponent: FC<IPharmacySelect> = ({
	selectedAddress,
	addresses,
	setAddressSelect,
}) => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const handleSelect = (value: string) => {
		setAddressSelect(value);
		setIsOpenMenu(false);
	};

	return (
		<div>
			<h2>Vyberte si možnost</h2>
			<motion.ul className={styles.styledSelect}>
				<li
					className={styles.selectDefault}
					onClick={() => setIsOpenMenu((state) => !state)}
				>
					{selectedAddress}{" "}
					<span>
						<RiArrowDownSFill />
					</span>
				</li>
				<AnimatePresence>
					{isOpenMenu && (
						<motion.div
							className={styles.styledMenu}
							variants={accordionVariant}
							initial="initial"
							animate="animate"
							exit="exit"
							style={{ overflow: "hidden" }}
						>
							{addresses.map((address) => (
								<li onClick={() => handleSelect(address)} key={address}>
									{address}
								</li>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.ul>
		</div>
	);
};

export default SelectStepComponent;

