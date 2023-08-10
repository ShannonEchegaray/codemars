import Image from "next/image";

export default function Hero() {
	return (
		<section className="flex flex-col py-16 h-screen">
			<div className="relative">
				<div className="flex relative [&>div]:whitespace-nowrap [&>div>h1]:leading-none [&>div>h1]:text-9xl [&>div>h1]:uppercase [&>div>h1]:font-black [&>div>h1]:[word-spacing:30px]">
					<div className="animate-marquee">
						<h1 className="">
							<span className="bg-clip-text text-transparent bg-gradient-to-tr from-brand-red to-brand-fuchsia">
								404{" "}
							</span>
							Exploración fallida.‏‏‎ ‎
						</h1>
					</div>
					<div className="animate-marquee2 absolute top-0">
						<h1 className="">
							<span className="bg-clip-text text-transparent bg-gradient-to-tr from-brand-red to-fuchsia-600">
								{" "}404{" "}
							</span>
							Exploración fallida.‏‏‎ ‎
						</h1>
					</div>
				</div>
				<Image
					src="/heroimage.webp"
					width={300}
					height={300}
					alt="Mars Planet image"
					className="z-10 absolute top-12 right-48 drop-shadow drop-shadow-xl drop-shadow-color-white/5"
				/>
				<div className="z-20 absolute top-[3.4rem] right-[12.4rem] rounded-full w-[288px] h-[288px] bg-gradient-to-br from-black via-black/20 to-white/5"></div>
			</div>
		</section>
	);
}
