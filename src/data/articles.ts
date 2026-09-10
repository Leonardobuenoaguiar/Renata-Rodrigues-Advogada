import { img } from "./site";

export type ArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type Article = {
  id: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  body: ArticleSection[];
  author?: string;
  publishedAt?: string;
  sourceUrl?: string;
};

// Keep summaries separate from original articles. Populate body only with supplied texts.
export const articles: Article[] = [
  {
    id: "bullying-e-cyberbullying",
    category: "Bullying & Cyberbullying",
    title: "Bullying e cyberbullying: a responsabilidade da escola e os caminhos da prevenção",
    summary: "Como estruturar protocolos, acolher os envolvidos e reduzir a responsabilização da instituição.",
    image: img.hands,
    body: [],
  },
  {
    id: "lgpd-na-escola",
    category: "LGPD",
    title: "LGPD na escola: como tratar dados de alunos e famílias com segurança",
    summary: "Bases legais, políticas e cuidados práticos com a proteção de dados no dia a dia escolar.",
    image: img.whiteboard,
    body: [],
  },
  {
    id: "inclusao-pei-paee",
    category: "Inclusão",
    title: "Inclusão e educação especial: PEI, PAEE e o papel do gestor",
    summary: "Os documentos e as decisões que sustentam uma educação inclusiva e juridicamente segura.",
    image: img.teacherAssist,
    body: [],
  },
  {
    id: "eca-digital",
    category: "ECA Digital",
    title: "ECA Digital e redes sociais: protegendo crianças no ambiente on-line",
    summary: "Limites, responsabilidades e orientações para a convivência digital dentro da escola.",
    image: img.schoolHall,
    body: [],
  },
  {
    id: "seguranca-juridica-na-gestao",
    category: "Gestão Escolar",
    title: "Segurança jurídica na gestão escolar: decisões mais seguras no cotidiano",
    summary: "Compliance e governança como aliados de diretores e coordenadores na tomada de decisão.",
    image: img.meeting,
    body: [],
  },
  {
    id: "mediacao-de-conflitos",
    category: "Prevenção",
    title: "Autoridade escolar e mediação de conflitos: conduzindo situações sensíveis",
    summary: "Quando orientar, mediar ou notificar e como agir com segurança em momentos delicados.",
    image: img.classroom,
    body: [],
  },
];