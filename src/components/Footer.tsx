import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="font-serif text-xl text-cream hover:text-amber transition-colors">
              First Love Fellowship
            </Link>
            <p className="text-sm text-cream/50 mt-1">
              Gathered around Jesus. Defined by love.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/about" className="hover:text-cream transition-colors">About</Link>
            <Link href="/beliefs" className="hover:text-cream transition-colors">Beliefs</Link>
            <Link href="/gatherings" className="hover:text-cream transition-colors">Gatherings</Link>
            <Link href="/contact" className="hover:text-cream transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="border-t border-cream/10 mt-8 pt-8 text-center text-sm text-cream/40">
          <p>© 2025 First Love Fellowship · Lincoln, California · thefirstlovefellowship.com</p>
        </div>
      </div>
    </footer>
  );
}
