import Logo from '@/components/Logo'

export default function Hero() {
	return (
		<div className="relative">
			<div className="relative z-20 [&>*]:mx-auto pt-20 flex flex-col gap-y-4 items-center">
				<h1 className="text-9xl font-black uppercase select-none">C<span><Logo/></span>deMars</h1>
				<p className="font-light text-7xl text-center max-w-3xl">
					Diseñando la web del futuro hoy
				</p>
				<div className="flex items-center justify-center gap-x-4 w-full max-w-2xl my-8 mx-auto [&>a]:w-full [&>a]:bg-transparent [&>a]:outline [&>a]:outline-1 [&>a]:outline-brand-orange [&>a]:rounded-md [&>a]:py-3 [&>a]:px-4 [&>a]:uppercase">
					<a href="/404" className="" rel="noopener noferrer">
						Empezar
					</a>
					<a href="/Nosotros" className="" rel="noopener noferrer">
						Sobre Nosotros
					</a>
				</div>
			</div>
			<div className="bg-brand-orange/70 w-4xl h-30 absolute z-10 inset-x-0 top-72 mx-auto blur-[10rem]"></div>
		</div>
	);
}
