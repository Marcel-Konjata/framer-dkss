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
		<div className="flex h-60 w-60 shadow flex-col m-auto bg-white">
			<div className={`${style.iconWrapper} shadow`}>{icon}</div>

			<p className={style.cardText}>{text}</p>

			<Link href={urlToRedirect}>
				<button className={style.cardButton}>go there</button>
			</Link>
		</div>
	);
};

export default Card;
