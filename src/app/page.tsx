import Cards from "@/components/Cards";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="container max-md:px-6 flex flex-col items-center gap-6">
      <Cards />

      <Contact />
    </div>
  );
}
