import { useState, useEffect } from "react";
import { 
  IceCream, 
  MapPin, 
  Star, 
  Trees, 
  Hand, 
  Leaf, 
  Car, 
  Share2, 
  ThumbsUp 
} from "lucide-react";
const alphonsoMango = "/assets/alphonso_mango.png";
const berryPopsicle = "/assets/berry_popsicle.png";
const kiwiPopsicle = "/assets/kiwi_popsicle.png";
const chocolatePopsicle = "/assets/chocolate_popsicle.png";
const biscoffPopsicle = "/assets/biscoff_popsicle.png";

const HERO_IMAGES = [
  alphonsoMango,
  berryPopsicle,
  kiwiPopsicle,
  biscoffPopsicle
];

const ProductCard = ({ title, description, rating, image, badge, notes }: any) => (
  <div className="group bg-white rounded-xl overflow-hidden shadow-[0_24px_48px_rgba(129,86,0,0.08)] transition-all hover:-translate-y-2">
    <div className="relative h-72 md:h-80 overflow-hidden">
      <img 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        src={image} 
        alt={title}
      />
      <div className="absolute top-6 left-6 bg-orange-100 text-orange-900 font-headline text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
        {badge}
      </div>
    </div>
    <div className="p-8 space-y-6 text-left">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-headline font-bold text-3xl text-gray-900">{title}</h3>
          <p className="text-gray-500 font-body">{description}</p>
        </div>
        <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-full font-bold">
          <span>{rating}</span>
          <Star className="w-4 h-4 fill-current" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {notes.map((note: string, i: number) => (
          <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gray-100 text-gray-600 rounded-md">
            {note}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcf9f4]">
      {/* Hero Section */}
      <header className="relative w-full h-[795px] md:h-[751px] overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0 bg-stone-900">
          {HERO_IMAGES.map((src, index) => (
            <img
              key={src}
              src={src}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out brightness-[0.80] ${
                index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              alt="Popsicle Background"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#fcf9f4]"></div>
        </div>

        <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="mb-4">
                <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] font-headline italic uppercase block">
                    Pop Stix
                </span>
            </div>
            <h1 className="font-headline font-extrabold text-6xl md:text-8xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-amber-100 drop-shadow-2xl leading-none">
                Chennai's #1 Popsicle
            </h1>
            <p className="font-body text-xl md:text-2xl text-white/95 font-medium drop-shadow-lg">
                Discover Coolness in Every Bite 🍦. <br className="hidden md:block" />
                <span className="opacity-90">Handmade with 100% Real Fruit.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                    <IceCream className="text-amber-300 w-6 h-6" />
                    <div className="text-left">
                        <div className="text-white font-black text-xl leading-none">60+</div>
                        <div className="text-white/70 text-xs font-bold uppercase tracking-wider font-headline">Varieties</div>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                    <MapPin className="text-amber-300 w-6 h-6" />
                    <div className="text-left">
                        <div className="text-white font-black text-xl leading-none">10+</div>
                        <div className="text-white/70 text-xs font-bold uppercase tracking-wider font-headline">Shops in Chennai</div>
                    </div>
                </div>
            </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductCard 
            title="Signature Alphonso Mango"
            description="Pure Ratnagiri pulp with zero added sugar."
            rating="4.9"
            image={alphonsoMango}
            badge="Popular"
            notes={["100% Organic", "Season Special", "No Added Sugar"]}
          />
          <ProductCard 
            title="Lotus Biscoff"
            description="Speculoos cream with caramelized biscuit swirl."
            rating="5.0"
            image={biscoffPopsicle}
            badge="Bestseller"
            notes={["Caramelized", "Crunchy", "Premium Belgian"]}
          />
        </div>

        <section className="mt-32 text-center">
            <h2 className="font-headline font-extrabold text-4xl text-gray-900 mb-16">The Pop Stix Promise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4 flex flex-col items-center">
                    <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shadow-inner">
                        <Trees className="w-10 h-10" />
                    </div>
                    <h4 className="font-headline font-bold text-xl">Fresh Ingredients</h4>
                    <p className="text-gray-500 px-8">Sourced daily from local orchards across Tamil Nadu.</p>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shadow-inner">
                        <Hand className="w-10 h-10" />
                    </div>
                    <h4 className="font-headline font-bold text-xl">Handcrafted</h4>
                    <p className="text-gray-500 px-8">Slow-churned in small batches for the perfect texture.</p>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <div className="w-20 h-20 bg-stone-200 text-stone-600 rounded-full flex items-center justify-center shadow-inner">
                        <Leaf className="w-10 h-10" />
                    </div>
                    <h4 className="font-headline font-bold text-xl">Zero Synthetics</h4>
                    <p className="text-gray-500 px-8">No artificial colors, flavors, or high-fructose corn syrup.</p>
                </div>
            </div>
        </section>

        <section className="mt-32">
            <div className="bg-gray-100 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 h-80 rounded-xl overflow-hidden shadow-sm">
                    <img className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLxiLEGpzhtZuAziIr8BArDc7ksC3uBHvHGoN9ySgTZNy_tV0_PqfSojhNyZEbwbt-qR7aURwqNQjWwQA8ocDMDNYbZmKfBaH2W63087HjC9tunkLP4iTsI_qt3fByZNvYrq3JXT4N7Uo67ZbsboVyBBAezj1FdvSKsespsVcmIYb9dWEATtBRADKDK-6SEpYwb5YpFboEDAZ_-exLVGov0pugV414TRp_kU5sHJOElDDW3F205srMUVYr2QqY_VrL9TLxlG3QW_Hd" alt="Location Map" />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                    <span className="font-headline uppercase tracking-widest text-amber-700 font-bold">Visit Us</span>
                    <h2 className="font-headline font-extrabold text-4xl text-gray-900">Velachery Grand Mall</h2>
                    <div className="flex items-center gap-4 text-amber-700 font-bold">
                        <Car className="w-6 h-6" />
                        <span>Open until 10:30 PM tonight</span>
                    </div>
                    <a href="https://maps.app.goo.gl/VaUsiXNr7FBEvubs7?g_st=aw" target="_blank" rel="noopener noreferrer" class="inline-block bg-amber-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-amber-900/20 hover:scale-105 transition-transform active:scale-95 text-center">
                        Get Directions
                    </a>
                </div>
            </div>
        </section>
      </main>

      <footer className="bg-gray-200 py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-3xl font-extrabold tracking-tighter text-amber-700 font-headline uppercase italic">Pop Stix</div>
            <p className="text-gray-500 max-w-md mx-auto">
                Crafting smiles one popsicle at a time. Join the community of flavor explorers in Chennai.
            </p>
            <div className="flex justify-center gap-6">
                <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-700 shadow-sm hover:scale-110 transition-transform" href="#"><Share2 className="w-6 h-6" /></a>
                <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-700 shadow-sm hover:scale-110 transition-transform" href="#"><ThumbsUp className="w-6 h-6" /></a>
            </div>
            <div className="pt-8 text-sm text-gray-400 font-medium">
                © 2024 Pop Stix Confections. All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  );
}
