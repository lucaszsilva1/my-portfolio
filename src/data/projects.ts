export interface Project {
  id: string;
  impactValue: string;
  impactLabel: string;
  title: string;
  context: string;
  roleImpact: string;
  techTags: string[];
}

export const projectsData: Project[] = [
  {
    id: "projeto-afrodite",
    impactValue: "R$ 4B",
    impactLabel: "DIRECTED INVESTMENT",
    title: "Projeto Afrodite (Expansão e Estratégia Fabril)",
    context: "Strategic footprint and network design for a new manufacturing plant (10-year horizon).",
    roleImpact: "Led data integration (BigQuery datalakes), created interactive choropleth maps, and built a \"Bluebook\" site for executive board decision-making.",
    techTags: ["Python", "BigQuery", "SQL", "Otimix", "HTML"]
  },
  {
    id: "radar-inteligente",
    impactValue: "R$ 400M",
    impactLabel: "DIRECTED INVESTMENT",
    title: "Radar Inteligente de Operações",
    context: "Automated capacity management (GCAP) tool acting as an intelligent long-term decision signal.",
    roleImpact: "Architected the ETL pipeline (Cloud Storage, Dataprep) and bridged UX/UI with operations to build accurate Tableau models.",
    techTags: ["Tableau", "GCP", "ETL", "S&OP"]
  },
  {
    id: "digital-twin",
    impactValue: "R$ 300K",
    impactLabel: "FINANCIAL IMPACT",
    title: "Digital Twin - Centro de Distribuição",
    context: "Implementation of point cloud technology for precise CD infrastructure management.",
    roleImpact: "Led technical governance, ensuring data integrity between physical plants and digital systems.",
    techTags: ["3D Scanning", "Point Cloud", "Asset Management"]
  },
  {
    id: "vocacao-cds",
    impactValue: "R$ 200M",
    impactLabel: "FINANCIAL IMPACT",
    title: "Vocação dos Centros de Distribuição Nacionais",
    context: "Strategic definition of CD profiles to optimize lead time and reduce costs.",
    roleImpact: "Analyzed slow-moving inventory and modeled scenarios for the executive committee alongside global consultancies.",
    techTags: ["Data Analysis", "Inventory Modeling", "Business Cases"]
  },
  {
    id: "control-tower",
    impactValue: "R$ 50M",
    impactLabel: "FINANCIAL IMPACT",
    title: "Control Tower de Demanda e Abastecimento",
    context: "Automated alerts for stockouts and lead time predictability.",
    roleImpact: "Built the BigQuery/Dataflow pipeline (Bronze, Silver, Gold layers) enabling smart alerts with an estimated R$ 10M return, plus Gemini Enterprise AI agents.",
    techTags: ["BigQuery", "Dataflow", "Advanced SQL", "Gemini Enterprise"]
  },
  {
    id: "sistema-abastecimento",
    impactValue: "R$ 25M",
    impactLabel: "FINANCIAL IMPACT",
    title: "Sistema Automatizado de Abastecimento",
    context: "Multi-brand tool for supply calculation automation (25M SKUs/month).",
    roleImpact: "Governed the data pipeline, resulting in a 50% reduction in operational effort and a 15% increase in accuracy.",
    techTags: ["BigQuery", "Google Workspace", "Automation"]
  }
];
