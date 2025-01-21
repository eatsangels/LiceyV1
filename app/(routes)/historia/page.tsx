import { Trophy, Award, Star } from "lucide-react";

export default function HistoriaPage() {
  const achievements = [
    {
      year: "1907",
      title: "Fundación",
      description: "Fundación del equipo de béisbol Tigres del Licey: Fundación del equipo en una reunión en la casa de Vicente María y Jacinto 'Pichán' Vallejo en la Zona Colonial de Santo Domingo.    ",
    },
    {
      year: "1951",
      title: "Primer Campeonato",
      description: "Obtienen su primer campeonato en la Liga Dominicana de Béisbol Profesional",
    },
    {
      year: "1955-56",
      title: "Inician los juegos nocturnos",
      description: "Inician los juegos nocturnos bajo luces en el béisbol dominicano; Licey gana su primer campeonato en esta modalidad en la temporada 1958-59.",
    },

    {
      year: "1963-64",
      title: "Serie Internacional",
      description: "Tras una pausa de dos años debido al ajusticiamiento del dictador Rafael Trujillo, los Tigres conquistan el campeonato de esa temporada.",
    },
    {
      year: "1969-70 y 1970-71",
      title: "Serie Internacional",
      description: "Logran campeonatos consecutivos, igualando en ese momento en títulos con los Leones del Escogido.",
    },
    {
      year: "1971",
      title: "Serie Internacional",
      description: "Ganan su primera Serie del Caribe, iniciando una destacada trayectoria en este torneo regional.",
    },
    {
      year: "1972-73 y 1973-74",
      title: "Serie Internacional",
      description: "Obtienen nuevamente campeonatos consecutivos en la liga dominicana.",
    },
  ];

  const championships = [
    {
      year: "2024",
      opponent: "Estrellas Orientales",
      score: "4-1",
    },
    {
      year: "2023",
      opponent: "Águilas Cibaeñas",
      score: "4-2",
    },
    {
      year: "2021",
      opponent: "Gigantes del Cibao",
      score: "4-3",
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
              Nuestra Historia
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Más de 100 años de tradición y excelencia en el béisbol dominicano
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Momentos Históricos</h2>
            <div className="mt-8 space-y-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-blue-900"
                >
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-900" />
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <div className="font-bold text-blue-900">{achievement.year}</div>
                    <h3 className="mt-2 text-xl font-semibold">{achievement.title}</h3>
                    <p className="mt-2 text-gray-900">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900">Últimos Campeonatos</h2>
            <div className="mt-8 space-y-6">
              {championships.map((championship, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg bg-blue-700 p-6 shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white-500">Temporada</div>
                      <div className="text-xl font-bold text-blue-900">
                        {championship.year}
                      </div>
                    </div>
                    <Trophy className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div className="mt-4">
                    <div className="text-sm text-gray-900">Final contra</div>
                    <div className="font-semibold">{championship.opponent}</div>
                    <div className="mt-2 text-sm text-gray-900">Serie Final</div>
                    <div className="font-semibold">{championship.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white/5 p-8 text-center">
              <Trophy className="mx-auto h-12 w-12 text-yellow-400" />
              <div className="mt-4 text-4xl font-bold text-white">24</div>
              <div className="mt-2 text-blue-100">Campeonatos Nacionales</div>
            </div>
            <div className="rounded-lg bg-white/5 p-8 text-center">
              <Award className="mx-auto h-12 w-12 text-yellow-400" />
              <div className="mt-4 text-4xl font-bold text-white">11</div>
              <div className="mt-2 text-blue-100">Series del Caribe</div>
            </div>
            <div className="rounded-lg bg-white/5 p-8 text-center">
              <Star className="mx-auto h-12 w-12 text-yellow-400" />
              <div className="mt-4 text-4xl font-bold text-white">117</div>
              <div className="mt-2 text-blue-100">Años de Historia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}