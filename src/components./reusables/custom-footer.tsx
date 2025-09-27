import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://facebook.com",
    Icon: FaFacebookF,
  },
  {
    href: "https://twitter.com",
    Icon: FaXTwitter,
  },
  {
    href: "https://instagram.com",
    Icon: FaInstagram,
  },
  {
    href: "https://linkedin.com",
    Icon: FaLinkedinIn,
  },
];

const CustomFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-emerald-950 py-6 text-orange-50">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 md:space-y-0">
        <div className="mb-4 flex space-x-4">
          {socialLinks.map(({ href, Icon }) => (
            <a href={href}>
              <Icon size={20} />
            </a>
          ))}
        </div>
        <div className="text-sm opacity-50">
          &copy; {currentYear} adCarrot. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
