import { profile } from "@/data/profile";
import { ArrowDown, Clist, Codeforces, File, Github, Leetcode, Linkedin } from "./Icons";

const links = [
  { label: "Resume", href: profile.resumeUrl, icon: File },
  { label: "LinkedIn", href: profile.linkedinUrl, icon: Linkedin },
  { label: "GitHub", href: profile.githubUrl, icon: Github },
  { label: "LeetCode", href: profile.leetcodeUrl, icon: Leetcode },
  { label: "Codeforces", href: profile.codeforcesUrl, icon: Codeforces },
  { label: "CLIST", href: profile.clistUrl, icon: Clist },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-subtitle">{profile.role}</p>
        <nav className="social-links" aria-label="Social links">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              className="social-button"
              href={href}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
            >
              <Icon />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>
      <a className="scroll-cue" href="#projects" aria-label="Scroll to projects">
        <span>Selected work</span>
        <ArrowDown />
      </a>
    </section>
  );
}
