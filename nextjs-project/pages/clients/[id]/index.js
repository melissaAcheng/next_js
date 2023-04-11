import { useRouter } from "next/router";
import Link from "next/link";

export default function ClientProjectsPage() {
	const router = useRouter();
	console.log(router.query);

	function loadProjectHandler() {
		// load data...
		router.push(`/clients/${router.query.id}/projecta`);
	}

	return (
		<div>
			<h1>The Projects of Client Id: {router.query.id}</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
			<Link href="/clients">Back</Link>
		</div>
	);
}
