'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Rocket,
  Sparkles,
  SunMedium,
  Trophy,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  {
    title: 'Languages',
    items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'SQL'],
  },
  {
    title: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman'],
  },
];

const projects = [
  {
    title: 'Campus Connect',
    description:
      'A student-focused collaboration platform concept for campus announcements, club visibility, and project discovery to make student engagement more organized and accessible.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB'],
    github: 'https://github.com/Hampan29',
    demo: 'https://hampan29.github.io/my_portfolio/',
  },
  {
    title: 'StudyFlow',
    description:
      'A productivity-oriented study planner for managing deadlines, organizing daily goals, and tracking progress with a clear, student-friendly workflow.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Hampan29',
    demo: 'https://hampan29.github.io/my_portfolio/',
  },
  {
    title: 'CodeTracker',
    description:
      'A lightweight coding-progress tracker built to monitor solved problems, consistency, and iterative improvement with a focused interface and clear daily rhythm.',
    stack: ['Next.js', 'Tailwind', 'TypeScript', 'Supabase'],
    github: 'https://github.com/Hampan29',
    demo: 'https://hampan29.github.io/my_portfolio/',
  },
];

const achievements = [
  {
    title: 'Data Structures and Algorithms',
    meta: 'Ongoing',
    detail: 'Strengthening problem-solving and algorithmic thinking through regular coding practice and structured fundamentals.',
  },
  {
    title: 'Frontend Engineering',
    meta: 'Core focus',
    detail: 'Building responsive, user-friendly interfaces and exploring modern frontend workflows with React and Next.js.',
  },
  {
    title: 'Self-driven learning',
    meta: 'Active',
    detail: 'Continuously learning through coursework, project building, and practical software development to improve engineering depth.',
  },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-sky-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">{title}</h2>
    </div>
  );
}

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : preferredDark ? 'dark' : 'light';
    setTheme(nextTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('portfolio-theme', theme);
  }, [mounted, theme]);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/10 bg-white/5 text-slate-200 transition hover:border-sky-400/60 hover:text-sky-300 dark:bg-slate-900/70 dark:text-slate-200"
    >
      {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.14),transparent_30%)]" />

      <header className="sticky top-0 z-50 border-b border-slate-200/10 bg-slate-950/70 backdrop-blur-xl dark:bg-slate-950/70">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">
            HAMPAN
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-sky-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200 transition hover:border-sky-300 hover:bg-sky-400/20 md:inline-flex"
            >
              Contact Me
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-20">
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative grid items-center gap-12 pb-16 pt-10 md:grid-cols-[1.18fr_0.82fr] md:pb-20 md:pt-14"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-sky-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              2nd Year B.Tech CS | Aspiring Software Engineer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.08em] text-slate-50 md:text-7xl"
            >
              <span className="block">HAMPAN</span>
              <span className="mt-2 block bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
                Building thoughtful software.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg"
            >
              I&apos;m a Computer Science Engineering student focused on building a solid foundation in software
              development, logical problem solving, and practical project work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-300"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/40 hover:text-sky-300"
              >
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/15 bg-transparent px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-200/40 hover:text-white"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300"
            >
              <a href="https://github.com/Hampan29" className="inline-flex items-center gap-2 rounded-full border border-slate-200/10 bg-slate-900/60 px-3 py-2 transition hover:border-sky-400/40 hover:text-sky-300" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/hampan-gowda-k-l-58330b375/" className="inline-flex items-center gap-2 rounded-full border border-slate-200/10 bg-slate-900/60 px-3 py-2 transition hover:border-sky-400/40 hover:text-sky-300" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a href="mailto:hampangowda2934@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-200/10 bg-slate-900/60 px-3 py-2 transition hover:border-sky-400/40 hover:text-sky-300">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[28px] border border-slate-200/10 bg-slate-900/70 p-6 shadow-[0_30px_80px_rgba(14,165,233,0.12)] backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky-400/20 blur-2xl"
            />

            <div className="relative mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-xs font-medium text-sky-300">
              <Rocket className="h-3.5 w-3.5" />
              Building with intention
            </div>

            <div className="relative space-y-5 border-t border-slate-200/10 pt-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Location</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-200">
                  <MapPin className="h-4 w-4 text-sky-300" />
                  Yelhanka, Karnataka, India
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Focus</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-slate-200">
                  <Code2 className="h-4 w-4 text-sky-300" />
                  Frontend • DSA • Web Apps
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Currently learning</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {['Next.js', 'System Design', 'DSA', 'Backend APIs'].map((item) => (
                    <span key={item} className="rounded-full border border-slate-200/10 bg-slate-900/80 px-2.5 py-1 text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.section>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <SectionHeading eyebrow="About" title="A student developer with a practical mindset and a strong learning focus." />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/10 bg-white/[0.02] p-7">
              <p className="text-base leading-8 text-slate-300">
                I am a second-year B.Tech Computer Science Engineering student focused on strengthening my programming
                and software development skills through hands-on learning. I enjoy solving problems, understanding how
                systems work, and building practical software that turns ideas into real-world functionality.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/10 bg-white/[0.02] p-7">
              <p className="text-base leading-8 text-slate-300">
                My interests lie in modern web development, data structures, and clean UI design. I am actively learning
                through coursework, personal projects, and problem-solving practice while aiming to build a strong base for
                internships, collaboration, and future software engineering opportunities.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <SectionHeading eyebrow="Skills" title="Core technologies and growing engineering strengths." />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((group) => (
              <div key={group.title} className="rounded-3xl border border-slate-200/10 bg-white/[0.02] p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200/10 bg-slate-900/80 px-2.5 py-1.5 text-xs text-slate-200 transition hover:border-sky-400/40 hover:text-sky-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <SectionHeading eyebrow="Projects" title="Selected work that reflects technical curiosity and execution." />

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/10 bg-white/[0.02]"
              >
                <div className="flex h-40 items-end border-b border-slate-200/10 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.18),transparent_25%),linear-gradient(135deg,#0f172a,#1e293b)] p-5">
                  <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-sky-200">
                    Project
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-sky-300" />
                  </div>

                  <p className="text-sm leading-7 text-slate-300">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200/10 bg-slate-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3 pt-2">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-sky-300 hover:text-sky-200">
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-200 hover:text-white">
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="education"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <SectionHeading eyebrow="Education" title="Academic foundation in Computer Science and software learning." />

          <div className="rounded-3xl border border-slate-200/10 bg-white/[0.02] p-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-sky-300">
                  <GraduationCap className="h-3.5 w-3.5" />
                  B.Tech in Computer Science
                </div>
                <h3 className="text-2xl font-semibold text-white">REVA UNIVERSITY</h3>
              </div>

              <div className="text-sm text-slate-300">2025 — 2029</div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/10 bg-slate-900/70 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Status</p>
                <p className="mt-2 font-medium text-slate-100">2nd Year</p>
              </div>
              <div className="rounded-2xl border border-slate-200/10 bg-slate-900/70 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Stream</p>
                <p className="mt-2 font-medium text-slate-100">Computer Science Engineering</p>
              </div>
              <div className="rounded-2xl border border-slate-200/10 bg-slate-900/70 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Location</p>
                <p className="mt-2 font-medium text-slate-100">Yelhanka, Karnataka</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <SectionHeading eyebrow="Experience" title="Learning, growth, and practical development milestones." />

          <div className="grid gap-5 md:grid-cols-3">
            {achievements.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200/10 bg-white/[0.02] p-6">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-sky-300">
                  <Trophy className="h-3.5 w-3.5" />
                  {item.meta}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <SectionHeading eyebrow="Contact" title="Let’s connect and build something meaningful." />

          <div className="grid gap-8 rounded-3xl border border-slate-200/10 bg-white/[0.02] p-7 md:grid-cols-[1fr_1.2fr]">
            <div className="space-y-5">
              <a href="mailto:hampangowda2934@gmail.com" className="flex items-center gap-3 text-slate-200 hover:text-sky-300">
                <Mail className="h-4 w-4 text-sky-300" />
                hampangowda2934@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/hampan-gowda-k-l-58330b375/" className="flex items-center gap-3 text-slate-200 hover:text-sky-300" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4 text-sky-300" />
                linkedin.com/in/hampan-gowda-k-l-58330b375
              </a>
              <a href="https://github.com/Hampan29" className="flex items-center gap-3 text-slate-200 hover:text-sky-300" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 text-sky-300" />
                github.com/Hampan29
              </a>
            </div>

            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Name</label>
                <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-slate-200/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/50" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input type="email" placeholder="Your email" className="w-full rounded-2xl border border-slate-200/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/50" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Message</label>
                <textarea rows={5} placeholder="Tell me about your project or opportunity" className="w-full rounded-2xl border border-slate-200/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400/50" />
              </div>
              <button type="button" className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                Send Message
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-200/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-slate-200">HAMPAN</p>
            <p>2nd Year B.Tech Computer Science Student</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Hampan29" target="_blank" rel="noreferrer" className="hover:text-sky-300">GitHub</a>
            <a href="https://www.linkedin.com/in/hampan-gowda-k-l-58330b375/" target="_blank" rel="noreferrer" className="hover:text-sky-300">LinkedIn</a>
            <a href="mailto:hampangowda2934@gmail.com" className="hover:text-sky-300">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
