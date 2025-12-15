'use client';
import React from 'react';
import Image from 'next/image';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ServicesGouvernementauxPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white overflow-hidden">
                {/* Animated background dots/particles */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
                    <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                    {/* Network lines effect */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <line x1="10%" y1="20%" x2="30%" y2="60%" stroke="rgba(96, 165, 250, 0.3)" strokeWidth="1"/>
                        <line x1="70%" y1="30%" x2="50%" y2="70%" stroke="rgba(134, 239, 172, 0.3)" strokeWidth="1"/>
                        <line x1="40%" y1="40%" x2="80%" y2="50%" stroke="rgba(196, 181, 253, 0.3)" strokeWidth="1"/>
                    </svg>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Moderniser les Services Publics
                            avec PAYNALA
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                            PAYNALA aide les gouvernements et les institutions publiques à digitaliser leurs services
                            et à offrir aux citoyens une expérience de paiement fluide, rapide et sécurisée
                        </p>
                        <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 text-sm font-medium transition-all">
                            Découvrez nos solutions
                        </button>
                    </div>
                </div>
            </section>

            {/* Défis Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Les défis du secteur public et nos solutions
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Défi 1 */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Gestion d'une diversité<br />
                            de modes de paiement
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Les citoyens utilisent différents moyens de paiement,
                            ce qui complique la gestion et ralentit les processus administratifs
                        </p>
                    </div>

                    {/* Défi 2 */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Manque de transparence<br />
                            et de traçabilité
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            L'absence de systèmes digitalisés limite la visibilité
                            sur les transactions et rend difficile la lutte contre la fraude
                        </p>
                    </div>

                    {/* Défi 3 */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Processus lents et inefficaces<br />
                            pour les citoyens
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Les démarches administratives longues et complexes
                            découragent les citoyens et ralentissent la prestation de services
                        </p>
                    </div>
                </div>

                {/* Défi 4 - Full width */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow max-w-md mx-auto">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Risques de sécurité et de corruption
                    </h3>
                    <p className="text-gray-600 text-sm">
                        La manipulation d'argent liquide expose les administrations
                        à des risques de vol et de détournement de fonds
                    </p>
                </div>
            </section>

            {/* Solution 1 - Platform */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl">
                            <div className="space-y-4">
                                {/* Server rack visualization */}
                                {[1, 2, 3, 4].map((row) => (
                                    <div key={row} className="bg-slate-700 rounded-lg p-4 border border-slate-600">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-150"></div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="h-1 bg-slate-600 rounded w-3/4"></div>
                                            <div className="h-1 bg-slate-600 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                Une plateforme sécurisée et fiable
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Grâce à notre infrastructure robuste, les institutions publiques
                                bénéficient d'une plateforme de paiement capable de gérer des
                                volumes élevés de transactions en toute sécurité
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Nos systèmes répondent aux normes internationales de sécurité
                                et garantissent la confidentialité des données des citoyens
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution 2 - API */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                Intégration API simplifiée
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Notre API REST permet une intégration facile avec vos systèmes
                                existants. Connectez rapidement vos plateformes de gestion et
                                automatisez vos processus de paiement
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Documentation complète et support technique dédié pour un
                                déploiement rapide et sans friction
                            </p>
                        </div>
                        <div className="order-1 md:order-2 bg-gradient-to-br from-teal-800 to-cyan-900 rounded-2xl p-12 shadow-2xl flex items-center justify-center">
                            <div className="text-center">
                                <div className="relative">
                                    <svg className="w-20 h-20 text-cyan-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-cyan-300 font-mono text-2xl font-bold tracking-wider">
                                    API
                                </div>
                                <div className="mt-4 flex justify-center space-x-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-20 px-4">
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
