import styles from "./page.module.css";
import { getFeaturedEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

export default function Home() {
	const featuredEvents = getFeaturedEvents();
	// console.log(featuredEvents);

	return (
		<main className={styles.main}>
			<EventList items={featuredEvents} />
		</main>
	);
}
