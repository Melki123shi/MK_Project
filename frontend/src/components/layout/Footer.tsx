import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="flex justify-center gap-24 p-6 bg-gray-200 dark:bg-black/45 py-12 text-gray-800 dark:text-gray-200">
      <div>
        {/* Footer content with social media information and contact with email choice */}
        <h4 className="font-bold text-2xl mb-8">Follow us on social media</h4>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="flex items-center gap-2">
              <Facebook className="text-primary" />
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              <Twitter className="text-primary" />
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              <Instagram className="text-primary" />
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-2xl mb-8">Contact Us</h4>
        <div className="flex flex-col gap-2">
          <p>Email: info@example.com</p>
          <p>Phone Number: +251921212122</p>
        </div>
      </div>
    </div>
  );
}
