import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TherapistCard } from "@/components/TherapistCard";
import { AppointmentBooking } from "@/components/AppointmentBooking";
import { 
  HeartIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  VideoIcon,
  StarIcon,
  CalendarIcon 
} from "lucide-react";

// Import therapist images
import therapistMaria from "@/assets/therapist-maria.jpg";
import therapistErik from "@/assets/therapist-erik.jpg";
import therapistAnna from "@/assets/therapist-anna.jpg";

const Index = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState("");

  const therapists = [
    {
      id: "maria",
      name: "Maria Lindqvist",
      title: "Psykoterapeutti, PsL",
      specializations: ["Ahdistus", "Depressio", "Parisuhdeterapia", "Trauma"],
      image: therapistMaria,
      rating: 4.9,
      location: "Helsinki",
      availableToday: true,
      price: "89€/istunto",
      languages: ["Suomi", "Englanti"],
    },
    {
      id: "erik",
      name: "Erik Johansson",
      title: "Kognitiivinen terapeutti",
      specializations: ["CBT", "Burnout", "Työstressi", "Unihäiriöt"],
      image: therapistErik,
      rating: 4.8,
      location: "Tampere",
      availableToday: false,
      price: "79€/istunto",
      languages: ["Suomi", "Englanti"],
    },
    {
      id: "anna",
      name: "Anna Virtanen",
      title: "Perheterapeutti, PsM",
      specializations: ["Perheterapia", "Nuorisopsykiatria", "ADHD", "Autism"],
      image: therapistAnna,
      rating: 4.9,
      location: "Turku",
      availableToday: true,
      price: "95€/istunto",
      languages: ["Suomi", "Englanti"],
    }
  ];

  const features = [
    {
      icon: <VideoIcon className="w-6 h-6 text-primary" />,
      title: "Turvallinen videoyhteys",
      description: "Salattu yhteys suoraan terapeuttiisi"
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-success" />,
      title: "Luottamuksellista",
      description: "Täysi anonymiteetti ja tietosuoja"
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-accent" />,
      title: "Joustava ajanvaraus",
      description: "Varaa aika milloin tahansa, 24/7"
    },
    {
      icon: <HeartIcon className="w-6 h-6 text-secondary" />,
      title: "Asiantunteva hoito",
      description: "Lisensoituja ja kokeneita terapeutteja"
    }
  ];

  if (showBooking) {
    return (
      <div className="min-h-screen bg-gradient-trust">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setShowBooking(false)}
              className="mb-4"
            >
              ← Takaisin terapeutteihin
            </Button>
          </div>
          <AppointmentBooking therapistName={selectedTherapist} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-trust">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              ✨ Tervetuloa Näsimentor Oy:n terapiapalveluun
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Löydä oma <span className="bg-gradient-primary bg-clip-text text-transparent">terapeutti</span> ja
              <br />
              aloita matka hyvinvointiin
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Turvallinen ja helppokäyttöinen suomalainen alusta, jossa voit varata ajan ammattitaitoiselta 
              terapeutilta ja osallistua etävastaanottoon kotoa käsin. Tunnistautuminen suomalaisilla 
              pankkitunnuksilla tai mobiilivarmenteella.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-primary shadow-button hover:shadow-lg transition-all duration-300">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Varaa aika nyt
              </Button>
              <Button size="lg" variant="outline">
                Tutustu terapeutteihin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Miksi valita meidän palvelumme?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Yhdistämme teknologian ja inhimillisen hoidon luodaksemme turvallisen 
              ja helposti saavutettavan terapiapalvelun.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Therapists Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tapaa asiantuntevat terapeutimme
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kaikki terapeutimme ovat lisensoituja ammattilaisia, joilla on vuosien kokemus 
              erilaisista terapiamuodoista ja haasteista.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {therapists.map((therapist) => (
              <div key={therapist.id} className="group">
                <TherapistCard {...therapist} />
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    className="w-full bg-gradient-healing" 
                    onClick={() => {
                      setSelectedTherapist(therapist.name);
                      setShowBooking(true);
                    }}
                  >
                    Varaa aika heti
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Tyytyväistä asiakasta</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground">Keskimääräinen arvosana</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Ajanvaraus avoinna</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Aloita matkasi hyvinvointiin tänään
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Älä anna haasteiden kasaantua. Ota ensimmäinen askel kohti parempaa oloa 
            ja varaa aika kokeneelta terapeutilta jo tänään.
          </p>
          <Button size="lg" variant="secondary" className="shadow-button">
            <CalendarIcon className="w-5 h-5 mr-2" />
            Aloita nyt - ensimmäinen konsultaatio ilmainen
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;