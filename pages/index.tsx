import Head from "next/head";
import React, { useState } from "react";
import Cards from "../modules/homepage/Cards/Cards.component";
import { Sorter } from "../modules/homepage/sorter/Sorter.component";

export const Home = (): JSX.Element => {
	const [activeSort, setActiveSort] = useState<"asc" | "desc" | "shuffle">(
		"asc"
	);

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Cards sort={activeSort} />
			<Sorter activeSort={activeSort} setActiveSort={setActiveSort} />
		</div>
	);
};

export default Home;
