import styles from "./InputStep.module.scss";
import React, { Dispatch, FC, SetStateAction } from "react";

interface IReservationForm {
	name: string;
	surname: string;
	socialSecurity: string;
	amendedMessage: string;
	phoneNumber: string;
	setName: Dispatch<SetStateAction<string>>;
	setSurname: Dispatch<SetStateAction<string>>;
	setSocialSecurity: Dispatch<SetStateAction<string>>;
	setAmendedMessage: Dispatch<SetStateAction<string>>;
	setPhoneNumber: Dispatch<SetStateAction<string>>;
}

const InputStepComponent: FC<IReservationForm> = ({
	name,
	surname,
	amendedMessage,
	socialSecurity,
	setName,
	setAmendedMessage,
	setSocialSecurity,
	setSurname,
	phoneNumber,
	setPhoneNumber,
}) => {
	return (
		<div>
			<h2>Zadajte Vaše osobné údaje</h2>
			<form className={styles.styledForm} id="form">
				<div className={styles.nameFields}>
					<div className={styles.nameGroup}>
						<label htmlFor="name">Jmeno</label>
						<input
							type="text"
							name="name"
							required
							min={2}
							id="name"
							placeholder="Meno"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className={styles.nameGroup}>
						<label htmlFor="prijimeni">Prijimeni</label>
						<input
							type="text"
							required
							minLength={2}
							name="prijimeni"
							id="prijimeni"
							placeholder="Prijimeni"
							value={surname}
							onChange={(e) => setSurname(e.target.value)}
						/>
					</div>
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="rodne">Rodné číslo</label>
					<input
						type="text"
						required
						name="rodne"
						id="rodne"
						minLength={5}
						placeholder="Rodné číslo"
						value={socialSecurity}
						onChange={(e) => setSocialSecurity(e.target.value)}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="tel">Telefónne číslo</label>
					<input
						required
						type="text"
						name="tel"
						minLength={6}
						id="tel"
						placeholder="Telefónne číslo"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="message">Správa</label>

					<textarea
						className={styles.arreaText}
						onChange={(e) => setAmendedMessage(e.target.value)}
						value={amendedMessage}
						name="message"
						id="message"
					/>
				</div>
			</form>
		</div>
	);
};

export default InputStepComponent;
