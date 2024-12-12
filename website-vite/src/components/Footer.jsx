export default function Footer() {
  return (
    <footer className=" text-white text-center p-10  bg-gray-700 w-full">
      {/* Copyright Section */}
      <p className="mb-2 font-medium">
        &copy; 2024 X-Factors. All Rights Reserved.
      </p>

      {/* Links Section */}
      <div className="mb-2 space-x-4">
        <a href="/privacy-policy" className="text-white hover:underline">
          Privacy Policy
        </a>
        <a href="/terms" className="text-white hover:underline">
          Terms of Service
        </a>
        <a href="/attributes" className="text-white hover:underline">
          Attributes
        </a>
      </div>
    </footer>
  );
}
