
import { Rocket, Shield, Globe, FileText, Code, Play } from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React from "react";
export default function MobileMoneyPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                Intégration Mobile Money en 48 heures
                            </h1>
                            <p className="text-lg text-gray-600 mb-8">
                                Acceptez tous les opérateurs (Airtel Money, Moov Money...) via USSD et applications mobiles. Accès à plusieurs millions utilisateurs. Commission négociée.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 font-medium">
                                    Explorer la documentation
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-orange-200 to-orange-100 rounded-3xl p-8 flex items-center justify-center">
                                <div className="relative">
                                    {/* Phone mockup */}
                                    <div className="w-72 h-[580px] bg-gray-900 rounded-[3rem] shadow-2xl p-3">
                                        <div className="w-full h-full bg-teal-500 rounded-[2.5rem] p-6 flex flex-col">
                                            {/* Phone notch */}
                                            <div className="flex justify-center mb-6">
                                                <div className="w-32 h-6 bg-gray-900 rounded-full"></div>
                                            </div>
                                            {/* Screen content */}
                                            <div className="text-white">
                                                <div className="text-sm mb-2">GoMoneyPay</div>
                                                <div className="text-xs opacity-75 mb-8">Effectuer un paiement</div>

                                                <div className="bg-white rounded-2xl p-4 text-gray-900 space-y-3">
                                                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                                        <span className="text-sm font-medium">Boulangerie</span>
                                                        <span className="text-xs text-gray-500">Envoi</span>
                                                    </div>
                                                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                                        <span className="text-sm font-medium">Commissionnaire</span>
                                                        <span className="text-xs text-gray-500">Envoi</span>
                                                    </div>
                                                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                                        <span className="text-sm font-medium">Depot</span>
                                                        <span className="text-xs text-gray-500">Envoi</span>
                                                    </div>
                                                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                                        <span className="text-sm font-medium">Mamadou Moussa</span>
                                                        <span className="text-xs text-gray-500">Envoi</span>
                                                    </div>
                                                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                                                        <span className="text-sm font-medium">Electricity</span>
                                                        <span className="text-xs text-gray-500">Envoi</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm font-medium">Internet</span>
                                                        <span className="text-xs text-gray-500">Envoi</span>
                                                    </div>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <button className="text-xs bg-white bg-opacity-20 px-4 py-2 rounded-full">
                                                        Effectuer la transaction
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Orange circle decoration */}
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Une solution, de multiples avantages
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Notre plateforme est conçue pour la croissance, offrant une expérience de paiement fluide
                            pour vous et vos clients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Rocket className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Rapidité</h3>
                            <p className="text-gray-600">
                                Transactions en temps réel pour une expérience utilisateur sans friction et une
                                trésorerie optimisée.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Sécurité</h3>
                            <p className="text-gray-600">
                                Protocoles de sécurité avancés et conformité réglementaire pour protéger
                                chaque transaction.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Large Couverture</h3>
                            <p className="text-gray-600">
                                Accédez à un large éventail d'opérateurs de mobile money à travers plusieurs pays
                                africains.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Processus d'intégration transparent
                        </h2>
                        <p className="text-gray-600">
                            Intégrez le Mobile Money en 3 étapes simples.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-white">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact & Découverte</h3>
                            <p className="text-gray-600">
                                Prenez contact avec notre équipe pour définir vos besoins et obtenir vos clés API de test.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-white">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Développement & Tests</h3>
                            <p className="text-gray-600">
                                Utilisez notre documentation claire et nos SDK pour intégrer facilement la solution à votre
                                plateforme.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-white">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Lancement</h3>
                            <p className="text-gray-600">
                                Passez en production et commencez à accepter les paiements Mobile Money de vos clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Prêt à révolutionner vos paiements ?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Rejoignez les entreprises et Institutions qui ont choisi Paynala pour simplifier et sécuriser leurs transactions digitales.
                    </p>
                    <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-medium">
                        Contacter nous
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}