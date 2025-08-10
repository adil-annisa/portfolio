import { FaPython, FaJava, FaReact, FaAws, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiFlask,
  SiDjango,
  SiPytorch,
  SiPostman,
  SiLinux,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiGithubactions,
} from "react-icons/si";

const groups = [
  {
    category: "Languages",
    items: [
      { label: "Python", icon: <FaPython /> },
      { label: "JavaScript", icon: <SiJavascript /> },
      { label: "Java", icon: <FaJava /> },
      { label: "SQL" },
      { label: "HTML" },
      { label: "CSS" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { label: "React", icon: <FaReact /> },
      { label: "React Native", icon: <FaReact /> },
      { label: "Node.js", icon: <SiNodedotjs /> },
      { label: "Flask", icon: <SiFlask /> },
      { label: "Django", icon: <SiDjango /> },
      { label: "Tailwind", icon: <SiTailwindcss /> },
      { label: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { label: "PostgreSQL", icon: <SiPostgresql /> },
      { label: "MongoDB", icon: <SiMongodb /> },
      { label: "SQLAlchemy" },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { label: "OpenAI API" },
      { label: "TensorFlow / Keras" },
      { label: "PyTorch", icon: <SiPytorch /> },
      { label: "Transformers" },
      { label: "Mediapipe" },
      { label: "OpenPose" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { label: "AWS S3", icon: <FaAws /> },
      { label: "Render" },
      { label: "Vercel", icon: <SiVercel /> },
      { label: "GitHub Actions", icon: <SiGithubactions /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { label: "Git", icon: <FaGithub /> },
      { label: "Postman", icon: <SiPostman /> },
      { label: "Figma" },
      { label: "Canva" },
      { label: "Linux", icon: <SiLinux /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <h2 id="skills-title" className="section-title"><span className="title-gradient">Skills & Technologies</span></h2>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        {groups.map((group) => (
          <div key={group.category} className="card p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#BF5700]">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item.label} className="badge text-sm">
                  {item.icon && <span aria-hidden className="text-orange-600 text-base">{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="section-divider" />
    </section>
  );
} 