
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import("./component/hero"), { ssr: false });
const Tentang = dynamic(() => import("./component/tentang"), { ssr: false });
const Peta = dynamic(() => import("./component/peta"), { ssr: false });
const Destinasi = dynamic(() => import("./component/destinasi"), { ssr: false });
const UMKM = dynamic(() => import("./component/umkm"), { ssr: false });
const Gallery = dynamic(() => import("./component/gallery"), { ssr: false });
const Artikel = dynamic(() => import("./component/artikel"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Hero />
      <Tentang />
      <Peta/>
      <Destinasi/>
      <UMKM/>
      <Gallery/>
      <Artikel/>
    </div>

  );
}
