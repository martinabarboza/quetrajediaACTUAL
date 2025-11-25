import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Landing() {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary">¡Que Traje-día!</h1>
              <span className="text-sm text-muted-foreground">by Máximo San Martín</span>
            </div>
            
            <Button onClick={handleLogin} data-testid="button-login">
              <i className="fas fa-user mr-2"></i>
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Alquiler de Trajes
            <span className="text-primary"> Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Encuentra el traje perfecto para tu evento especial. Personaliza tu outfit con nuestra amplia colección de trajes, camisas, corbatas y accesorios.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center mb-4">
                  <i className="fas fa-user-tie text-3xl text-primary mr-3"></i>
                  Amplio Catálogo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Más de 100 prendas diferentes: 20 trajes, 20 camisas, 50 corbatas, 20 chalecos y 10 tipos de zapatos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center mb-4">
                  <i className="fas fa-palette text-3xl text-primary mr-3"></i>
                  Combinaciones Inteligentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sistema de sugerencias de colores que te ayuda a crear la combinación perfecta para cualquier ocasión.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center mb-4">
                  <i className="fas fa-mobile-alt text-3xl text-primary mr-3"></i>
                  Fácil de Usar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Interfaz intuitiva y responsiva que funciona perfectamente en computadoras, tablets y teléfonos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Button size="lg" onClick={handleLogin} data-testid="button-start">
              Comenzar Ahora
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">¿Cómo Funciona?</h3>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                <div className="text-left">
                  <h4 className="font-semibold">Crea tu Perfil</h4>
                  <p className="text-muted-foreground">Ingresa tus medidas y tipo de evento</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                <div className="text-left">
                  <h4 className="font-semibold">Personaliza tu Outfit</h4>
                  <p className="text-muted-foreground">Selecciona prendas y recibe sugerencias de combinaciones</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                <div className="text-left">
                  <h4 className="font-semibold">Solicita tu Alquiler</h4>
                  <p className="text-muted-foreground">Envía tu solicitud y recibe confirmación por email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
