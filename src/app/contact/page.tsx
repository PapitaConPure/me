import Link from "next/link";

const Contact = () => {
	return (
		<main>
			<section className='header'>
				<h1 className='title'>Contacto</h1>
				<p className='subtitle'>Información para contactarme</p>
			</section>

			<section>
				<Link href="mailto:papitapurecontact@gmail.com" className="text-accent-400 hover:underline">papitapurecontact@gmail.com</Link>
			</section>
		</main>
	);
}

Contact.position = { x: 3, y: 0 };

export default Contact;
