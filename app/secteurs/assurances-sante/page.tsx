'use client';
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function AssurancesSantePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Solutions de paiement<br />
                                pour les Assurances et<br />
                                la Santé
                            </h1>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Optimisez la collecte des primes, améliorez vos remboursements et offrez
                                une meilleure expérience client avec nos solutions de paiement adaptées
                                au secteur de la santé et des assurances.
                            </p>
                            <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 text-sm font-medium transition-all">
                                Découvrir nos solutions
                            </button>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-teal-800 to-emerald-900 aspect-[4/3] shadow-2xl">
                                {/* Network/Healthcare Visualization */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-full h-full p-8">
                                        {/* Network nodes */}
                                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-300 rounded-full animate-pulse"></div>
                                        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-teal-300 rounded-full animate-pulse delay-100"></div>
                                        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-emerald-300 rounded-full animate-pulse delay-200"></div>
                                        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                                        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-150"></div>
                                        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-250"></div>

                                        {/* Connection lines */}
                                        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="25%" y1="25%" x2="33%" y2="33%" stroke="rgba(103, 232, 249, 0.4)" strokeWidth="1"/>
                                            <line x1="33%" y1="33%" x2="50%" y2="50%" stroke="rgba(94, 234, 212, 0.4)" strokeWidth="1"/>
                                            <line x1="50%" y1="50%" x2="66%" y2="33%" stroke="rgba(103, 232, 249, 0.4)" strokeWidth="1"/>
                                            <line x1="66%" y1="33%" x2="75%" y2="50%" stroke="rgba(45, 212, 191, 0.4)" strokeWidth="1"/>
                                            <line x1="33%" y1="66%" x2="50%" y2="50%" stroke="rgba(94, 234, 212, 0.4)" strokeWidth="1"/>
                                            <line x1="50%" y1="50%" x2="66%" y2="75%" stroke="rgba(103, 232, 249, 0.4)" strokeWidth="1"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Les défis du secteur */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Les défis du secteur
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Défi 1 */}
                        <div className="bg-white p-6 rounded-lg">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                Collecte des primes
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Gérer une collecte répétée et sécurisée à l'échelle de millions
                                de clients peut être complexe
                            </p>
                        </div>

                        {/* Défi 2 */}
                        <div className="bg-white p-6 rounded-lg">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                Gestion des sinistres
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Les délais de traitement des déclarations de sinistres et de
                                remboursements peuvent être longs
                            </p>
                        </div>

                        {/* Défi 3 */}
                        <div className="bg-white p-6 rounded-lg">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                Sécurité des données
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                La confidentialité et la sécurité des données de santé et
                                financières sont primordiales et réglementées
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notre réponse à vos enjeux */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Notre réponse à vos enjeux
                        </h2>
                    </div>

                    <div className="space-y-16">
                        {/* Feature 1 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative rounded-xl overflow-hidden shadow-lg">
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3] flex items-center justify-center">
                                    {/* Placeholder for payment illustration */}
                                    <Image
                                        src="/2152001145.jpg"
                                        alt="Paiements sécurisés"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Paiements Sécurisés et Simplifiés
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Offrez à vos patients et clients des options de paiement flexibles et sécurisées pour
                                    les primes, les franchises et les soins médicaux. Notre solution s'intègre facilement
                                    dans vos systèmes existants et garantit une conformité totale avec les réglementations en vigueur,
                                    tout en offrant une expérience utilisateur fluide, sécurisée et sans friction.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    Automatisation des Paiements Récurrents
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Simplifiez la collecte de cotisations périodiques en mettant en place des
                                    paiements récurrents automatiques qui s'adaptent au rythme de paiement de chaque
                                    assuré. Gagnez du temps et améliorez votre taux de collecte grâce à notre système
                                    intelligent de relance et de gestion des impayés.
                                </p>
                            </div>
                            <div className="relative rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3] flex items-center justify-center">
                                    {/* Placeholder for recurring payment dashboard */}
                                    <Image
                                        src="/2151961282.jpg"
                                        alt="Automatisation des paiements"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
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
                        Rejoignez les entreprises et Institutions qui ont choisi Paynala pour simplifier et sécuriser leurs transactions digitales.
                    </p>
                    <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-medium">
                        Contacter nous
                    </button>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
