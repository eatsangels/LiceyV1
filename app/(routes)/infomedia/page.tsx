import { Newspaper, Radio, Podcast, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function InfoMediaPage() {
  const news = [
    {
      title: "Victoria Importante en Serie Regular",
      date: "20 de Marzo, 2025",
      category: "Noticias",
      excerpt: "Los Tigres del Licey logran importante victoria...",
    },
    {
      title: "Entrevista Exclusiva con el Manager",
      date: "19 de Marzo, 2025",
      category: "Entrevistas",
      excerpt: "Conversamos con nuestro manager sobre la temporada...",
    },
    {
      title: "Análisis del Último Juego",
      date: "18 de Marzo, 2025",
      category: "Análisis",
      excerpt: "Desglose táctico del último encuentro...",
    },
  ];

  const mediaTypes = [
    {
      title: "Noticias",
      icon: Newspaper,
      description: "Últimas noticias y actualizaciones del equipo",
    },
    {
      title: "Radio",
      icon: Radio,
      description: "Transmisiones en vivo y programas de radio",
    },
    {
      title: "Podcast",
      icon: Podcast,
      description: "Análisis y entrevistas en profundidad",
    },
    {
      title: "Videos",
      icon: Video,
      description: "Highlights y contenido exclusivo",
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
              InfoMedia
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Mantente informado con las últimas noticias y contenido multimedia
            </p>
          </div>
        </div>
      </div>

      {/* Media Types Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {mediaTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Card key={type.title} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Icon className="h-12 w-12 text-blue-900" />
                  <h3 className="mt-4 text-xl font-semibold">{type.title}</h3>
                  <p className="mt-2 text-gray-600">{type.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900">Últimas Noticias</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {news.map((item) => (
              <Card key={item.title} className="overflow-hidden">
                <div className="p-6">
                  <div className="text-sm text-gray-500">{item.date}</div>
                  <div className="mt-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-900">
                    {item.category}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">
                    <Link href="#" className="text-blue-900 hover:text-blue-700">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-gray-600">{item.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}