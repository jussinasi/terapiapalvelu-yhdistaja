import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ClockIcon, VideoIcon, MessageCircleIcon } from "lucide-react";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface AppointmentBookingProps {
  therapistName: string;
  selectedDate?: Date;
}

export function AppointmentBooking({ therapistName, selectedDate }: AppointmentBookingProps) {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [sessionType, setSessionType] = useState<"video" | "chat">("video");

  // Mock available time slots
  const timeSlots: TimeSlot[] = [
    { time: "09:00", available: true },
    { time: "10:00", available: false },
    { time: "11:00", available: true },
    { time: "13:00", available: true },
    { time: "14:00", available: true },
    { time: "15:00", available: false },
    { time: "16:00", available: true },
    { time: "17:00", available: true },
  ];

  // Mock dates for the next 7 days
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fi-FI', { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    });
  };

  const handleBooking = () => {
    if (selectedTime) {
      alert(`Booking scheduled with ${therapistName} on ${selectedDate ? formatDate(selectedDate) : 'selected date'} at ${selectedTime} via ${sessionType === 'video' ? 'video' : 'chat'}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="bg-gradient-trust border-0 shadow-card">
        <CardHeader>
          <CardTitle className="text-xl text-center">
            Varaa aika - {therapistName}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Session Type Selection */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Istunnon tyyppi</h3>
            <div className="flex gap-3">
              <Button
                variant={sessionType === "video" ? "default" : "outline"}
                onClick={() => setSessionType("video")}
                className="flex-1 flex items-center gap-2"
              >
                <VideoIcon className="w-4 h-4" />
                Videoyhteys
              </Button>
              <Button
                variant={sessionType === "chat" ? "default" : "outline"}
                onClick={() => setSessionType("chat")}
                className="flex-1 flex items-center gap-2"
              >
                <MessageCircleIcon className="w-4 h-4" />
                Chat
              </Button>
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Valitse päivä</h3>
            <div className="grid grid-cols-7 gap-2">
              {availableDates.map((date, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="h-auto p-2 flex flex-col items-center"
                >
                  <span className="text-xs text-muted-foreground">
                    {date.toLocaleDateString('fi-FI', { weekday: 'short' })}
                  </span>
                  <span className="text-sm font-medium">
                    {date.getDate()}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">
              <ClockIcon className="w-4 h-4 inline mr-2" />
              Valitse aika
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <Button
                  key={slot.time}
                  variant={selectedTime === slot.time ? "default" : "outline"}
                  size="sm"
                  disabled={!slot.available}
                  onClick={() => slot.available && setSelectedTime(slot.time)}
                  className="relative"
                >
                  {slot.time}
                  {!slot.available && (
                    <div className="absolute inset-0 bg-muted/50 rounded flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Varattu</span>
                    </div>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Booking Summary */}
          {selectedTime && (
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="p-4">
                <h4 className="font-medium text-foreground mb-2">Varauksen yhteenveto</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Terapeutti:</span>
                    <span className="font-medium">{therapistName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Päivä:</span>
                    <span className="font-medium">
                      {selectedDate ? formatDate(selectedDate) : 'Tänään'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Aika:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tyyppi:</span>
                    <Badge variant="secondary">
                      {sessionType === "video" ? "Videoyhteys" : "Chat"}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="text-muted-foreground">Hinta:</span>
                    <span className="font-semibold text-primary">89€</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Book Button */}
          <Button 
            onClick={handleBooking}
            disabled={!selectedTime}
            className="w-full bg-gradient-primary shadow-button hover:shadow-lg transition-all duration-300"
            size="lg"
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            Vahvista varaus
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            Voit perua varauksen maksutta 24h ennen aikaa
          </p>
        </CardContent>
      </Card>
    </div>
  );
}