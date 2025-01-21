import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function AbonosPage() {
  const plans = [
    {
      name: "Plan Oro",
      price: "RD$ 25,000",
      features: [
        "Todos los juegos de la temporada regular",
        "Asiento VIP reservado",
        "Acceso al área de hospitalidad",
        "Estacionamiento preferencial",
        "20% de descuento en la tienda oficial",
      ],
    },
    {
      name: "Plan Plata",
      price: "RD$ 15,000",
      features: [
        "Todos los juegos de la temporada regular",
        "Asiento reservado",
        "10% de descuento en la tienda oficial",
        "Estacionamiento regular",
      ],
    },
    {
      name: "Plan Regular",
      price: "RD$ 8,000",
      features: [
        "Todos los juegos de la temporada regular",
        "Asiento en zona regular",
        "5% de descuento en la tienda oficial",
      ],
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
              Abonos de Temporada
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Asegura tu lugar en todos los juegos de la temporada con nuestros planes de abono
            </p>
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/temporada</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="ml-2 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full bg-blue-900 text-white hover:bg-blue-800">
                  Seleccionar Plan
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-blue-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Preguntas Frecuentes</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">¿Cómo puedo pagar?</h3>
                <p className="mt-2 text-blue-100">
                  Aceptamos tarjetas de crédito, transferencias bancarias y pagos en efectivo en nuestras oficinas.
                </p>
              </div>
              <div className="rounded-lg bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">¿Puedo transferir mi abono?</h3>
                <p className="mt-2 text-blue-100">
                  Los abonos son personales e intransferibles durante la temporada regular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}