import React, { FC, ReactNode } from "react";
import Link from "next/link";
import style from "./Card.module.scss";
import { motion } from "framer-motion";

interface CardProps {
  text: string;
  urlToRedirect: string;
  icon: ReactNode;
}

const Card: FC<CardProps> = ({ text, urlToRedirect, icon }) => {
	return (
		//layout indexes first and last state in grid/flex positions only limitation is that with this simple set all elements needs to be in dom
		// for effect shuffle card on index page vie buttons
		<motion.div layout className="flex h-60 w-60 shadow flex-col m-auto bg-white">
			<div className={`${style.iconWrapper} shadow`}>{icon}</div>

			<p className={style.cardText}>{text}</p>

			<Link href={urlToRedirect}>
				<button className={style.cardButton}>go there</button>
			</Link>
		</motion.div>
	);
};

export default Card;
