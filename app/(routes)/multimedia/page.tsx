"use client";

import { Video, Image as ImageIcon, Play, Radio, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function MultimediaPage() {
  const [activeImage, setActiveImage] = useState(0);

  const videos = [
    {
      id: "video1",
      title: "Highlights: Licey vs Águilas",
      description: "Lo mejor del juego entre Tigres y Águilas",
      embedUrl: "https://www.youtube.com/embed/-A3ZIiodIAg?si=a7M4Fj8ybKuBCRXu",
      date: "2 de Enero, 2025",
    },
    {
      id: "video2",
      title: "Entrevista con el Manager",
      description: "Conversación exclusiva con nuestro dirigente",
      embedUrl: "https://www.youtube.com/embed/mc8D6RGdn3Q?si=HO1yF4KH4itNlnb_",
      date: "8 de Enero, 2025",
    },
  ];

  const galleries = [
    {
      title: "Celebración del Campeonato",
      image: "https://img.mlbstatic.com/mlb-images/image/upload/ar_16:9,g_auto,q_auto:good,w_1024,c_fill,f_jpg/mlb/rg4j5fx7chtyg9hbvqmc",
      description: "Los Tigres celebran su victoria en el campeonato nacional",
    },
    {
      title: "Práctica del Equipo",
      image: "http://www.licey.com/wp-content/uploads/2018/08/Campamento-0.jpg",
      description: "Entrenamiento previo al inicio de la temporada",
    },
    {
      title: "Fanáticos en el Estadio",
      image: "https://elavancemedia.com/wp-content/uploads/2024/12/image-231.png",
      description: "La mejor fanaticada del béisbol dominicano",
    },
    {
      title: "Jugadas Destacadas",
      image: "http://www.licey.com/wp-content/uploads/2024/10/SergioAlcantara102824-scaled-e1730126637916.jpeg",
      description: "Momentos memorables de la temporada",
    },
    {
      title: "Equipo Completo",
      image: "https://cdndeportes.com.do/wp-content/uploads/2023/11/anillo1-1024x682.jpg",
      description: "Roster oficial de los Tigres del Licey",
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
              Multimedia
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Disfruta del mejor contenido audiovisual de los Tigres del Licey
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="live">En Vivo</TabsTrigger>
            <TabsTrigger value="gallery">Galería</TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden">
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900">{video.title}</h3>
                    <p className="mt-2 text-gray-600">{video.description}</p>
                    <div className="mt-4 text-sm text-gray-500">{video.date}</div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="live" className="mt-8">
  <Card className="overflow-hidden">
    <div className="aspect-video w-full">
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/6b_0bd88Fd0"
        title="Transmisión en Vivo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </Card>
</TabsContent>

          <TabsContent value="gallery" className="mt-8">
            <div className="space-y-8">
              {/* Main Carousel */}
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {galleries.map((gallery, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[16/9]">
                        <img
                          src={gallery.image}
                          alt={gallery.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 rounded-lg" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{gallery.title}</h3>
                          <p className="text-lg text-gray-200">{gallery.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-4 px-4">
                {galleries.map((gallery, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300 ${
                      activeImage === index
                        ? "ring-4 ring-blue-500 ring-offset-2"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <div className="aspect-[4/3]">
                      <img
                        src={gallery.image}
                        alt={gallery.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}