"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Shopify Ecommerce Store",
    description:
      "Modern ecommerce store built with a responsive interface and custom Shopify development.",
    technologies: ["Shopify", "Liquid", "Custom Theme"],
    image: "/projects/shopify-store.jpg",
    link: "#contact",
  },
  {
    title: "Beauty & Cosmetics Store",
    description:
      "Clean and engaging ecommerce experience with customized Shopify sections.",
    technologies: ["Shopify", "Theme", "Liquid"],
    image: "/projects/beauty-store.jpg",
    link: "#contact",
  },
  {
    title: "SaaS Dashboard Application",
    description:
      "Responsive SaaS dashboard with modern UI components and API integration.",
    technologies: ["Next.js", "React", "API"],
    image: "/projects/saas-dashboard.jpg",
    link: "#contact",
  },
  {
    title: "AI Workflow Automation",
    description:
      "AI-powered automation workflows designed to simplify repetitive business processes.",
    technologies: ["Node.js", "OpenAI", "n8n"],
    image: "/projects/ai-workflow.jpg",
    link: "#contact",
  },
  {
    title: "Responsive Next.js Website",
    description:
      "Fast, responsive and SEO-friendly website built with modern Next.js architecture.",
    technologies: ["Next.js", "React", "SEO"],
    image: "/projects/nextjs-website.jpg",
    link: "#contact",
  },
  {
    title: "Custom Shopify Experience",
    description:
      "Custom Shopify storefront with Liquid sections, app integrations and tailored UI.",
    technologies: ["Shopify", "Liquid", "Apps"],
    image: "/projects/custom-shopify.jpg",
    link: "#contact",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">

        {/* Section Header */}
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span />
              FEATURED WORK
            </div>

            <h2>Recent Projects</h2>
          </div>

          <a href="#contact" className="view-all">
            View All Projects
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Projects */}
        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
              }}
            >

              {/* Project Image */}
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="project-image-img"
                />

                <div className="project-image-overlay">
                  <span>View Project</span>

                  <div className="overlay-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="project-info">

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>

                <a
                  href={project.link || "#contact"}
                  className="project-arrow"
                  aria-label={`Discuss ${project.title}`}
                >
                  <ArrowUpRight size={19} />
                </a>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}