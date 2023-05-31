import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
	return (
		<Link href={props.link} className={styles.btn}>
			{props.children}
		</Link>
	);
};

export default Button;
