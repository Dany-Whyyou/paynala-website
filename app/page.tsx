import Image from "next/image";
import { Globe, Smartphone, CreditCard, Shield, Clock, Users, Code, Headphones, TrendingUp, CheckCircle } from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Hero Section */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Simplifiez les paiements à<br />travers l'Afrique
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Paynala offre une plateforme transparente et sécurisée pour tous vos
              besoins de paiement, permettant aux entreprises de prospérer dans
              l'économie numérique.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-medium">
                Commencer
              </button>
              <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 font-medium">
                Contacter les ventes
              </button>
            </div>
          </div>
        </section>

        {/* Globe Illustration */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <div className="relative flex items-center justify-center">
                <Globe className="w-64 h-64 text-teal-300 opacity-30" strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-gray-600 mb-8">
              Approuvé par les plus grandes entreprises à travers l'Afrique
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
              <div className="w-24 h-12 bg-gray-300 rounded"></div>
              <div className="w-24 h-12 bg-gray-300 rounded"></div>
              <div className="w-24 h-12 bg-gray-300 rounded"></div>
              <div className="w-24 h-12 bg-gray-300 rounded"></div>
              <div className="w-24 h-12 bg-gray-300 rounded"></div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nos solutions de paiement principales
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nous fournissons une suite complète d'outils pour gérer tous vos besoins de paiement,
                des transactions locales au commerce mondial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Paiements<br />transfrontaliers
                </h3>
                <p className="text-gray-600">
                  Effectuez et recevez facilement des paiements à travers l'Afrique et le monde, avec des frais transparents et des taux de change en temps réel.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Intégration Mobile Money
                </h3>
                <p className="text-gray-600">
                  Exploitez le mode de paiement préféré en Afrique. Intégrez-vous avec tous les principaux portefeuilles et augmentez votre taux de vente. API.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Passerelle en ligne
                </h3>
                <p className="text-gray-600">
                  Acceptez les paiements par carte dès que vos clients se trouvent, que ce soit sur votre site web ou votre application avec notre API de paiement sécurisée et facile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-3xl p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">1,2 Md $+</div>
                  <div className="text-sm text-gray-400">Transactions traitées</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">15+</div>
                  <div className="text-sm text-gray-400">Pays desservis</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">8 000+</div>
                  <div className="text-sm text-gray-400">Entreprises actives</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">99,9 %</div>
                  <div className="text-sm text-gray-400">Disponibilité</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Paynala Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Pourquoi Paynala ?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nous sommes bien qu'un processeur de paiement. Nous sommes votre partenaire de
                croissance, offert les outils et le soutien pour vous aider à saisir vos rêves.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sécurité robuste</h3>
                <p className="text-gray-600 text-sm">
                  Certifié PCI-DSS avec prévention avancée contre la fraude
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">API transparente</h3>
                <p className="text-gray-600 text-sm">
                  API facile à intégrer et bien documentée pour les entreprises
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Support 24/7</h3>
                <p className="text-gray-600 text-sm">
                  Un support dédié pour vous aider à chaque étape
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tarifs compétitifs</h3>
                <p className="text-gray-600 text-sm">
                  Modèles de tarification transparents et compétitifs
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Adapté aux développeurs</h3>
                <p className="text-gray-600 text-sm">
                  Une fois intégré et des outils pour accélérer votre développement
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Conformité réglementaire</h3>
                <p className="text-gray-600 text-sm">
                  Pleinement autorisé dans tous nos pays d'opération
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Prêt à simplifier vos paiements ?
            </h2>
            <p className="text-gray-600 mb-8">
              Créez un compte en quelques minutes ou contactez notre équipe commerciale pour
              découvrir les solutions personnalisées pour votre entreprise.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-medium">
              Commencer maintenant
            </button>
          </div>
        </section>

        <Footer />
      </div>
  );
}
