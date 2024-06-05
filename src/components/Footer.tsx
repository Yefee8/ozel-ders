export default function Footer() {
    return (
      <footer className="w-full min-h-16 items-center justify-center flex border-t-primary/10 border-t">
        <div className="container  justify-between max-sm:justify-center flex gap-16 max-md:gap-8 flex-wrap items-center md:px-0 px-4 py-6">
          <h1 className="text-2xl font-medium text-primary">Özel Ders</h1>
  
          <div className="flex max-sm:justify-center flex-wrap gap-8 max-md:gap-4">
            <a href="https://github.com/Yefee8" className="p-2 text-center hover:bg-secondary/5 rounded-2xl text-secondary/90 cursor-pointer hover:text-secondary text-base font-medium duration-100">
              Yefee tarafından geliştirildi/kodlandı 
            </a>
          </div>
        </div>
      </footer>
    );
  }
  