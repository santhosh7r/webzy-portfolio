import { Closing } from "@/components/home/closing";
import { Domains } from "@/components/home/domains";
import { Hero } from "@/components/home/hero";
import { Principles } from "@/components/home/principles";
import { Products } from "@/components/home/products";
import { Research } from "@/components/home/research";
import { Signals } from "@/components/home/signals";
import { Standard } from "@/components/home/standard";
import { Thesis } from "@/components/home/thesis";

/**
 * The page argues in order: what we are → why it matters → what we work on →
 * what we hold the work to → what is being built → what is still open →
 * how we decide → what is happening now → what we are for.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Thesis />
      <Domains />
      <Standard />
      <Products />
      <Research />
      <Principles />
      <Signals />
      <Closing />
    </>
  );
}
