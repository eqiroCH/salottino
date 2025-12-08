import { getPosts } from '@/lib/mdx';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';

export const metadata = {
  title: 'News | salottino',
};

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = await getPosts(locale);
  
  const title = locale === 'de' ? 'Aktuelles' : 'Novità';
  const subtitle = locale === 'de' ? 'Neuigkeiten und Events rund um salottino.' : 'Notizie ed eventi su salottino.';

  return (
    <div className="container px-4 pt-28 pb-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold text-primary">{title}</h1>
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/${locale}/news/${post.slug}`} className="group">
            <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
               <div className="h-48 bg-muted relative flex items-center justify-center text-muted-foreground">
                  {/* Cover placeholder if needed */}
                  <span className="text-sm">News</span>
               </div>
               <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
               </CardHeader>
               <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                      {/* Simple excerpt generation */}
                      {post.content.replace(/#+\s/g, '').substring(0, 100)}...
                  </p>
               </CardContent>
            </Card>
          </Link>
        ))}
        {posts.length === 0 && (
            <p className="text-center col-span-full text-muted-foreground">
                {locale === 'de' ? 'Keine Beiträge gefunden.' : 'Nessun articolo trovato.'}
            </p>
        )}
      </div>
    </div>
  );
}
