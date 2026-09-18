"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ShoppingBag, Database, Code2, Wind } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const tech: [string, LucideIcon, string][] = [
  ["Shopify", ShoppingBag, "shopify"],
  ["React.js", Code2, "react"],
  ["Next.js", Code2, "next"],
  ["Node.js", Code2, "node"],
  ["MongoDB", Database, "mongo"],
  ["Tailwind", Wind, "tailwind"],
];

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-copy"
        >
          <div className="eyebrow"><span />HELLO, I'M</div>
          <h1>Zeeshan <strong>Zahid</strong></h1>
          <h2>Full Stack Developer</h2>
          <p className="stack">
            React.js <b>|</b> Next.js <b>|</b> MERN Stack <b>|</b> Shopify <b>|</b> AI Automation
          </p>
          <p className="lead">
            I build modern, high-performance websites and Shopify stores that help businesses grow.
            I focus on clean code, thoughtful interfaces and practical digital solutions.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">
              Let&apos;s Work Together <ArrowRight size={18} />
            </a>
            <a className="btn ghost" href="#portfolio">
              <Play size={15} fill="currentColor" /> View My Work
            </a>
          </div>
          <div className="stats">
            <div><b>4+</b><span>Years Experience</span></div>
            <div><b>20+</b><span>Projects</span></div>
            <div><b>10+</b><span>Clients</span></div>
            <div><b>100%</b><span>Commitment</span></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-visual"
        >
          <div className="orbit-glow" />
          <div className="portrait-ring">
            <img src="/profile-hero.png" alt="Zeeshan Zahid" />
          </div>
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />

          {tech.map(([name, Icon, key], i) => (
            <motion.div
              key={key}
              className={`tech tech-${i}`}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon size={22} />
              <span>{name}</span>
            </motion.div>
          ))}

          <div className="tagline">Code<br />Design<br /><b>Build</b><br />Grow</div>
        </motion.div>
      </div>
    </section>
  );
}
