import "./globals.css";
import localFont from 'next/font/local';

const clashDisplay = localFont({
  src: '../../public/ClashDisplay.ttf',
  display: 'swap',
})

export const metadata = {
	title: "CodeMars | Inicio",
	description: "Diseñando la web del futuro, hoy.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={clashDisplay.className}>
			<body className="bg-brand-dark text-brand-light overflow-x-hidden">{children}</body>
		</html>
	);
}
