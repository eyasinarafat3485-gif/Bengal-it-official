import { Compass, Globe, Leaf, Shield, HeartPulse, ShoppingBag } from 'lucide-react';

const clients = [
  { name: 'Creative Agency', icon: Compass },
  { name: 'Travelo', icon: Globe },
  { name: 'GreenTech', icon: Leaf },
  { name: 'FINANCE', icon: Shield },
  { name: 'MEDICARE', icon: HeartPulse },
  { name: 'ShopEasy', icon: ShoppingBag },
];

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">WHO WE WORK WITH</span>
          <h2 className="section-title">Trusted by Businesses Around the World</h2>
          <p className="section-desc">
            We work with businesses, startups, agencies and entrepreneurs worldwide.
          </p>
        </div>

        <div className="clients-bar">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div key={index} className="client-logo">
                <Icon size={24} />
                <span>{client.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
