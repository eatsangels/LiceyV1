import { Trophy, Star, Calendar, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TemporadasPage() {
  const seasons = [
    {
      year: "2023-24",
      manager: "Gilbert Gómez",
      record: "40-20",
      result: "Campeón Nacional",
      highlights: [
        "Mejor récord de la liga regular",
        "Líder en bateo colectivo",
        "MVP de la temporada: Emilio Bonifacio",
      ],
    },
    {
      year: "2022-23",
      manager: "Gilbert Gómez",
      record: "34-16",
      result: "Campeón Nacional",
      highlights: [
        "Líderes en Pitcheo",
        "Líder en efectividad colectiva",
        "Alguna otra informacion",
      ],
    },
  ];

  const awards = [
    {
      year: "2023-24",
      awards: [
        "MVP de la Temporada",
        "Manager del Año",
        "Guante de Oro (3)",
        "Bate de Plata (4)",
      ],
    },
    {
      year: "2022-23",
      awards: [
        "Novato del Año",
        "Lanzador del Año",
        "Guante de Oro (2)",
        "Bate de Plata (3)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508872528308-297e1dc0c461')] bg-cover bg-center opacity-10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Temporadas
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Revive la historia y los logros de nuestras temporadas
            </p>
          </div>
        </div>
      </div>

      {/* Seasons Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Tabs defaultValue="seasons" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="seasons">Temporadas</TabsTrigger>
            <TabsTrigger value="awards">Premios</TabsTrigger>
          </TabsList>

          <TabsContent value="seasons" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              {seasons.map((season) => (
                <Card key={season.year} className="overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-900">
                          Temporada {season.year}
                        </h3>
                        <p className="mt-1 text-gray-600">Manager: {season.manager}</p>
                      </div>
                      <Trophy className="h-8 w-8 text-yellow-400" />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-blue-50 p-4">
                        <p className="text-sm text-blue-900">Récord</p>
                        <p className="text-lg font-semibold text-blue-900">{season.record}</p>
                      </div>
                      <div className="rounded-lg bg-blue-50 p-4">
                        <p className="text-sm text-blue-900">Resultado</p>
                        <p className="text-lg font-semibold text-blue-900">{season.result}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold text-blue-900">Destacados</h4>
                      <ul className="mt-2 space-y-2">
                        {season.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <Star className="h-4 w-4 mr-2 text-yellow-400" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="awards" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              {awards.map((season) => (
                <Card key={season.year} className="overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-blue-900">
                        Temporada {season.year}
                      </h3>
                      <Award className="h-8 w-8 text-yellow-400" />
                    </div>
                    <ul className="space-y-4">
                      {season.awards.map((award, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <Star className="h-5 w-5 mr-2 text-yellow-400" />
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}