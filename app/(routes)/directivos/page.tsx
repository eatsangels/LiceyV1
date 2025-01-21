import { Card } from "@/components/ui/card";
import { Users, Mail, Phone } from "lucide-react";

export default function DirectivosPage() {
  const directivos = [
    {
      name: "Ricardo Ravelo",
      position: "Presidente",
      image: "https://hoy.com.do/wp-content/uploads/2021/06/048bbdde-ricardo-ravelo-jana-60b709666ada5-640x384-1.jpg?x86501",
      email: "presidente@licey.com",
      phone: "(809) 555-0100",
    },
    {
      name: "Miguel Guerra Armenteros",
      position: "Vicepresidente",
      image: "https://pbs.twimg.com/media/B94oX1jIcAADn3T?format=jpg&name=900x900",
      email: "vicepresidente@licey.com",
      phone: "(809) 555-0101",
    },
    {
      name: "Rafael Antonio Úbeda Heded",
      position: "Secretario",
      image: "https://cdn.com.do/wp-content/uploads/2017/06/679c7615-presidente-licey.jpg",
      email: "secretaria@licey.com",
      phone: "(809) 555-0102",
    },
  ];

  const departments = [
    {
      name: "Operaciones",
      director: "Juan Pérez",
      responsibilities: ["Logística de juegos", "Mantenimiento de instalaciones", "Seguridad"],
    },
    {
      name: "Marketing",
      director: "Ana García",
      responsibilities: ["Promociones", "Redes sociales", "Relaciones públicas"],
    },
    {
      name: "Deportivo",
      director: "Luis Martínez",
      responsibilities: ["Desarrollo de talento", "Scouting", "Preparación física"],
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
              Directivos 2023-2025
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Conoce al equipo que lidera los Tigres del Licey
            </p>
          </div>
        </div>
      </div>

      {/* Directivos Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {directivos.map((directivo) => (
            <Card key={directivo.name} className="overflow-hidden group">
              <div className="relative">
                <img
                  src={directivo.image}
                  alt={directivo.name}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900">{directivo.name}</h3>
                <p className="mt-1 text-gray-600">{directivo.position}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-2" />
                    {directivo.email}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-2" />
                    {directivo.phone}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Departments Section */}
      <div className="bg-blue-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Departamentos</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {departments.map((dept) => (
              <div key={dept.name} className="rounded-lg bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{dept.name}</h3>
                <p className="mt-2 text-blue-100">Director: {dept.director}</p>
                <ul className="mt-4 space-y-2">
                  {dept.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-center text-blue-100">
                      <Users className="h-4 w-4 mr-2" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}