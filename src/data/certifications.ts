export interface Certification {
  id: string;
  titleKey: string;
  issuer: string;
  issuerLogo?: string;
  category: 'ai' | 'data' | 'cloud' | 'agile';
  issueDate: string;
  credentialId?: string;
  verifyUrl?: string;
  certificatePdf?: string;
  previewImage?: string;
  skills: string[];
  featured: boolean;
}

export const certificationsData: Certification[] = [
  {
    id: 'google-ai-fundamentals',
    titleKey: 'googleAi',
    issuer: 'Google (Coursera)',
    category: 'ai',
    issueDate: '2026.08',
    credentialId: '9X4TCAT7185Q',
    verifyUrl: 'https://coursera.org/verify/9X4TCAT7185Q',
    certificatePdf: '/certificates/google-ai-fundamentals.pdf',
    previewImage: '/certificates/google-ai-fundamentals.png',
    skills: ['Generative AI', 'Large Language Models', 'Prompt Engineering', 'AI Ethics'],
    featured: true
  },
  {
    id: 'databricks-fundamentals',
    titleKey: 'databricksFundamentals',
    issuer: 'Databricks Academy',
    category: 'data',
    issueDate: '2026.09',
    certificatePdf: '/certificates/databricks-fundamentals.pdf',
    previewImage: '/certificates/databricks-fundamentals.png',
    skills: ['Lakehouse Architecture', 'Apache Spark', 'Delta Lake', 'Data Intelligence'],
    featured: true
  },
  {
    id: 'gcp-core-infrastructure',
    titleKey: 'gcpCore',
    issuer: 'Google Cloud',
    category: 'cloud',
    issueDate: '2024.11',
    skills: ['Google Cloud Platform', 'BigQuery', 'Compute Engine', 'IAM & Cloud Security'],
    featured: false
  },
  {
    id: 'lean-six-sigma',
    titleKey: 'sixSigma',
    issuer: 'The Council for Six Sigma',
    category: 'agile',
    issueDate: '2024.08',
    skills: ['DMAIC', 'Root Cause Analysis', 'Process Optimization', 'Waste Reduction'],
    featured: false
  },
  {
    id: 'agile-project-management',
    titleKey: 'agilePm',
    issuer: 'Agile Institute',
    category: 'agile',
    issueDate: '2024.06',
    skills: ['Scrum Framework', 'Sprint Planning', 'Kanban', 'Continuous Delivery'],
    featured: false
  }
];
