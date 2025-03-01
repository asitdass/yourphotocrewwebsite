import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#181818] text-[#F8F2EB] p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">YourPhotoCrew</Link>
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-[#B64F1D]">About Us</Link>
          <Link href="/services" className="hover:text-[#B64F1D]">Services</Link>
          <Link href="/gallery" className="hover:text-[#B64F1D]">Gallery</Link>
          <Link href="/contact" className="hover:text-[#B64F1D]">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}