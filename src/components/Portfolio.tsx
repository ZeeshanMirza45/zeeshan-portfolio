"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
};

const projects: Project[] = [
  {
    title: "Shopify Ecommerce Store",
    description:
      "Modern ecommerce store with custom sections, responsive design and Shopify functionality.",
    technologies: ["Shopify", "Liquid", "Custom Theme"],
    image: "/projects/shopify-store.jpg",
  },

  {
    title: "Beauty & Cosmetics Store",
    description:
      "Clean and engaging beauty ecommerce experience with customized Shopify sections.",
    technologies: ["Shopify", "Theme", "Liquid"],
    image: "/projects/beauty-store.jpg",
  },

  {
    title: "SaaS Dashboard Application",
    description:
      "Modern dashboard application with responsive UI and API-driven functionality.",
    technologies: ["Next.js", "React", "API"],
    image: "/projects/saas-dashboard.jpg",
  },

  {
    title: "AI Workflow Automation",
    description:
      "AI-powered workflows designed to automate repetitive business processes.",
    technologies: ["Node.js", "OpenAI", "n8n"],
    image: "/projects/ai-workflow.jpg",
  },

  {
    title: "Responsive Next.js Website",
    description:
      "Fast and responsive website built with modern Next.js architecture.",
    technologies: ["Next.js", "React", "SEO"],
    image: "/projects/nextjs-website.jpg",
  },

  {
    title: "Custom Shopify Experience",
    description:
      "Tailored Shopify storefront with custom Liquid sections and app integrations.",
    technologies: ["Shopify", "Liquid", "Apps"],
    image: "/projects/custom-shopify.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">

        {/* HEADER */}
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

        {/* PROJECT GRID */}
        <div className="project-grid">

          {projects.map((project, index) => (

            <motion.article
              key={project.title}
              className="project-card"

              initial={{
                opacity: 0,
                y: 30,
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
              }}

              whileHover={{
                y: -6,
              }}
            >

              {/* IMAGE */}
              <div className="project-image">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="project-image-img"
                />

                <div className="project-overlay">
                  <span>View Project</span>

                  <div className="overlay-icon">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

              </div>

              {/* INFO */}
              <div className="project-info">

                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

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
                  href="#contact"
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