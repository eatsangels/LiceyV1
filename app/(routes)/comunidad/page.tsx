import { Users, Heart, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ComunidadPage() {
  const initiatives = [
    {
      title: "Béisbol Juvenil",
      description: "Programa de desarrollo para jóvenes talentos",
      icon: Users,
      link: "/comunidad/beisbol-juvenil",
    },
    {
      title: "Licey en tu Comunidad",
      description: "Actividades sociales y deportivas en diferentes barrios",
      icon: Heart,
      link: "/comunidad/licey-comunidad",
    },
    {
      title: "Academia Licey",
      description: "Formación integral de nuevos talentos",
      icon: Trophy,
      link: "/comunidad/academia",
    },
    {
      title: "Eventos Especiales",
      description: "Actividades para toda la familia",
      icon: Calendar,
      link: "/comunidad/eventos",
    },
  ];

  const upcomingEvents = [
    {
      title: "Clínica de Béisbol",
      date: "30 de Marzo, 2025",
      location: "Estadio Quisqueya",
      description: "Clínica gratuita para niños de 8-12 años",
    },
    {
      title: "Visita al Hospital",
      date: "2 de Abril, 2025",
      location: "Hospital Infantil",
      description: "Visita de jugadores a niños hospitalizados",
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
              Comunidad Licey
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Comprometidos con el desarrollo social y deportivo de nuestra comunidad
            </p>
          </div>
        </div>
      </div>

      {/* Initiatives Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <Card key={initiative.title} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Icon className="h-12 w-12 text-blue-900" />
                  <h3 className="mt-4 text-xl font-semibold">{initiative.title}</h3>
                  <p className="mt-2 text-gray-600">{initiative.description}</p>
                  <Button asChild className="mt-4 bg-blue-900 text-white hover:bg-blue-800">
                    <Link href={initiative.link}>Más Información</Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-blue-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">Próximos Eventos</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="rounded-lg bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                <div className="mt-4 space-y-2 text-blue-100">
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                  <p>{event.description}</p>
                </div>
                <Button className="mt-4 bg-yellow-400 text-blue-900 hover:bg-yellow-500">
                  Inscribirse
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}