import Hero from '@/components/Hero';
import RoomCard from '@/components/RoomCard';
import AmenitiesList from '@/components/AmenitiesList';
import Footer from '@/components/Footer';

export default function Home() {
  const rooms = [
    {
      name: 'Chambre Standard',
      price: 'À partir de 10 000 F CFA',
      amenities: [
        'Wi-Fi haut débit',
        'Climatisation',
        'Douche à l’italienne',
        'TV écran plat',
        'Service de pressing',
        'Ascenseur',
        'Produits accessoires',
        'Parking sécurisé',
        'Room Service',
      ],
    },
    {
      name: 'Chambre VIP',
      price: 'À partir de 13 000 F CFA',
      amenities: [
        'Wi-Fi haut débit',
        'Climatisation',
        'Douche à l’italienne',
        'TV écran plat',
        'Service de pressing',
        'Ascenseur',
        'Produits accessoires',
        'Parking sécurisé',
        'Room Service',
        'Salon cosy',
        'Espace nuit séparé',
        'Salle de bain premium',
      ],
    },
  ];

  const amenities = [
    {
      label: 'Réception 24h/24',
    },
    {
      label: 'Wi-Fi illimité gratuit',
    },
    {
      label: 'Parking privé sécurisé',
    },
    {
      label: 'Restaurant et room service',
    },
    {
      label: 'Service de blanchisserie',
    },
    {
      label: 'Climatisation dans toutes les chambres',
    },
  ];

  return (
    <main className="min-h-screen">
      <Hero />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nos Chambres
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {rooms.map((room) => (
              <RoomCard key={room.name} room={room} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Équipements et Services
          </h2>
          <AmenitiesList amenities={amenities} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
