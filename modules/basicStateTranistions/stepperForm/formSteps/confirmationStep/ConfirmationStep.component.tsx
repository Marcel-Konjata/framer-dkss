import React, { FC } from "react";

import styles from "./ConfirmationStep.module.scss";

interface IConfirmation {
	firstName?: string;
	lastName?: string;
	phoneNumber: string;
	identificationNumber: string;
	note?: string;
	pickupTime: string;
	createdAt: string;
	orderNumber: string;
	address: string;
}

const ConfirmationStepComponent: FC<IConfirmation> = ({
	firstName,
	lastName,
	phoneNumber,
	identificationNumber,
	note,
	createdAt,
	pickupTime,
	address,
	orderNumber,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.messageContainer}>
				<h3>byls jsi oznacen pod # {orderNumber} </h3>

				<p>
				Ses sekac kdyz si vydrzel davat pozor az sem
				</p>

			</div>
			<div className={styles.tableWrapper}>
				<div className={styles.credentialContainer}>
					<h4>Detail</h4>
					<ul>
						<li>
							<span>Čislo: </span> {orderNumber}
						</li>
						<li>
							<span>Datum: </span> {createdAt}
						</li>
						<li>
							<span>Misto: </span> {address}
						</li>
						<li>
							<span>Predpokladaný čas:</span>
							{pickupTime}
						</li>
					</ul>
				</div>
				<div className={styles.credentialContainer}>
					<h4>Osobni údaje</h4>
					<ul>
						<li>
							<span>Jmeno: </span> {firstName}
						</li>
						<li>
							<span>Prijimeni: </span> {lastName}
						</li>
						<li>
							<span>Telefonni cislo: </span> {phoneNumber}
						</li>
						<li>
							<span>Rodné číslo: </span> {identificationNumber}
						</li>
						<li>
							<span>Zpráva: </span> {note}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationStepComponent;
