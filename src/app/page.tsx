import Banner from "@/components/banner";
import BigNumbersSection from "@/components/bigNumbersSection";
import TestimonialsSection from "@/components/testimonialsSection";
import BachareladoPresencial from "./cursos/graduacao-presencial/bacharelado/page";

export default function Home() {
  return (
    <main>
      <Banner />
      <BigNumbersSection />
      <BachareladoPresencial bread={false} search={false} />
      <TestimonialsSection />
    </main>
  );
}
