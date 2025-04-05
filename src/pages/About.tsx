
import MainLayout from "@/components/layout/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            GreenThreads nació de una visión simple pero poderosa: transformar la industria de la moda en un ejemplo de sostenibilidad y responsabilidad.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Nuestra Historia
            </h2>
            <p className="mb-4 text-muted-foreground">
              Fundada en 2020 por un grupo de diseñadores y activistas ambientales, GreenThreads surgió como respuesta a la creciente preocupación por el impacto de la industria de la moda en nuestro planeta.
            </p>
            <p className="mb-4 text-muted-foreground">
              Lo que comenzó como un pequeño proyecto con una colección cápsula de prendas básicas elaboradas con algodón orgánico ha crecido hasta convertirse en una marca reconocida por su innovación en materiales sostenibles y diseño consciente.
            </p>
            <p className="text-muted-foreground">
              Hoy, seguimos fieles a nuestra misión original: ofrecer moda hermosa que no comprometa el futuro de nuestro planeta.
            </p>
          </div>
          <div className="bg-eco-light rounded-lg overflow-hidden h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Nuestra historia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3">Sostenibilidad</h3>
              <p className="text-muted-foreground">
                Cada decisión que tomamos, desde la selección de materiales hasta los procesos de fabricación, se evalúa por su impacto ambiental. Nos comprometemos a reducir continuamente nuestra huella ecológica.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3">Transparencia</h3>
              <p className="text-muted-foreground">
                Creemos que nuestros clientes merecen saber exactamente cómo se fabrican sus prendas. Compartimos abiertamente información sobre nuestra cadena de suministro, costos y procesos.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-3">Responsabilidad Social</h3>
              <p className="text-muted-foreground">
                Nos aseguramos de que todas las personas involucradas en la creación de nuestras prendas trabajen en condiciones justas y seguras, con salarios dignos y respeto por sus derechos.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="order-2 md:order-1 bg-eco-light rounded-lg overflow-hidden h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Nuestro equipo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">
              Nuestro Equipo
            </h2>
            <p className="mb-4 text-muted-foreground">
              Somos un equipo diverso de diseñadores, ingenieros textiles, activistas ambientales y expertos en negocios sostenibles unidos por una pasión común: demostrar que la moda puede ser una fuerza para el bien.
            </p>
            <p className="mb-4 text-muted-foreground">
              Cada miembro aporta una perspectiva única y valiosa a nuestro trabajo, y juntos estamos reimaginando cómo la industria de la moda puede operar en armonía con la naturaleza.
            </p>
            <p className="text-muted-foreground">
              Nuestras oficinas y talleres operan con energía 100% renovable y seguimos prácticas de negocio que reflejan los valores que defendemos en nuestros productos.
            </p>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-4">Reconocimientos</h2>
          <p className="text-muted-foreground mb-8">
            Nuestro trabajo ha sido reconocido por organizaciones líderes en sostenibilidad y moda ética:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-4 border border-muted rounded-lg">
              <p className="font-medium">Premio Innovación Sostenible 2022</p>
              <p className="text-sm text-muted-foreground">Fashion for Good</p>
            </div>
            <div className="p-4 border border-muted rounded-lg">
              <p className="font-medium">Certificación B Corp</p>
              <p className="text-sm text-muted-foreground">Desde 2021</p>
            </div>
            <div className="p-4 border border-muted rounded-lg">
              <p className="font-medium">Top 50 Marcas Sostenibles</p>
              <p className="text-sm text-muted-foreground">Eco Fashion Guide 2023</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Únete a Nuestra Misión</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Si compartes nuestra visión de un futuro más sostenible para la moda, te invitamos a unirte a nosotros. Cada compra es un voto por un mundo mejor, y juntos podemos impulsar el cambio que la industria necesita.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
