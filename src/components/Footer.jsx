import Divider from "./Divider";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="text-center flex flex-col md:flex-row items-center justify-center gap-0 md:gap-2 py-5 md:py-0">
        <p>&copy; {new Date().getFullYear()} {import.meta.env.VITE_AUTHOR}</p>

        <Divider />
        <p>All rights reserved.</p>
        <Divider />

        <p className="flex items-center gap-1">Developed by
          <a
            href="http://sakibahmed.live"
            target="_blank"
            rel="noopener noreferrer"
            className="gradText"
          >{import.meta.env.VITE_DEVELOPER}</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
