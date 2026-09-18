"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Code2,
  Paintbrush,
  Layers3,
  Sparkles,
  Monitor,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    description:
      "Custom Shopify stores, themes, sections, app integrations and ecommerce functionality.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Modern, responsive and clean interfaces built with React and Next.js.",
  },
  {
    icon: Paintbrush,
    title: "Theme Customization",
    description:
      "Tailored Shopify themes and storefront experiences designed around your brand.",
  },
  {
    icon: Layers3,
    title: "MERN Stack Development",
    description:
      "Full-stack web applications using MongoDB, Express, React and Node.js.",
  },
  {
    icon: Sparkles,
    title: "AI Workflow Automation",
    description:
      "AI-powered workflows that automate repetitive tasks and connect business tools.",
  },
  {
    icon: Monitor,
    title: "Responsive Web Design",
    description:
      "Pixel-focused websites that look great across desktop, tablet and mobile devices.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span />
              WHAT I DO
            </div>

            <h2>My Services</h2>
          </div>

          <p className="section-intro">
            I help businesses build, improve and scale their digital presence
            with modern technologies and clean, maintainable code.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                className="service-card"
                initial={{
                  opacity: 0,
                  y: 20,
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
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -6,
                }}
              >
                <div className="service-icon">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-number">
                  0{index + 1}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}