

import { Shield, Headphones, TrendingUp, Zap } from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default function TerminalsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                Acceptez tous les<br />paiements, simplement.
                            </h1>
                            <p className="text-lg text-gray-600 mb-8">
                                Découvrez nos terminaux de paiement interopérables conçus pour les entreprises en Afrique. Simplifiez vos transactions et boostez votre croissance avec Paynala.
                            </p>
                            <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-medium">
                                Nous Contacter
                            </button>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-3xl p-12 flex items-center justify-center">
                                <div className="w-64 h-64 bg-gray-800 rounded-2xl transform rotate-12 shadow-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Paynala */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Pourquoi Choisir Paynala ?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Nos solutions sont conçues pour offrir sécurité, flexibilité et une gestion simplifiée de toutes vos transactions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl text-center">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Interopérabilité Totale</h3>
                            <p className="text-sm text-gray-600">
                                Acceptez des paiements mobiles, bancaires et en numéraires.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl text-center">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Sécurité Renforcée</h3>
                            <p className="text-sm text-gray-600">
                                Transactions sécurisées conformes aux normes PCI DSS pour protéger vos données et celles de vos clients.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl text-center">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Reporting Simplifié</h3>
                            <p className="text-sm text-gray-600">
                                Une vision en temps réel de vos transactions avec un tableau de bord rapide et détaillé.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl text-center">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Headphones className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Support 24/7</h3>
                            <p className="text-sm text-gray-600">
                                Bénéficiez de l'assistance disponible à tout moment pour vous accompagner.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terminals Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Nos Terminaux
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Des terminaux de paiement adaptés à chaque besoin, que vous soyez en magasin, en déplacement ou intégré à votre système de caisse.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <div className="h-64 bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center p-8">
                                <div className="w-48 h-32 bg-gray-800 rounded-lg shadow-xl"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Terminaux Fixes</h3>
                                <p className="text-gray-600">
                                    Idéaux pour les points de vente à fort volume. Fiables, rapides, connectés et conformes en permanence aux normes à votre caisse.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <div className="h-64 bg-gradient-to-br from-orange-300 to-orange-200 flex items-center justify-center p-8">
                                <div className="w-40 h-48 bg-gray-800 rounded-lg shadow-xl transform -rotate-12"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Terminaux Mobiles</h3>
                                <p className="text-gray-600">
                                    Équipez-ci que vous allez: smartphone ou tablette, les transactions se font partout, facilement et en toute sécurité.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <div className="h-64 bg-gradient-to-br from-teal-300 to-teal-200 flex items-center justify-center p-8">
                                <div className="w-48 h-40 bg-gray-800 rounded-lg shadow-xl"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Solutions Intégrées</h3>
                                <p className="text-gray-600">
                                    Connectez nos terminaux à vos logiciels de caisse et de gestion pour un flux de travail sans faille.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-gradient-to-br from-teal-900 to-teal-700 rounded-3xl p-16 flex items-center justify-center">
                            <div className="relative">
                                <div className="w-64 h-64 border-4 border-teal-400 rounded-full opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                                <div className="w-48 h-48 border-4 border-teal-300 rounded-full opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                                <Shield className="w-32 h-32 text-teal-400 relative z-10" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Intégration Facile
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Nos solutions s'intègrent parfaitement à votre écosystème existant. Que vous utilisiez un logiciel de caisse, une plateforme e-commerce ou des outils de gestion personnalisés, nos API robustes et notre support technique vous garantissent une mise en place simple et rapide.
                            </p>
                            <a href="#" className="text-red-600 font-medium hover:underline">
                                Découvrir la documentation API →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-red-50 rounded-3xl p-12 text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Prêt à simplifier vos paiements ?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contactez nos experts pour une démonstration personnalisée et découvrez comment Paynala peut transformer votre activité.
                        </p>
                        <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-medium">
                            Demander une démo
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}