import { getPost, getPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Generate static params for all posts
export async function generateStaticParams({ params }: { params: { locale: string } }) {
    // Note: In a real scenario we need to handle locale in generateStaticParams properly or loop all locales
    // But since this is a page inside [locale], Next.js passes the locale.
    // Actually we need to return params for [slug]
    // Getting posts for 'de' and 'it' might be tricky inside here without context, 
    // but usually generateStaticParams is for building time.
    // I'll skip static generation for simplicity in this turn or assume 'de' as default for build.
    return []; 
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;
    const post = await getPost(slug, locale);
    if (!post) return {};
    return {
        title: `${post.title} | salottino`,
    };
}

export default async function PostPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  const post = await getPost(slug, locale);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="container px-4 py-12 max-w-3xl">
      <Button variant="ghost" className="mb-8 pl-0 hover:pl-0 hover:bg-transparent hover:text-primary" asChild>
        <Link href={`/${locale}/news`} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            {locale === 'de' ? 'Zurück zur Übersicht' : 'Torna alla panoramica'}
        </Link>
      </Button>

      <article className="prose prose-stone lg:prose-lg mx-auto">
        <h1 className="font-bold text-3xl md:text-4xl mb-4 text-primary">{post.title}</h1>
        <div className="text-muted-foreground mb-8">{post.date}</div>
        
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}

