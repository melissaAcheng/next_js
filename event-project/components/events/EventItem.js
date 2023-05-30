import Link from "next/link";
import React from "react";

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
		<li>
			{/* <img src={"/" + image} alt={title} /> */}
			<div>
				<div>
					<h2>{title}</h2>
					<div>
						<time>{humanReadableDate}</time>
					</div>
					<div>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div>
					<Link href={"/events/" + id}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
