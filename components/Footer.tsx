import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">Tigres del Licey</h3>
            <p className="text-blue-100">
              El equipo más ganador de la Liga de Béisbol Profesional de la República Dominicana
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/noticias" className="text-blue-100 hover:text-white">
                  Últimas Noticias
                </Link>
              </li>
              <li>
                <Link href="/tienda" className="text-blue-100 hover:text-white">
                  Tienda Oficial
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-blue-100 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@licey.com</span>
              </li>
              <li>Santo Domingo, RD</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-blue-100 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-blue-100 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className="text-blue-100 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-blue-700 pt-8 text-center">
          <p className="text-blue-100">
            © {new Date().getFullYear()} Tigres del Licey. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}