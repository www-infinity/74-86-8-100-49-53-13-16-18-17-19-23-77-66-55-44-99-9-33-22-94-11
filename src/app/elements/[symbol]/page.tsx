import { notFound } from 'next/navigation';
import ElementDetailClient from '@/components/ElementDetailClient';
import { elements, elementMap } from '@/lib/data/elements';
import { projects } from '@/lib/data/projects';

interface PageProps {
  params: Promise<{ symbol: string }>;
}

export function generateStaticParams() {
  return elements.map((el) => ({ symbol: el.symbol }));
}

export async function generateMetadata({ params }: PageProps) {
  const { symbol } = await params;
  const el = elementMap.get(symbol.charAt(0).toUpperCase() + symbol.slice(1).toLowerCase());
  if (!el) return { title: 'Element Not Found — ElementLab' };
  return {
    title: `${el.name} (${el.symbol}) — ElementLab`,
    description: el.description,
  };
}

export default async function ElementDetailPage({ params }: PageProps) {
  const { symbol } = await params;
  const normalised = symbol.charAt(0).toUpperCase() + symbol.slice(1).toLowerCase();
  const el = elementMap.get(normalised);

  if (!el) notFound();

  const relatedProjects = projects.filter((p) =>
    p.heroElements.includes(el.symbol)
  );

  return <ElementDetailClient el={el} relatedProjects={relatedProjects} />;
}
