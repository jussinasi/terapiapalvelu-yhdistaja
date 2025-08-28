import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, StarIcon, MapPinIcon } from "lucide-react";

interface TherapistCardProps {
  id: string;
  name: string;
  title: string;
  specializations: string[];
  image: string;
  rating: number;
  location: string;
  availableToday: boolean;
  price: string;
  languages: string[];
}

export function TherapistCard({
  name,
  title,
  specializations,
  image,
  rating,
  location,
  availableToday,
  price,
  languages,
}: TherapistCardProps) {
  return (
    <Card className="group bg-card shadow-card hover:shadow-button transition-all duration-300 border-0 overflow-hidden">
      <CardHeader className="p-6 pb-4">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img
              src={image}
              alt={`Terapeutti ${name}`}
              className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/10"
            />
            {availableToday && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-success-foreground rounded-full"></div>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold text-foreground mb-1">
              {name}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm mb-2">
              {title}
            </CardDescription>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <StarIcon className="w-4 h-4 fill-accent text-accent" />
                <span className="text-sm font-medium text-foreground">{rating}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPinIcon className="w-4 h-4" />
                <span className="text-sm">{location}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="px-6 pb-4">
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Erikoisalat</h4>
            <div className="flex flex-wrap gap-1">
              {specializations.map((spec) => (
                <Badge key={spec} variant="secondary" className="text-xs">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Kielet</h4>
            <div className="flex flex-wrap gap-1">
              {languages.map((lang) => (
                <Badge key={lang} variant="outline" className="text-xs">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pt-0 pb-6">
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Alk.</span>
            <span className="text-lg font-semibold text-primary">{price}</span>
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex-1">
              <CalendarIcon className="w-4 h-4 mr-2" />
              Varaa aika
            </Button>
            <Button size="sm" className="flex-1 bg-gradient-primary">
              Ota yhteyttä
            </Button>
          </div>
          
          {availableToday && (
            <p className="text-xs text-success text-center font-medium">
              ✓ Vapaita aikoja tänään
            </p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}