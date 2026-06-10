"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="flex justify-between items-center px-5 py-4">
        {/* ☰ Burger — موبايل بس */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Logo — وسط على موبايل */}
        <Link href="/" className="flex items-center gap-1">
          <Image src="/toolbox.svg" alt="logo" width={36} height={36} />
          <span className="font-black text-2xl">
            Novi<span className="text-blue-400">Zone</span>
          </span>
        </Link>

        {/* Nav — desktop بس */}
        <nav className="hidden md:flex items-center gap-6 text-2xl">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact Us
          </Link>
        </nav>

        {/* div فاضي عشان اللوجو يبقى في المنتصف على موبايل */}
        <div className="md:hidden w-8" />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col border-t border-gray-800">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact Us" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 border-b border-gray-800 hover:text-blue-400 transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
