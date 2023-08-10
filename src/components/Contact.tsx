const links = [
	{
		name: "Inicio",
		slug: "/",
	},
	{
		name: "Contacto",
		slug: "contact",
	},
	{
		name: "About",
		slug: "about",
	},
	{
		name: "Blog",
		slug: "blog",
	},
	{
		name: "Servicios",
		slug: "services",
	},
];

export default function Footer() {
	return (
		<footer>
			<div className="grid grid-cols-2 grid-row-2 max-w-5xl mx-auto py-28">
				<div className="col-span-1 w-full flex flex-col gap-y-8 [&>p]:font-light [&>p]:text-4xl max-w-md">
					<h2 className="text-7xl">Contactanos</h2>
					<p>Suscribite a nuestro newletter</p>
					<form className="flex gap-x-3 [&>*]:text-2xl [&>*]:text-brand-green">
						<input
							type="email"
							placeholder="Correo electrónico"
							className="border-b border-brand-green placeholder:text-brand-green/60 py-3 px-5 focus:outline-none"
							style={{ background: "none" }}
						/>
						<span className="text-brand-light">→</span>
					</form>
				</div>
				<div className="grid grid-col-2 grid-row-2 items-start justify-center">
					<section className="row-span-1 grid grid-col-1 grid-row-5 gap-y-1 [&>a]:text-2xl">
						{links.map((link) => (
							<a
								href={link.slug}
								key={link.slug}
								className="text-brand-light hover:text-brand-orange"
							>
								{link.name}
							</a>
						))}
					</section>
					<section className="row-span-1">
						<p>a ver ché, pa cuando el logo?</p>
					</section>
				</div>
				<div className="col-span-1"></div>
			</div>
			<p className="max-w-6xl mx-auto text-center py-2">
				©2023 CODEMARS All rights reserved. Use of this site constitutes
				acceptance of our{" "}
				<span className="hover:text-brand-orange">User Agreement</span> and{" "}
				<span className="hover:text-brand-orange">
					Privacy Policy and Cookie Statement
				</span>
			</p>
		</footer>
	);
}
