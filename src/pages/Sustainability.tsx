
import MainLayout from "@/components/layout/MainLayout";
import { Leaf, Droplet, Globe, Recycle } from "lucide-react";

const Sustainability = () => {
  return (
    <MainLayout>
      <div className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Sostenibilidad</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Nuestro compromiso con el planeta no es solo una palabra de moda, es nuestra razón de ser. Descubre cómo GreenThreads está transformando la moda para un futuro más sostenible.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Leaf className="mr-2 text-primary" /> Nuestros Materiales
            </h2>
            <p className="mb-4">
              Utilizamos materiales orgánicos, reciclados y de bajo impacto que reducen significativamente la huella ambiental de cada prenda:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
              <li>Algodón orgánico certificado GOTS</li>
              <li>Poliéster reciclado de botellas plásticas</li>
              <li>Lino de cultivo sostenible</li>
              <li>Tencel y Lyocell de fuentes responsables</li>
              <li>Cáñamo industrial de bajo impacto</li>
              <li>Lana de pastoreo regenerativo</li>
            </ul>
          </div>
          <div className="bg-eco-light rounded-lg overflow-hidden h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Materiales sostenibles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="order-2 md:order-1 bg-eco-light rounded-lg overflow-hidden h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
              alt="Proceso de fabricación"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Droplet className="mr-2 text-primary" /> Ahorro de Agua
            </h2>
            <p className="mb-4">
              El proceso tradicional de producción textil consume enormes cantidades de agua. Nosotros:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
              <li>Utilizamos técnicas de teñido de bajo impacto</li>
              <li>Implementamos sistemas de reciclaje de agua en nuestras fábricas asociadas</li>
              <li>Priorizamos proveedores con certificación de bajo consumo hídrico</li>
              <li>Desarrollamos procesos innovadores que reducen hasta un 80% el uso de agua</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Globe className="mr-2 text-primary" /> Impacto Local
            </h2>
            <p className="mb-4">
              Creemos en fortalecer las economías locales y reducir la huella de carbono asociada al transporte:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
              <li>Colaboramos con talleres locales que garantizan condiciones laborales justas</li>
              <li>Apoyamos a pequeños productores y artesanos</li>
              <li>Minimizamos el transporte de mercancías cuando es posible</li>
              <li>Compensamos la huella de carbono de nuestras operaciones inevitables</li>
            </ul>
          </div>
          <div className="bg-eco-light rounded-lg overflow-hidden h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
              alt="Impacto local"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Recycle className="mr-2 text-primary" /> Circularidad
          </h2>
          <p className="mb-6">
            Estamos comprometidos con cerrar el ciclo de la moda y eliminar el concepto de residuo:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Diseño</h3>
              <p className="text-sm text-muted-foreground">
                Creamos prendas duraderas, atemporales y fácilmente reparables
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Producción</h3>
              <p className="text-sm text-muted-foreground">
                Minimizamos residuos con patrones eficientes y reutilización de materiales
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Uso</h3>
              <p className="text-sm text-muted-foreground">
                Ofrecemos servicios de reparación y guías de cuidado para extender la vida útil
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Fin de Vida</h3>
              <p className="text-sm text-muted-foreground">
                Programa de devolución para reciclaje o upcycling de prendas usadas
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Nuestras Certificaciones</h2>
          <p className="text-muted-foreground mb-8">
            Trabajamos con los estándares más exigentes de la industria para garantizar nuestro compromiso:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-eco-green flex items-center justify-center text-white mb-2">
                GOTS
              </div>
              <p className="text-sm">Global Organic Textile Standard</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-eco-green flex items-center justify-center text-white mb-2">
                GRS
              </div>
              <p className="text-sm">Global Recycle Standard</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-eco-green flex items-center justify-center text-white mb-2">
                BCI
              </div>
              <p className="text-sm">Better Cotton Initiative</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-eco-green flex items-center justify-center text-white mb-2">
                FSC
              </div>
              <p className="text-sm">Forest Stewardship Council</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Sustainability;
