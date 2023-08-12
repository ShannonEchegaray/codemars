import Hero from '@/components/404Hero'
import Contact from '@/components/Contact'

export const metadata = {
	title: "CodeMars | 404 Not Found",
	description: "Diseñando la web del futuro hoy.",
};

export default function NotFound() {
  return (
    <main className="">
      <Hero />
      <Contact />
    </main>
  )
}
