export default function Header() {
  return (
    <header className="w-full min-h-16 items-center flex justify-center border-b-primary/10 border-b">
      <div className="container max-sm:justify-between flex gap-16 max-md:gap-8 flex-wrap items-center max-md:px-6 py-6">
        <h1 className="text-2xl font-medium text-primary">Özel Ders</h1>

        <div className="flex max-sm:justify-center flex-wrap gap-8 max-md:gap-4">
          <a href="#iletisim" className="p-2 hover:bg-secondary/5 rounded-2xl text-secondary/70 cursor-pointer hover:text-secondary text-base font-medium duration-100">
            İletişim
          </a>
        </div>
      </div>
    </header>
  );
}
