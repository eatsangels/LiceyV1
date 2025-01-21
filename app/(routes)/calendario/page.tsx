import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CalendarioPage() {
  const games = [
    {
      id: 1,
      homeTeam: "Tigres del Licey",
      awayTeam: "Águilas Cibaeñas",
      date: "23 de Marzo, 2025",
      time: "7:00 PM",
      venue: "Estadio Quisqueya Juan Marichal",
      homeScore: null,
      awayScore: null,
    },
    {
      id: 2,
      homeTeam: "Leones del Escogido",
      awayTeam: "Tigres del Licey",
      date: "25 de Marzo, 2025",
      time: "7:30 PM",
      venue: "Estadio Quisqueya Juan Marichal",
      homeScore: null,
      awayScore: null,
    },
    {
      id: 3,
      homeTeam: "Tigres del Licey",
      awayTeam: "Gigantes del Cibao",
      date: "27 de Marzo, 2025",
      time: "7:00 PM",
      venue: "Estadio Quisqueya Juan Marichal",
      homeScore: null,
      awayScore: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://m.n.com.do/wp-content/uploads/2025/01/Tigres-del-Licey-celebra-pase-a-la-final-1140x694.jpeg')] bg-cover bg-center opacity-10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Calendario de Juegos
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Consulta los próximos juegos de los Tigres del Licey y asegura tus boletos
            </p>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="overflow-hidden rounded-lg bg-white shadow transition-all hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <CalendarIcon className="h-8 w-8 text-blue-900" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {game.homeTeam} vs {game.awayTeam}
                      </h3>
                      <p className="text-gray-500">{game.date}</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-yellow-400 text-blue-900 hover:bg-yellow-500"
                  >
                    <Link href="/tickets">Comprar Boletos</Link>
                  </Button>
                </div>
                <div className="mt-4 flex items-center space-x-8 text-gray-600">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    {game.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    {game.venue}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Season Ticket Section */}
      <div className="bg-blue-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/5 p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Abonos de La Final  2025
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Asegura tu lugar en todos los juegos de la final con nuestros abonos especiales.
                  Disfruta de beneficios exclusivos y las mejores ubicaciones.
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-yellow-400 text-blue-900 hover:bg-yellow-500"
                  >
                    <Link href="/abonos">Ver Planes de Abono</Link>
                  </Button>
                </div>
              </div>
              <div className="relative ">
                <img
                  src="https://www.licey.com/wp-content/uploads/2025/01/abonosfinal-e1737305890149.jpg"
                  alt="Estadio"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}