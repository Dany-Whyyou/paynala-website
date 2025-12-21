'use client';
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function BanqueFinancePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
                {/* Network/Tech Background Animation */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-40 right-32 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                    <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-200"></div>
                    <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-300"></div>

                    {/* Network lines */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <line x1="15%" y1="25%" x2="35%" y2="45%" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1"/>
                        <line x1="65%" y1="35%" x2="45%" y2="65%" stroke="rgba(96, 165, 250, 0.3)" strokeWidth="1"/>
                        <line x1="30%" y1="50%" x2="70%" y2="40%" stroke="rgba(45, 212, 191, 0.3)" strokeWidth="1"/>
                    </svg>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Solutions de paiement pour le<br />
                            secteur bancaire et financier
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                            Donnez à vos clients une expérience de paiement fluide, sécurisée et transparente.
                            Intégrez nos solutions API à votre écosystème et accélérez votre transformation digitale.
                        </p>
                        <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 text-sm font-medium transition-all shadow-lg hover:shadow-xl">
                            Demander un devis
                        </button>
                    </div>
                </div>
            </section>

            {/* Les défis du secteur financier */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Les défis du secteur financier
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Défi 1 */}
                        <div className="text-center p-6">
                            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Conformité réglementaire
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Les institutions financières doivent se conformer aux réglementations locales
                                et internationales en constante évolution, tout en offrant des services innovants
                            </p>
                        </div>

                        {/* Défi 2 */}
                        <div className="text-center p-6">
                            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Sécurité des transactions
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Protéger les données sensibles et prévenir la fraude sont des priorités absolues
                                dans un environnement où les cybermenaces évoluent constamment
                            </p>
                        </div>

                        {/* Défi 3 */}
                        <div className="text-center p-6">
                            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Transformation digitale
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Les banques doivent moderniser leurs infrastructures technologiques pour rester
                                compétitives face à l'émergence des fintechs et des néobanques
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos solutions pour la finance */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nos solutions pour la finance
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Solution 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Intégration API simplifiée
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Connectez facilement vos systèmes existants à notre infrastructure de paiement
                                        via nos APIs REST sécurisées. Documentation complète et support technique disponible.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Solution 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Technologie anti-fraude avancée
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Bénéficiez de nos outils de détection et de prévention de la fraude basés sur le
                                        machine learning pour protéger vos transactions et vos clients en temps réel.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Solution 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Interopérabilité des paiements
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Offrez à vos clients la possibilité de payer avec n'importe quel moyen de paiement :
                                        cartes bancaires, mobile money, virements et cryptomonnaies, le tout via une seule plateforme.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Solution 4 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Tableaux de bord et reporting
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Accédez à des tableaux de bord en temps réel avec des analyses détaillées de vos
                                        transactions. Générez des rapports personnalisés pour une meilleure prise de décision.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Témoignages - Ils nous font confiance */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Ils nous font confiance
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Témoignage 1 */}
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="w-16 h-16 bg-gray-300 rounded-lg mb-6 mx-auto"></div>
                            <p className="text-gray-700 text-sm italic mb-6 text-center leading-relaxed">
                                "Grâce à PAYNALA, nous avons modernisé notre infrastructure de paiement en quelques
                                semaines. La transition a été fluide et nos clients sont ravis."
                            </p>
                            <div className="text-center">
                                <p className="font-bold text-gray-900 text-sm">Directeur des Opérations</p>
                                <p className="text-gray-600 text-xs">Banque Commerciale du Groupe</p>
                            </div>
                        </div>

                        {/* Témoignage 2 */}
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="w-16 h-16 bg-gray-300 rounded-lg mb-6 mx-auto"></div>
                            <p className="text-gray-700 text-sm italic mb-6 text-center leading-relaxed">
                                "L'API de PAYNALA est robuste et bien documentée. Nous avons intégré plusieurs
                                moyens de paiement en quelques jours seulement."
                            </p>
                            <div className="text-center">
                                <p className="font-bold text-gray-900 text-sm">CTO</p>
                                <p className="text-gray-600 text-xs">Fintech Innovations SA</p>
                            </div>
                        </div>

                        {/* Témoignage 3 */}
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="w-16 h-16 bg-gray-300 rounded-lg mb-6 mx-auto"></div>
                            <p className="text-gray-700 text-sm italic mb-6 text-center leading-relaxed">
                                "La sécurité et la conformité sont au cœur de nos préoccupations. PAYNALA nous
                                offre une tranquillité d'esprit totale."
                            </p>
                            <div className="text-center">
                                <p className="font-bold text-gray-900 text-sm">Responsable Conformité</p>
                                <p className="text-gray-600 text-xs">Banque Centrale Régionale</p>
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
            <Footer />
        </div>
    );
}
