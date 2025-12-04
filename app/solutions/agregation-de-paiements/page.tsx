import Image from "next/image";
import { CreditCard, Settings, Shield, ShoppingCart, Plane, Building2, Landmark } from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AgregationDePaiementsPage() {
  return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Agrégation de Paiements
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Simplifiez vos encaissements et offrez à vos clients tous les moyens de paiement qu'ils préfèrent,
              <br />via une seule intégration.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700">
                Parler à un expert
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300">
                Découvrir les fonctionnalités
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Une solution complète pour<br />vos paiements
              </h2>
              <p className="text-gray-600">
                Acceptez les paiements en ligne, en magasin et via mobile money avec<br />
                une plateforme unifiée et sécurisée.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Multiples moyens de paiement
                </h3>
                <p className="text-gray-600">
                  Cartes bancaires locales et internationales, wallets mobiles, transferts bancaires. Tout ce dont vos clients ont besoin.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Intégration unique
                </h3>
                <p className="text-gray-600">
                  Une seule API pour accéder à l'ensemble de l'écosystème de paiement africain. Simplifiez votre développement.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sécurité et conformité
                </h3>
                <p className="text-gray-600">
                  Protection anti-fraude avancée et une conformité aux normes les plus strictes (PCI DSS).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comment ça marche ?
              </h2>
              <p className="text-gray-600">
                Un processus simple et transparent en trois étapes pour commencer à<br />
                accepter des paiements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Intégrez notre API
                </h3>
                <p className="text-gray-600">
                  Utilisez notre documentation claire et nos SDKs pour une intégration rapide, claire et sûre de votre application.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Personnalisez votre checkout
                </h3>
                <p className="text-gray-600">
                  Adaptez l'expérience de paiement à votre image de marque pour une conversion optimale.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Encaissez et analysez
                </h3>
                <p className="text-gray-600">
                  Suivez vos transactions en temps réel depuis un tableau de bord unifié et puissant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-16 bg-gray-50 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Adapté à tous les secteurs
              </h2>
              <p className="text-gray-600">
                Notre solution est conçue pour répondre aux besoins spécifiques de<br />
                divers industries en Afrique.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Retail & E-commerce</h3>
                    <p className="text-gray-600">
                      Augmentez vos ventes en ligne et en magasin en proposant les méthodes de paiement les plus populaires.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Banques & Finance</h3>
                    <p className="text-gray-600">
                      Modernisez vos services et étendez votre portée grâce à nos solutions d'open banking et de paiement digital.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Plane className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Transport & Logistique</h3>
                    <p className="text-gray-600">
                      Simplifiez la collecte des paiements pour les billets, les locations et les services de mobilité.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Landmark className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Services Gouvernementaux</h3>
                    <p className="text-gray-600">
                      Facilitez le paiement des taxes, impôts et services publics pour les citoyens avec des solutions digitales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-900 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à transformer vos paiements ?
              </h2>
              <p className="text-blue-100 mb-8">
                Contactez nos experts pour une démo personnalisée et découvrez<br />
                comment Raynala peut accélérer la croissance de votre entreprise.
              </p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700">
                Demander une démo
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
         <Footer />
      </div>
  );
}
