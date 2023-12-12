import { MdFacebook } from 'react-icons/md';
import { TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-blend-overlay text-neutral-content">
        <aside className="items-center grid-flow-col">
          <p>Shoeb © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.linkedin.com/in/aburatinshoeb/">
            <TiSocialLinkedin className="text-3xl" />
          </a>
          <a href="https://www.twitter.com/aburatinshoeb/">
            <TiSocialTwitter className="text-3xl" />
          </a>
          <a href="https://www.facebook.com/aburatinshoeb/">
            <MdFacebook className="text-3xl" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
