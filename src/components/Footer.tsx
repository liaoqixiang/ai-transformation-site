export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} AITransform. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#portfolio" className="hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
