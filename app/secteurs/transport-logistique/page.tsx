'use client';
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function TransportLogistiquePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Optimisez les paiements pour le<br />
                    transport et la logistique
                </h1>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                    Découvrez comment l'automatisation des transactions transforme les opérations
                    des entreprises de transport et de logistique avec nos solutions de paiements intégrées
                </p>
                <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 text-sm font-medium">
                    Demander un devis
                </button>
            </section>

            {/* Map Section */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="relative w-full h-96 bg-gradient-to-b from-blue-200 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
                    {/* Vous pouvez remplacer ceci par une vraie image de carte */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full bg-cover bg-center"
                             style={{backgroundImage: "url('/africa-map.png')"}}>
                            {/* Placeholder pour la carte de l'Afrique */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Les défis Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Les défis du secteur logistique
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Défi 1 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Paiements fragmentés et complexes
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Gérer plusieurs méthodes de paiement ralentit les opérations et augmente les coûts administratifs
                        </p>
                    </div>

                    {/* Défi 2 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Coût et risques de sécurité
                        </h3>
                        <p className="text-gray-600 text-sm">
                            La gestion d'espèces expose à des vols et à des erreurs comptables, entraînant des pertes financières
                        </p>
                    </div>

                    {/* Défi 3 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Suivi limité et rapports incomplets
                        </h3>
                        <p className="text-gray-600 text-sm">
                            L'absence d'outils de suivi empêche les entreprises de disposer de données fiables sur leurs performances
                        </p>
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                        Nos solutions pour la logistique
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        PAYNALA offre des solutions de paiement intégrées qui simplifient vos opérations
                        et optimisent vos flux de trésorerie dans le secteur du transport et de la logistique
                    </p>

                    <div className="space-y-16">
                        {/* Solution 1 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <div className="bg-teal-700 text-white p-4 rounded-t-lg">
                                    <div className="text-sm mb-2">Dashboard</div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-center border-b pb-3">
                                        <span className="text-sm text-gray-600">Total Transactions</span>
                                        <span className="font-bold">1,234</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b pb-3">
                                        <span className="text-sm text-gray-600">Revenue</span>
                                        <span className="font-bold">$45,678</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Pending</span>
                                        <span className="font-bold text-yellow-600">23</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Facilitez vos transactions internationales
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    PAYNALA vous permet d'accepter les paiements locaux et internationaux
                                    via une plateforme unique et sécurisée. Simplifiez vos opérations transfrontalières
                                    et réduisez vos délais de traitement pour une meilleure efficacité
                                </p>
                            </div>
                        </div>

                        {/* Solution 2 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Suivi en temps réel et sécurité renforcée
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Surveillez chaque transaction en temps réel avec des notifications instantanées.
                                    Bénéficiez d'une sécurité maximale grâce à nos systèmes de cryptage avancés
                                    et à notre conformité aux normes internationales
                                </p>
                            </div>
                            <div className="order-1 md:order-2 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg shadow-lg p-12 flex items-center justify-center">
                                <svg className="w-32 h-32 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
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
                        Rejoignez les entreprises et Institutions qui ont choisi PAYNALA pour simplifier et sécuriser leurs transactions digitales.
                    </p>
                    <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-medium">
                        Contacter nous
                    </button>
                </div>
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
}
