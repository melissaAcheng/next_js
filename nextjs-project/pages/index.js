import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.main}>
			<h1>Home Page</h1>
			<ul className={styles.navbar}>
				<li className={styles.link}>
					<Link href="/portfolio">Portfolio</Link>
				</li>
				<li className={styles.link}>
					<Link href="/clients">Clients</Link>
				</li>
			</ul>
		</div>
	);
}
