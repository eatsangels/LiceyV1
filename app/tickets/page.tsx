"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, ChevronDown, ChevronUp } from "lucide-react";

export default function TicketsPage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const games = [
    {
      id: 1,
      homeTeam: "Tigres del Licey",
      awayTeam: "Águilas Cibaeñas",
      date: "23 de Marzo, 2024",
      time: "7:00 PM",
      venue: "Estadio Quisqueya Juan Marichal",
    },
    {
      id: 2,
      homeTeam: "Tigres del Licey",
      awayTeam: "Leones del Escogido",
      date: "25 de Marzo, 2024",
      time: "7:30 PM",
      venue: "Estadio Quisqueya Juan Marichal",
    },
  ];

  const sections = [
    {
      name: "VIP",
      price: 2500,
      available: 50,
      description: "Mejor vista, asientos acolchados, servicio de comida",
    },
    {
      name: "Preferencia",
      price: 1500,
      available: 100,
      description: "Excelente vista, zona techada",
    },
    {
      name: "General",
      price: 800,
      available: 200,
      description: "Buen ambiente, precio accesible",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562077772-3bd90403f7f0?ixlib=rb-4.0.1')] bg-cover bg-center opacity-10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Compra tus Boletos
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Asegura tu lugar en los próximos juegos de los Tigres del Licey
            </p>
          </div>
        </div>
      </div>

      {/* Games Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {games.map((game) => (
            <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-900">
                    {game.homeTeam} vs {game.awayTeam}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    {game.date}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    {game.time}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    {game.venue}
                  </div>
                </div>

                {/* Sections */}
                <div className="mt-6 space-y-4">
                  {sections.map((section) => (
                    <div
                      key={section.name}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedSection === section.name
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                      onClick={() => setSelectedSection(section.name)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-blue-900">{section.name}</h4>
                          <p className="text-sm text-gray-600">{section.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-900">
                            RD$ {section.price}
                          </div>
                          <div className="text-sm text-gray-500">
                            {section.available} disponibles
                          </div>
                        </div>
                      </div>

                      {selectedSection === section.name && (
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setQuantity(Math.max(1, quantity - 1));
                                }}
                              >
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                              <span className="text-lg font-semibold">{quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setQuantity(Math.min(10, quantity + 1));
                                }}
                              >
                                <ChevronUp className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button className="bg-blue-900 text-white hover:bg-blue-800">
                              Comprar RD$ {section.price * quantity}
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-blue-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white/5 p-6">
              <Users className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold text-white">Grupos y Eventos</h3>
              <p className="mt-2 text-blue-100">
                Descuentos especiales para grupos de más de 20 personas
              </p>
            </div>
            <div className="rounded-lg bg-white/5 p-6">
              <MapPin className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold text-white">Ubicación</h3>
              <p className="mt-2 text-blue-100">
                Fácil acceso y estacionamiento disponible
              </p>
            </div>
            <div className="rounded-lg bg-white/5 p-6">
              <Calendar className="h-8 w-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold text-white">Horarios</h3>
              <p className="mt-2 text-blue-100">
                Taquillas abiertas desde 4 horas antes del juego
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}