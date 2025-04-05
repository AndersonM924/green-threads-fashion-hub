
import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, ChevronDown, ChevronUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [missionExpanded, setMissionExpanded] = useState(false);

  return (
    <footer className="bg-muted/50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mission Section - Collapsible on Mobile */}
          <div className="col-span-1 lg:col-span-2">
            <div
              className="flex items-center justify-between md:justify-start cursor-pointer md:cursor-auto mb-4"
              onClick={() => setMissionExpanded(!missionExpanded)}
            >
              <h3 className="text-lg font-bold">Nuestra Misión</h3>
              <span className="md:hidden">
                {missionExpanded ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                missionExpanded || window.innerWidth >= 768
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 md:max-h-96 md:opacity-100"
              }`}
            >
              <p className="mb-4 text-muted-foreground">
                En GreenThreads, creemos que la moda puede ser hermosa y responsable. 
                Nuestro compromiso es proporcionar ropa sostenible que minimice el 
                impacto ambiental sin comprometer el estilo.
              </p>
              <p className="text-muted-foreground">
                Trabajamos con materiales orgánicos, reciclados y de bajo impacto, 
                colaborando con proveedores éticos y comunidades locales para crear 
                un cambio positivo en la industria de la moda.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-muted-foreground hover:text-primary transition-colors">
                  Sostenibilidad
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Recibe actualizaciones sobre nuestras colecciones sostenibles y consejos de moda verde.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-grow rounded-l-md border-y border-l border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="default" className="rounded-l-none">
                <Send size={16} />
              </Button>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h3 className="text-sm font-bold mb-2">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:scale-110 transition-transform">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-2 sm:mb-0">
            &copy; {new Date().getFullYear()} GreenThreads. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacidad
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
