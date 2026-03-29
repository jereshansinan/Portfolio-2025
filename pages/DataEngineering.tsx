import Scene3D from "../components/Scene3D";
import Certificates from "../components/Certificates";
import Projects from "@/components/dataengineering/Projects";

const ProjectsList = [
  {
    id: "1",
    title: "Multi-Year Sales vs Target",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616704/11_h2vg3l.png",
    description:
      "Engineering a high-performance Sales_Fact table with full relational mapping for multi-year historical data comparison.",
    tools: ["Power BI", "DAX", "Python"],
    categories: ["Advanced Data Modeling", "Relational Integrity", "Sales Analytics"],
    githubUrl: "https://github.com/your-repo/segmentation",
    deliverables: [
      "Interactive Power BI Dashboard",
      "Segmentation Logic Doc",
      "Cleaned Customer Dataset",
    ],
    extraFiles: [
      {
        name: "customer_clusters.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-data-cube.jpg",
      },
      {
        name: "segmentation_logic.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-logic-node.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "BI Reporting for Management",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616714/image_7_zijjts.png",
    description:
      "Development of a multi-layered BI suite that transforms raw business performance metrics into interactive executive summaries.",
    tools: ["Excel", "Power Query", "Scenario Manager"],
    categories: ["Business Intelligence", "Power Query", "Applied Analytics"],
    githubUrl: "https://github.com/your-repo/sales-tracker",
    deliverables: [
      "Dynamic Sales Dashboard",
      "Data Pipeline Documentation",
      "Historical Sales CSV",
    ],
    extraFiles: [
      {
        name: "sales_pipeline_docs.docx",
        type: "Documentation",
        preview: "https://your-storage.com/purple-blueprint.jpg",
      },
      {
        name: "raw_sales_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-infinite-grid.jpg",
      },
    ],
  },
  {
    id: "3",
    title: "Employee Analytics Dashboard",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616699/image_2_zac7gt.png",
    description:
      "Implementation of complex cleaning scripts to handle null values, duplicates, and inconsistent formatting in financial records.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Data Cleaning", "Quality Assurance", "Error Handling"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "Customer Segmentation Analysis",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616703/image_8_md6lbo.png",
    description:
      "Engineering custom DAX logic to classify customers into spending tiers (Low, Medium, High) based on transactional frequency and volume.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Behavioral Modeling", "Customer Segmentation", "DAX"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "5",
    title: "Exploratory Data Analysis & Stats",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616708/image_3_hsamr0.png",
    description:
      "Exploratory Data Analysis (EDA) focused on identifying trends, outliers, and statistical distributions within business metrics.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["EDA", "Descriptive Statistics", "Trend Identification"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "6",
    title: "Transactional Fact Engineering",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616713/image_6_f00yse.png",
    description:
      'Consolidating disparate transaction logs and master data into a centralized "Single Source of Truth" using Power Query.',
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Data Ingestion", "ETL Design", "Power Query"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "7",
    title: "Narrative Visualization Systems",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616703/image_4_t4w4oy.png",
    description:
      "Transforming raw tabular data into visual storytelling assets in Excel to highlight critical business successes and failures.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Data Storytelling", "Visualization", "Excel Reporting"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "8",
    title: "Comparative Variance Modeling",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616704/image_5_ouxylr.png",
    description:
      "Synchronizing actual sales data with target budget datasets to calculate real-time performance variances across regions.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Performance Analysis", "Variance Tracking", "Interactivity"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
  {
    id: "9",
    title: "Multi-Source Data Ingestion",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1774616705/image_1_bgo7sb.png",
    description:
      "Collection and consolidation of disparate raw datasets using Python and Excel to create a unified data entry point.",
    tools: ["Python", "Seaborn", "Plotly"],
    categories: ["Data Collection", "Excel Integration", "Python"],
    githubUrl: "https://github.com/your-repo/python-viz",
    deliverables: ["Automated PDF Reports", "Interactive Plotly HTML", "Source Analysis Notebook"],
    extraFiles: [
      {
        name: "visualization_engine.ipynb",
        type: "Jupyter Notebook",
        preview: "https://your-storage.com/purple-flowing-script.jpg",
      },
      {
        name: "processed_report_data.csv",
        type: "Dataset",
        preview: "https://your-storage.com/purple-layered-strata.jpg",
      },
    ],
  },
];

const myCertificates = [
  {
    id: 1,
    background: "#171717",
    textcolor: "#fff",
    title: "Oracle Data Science Professional",
    date: "November 2025",
    link: "#",
    image: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772709596/oracle3_s2o847.png",
  },
];

export default function DataEngineering() {
  return (
    <>
      <div className="min-h-screen bg-[#171717] text-white">
        {/* Hero Section with 3D Scene */}
        <section className="z-10 hero-section flex flex-col items-center justify-center gap-4 py-8 md:py-10 relative overflow-hidden h-[60vh] md:h-[100vh]">
          <div className="absolute inset-0 z-0">
            <Scene3D background="https://res.cloudinary.com/dxmnledfa/image/upload/v1772709863/3_v3oppx.png" />
          </div>

          <div className="inline-block max-w-xl text-center relative z-10 px-4">
            <h1 className="text-4xl md:text-7xl text-white font-bold page-specific-font-mag">
              Data Engineering
            </h1>
          </div>
        </section>

        <section className="pt-20 relative w-full">
          <h2 className="text-4xl text-white md:text-7xl pb-20 px-8 border-b border-gray-300 page-specific-font-mag">
            PROJECTS
          </h2>
        </section>

        <Projects projects={ProjectsList} />

        <section className="pt-20 relative w-full">
          <h2 className="text-4xl text-white md:text-7xl page-specific-font-mag pb-20 px-8 border-b border-gray-300">
            CERTIFICATIONS
          </h2>
        </section>

        <Certificates items={myCertificates} />
      </div>
    </>
  );
}
