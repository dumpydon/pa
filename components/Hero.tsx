import { profile } from "@/data/profile";
import { ArrowDown, File, Github, Leetcode, Linkedin } from "./Icons";

const links = [
  { label: "Resume", href: profile.resumeUrl, icon: File },
  { label: "LinkedIn", href: profile.linkedinUrl, icon: Linkedin },
  { label: "GitHub", href: profile.githubUrl, icon: Github },
  { label: "LeetCode", href: profile.leetcodeUrl, icon: Leetcode },
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
              target={href === "#" ? undefined : "_blank"}
              rel={href === "#" ? undefined : "noreferrer"}
              aria-label={href === "#" ? `${label} link — add URL in data/profile.ts` : label}
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
