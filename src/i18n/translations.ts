export type Locale = 'en' | 'pt';

export const translations = {
  en: {
    nav: {
      manifesto: "Manifesto",
      impact: "Impact",
      arsenal: "Arsenal",
      certifications: "Certifications",
      contact: "CONTACT _/"
    },
    hero: {
      meta: "01. LUCAS SOUZA SILVA — AI & SOFTWARE ENGINEER",
      title1: "AI + ENGINEERING:",
      title2: "CODE THAT",
      title3: "DRIVES ROI.",
      desc: "Building end-to-end solutions that convert complex data into operational efficiency and real strategic value, applying visual brutalism to ensure impact and technical authority.",
      ctaImpact: "VIEW IMPACT",
      ctaStart: "START PROJECT"
    },
    manifesto: {
      subtitle: "02. THE MANIFESTO",
      title: "RADICAL OWNERSHIP",
      text1: "I act at the exact intersection of technology, data, and business strategy. As an expert in the Google Cloud ecosystem (GCP), my mission is clear:",
      text2: "Transforming raw data into solutions that generate real ROI, reducing operational costs and optimizing complex logistics chains at scale.",
      text3: "My focus is singular: translating technical complexity into operational efficiency and millions in real value."
    },
    projects: {
      subtitle: "03. SELECTED IMPACT & PROJECTS",
      desc: "CASES THAT DEFINE MY TECHNICAL ARSENAL AND BUSINESS IMPACT.",
      counterLabel: "SUCCESSFUL DEPLOYMENTS",
      visit: "EXPLORE",
      roleLabel: "MY ROLE & IMPACT",
      contextLabel: "STRATEGIC CONTEXT",
      viewDetails: "EXPAND IMPACT ANALYSIS",
      hideDetails: "COLLAPSE DETAILS",
      items: [
        {
          id: "projeto-afrodite",
          impactValue: "$800M",
          impactLabel: "DIRECTED INVESTMENT",
          category: "MANUFACTURING FOOTPRINT",
          title: "Project Aphrodite (Manufacturing Expansion & Strategy)",
          context: "Strategic footprint and network design for a new manufacturing plant (10-year horizon).",
          roleImpact: "Led data integration across BigQuery datalakes, developed interactive choropleth maps, and built an executive 'Bluebook' portal for C-level investment decisions.",
          techTags: ["Python", "BigQuery", "SQL", "Otimix", "HTML"]
        },
        {
          id: "radar-inteligente",
          impactValue: "$80M",
          impactLabel: "DIRECTED INVESTMENT",
          category: "OPERATIONS INTELLIGENCE",
          title: "Intelligent Operations Radar",
          context: "Automated capacity management (GCAP) tool functioning as an intelligent long-term strategic signal.",
          roleImpact: "Architected the ETL pipeline (Cloud Storage, Dataprep) and bridged UX/UI with operations to engineer high-precision Tableau data models.",
          techTags: ["Tableau", "GCP", "ETL", "S&OP"]
        },
        {
          id: "digital-twin",
          impactValue: "$60K",
          impactLabel: "FINANCIAL IMPACT",
          category: "DIGITAL TWIN & ASSETS",
          title: "Distribution Center Digital Twin",
          context: "Implementation of point cloud technology for millimetric Distribution Center infrastructure management.",
          roleImpact: "Spearheaded technical data governance, ensuring end-to-end data integrity between physical warehouse facilities and digital systems.",
          techTags: ["3D Scanning", "Point Cloud", "Asset Management"]
        },
        {
          id: "vocacao-cds",
          impactValue: "$40M",
          impactLabel: "FINANCIAL IMPACT",
          category: "NETWORK OPTIMIZATION",
          title: "National Distribution Centers Network Profiling",
          context: "Strategic definition of fulfillment and DC profiles to optimize customer lead time and reduce logistics operational expenditure.",
          roleImpact: "Conducted deep analysis of slow-moving inventory and simulated supply chain scenarios for the Executive Committee alongside top-tier global consultancies.",
          techTags: ["Data Analysis", "Inventory Modeling", "Business Cases"]
        },
        {
          id: "control-tower",
          impactValue: "$10M",
          impactLabel: "FINANCIAL IMPACT",
          category: "SUPPLY CHAIN CONTROL TOWER",
          title: "Demand & Supply Control Tower",
          context: "Automated alert engine for stockout prevention and lead time predictability.",
          roleImpact: "Engineered the BigQuery/Dataflow data platform (Bronze, Silver, Gold layers) driving smart inventory alerts with an estimated $2M direct return, integrated with Gemini Enterprise AI agents.",
          techTags: ["BigQuery", "Dataflow", "Advanced SQL", "Gemini Enterprise"]
        },
        {
          id: "sistema-abastecimento",
          impactValue: "$5M",
          impactLabel: "FINANCIAL IMPACT",
          category: "SUPPLY AUTOMATION",
          title: "Automated Supply & Replenishment System",
          context: "Multi-brand replenishment engine automating calculations across 25 million SKUs per month.",
          roleImpact: "Governed the data pipeline end-to-end, achieving a 50% reduction in operational manual effort and a 15% increase in replenishment accuracy.",
          techTags: ["BigQuery", "Google Workspace", "Automation"]
        }
      ]
    },
    arsenal: {
      subtitle: "04. TECHNICAL ARSENAL",
      skills: [
        {
          title: "CLOUD & AI",
          items: ["GCP (BIGQUERY, VERTEX AI, DATAPREP)", "GOOGLE AI STUDIO", "PROMPT ENGINEERING", "AI AGENTS"]
        },
        {
          title: "DATA & AUTOMATION",
          items: ["SQL & PYTHON", "SPARK", "ETL/ELT & N8N", "DIMENSIONAL/RELATIONAL MODELING"]
        },
        {
          title: "VISUALIZATION",
          items: ["POWER BI", "TABLEAU", "LOOKER STUDIO"]
        },
        {
          title: "DEVELOPMENT",
          items: ["REACT & REACT NATIVE", "NODE.JS", "TYPESCRIPT", "JAVA"]
        }
      ]
    },
    certifications: {
      subtitle: "05. BADGES & CERTIFICATIONS",
      title: "VALIDATED MASTERY",
      desc: "OFFICIAL ACCREDITATIONS VALIDATING END-TO-END COMPETENCE IN AI, DATA LAKEHOUSE, AND CLOUD INFRASTRUCTURE.",
      badgeVerified: "VERIFIED CREDENTIAL",
      badgeOfficial: "OFFICIAL ACCREDITATION",
      filterAll: "ALL",
      filterAi: "AI & GENAI",
      filterData: "DATA & LAKEHOUSE",
      filterCloud: "CLOUD & INFRA",
      filterAgile: "METHODOLOGY",
      viewCert: "VIEW CERTIFICATE",
      verifyOnline: "VERIFY ONLINE",
      downloadPdf: "DOWNLOAD PDF",
      close: "CLOSE PREVIEW",
      accreditedSkills: "CORE COMPETENCIES",
      issuedOn: "ISSUED",
      credentialId: "CREDENTIAL ID",
      items: {
        awsGenAi: {
          title: "AWS Generative AI for Developers",
          category: "AWS & Generative AI",
          desc: "Official certification authorized by Amazon Web Services (AWS) and offered through Coursera, validating competencies in building generative AI applications, leveraging foundation models, Amazon Bedrock, and developer-focused generative AI solutions."
        },
        googleAi: {
          title: "Google AI Fundamentals",
          category: "AI & Large Language Models",
          desc: "Rigorous certification authorized by Google and offered through Coursera, proving core mastery of Generative AI, Large Language Models (LLMs), prompt engineering paradigms, and responsible AI system design."
        },
        databricksFundamentals: {
          title: "Databricks Fundamentals Accreditation",
          category: "Lakehouse & Big Data",
          desc: "Official accreditation by Databricks Academy establishing proficiency in the unified Databricks Lakehouse architecture, Delta Lake transaction layers, Apache Spark distributed compute, and data intelligence engines."
        },
        gcpCore: {
          title: "Google Cloud Core Infrastructure",
          category: "Cloud Infrastructure",
          desc: "Comprehensive foundation in Google Cloud Platform architecture, enterprise IAM access control, VPC network topology, BigQuery analytics, and high-availability workload deployment."
        },
        sixSigma: {
          title: "Lean Six Sigma White Belt",
          category: "Operational Excellence",
          desc: "Demonstrated grounding in Lean Six Sigma process improvement, DMAIC roadmap, root-cause analysis, and systematic waste elimination across industrial and operational workflows."
        },
        agilePm: {
          title: "Agile Project Management",
          category: "Methodology & Delivery",
          desc: "Applied competency in agile product delivery, Scrum team ceremonies, sprint velocity optimization, backlog prioritization, and iterative software development lifecycles."
        }
      }
    },
    education: {
      subtitle: "06. COMMUNITY & EDUCATION",
      communityTitle: "COMMUNITY & TALKS",
      communityDesc: "SHARING KNOWLEDGE ON GENERATIVE AI, DATA, AND SOFTWARE ENGINEERING.",
      communities: [
        "IA BRASIL (ONE OF BRAZIL'S LARGEST GEN AI COMMUNITIES)",
        "CONECTADEV"
      ],
      academicTitle: "ACADEMIC EDUCATION",
      academicDegree: "B.S. in Software Engineering",
      certTitle: "ADDITIONAL ACCREDITATIONS",
      certifications: [
        "GOOGLE CLOUD CORE INFRASTRUCTURE",
        "LEAN SIX SIGMA WHITE BELT",
        "AGILE PROJECT MANAGEMENT"
      ]
    },
    impact: {
      mainText: "DATA WITHOUT INNOVATION IS JUST NUMBERS. INNOVATION WITHOUT DATA IS JUST A BET.",
      available: "AVAILABLE GLOBALLY",
      challenges: "FOCUSED ON COMPLEX CHALLENGES",
      relocation: "OPEN TO RELOCATION"
    },
    contact: {
      subtitle: "07. NEXT STEPS",
      title: "LET'S BUILD.",
      linkedin: "LINKEDIN",
      email: "E-MAIL",
      github: "GITHUB"
    },
    footer: {
      copyright: "ALL RIGHTS RESERVED.",
      connect: "CONNECT"
    }
  },
  pt: {
    nav: {
      manifesto: "Manifesto",
      impact: "Impacto",
      arsenal: "Arsenal",
      certifications: "Certificações",
      contact: "CONTATO _/"
    },
    hero: {
      meta: "01. LUCAS SOUZA SILVA — AI & SOFTWARE ENGINEER",
      title1: "IA + ENGENHARIA:",
      title2: "O CÓDIGO QUE",
      title3: "IMPULSIONA O ROI.",
      desc: "Construindo soluções End-to-End que convertem dados complexos em eficiência operacional e valor estratégico real, aplicando brutalismo visual para garantir impacto e autoridade técnica.",
      ctaImpact: "VER IMPACTO",
      ctaStart: "INICIAR PROJETO"
    },
    manifesto: {
      subtitle: "02. O MANIFESTO",
      title: "OWNERSHIP RADICAL",
      text1: "Atuo na intersecção exata entre tecnologia, dados e estratégia de negócio. Como especialista no ecossistema Google Cloud (GCP), minha missão é clara:",
      text2: "Transformar dados brutos em soluções que geram ROI real, reduzindo custos operacionais e otimizando malhas logísticas complexas em larga escala.",
      text3: "Meu foco é um só: traduzir complexidade técnica em eficiência operacional e milhões em valor real."
    },
    projects: {
      subtitle: "03. PROJETOS EM DESTAQUE",
      desc: "CASES QUE DEFINEM O MEU ARSENAL TÉCNICO E IMPACTO DE NEGÓCIO.",
      counterLabel: "PROJETOS COMPLETADOS",
      visit: "EXPLORAR",
      roleLabel: "MEU PAPEL & IMPACTO",
      contextLabel: "CONTEXTO ESTRATÉGICO",
      viewDetails: "EXPANDIR ANÁLISE DE IMPACTO",
      hideDetails: "RECOLHER DETALHES",
      items: [
        {
          id: "projeto-afrodite",
          impactValue: "R$ 4 Bi",
          impactLabel: "INVESTIMENTO DIRECIONADO",
          category: "ESTRATÉGIA FABRIL",
          title: "Projeto Afrodite (Expansão e Estratégia Fabril)",
          context: "Footprint estratégico e desenho de malha logística para nova planta fabril (horizonte de 10 anos).",
          roleImpact: "Liderou a integração de dados (datalakes BigQuery), criou mapas coropléticos interativos e construiu o site 'Bluebook' para tomada de decisão da diretoria executiva.",
          techTags: ["Python", "BigQuery", "SQL", "Otimix", "HTML"]
        },
        {
          id: "radar-inteligente",
          impactValue: "R$ 400 Mi",
          impactLabel: "INVESTIMENTO DIRECIONADO",
          category: "INTELIGÊNCIA OPERACIONAL",
          title: "Radar Inteligente de Operações",
          context: "Ferramenta de gestão de capacidade automatizada (GCAP) atuando como sinalizador inteligente de decisão a longo prazo.",
          roleImpact: "Arquiteto do pipeline de ETL (Cloud Storage, Dataprep) e ponte entre UX/UI e operações na construção de modelos Tableau de alta precisão.",
          techTags: ["Tableau", "GCP", "ETL", "S&OP"]
        },
        {
          id: "digital-twin",
          impactValue: "R$ 300 Mil",
          impactLabel: "IMPACTO FINANCEIRO",
          category: "DIGITAL TWIN & ATIVOS",
          title: "Digital Twin - Centro de Distribuição",
          context: "Implementação de tecnologia de nuvem de pontos para gestão precisa da infraestrutura de Centros de Distribuição.",
          roleImpact: "Liderou a governança técnica, garantindo a integridade dos dados entre plantas físicas e sistemas digitais.",
          techTags: ["3D Scanning", "Point Cloud", "Asset Management"]
        },
        {
          id: "vocacao-cds",
          impactValue: "R$ 200 Mi",
          impactLabel: "IMPACTO FINANCEIRO",
          category: "OTIMIZAÇÃO DE MALHA",
          title: "Vocação dos Centros de Distribuição Nacionais",
          context: "Definição estratégica de perfis de CDs para otimização do lead time e redução de custos operacionais.",
          roleImpact: "Analisou estoques de baixo giro e modelou cenários para o comitê executivo em conjunto com consultorias globais.",
          techTags: ["Data Analysis", "Inventory Modeling", "Business Cases"]
        },
        {
          id: "control-tower",
          impactValue: "R$ 50 Mi",
          impactLabel: "IMPACTO FINANCEIRO",
          category: "CONTROL TOWER DE SUPRIMENTOS",
          title: "Control Tower de Demanda e Abastecimento",
          context: "Alertas automatizados para rupturas de estoque e previsibilidade de prazos de entrega.",
          roleImpact: "Construiu a esteira BigQuery/Dataflow (camadas Bronze, Silver, Gold) habilitando alertas inteligentes com retorno estimado de R$ 10M, além de agentes de IA Gemini Enterprise.",
          techTags: ["BigQuery", "Dataflow", "Advanced SQL", "Gemini Enterprise"]
        },
        {
          id: "sistema-abastecimento",
          impactValue: "R$ 25 Mi",
          impactLabel: "IMPACTO FINANCEIRO",
          category: "AUTOMAÇÃO DE ABASTECIMENTO",
          title: "Sistema Automatizado de Abastecimento",
          context: "Ferramenta multimarca para automação do cálculo de suprimentos (25 milhões de SKUs/mês).",
          roleImpact: "Governança da esteira de dados, resultando em 50% de redução no esforço operacional e 15% de aumento em precisão.",
          techTags: ["BigQuery", "Google Workspace", "Automation"]
        }
      ]
    },
    arsenal: {
      subtitle: "04. COMPETÊNCIAS TÉCNICAS",
      skills: [
        {
          title: "CLOUD & IA",
          items: ["GCP (BIGQUERY, VERTEX AI, DATAPREP)", "GOOGLE AI STUDIO", "ENGENHARIA DE PROMPTS", "AGENTES DE IA"]
        },
        {
          title: "DADOS & AUTOMAÇÃO",
          items: ["SQL & PYTHON", "SPARK", "ETL/ELT & N8N", "MODELAGEM DIMENSIONAL/RELACIONAL"]
        },
        {
          title: "VISUALIZAÇÃO",
          items: ["POWER BI", "TABLEAU", "LOOKER STUDIO"]
        },
        {
          title: "DESENVOLVIMENTO",
          items: ["REACT & REACT NATIVE", "NODE.JS", "TYPESCRIPT", "JAVA"]
        }
      ]
    },
    certifications: {
      subtitle: "05. BADGES & CERTIFICAÇÕES",
      title: "AUTORIDADE VALIDADA",
      desc: "ACREDITAÇÕES OFICIAIS COMPROVANDO DOMÍNIO TÉCNICO END-TO-END EM INTELIGÊNCIA ARTIFICIAL, DATA LAKEHOUSE E CLOUD INFRASTRUCTURE.",
      badgeVerified: "CREDENCIAL VERIFICADA",
      badgeOfficial: "ACREDITAÇÃO OFICIAL",
      filterAll: "TODAS",
      filterAi: "IA & GENAI",
      filterData: "DADOS & LAKEHOUSE",
      filterCloud: "CLOUD & INFRA",
      filterAgile: "METODOLOGIA",
      viewCert: "VER CERTIFICADO",
      verifyOnline: "VALIDAR ONLINE",
      downloadPdf: "BAIXAR PDF",
      close: "FECHAR VISUALIZAÇÃO",
      accreditedSkills: "COMPETÊNCIAS VALIDADAS",
      issuedOn: "EMISSÃO",
      credentialId: "ID DA CREDENCIAL",
      items: {
        awsGenAi: {
          title: "AWS Generative AI for Developers",
          category: "AWS & IA Generativa",
          desc: "Certificação oficial autorizada pela Amazon Web Services (AWS) e emitida pelo Coursera, comprovando domínio na construção de aplicações com IA Generativa, utilização de foundation models, Amazon Bedrock e soluções de engenharia para desenvolvedores."
        },
        googleAi: {
          title: "Google AI Fundamentals",
          category: "IA & Grandes Modelos de Linguagem",
          desc: "Certificação rigorosa autorizada pela Google e emitida pelo Coursera, comprovando domínio em IA Generativa, Large Language Models (LLMs), engenharia de prompts e design ético de sistemas inteligentes."
        },
        databricksFundamentals: {
          title: "Databricks Fundamentals Accreditation",
          category: "Lakehouse & Big Data",
          desc: "Acreditação oficial pela Databricks Academy comprovando fluência na arquitetura unificada de Lakehouse, camadas transacionais Delta Lake, processamento distribuído com Apache Spark e inteligência de dados."
        },
        gcpCore: {
          title: "Google Cloud Core Infrastructure",
          category: "Infraestrutura Cloud",
          desc: "Fundamentos consolidados em arquitetura GCP, controle de acesso e governança IAM, topologia de redes VPC, datalakes BigQuery e alta disponibilidade em nuvem."
        },
        sixSigma: {
          title: "Lean Six Sigma White Belt",
          category: "Excelência Operacional",
          desc: "Aplicação prática dos princípios de melhoria contínua, ciclo DMAIC, análise estatística de causa-raiz e eliminação metódica de desperdícios em operações complexas."
        },
        agilePm: {
          title: "Gerenciamento Ágil de Projetos",
          category: "Metodologia & Entrega",
          desc: "Competência aplicada em governança e entrega ágil, cerimônias de sprint Scrum, gestão de backlog, aumento de cadência e ciclos de release contínuos."
        }
      }
    },
    education: {
      subtitle: "06. COMUNIDADE & FORMAÇÃO",
      communityTitle: "COMUNIDADE & PALESTRAS",
      communityDesc: "COMPARTILHANDO CONHECIMENTO SOBRE IA GENERATIVA, DADOS E ENGENHARIA DE SOFTWARE.",
      communities: [
        "IA BRASIL (UMA DAS MAIORES DE IA GENERATIVA DO BRASIL)",
        "CONECTADEV"
      ],
      academicTitle: "FORMAÇÃO ACADÊMICA",
      academicDegree: "Bacharelado em Engenharia de Software",
      certTitle: "ACREDITAÇÕES ADICIONAIS",
      certifications: [
        "GOOGLE CLOUD CORE INFRASTRUCTURE",
        "LEAN SIX SIGMA WHITE BELT",
        "GERENCIAMENTO ÁGIL DE PROJETOS"
      ]
    },
    impact: {
      mainText: "DADOS SEM INOVAÇÃO SÃO APENAS NÚMEROS. INOVAÇÃO SEM DADOS É APENAS UMA APOSTA.",
      available: "DISPONÍVEL GLOBALMENTE",
      challenges: "FOCADO EM DESAFIOS COMPLEXOS",
      relocation: "ABERTO A REALOCAÇÃO"
    },
    contact: {
      subtitle: "07. PRÓXIMOS PASSOS",
      title: "VAMOS CONSTRUIR.",
      linkedin: "LINKEDIN",
      email: "E-MAIL",
      github: "GITHUB"
    },
    footer: {
      copyright: "TODOS OS DIREITOS RESERVADOS.",
      connect: "CONECTAR"
    }
  }
};
