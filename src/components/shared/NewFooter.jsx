import { useState } from "react";
import { Check, Copy } from "lucide-react";
import Button from "./Button";

const email = "tuladharshashank2@gmail.com";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shashank-tuladhar-0a4b93275/",
    icon: "/profile/linkedin-white.svg",
  },
  {
    name: "Behance",
    href: "https://www.behance.net/shashantuladha",
    icon: "/profile/behance-white.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shashank_tuladhar/?hl=en",
    icon: "/profile/instagram.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/shanky-1234",
    icon: "/profile/github-white.svg",
  },
];

function NewFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Unable to copy the email address.", error);
    }
  };

  return (
    <footer className="section-wrapper new-footer">
      <div className="new-footer-layout">
        <div className="new-footer-mascot">
          <img src="/profile/footer_cartoon.png" alt="Portfolio mascot" />
        </div>

        <div className="new-footer-bubble ">
          <h2 className="new-footer-title text-2xl">
            Enough Scrolling!
            <br />
            Let&apos;s Make Something Together!
          </h2>
          <div className="flex items-center gap-4 md:flex-row flex-col ">
          <div className="flex justify-center md:block">
            <Button content="Contact Me" className="text-white" />
          </div>
          <div className="new-footer-email-row">
            <a href={`mailto:${email}`}>{email}</a>
            <button type="button" className="new-footer-copy" onClick={handleCopyEmail}>
              {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
              <span>{copied ? "Copied!" : "Click To Copy"}</span>
            </button>
          </div>
          </div>
          <div className="new-footer-social-row">
            <div className="new-footer-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt="" />
                </a>
              ))}
            </div>
            <span>Connect With me on Socials</span>
          </div>

          <p className="new-footer-note">This Website is a little hardwork by Me ofc :))</p>
        </div>
      </div>
    </footer>
  );
}

export default NewFooter;
