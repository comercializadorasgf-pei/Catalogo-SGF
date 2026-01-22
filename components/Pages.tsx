import React from 'react';
import { PageLayout } from './Layout';
import { FeaturedProductCard, StandardProductCard } from './ProductCards';
import { FeaturedProduct, Product } from '../types';

const LOGO_URL = "https://crenavzuzjpccsxfnfsp.supabase.co/storage/v1/object/public/Logo%20SGf/Logo%20SGF";

// --- Page 1: Cover ---
export const CoverPage: React.FC = () => {
  return (
    <PageLayout pageNumber={1} footerText="Comercializadora S.G.F">
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-12 h-full">
        <img src={LOGO_URL} alt="Logo SGF" className="logo-container" />
        
        <div className="space-y-4">
          <p className="text-2xl text-green-700 font-medium max-w-xl mx-auto leading-relaxed italic">
            "Calidad que conecta el campo con el mercado"
          </p>
        </div>

        <div className="w-full px-4">
          <img 
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1000" 
            alt="Frutas frescas premium" 
            className="hero-image shadow-xl"
          />
        </div>
      </div>
    </PageLayout>
  );
};

// --- Page 2: Introduction ---
export const IntroPage: React.FC = () => {
  return (
    <PageLayout pageNumber={2} footerText="www.comercializadorasgf.com">
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-600 pl-4 text-green-900">Introducción</h2>
        <div className="text-xl leading-relaxed text-gray-700 space-y-8 max-w-2xl">
          <p>Bienvenido al Catálogo Digital de <strong>Comercializadora S.G.F</strong>, una empresa colombiana dedicada a la producción propia, comercialización y distribución de frutas y productos agrícolas frescos.</p>
          <p>Estamos comprometidos con la calidad, la trazabilidad y el abastecimiento confiable para el mercado nacional e internacional.</p>
          <p>Este catálogo refleja nuestra experiencia, capacidad operativa y enfoque en relaciones comerciales de largo plazo, diseñadas para el éxito de nuestros aliados.</p>
        </div>
        
        <div className="mt-24 grid grid-cols-3 gap-8">
          {[
            { icon: "🌿", text: "Frescura" },
            { icon: "🔍", text: "Trazabilidad" },
            { icon: "🤝", text: "Confianza" }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-green-50 rounded-3xl text-center shadow-sm">
              <div className="text-3xl mb-2">{item.icon}</div>
              <span className="text-green-900 font-bold">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

// --- Page 3: Production ---
const ownProducts: FeaturedProduct[] = [
  {
    name: "Uva Red Globe",
    description: "Excelente tamaño, color rojo vibrante y firmeza superior. Estándar de exportación con dulzura equilibrada.",
    image: "https://crenavzuzjpccsxfnfsp.supabase.co/storage/v1/object/public/Logo%20SGf/red-globe.webp",
    badge: "Premium S.G.F",
    bgColor: "bg-green-900",
    badgeColor: "bg-green-700"
  },
  {
    name: "Guayaba Dulce",
    description: "Fruta de pulpa aromática y alto contenido de vitamina C. Cultivada bajo estrictos controles de calidad en origen.",
    image: "https://crenavzuzjpccsxfnfsp.supabase.co/storage/v1/object/public/Logo%20SGf/guayaba.webp",
    badge: "Producción Directa",
    bgColor: "bg-green-800",
    badgeColor: "bg-green-600"
  }
];

export const ProductionPage: React.FC = () => {
  return (
    <PageLayout pageNumber={3} footerText="Producción Directa S.G.F">
      <div className="mt-12">
        <div className="flex justify-between items-start mb-10">
          <div>
            <span className="text-green-600 font-bold uppercase text-sm tracking-widest">Sección Especial</span>
            <h2 className="text-4xl font-extrabold text-green-900 mt-2">🌱 Producción Propia</h2>
          </div>
          <img src={LOGO_URL} alt="Logo" className="w-32 h-auto opacity-50" />
        </div>
        
        <div className="space-y-8">
          {ownProducts.map((p, i) => (
            <FeaturedProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

// --- Page 4: Commercialization 1 ---
const productsPage4: Product[] = [
  {
    name: "Maracuyá",
    description: "Seleccionada por peso y madurez óptima. Cáscara firme y pulpa abundante para mercados exigentes.",
    image: "https://crenavzuzjpccsxfnfsp.supabase.co/storage/v1/object/public/Logo%20SGf/Maracuya.webp"
  },
  {
    name: "Papaya",
    description: "Variedades dulces de maduración uniforme. Ideal para retail y consumo institucional de alta rotación.",
    image: "https://crenavzuzjpccsxfnfsp.supabase.co/storage/v1/object/public/Logo%20SGf/Papaya.webp"
  },
  {
    name: "Limón Tahití",
    description: "Sin semillas y con alto contenido de zumo. Piel verde brillante de calidad exportación.",
    image: "https://crenavzuzjpccsxfnfsp.supabase.co/storage/v1/object/public/Logo%20SGf/Limon%20tahiti.webp"
  },
  {
    name: "Lulo",
    description: "Fruta exótica colombiana fresca. Seleccionada por tamaño y color naranja intenso.",
    image: "https://crenavzuzjpccsxfnfsp.supabase.co/storage/v1/object/public/Logo%20SGf/Lulo.webp"
  }
];

export const CommercializationPage1: React.FC = () => {
  return (
    <PageLayout pageNumber={4} footerText="Abastecimiento Confiable">
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-8 border-l-4 border-green-600 pl-4 uppercase tracking-wider text-green-900">📦 Comercialización Estratégica</h2>
        <div className="grid grid-cols-2 gap-8">
          {productsPage4.map((p, i) => (
            <StandardProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

// --- Page 5: Commercialization 2 ---
const productsPage5: Product[] = [
  {
    name: "Berenjena",
    description: "Piel lisa y brillante, seleccionada para garantizar firmeza y larga vida post-cosecha.",
    image: "https://crenavzuzjpccsxfnfsp.supabase.co/storage/v1/object/public/Logo%20SGf/Berenjena.webp"
  },
  {
    name: "Espinaca",
    description: "Hojas frescas y crujientes. Procesadas bajo normas de seguridad para mantener frescura total.",
    image: "https://crenavzuzjpccsxfnfsp.supabase.co/storage/v1/object/public/Logo%20SGf/Espinaca.webp"
  },
  {
    name: "Sandía Baby",
    description: "Dulzura intensa en tamaño personal. Práctica y fresca para consumo inmediato.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Maíz Dulce",
    description: "Granos tiernos y uniformes, cosechados en el punto exacto para su perfecta conservación.",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=400"
  }
];

export const CommercializationPage2: React.FC = () => {
  return (
    <PageLayout pageNumber={5} footerText="Seguridad en el Suministro">
      <div className="mt-8">
        <div className="grid grid-cols-2 gap-8">
          {productsPage5.map((p, i) => (
            <StandardProductCard key={i} product={p} />
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-center">
          <p className="text-gray-500 italic">Complementamos nuestra producción con aliados estratégicos para asegurar su abastecimiento continuo durante todo el año.</p>
        </div>
      </div>
    </PageLayout>
  );
};

// --- Page 6: Contact ---
export const ContactPage: React.FC = () => {
  return (
    <PageLayout pageNumber={6} footerText="© 2024 Comercializadora S.G.F">
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center mb-16">
          <img src={LOGO_URL} alt="Logo SGF" className="w-80 mb-6" />
          <div className="h-1 w-24 bg-green-500 mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-16 px-10 mb-20">
          <div className="space-y-10">
            <div className="flex items-start space-x-4">
              <div className="text-2xl mt-1">📍</div>
              <div>
                <h4 className="font-bold text-green-800 uppercase text-xs tracking-widest">Ubicación</h4>
                <p className="text-gray-600">La Unión, Valle del Cauca</p>
                <p className="text-gray-600">Pereira, Risaralda</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl mt-1">🌐</div>
              <div>
                <h4 className="font-bold text-green-800 uppercase text-xs tracking-widest">Canales Digitales</h4>
                <p className="text-gray-600">gerencia@comercializadorasgf.com</p>
                <p className="text-gray-600">www.comercializadorasgf.com</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="flex items-start space-x-4">
              <div className="text-2xl mt-1">📱</div>
              <div>
                <h4 className="font-bold text-green-800 uppercase text-xs tracking-widest">Contacto Directo</h4>
                <p className="text-2xl font-bold text-gray-900">+57 317 124 3073</p>
                <p className="text-sm text-gray-500">WhatsApp y Llamadas</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-2xl mt-1">🔗</div>
              <div>
                <h4 className="font-bold text-green-800 uppercase text-xs tracking-widest mb-2">Escanea para visitar</h4>
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.comercializadorasgf.com" 
                  alt="QR Code website" 
                  className="w-28 h-28 border border-gray-200 rounded-lg p-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-green-50 px-10 py-4 rounded-full border border-green-100">
            <p className="text-green-900 font-semibold italic text-center text-lg">
              "Calidad que conecta el campo con el mercado"
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
