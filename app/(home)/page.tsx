import Link from 'next/link';

const CREDITS = [
  { name: 'overextended', url: 'https://github.com/overextended' },
  { name: 'Faroeste-Roleplay', url: 'https://github.com/Faroeste-Roleplay' },
  { name: 'Rexshack-RedM', url: 'https://github.com/Rexshack-RedM' },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16 gap-10">
      <div>
        <h1 className="text-3xl font-bold mb-4">Fox Framework</h1>
        <p className="text-fd-muted-foreground max-w-lg mb-6">
          fox_core is a framework for RedM (Red Dead Redemption 2 / rdr3), built on the
          architecture of{' '}
          <a href="https://github.com/overextended" target="_blank" rel="noreferrer" className="underline">
            overextended
          </a>
          's ox_core, but natively ported to RDR3's natives and limitations — no cars, armour,
          plates or phones; horses, cores, and telegrams instead.
        </p>
        <Link
          href="/docs"
          className="rounded-md bg-fd-primary px-4 py-2 text-fd-primary-foreground font-medium"
        >
          Read the docs
        </Link>
      </div>

      <footer className="text-sm text-fd-muted-foreground">
        <p className="mb-2">Credits</p>
        <ul className="flex flex-wrap gap-4 justify-center">
          {CREDITS.map((credit) => (
            <li key={credit.url}>
              <a href={credit.url} target="_blank" rel="noreferrer" className="underline">
                {credit.name}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
