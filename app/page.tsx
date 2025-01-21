import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Trophy, Calendar, Star, Users, Newspaper } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://m.n.com.do/wp-content/uploads/2025/01/Tigres-del-Licey-celebra-pase-a-la-final-1140x694.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tigres del Licey
            </h1>
            <p className="mt-6 text-xl text-blue-100">
            <Trophy className="h-12 w-12 text-yellow-200 mb-4"> </Trophy>24 veces campeones de la Liga de Béisbol Profesional de la República Dominicana y <Trophy className="h-12 w-12 text-yellow-200 mb-4"> </Trophy> 11 Series del Caribe. 
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
                <Link href="/calendario">
                  Ver Próximos Juegos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-blue-900 text-white border-white hover:bg-white/10">
                <Link href="/historia">
                  Nuestra Historia
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <Trophy className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900">24</h3>
              <p className="text-blue-700">Campeonatos Nacionales</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <Star className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900">11</h3>
              <p className="text-blue-700">Series del Caribe</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <Calendar className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900">117</h3>
              <p className="text-blue-700">Años de Historia</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <Users className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900">1M+</h3>
              <p className="text-blue-700">Fanáticos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Últimas Noticias
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Mantente al día con las últimas novedades de los Tigres del Licey
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* News Card 1 */}
            <article className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src="https://colimdo.org/wp-content/uploads/2025/01/LICEY-1-1.jpg"
                  alt="Baseball game"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2025-03-16" className="text-gray-500">
                    16 de marzo, 2025
                  </time>
                  <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600">
                    Noticias
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    <Link href="/noticias/victoria-importante">
                      Victoria importante en el estadio Quisqueya Juan Marichal
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    Los Tigres del Licey logran una victoria crucial en su camino hacia la clasificación...
                  </p>
                </div>
              </div>
            </article>

            {/* News Card 2 */}
            <article className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src="https://www.licey.com/wp-content/uploads/2025/01/HaroldRamirezArte-e1737302752914.jpg"
                  alt="Team practice"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2025-03-15" className="text-gray-500">
                    15 de marzo, 2025
                  </time>
                  <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600">
                    Equipo
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    <Link href="/noticias/nuevo-jugador">
                      Nuevo refuerzo se une al equipo para la temporada
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    El equipo azul anuncia la incorporación de un nuevo talento para fortalecer su roster...
                  </p>
                </div>
              </div>
            </article>

            {/* News Card 3 */}
            <article className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src="https://scontent.fyqt1-1.fna.fbcdn.net/v/t39.30808-6/464931094_27711316501815496_5314461173302435027_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=iTosuBmcJt0Q7kNvgHoKTts&_nc_zt=23&_nc_ht=scontent.fyqt1-1.fna&_nc_gid=AQ4nf33MSP8vKfZrIpn89op&oh=00_AYCulytxt9yFzHk8dksQVwwLzgAP-Z2aTTTf1SXKxHSPfQ&oe=679392B5"
                  alt="Fan celebration"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2025-03-14" className="text-gray-500">
                    14 de marzo, 2025
                  </time>
                  <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600">
                    Fanáticos
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    <Link href="/noticias/dia-familiar">
                      Gran día familiar en el estadio Quisqueya
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                    Miles de fanáticos disfrutaron de una jornada especial con actividades para toda la familia...
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Next Game Section */}
      <div className="bg-blue-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Próximo Juego
              </h2>
              <div className="mt-8 flex flex-col items-center justify-center space-y-4">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <img
                      src="https://www.licey.com/wp-content/themes/glorius-1071/img/logo_liceypng.png"
                      alt="Licey"
                      className="w-20 h-20 rounded-full mx-auto mb-2"
                    />
                    <span className="text-white font-bold">Licey</span>
                  </div>
                  <div className="text-white text-4xl font-bold">VS</div>
                  <div className="text-center">
                    <img
                      src="https://www.escogido.com/wp-content/uploads/2023/10/Logo-Escogido-Rombo-Oficial-Web.png"
                      alt="Águilas"
                      className="w-30 h-20 rounded-full mx-auto mb-2"
                    />
                    <span className="text-white font-bold">Escogido</span>
                  </div>
                </div>
                <div className="text-white">
                  <p className="text-xl">Lunes, 21 de Enero, 2025</p>
                  <p className="text-lg">7:15 PM</p>
                  <p className="text-lg">Estadio Quisqueya Juan Marichal</p>
                </div>
                <Button asChild className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 mt-4">
                  <Link href="/tickets">
                    Comprar Boletos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Feed */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              #TigresDelLicey en Redes Sociales
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Sigue nuestras redes sociales para mantenerte actualizado
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Social Media Cards will be populated here */}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
              Mantente Informado
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Suscríbete a nuestro boletín para recibir las últimas noticias y actualizaciones
            </p>
            <div className="mt-8 flex max-w-md mx-auto gap-x-4">
              <input
                type="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Ingresa tu correo electrónico"
              />
              <Button className="bg-blue-900 text-white hover:bg-blue-800">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}