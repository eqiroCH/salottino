import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold text-primary">404 - Seite nicht gefunden</h1>
      <p className="text-muted-foreground">Pagina non trovata</p>
      <Button asChild>
        <Link href="/">Zurück zur Startseite / Torna alla Home</Link>
      </Button>
    </div>
  );
}

