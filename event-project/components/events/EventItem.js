import Link from "next/link";
import React from "react";
import styles from "./EventItem.module.css";

const EventItem = (props) => {
	console.log("PROPS", props);
	const { title, image, date, location, id } = props;
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const formattedAddress = location.replace(", ", "\n");

	return (
		<li className={styles.item}>
			<img src={"/" + image} alt={title} />
			<div className={styles.content}>
				<div>
					<h2>{title}</h2>
					<div className={styles.date}>
						<time>{humanReadableDate}</time>
					</div>
					<div className={styles.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Link href={"/events/" + id}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
