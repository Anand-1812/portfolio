import { RevealOnScroll } from "../RevealOnScroll";

const previewBase = `${import.meta.env.BASE_URL}project-previews`;

const projects = [
  {
    title: "Cloud Compress",
    href: "https://cloudcompress.vercel.app",
    fallback: `${previewBase}/cloud-compress.svg`,
  },
  {
    title: "SideInk",
    href: "https://sideink-notes.vercel.app",
    fallback: `${previewBase}/sideink.svg`,
  },
  {
    title: "Streako",
    href: "https://streako-tracker.vercel.app",
    fallback: `${previewBase}/streako.svg`,
  },
  {
    title: "Aero Yodha",
    href: "https://aero-yodha.vercel.app",
    fallback: `${previewBase}/aeroyodha.svg`,
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex items-center justify-center border-t border-white/6 px-6 py-20 sm:px-8"
    >
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-serif text-[1.8rem] text-white/28">Proof of Work</p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[14px] border border-white/10 bg-[#2f2f34] transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="m-1.5 overflow-hidden rounded-[10px] bg-[linear-gradient(135deg,#ff6e3c_0%,#ffd36c_52%,#d9dfc3_100%)] p-1.5">
                  <ProjectPreviewImage
                    title={project.title}
                    href={project.href}
                    fallback={project.fallback}
                  />
                </div>

                <div className="px-4 pb-5 pt-3">
                  <h3 className="text-[2rem] font-medium tracking-[-0.025em] text-[#ebe7de]">
                    {project.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const ProjectPreviewImage = ({ title, href, fallback }) => {
  return (
    <div className="overflow-hidden rounded-[8px] bg-[#111111]">
      <div className="flex items-center justify-between border-b border-white/8 px-3 py-2 text-[0.66rem] uppercase tracking-[0.16em] text-white/45">
        <span>Preview</span>
        <span className="max-w-[10rem] truncate">{href.replace(/^https?:\/\//, "")}</span>
      </div>
      <img
        src={fallback}
        alt={`${title} deployment preview`}
        className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:scale-[1.01]"
        loading="lazy"
      />
    </div>
  );
};
