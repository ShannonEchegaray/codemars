import "./globals.css";
import localFont from 'next/font/local';

const clashDisplay = localFont({
  src: '../../public/ClashDisplay.ttf',
  display: 'swap',
})

export const metadata = {
	title: "CodeMars | Inicio",
	description: "Diseñando la web del futuro hoy.",
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
		viewportFit: 'cover',
	},
	themeColor: '#D54011',
	twitter: {
    card: 'summary_large_image',
    title: 'CodeMars',
    description: 'Diseñando la web del futuro hoy.',
		site: '@CodeMarsStudio',
    // siteId: '1467726470533754880',
    creator: '@linuxmobileok',
    // creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
  },
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
