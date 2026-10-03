import { profile } from "@/data/profile";
import { ArrowDown, ArrowUpRight } from "./Icons";
import { FooterClock } from "./FooterClock";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: profile.resumeUrl },
  { label: "GitHub", href: profile.githubUrl },
  { label: "LinkedIn", href: profile.linkedinUrl },
  { label: "LeetCode", href: profile.leetcodeUrl },
  { label: "Codeforces", href: profile.codeforcesUrl },
  { label: "CLIST", href: profile.clistUrl },
];

export function Footer() {
  return (
    <footer className="site-footer" id="footer" aria-labelledby="footer-title">
      <div className="footer-inner">
        <div className="footer-intro">
          <div>
            <h2 id="footer-title">Let’s build something meaningful.</h2>
            <p className="footer-intro-copy">
              <span>Open to software engineering, systems, and AI opportunities.</span>
              <span className="footer-intro-detail">Interested in building reliable products where strong engineering meets thoughtful design.</span>
            </p>
          </div>
          <a className="footer-contact" href={profile.contactUrl} target="_blank" rel="noopener noreferrer" aria-label="Get in touch by email (opens in a new tab)">
            <span>Get in touch</span>
            <ArrowUpRight />
          </a>
        </div>

        <nav className="footer-nav" aria-label="Footer links">
          <ul>
            {footerLinks.map(({ label, href }, index) => {
              const external = !href.startsWith("#");
              return (
                <li key={label}>
                  <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-label={external ? `${label} (opens in a new tab)` : undefined}>
                    {label}
                  </a>
                  {index < footerLinks.length - 1 ? <span className="footer-nav-separator" aria-hidden="true">·</span> : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="footer-meta">
          <p className="footer-status">
            <span className="footer-status-dot" aria-hidden="true" />
            <span>Available · Open to opportunities</span>
          </p>
          <p className="footer-location">New Delhi, India · <FooterClock /> IST · UTC+5:30</p>
          <div className="footer-signoff">
            <p className="footer-copyright">© 2026 {profile.name}</p>
            <a className="footer-back-top" href="#top">
              <span>Back to top</span>
              <ArrowDown />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
