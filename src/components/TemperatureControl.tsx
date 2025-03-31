"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Thermometer, Mic } from "lucide-react";

interface TemperatureControlProps {
  initialTemperature?: number;
  minTemperature?: number;
  maxTemperature?: number;
}

export function TemperatureControl({
  initialTemperature = 20,
  minTemperature = 10,
  maxTemperature = 30,
}: TemperatureControlProps) {
  const [temperature, setTemperature] = useState<number>(initialTemperature);

  const increaseTemperature = () => {
    if (temperature < maxTemperature) {
      setTemperature(temperature + 1);
    }
  };

  const decreaseTemperature = () => {
    if (temperature > minTemperature) {
      setTemperature(temperature - 1);
    }
  };

  const handleVoiceCommand = () => {
    // Voice command functionality would be implemented here
    console.log("Voice command activated");
  };

  // Determine the color based on temperature
  const getTemperatureColor = () => {
    if (temperature < 18) return "text-blue-500";
    if (temperature > 24) return "text-red-500";
    return "text-amber-500";
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="text-center">
            <h2 className="text-xl font-medium mb-2">Heater Control</h2>
            <div className="flex items-center justify-center">
              <Thermometer className={`${getTemperatureColor()} mr-2 h-6 w-6`} />
              <span className="text-sm text-muted-foreground">Current Temperature</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className={`text-6xl font-bold ${getTemperatureColor()}`}>
              {temperature}°C
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4 w-full">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={decreaseTemperature}
              disabled={temperature <= minTemperature}
              className="h-16 w-16 rounded-full"
            >
              <Minus className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleVoiceCommand}
              className="h-16 w-16 rounded-full"
            >
              <Mic className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={increaseTemperature}
              disabled={temperature >= maxTemperature}
              className="h-16 w-16 rounded-full"
            >
              <Plus className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground text-center">
            Temperature range: {minTemperature}°C - {maxTemperature}°C
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
