import { TemperatureControl } from "@/components/TemperatureControl";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">Smart Heater Control</h1>
        <TemperatureControl 
          initialTemperature={22} 
          minTemperature={15} 
          maxTemperature={28} 
        />
      </div>
    </main>
  );
}
