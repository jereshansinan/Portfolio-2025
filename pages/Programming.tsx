import { Link } from "react-router-dom";
import Certificates from "../components/Certificates";
import ProjectRow from "../components/programming/ProjectRow";
import Specialising from "../components/programming/Specialising";
import Scene3D from "../components/Scene3D";
import "../public/fonts/jetbrains.css";

const myCertificates = [
  {
    id: 1,
    background: "white",
    textcolor: "#fff",
    title: "Microsoft Technology Associate",
    date: "December 2020",
    link: "#",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772693591/MTACert_tuocjm.jpg",
  },
  {
    id: 2,
    background: "white",
    textcolor: "#fff",
    title: "FNB Certificate in Full Stack Development",
    date: "July 2025",
    link: "#",
    image:
      "https://res.cloudinary.com/dxmnledfa/image/upload/v1772693589/FNBCert_mkzzze.png",
  },
];

export default function Programming() {
  return (
    <div className="bg-white min-h-screen font-[Jetbrains] page-specific-font">
      {/* Hero Section with 3D Scene */}
      <section className="z-10 hero-section flex flex-col items-center justify-center gap-4 py-16 md:py-24 relative bg-slate-900 overflow-hidden h-[60vh] md:h-[100vh]">
        <div className="absolute inset-0 z-0">
          <Scene3D background="https://res.cloudinary.com/dxmnledfa/video/upload/v1772691980/home_bg_qlxvyy.mp4" />
        </div>

        <div className="inline-block max-w-xl text-center relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl text-white leading-tight font-bold tracking-tighter">
            Programming
          </h1>
        </div>
      </section>

      <Specialising />

      <section className="w-full border-b border-gray-300 bg-white page-specific-font">
        <div className="min-h-[200px] grid grid-cols-1 md:grid-cols-3">
          {/* Column 1 */}
          <div className="flex items-center justify-start p-8 border-b md:border-b-0 md:border-r border-gray-300">
            <h2 className="text-4xl md:text-7xl text-black font-bold uppercase">
              Projects
            </h2>
          </div>

          {/* Column 2 - Now an empty cell with a right border */}
          <div className="hidden md:block border-r border-gray-300" />

          {/* Column 3 */}
          <div className="p-8 flex flex-col justify-end items-end">
            <div className="p-[1.5px] rounded-[10px] button-gradient shadow-md hover:shadow-lg transition-all">
              <Link to="/programming/projects">
                <button className="bg-white text-black rounded-[9px] px-6 py-2 text-xl hover:bg-black hover:text-white transition-colors">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col w-full">
        <ProjectRow
          description="A centralized fitness & coaching platform replacing third-party tools with custom dashboards for clients and admins."
          image="https://res.cloudinary.com/dxmnledfa/image/upload/v1772693493/molende_ajnbrp.png"
          number={1}
          stack={["React", "Next.js", "Supabase", "Clerk"]}
          title="Molende Sports"
        />
        <ProjectRow
          description="A full CRM application handling task management, customer tracking, and REST API integrations."
          image="https://res.cloudinary.com/dxmnledfa/image/upload/v1772693488/vucadigital_w0hbiq.png"
          number={2}
          stack={["Android Studio", "Firebase", "Supabase", "CI/CD"]}
          title="VUCA Digital CRM"
        />
        <ProjectRow
          description="A responsive brand website highlighting the menu and ordering process, featuring custom design and Vercel deployment."
          image="https://res.cloudinary.com/dxmnledfa/image/upload/v1772693489/indiansavoury_enfpx0.jpg"
          number={3}
          stack={["React", "Next.js", "Hero UI", "Figma"]}
          title="Indian Savoury Delights"
        />
      </div>

      <section className="pt-20 relative w-full bg-white">
        <h2 className="text-4xl text-black md:text-7xl font-semibold pb-20 px-8 border-b border-gray-300">
          CERTIFICATIONS
        </h2>
      </section>

      <Certificates items={myCertificates} />
    </div>
  );
}
