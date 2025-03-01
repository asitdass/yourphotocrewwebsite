export default function Footer() {
    return (
      <footer className="bg-[#181818] text-[#F8F2EB] p-8 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-lg font-bold mb-4">YourPhotoCrew</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-[#B64F1D]">Instagram</a>
            <a href="#" className="hover:text-[#B64F1D]">YouTube</a>
            <a href="#" className="hover:text-[#B64F1D]">WhatsApp</a>
          </div>
          <p className="text-sm">© 2025 YourPhotoCrew. All rights reserved.</p>
        </div>
      </footer>
    );
  }