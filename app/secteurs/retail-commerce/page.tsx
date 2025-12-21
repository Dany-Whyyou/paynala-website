'use client';
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function RetailCommercePage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gray-50 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Solutions de<br />
                                paiement pour le<br />
                                <span className="text-yellow-500">retail & commerce</span>
                            </h1>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Simplifiez vos encaissements, améliorez l'expérience client et accélérez vos
                                paiements grâce à nos solutions de paiement innovantes pour le commerce de détail
                            </p>
                            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 text-sm font-medium transition-all">
                                Découvrez nos solutions
                            </button>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 p-8 aspect-[4/3] flex items-center justify-center">
                                    {/* TPE Device Illustration */}
                                    <div className="relative w-64 h-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6">
                                        {/* Screen */}
                                        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-32 mb-4 flex flex-col items-center justify-center p-4">
                                            <div className="text-white text-xs font-semibold mb-2">BIENVENUE</div>
                                            <div className="text-white text-sm">Présentez votre carte</div>
                                        </div>
                                        {/* Keypad */}
                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((key, idx) => (
                                                <div key={idx} className="bg-gray-700 hover:bg-gray-600 rounded h-10 flex items-center justify-center text-white text-sm font-semibold cursor-pointer transition-colors">
                                                    {key}
                                                </div>
                                            ))}
                                        </div>
                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <div className="flex-1 bg-red-600 rounded h-8 flex items-center justify-center text-white text-xs font-semibold">
                                                ANNULER
                                            </div>
                                            <div className="flex-1 bg-green-600 rounded h-8 flex items-center justify-center text-white text-xs font-semibold">
                                                VALIDER
                                            </div>
                                        </div>
                                        {/* Card slot */}
                                        <div className="absolute bottom-4 right-4 w-12 h-8 bg-gray-700 rounded border-2 border-gray-600"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Défis Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Relevez les défis du commerce moderne
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            PAYNALA transforme les défis du secteur retail en opportunités de croissance et d'innovation
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Défi 1 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Complexité des<br />
                                transactions
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                De nos jours, gérer une large gamme de moyens de paiement (cartes bancaires,
                                mobile money, paiements en ligne) peut devenir complexe
                            </p>
                        </div>

                        {/* Défi 2 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Sécurité des paiements
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Les commerçants craignent les fraudes et les pertes financières liées aux
                                transactions non sécurisées ou frauduleuses
                            </p>
                        </div>

                        {/* Défi 3 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Expérience client<br />
                                fragmentée
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Offrir une expérience fluide, quel que soit le mode de paiement, est essentiel
                                pour fidéliser la clientèle
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fonctionnalités Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Des fonctionnalités conçues pour votre croissance
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <div className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3]">
                                    {/* Placeholder for team collaboration image */}
                                    <div className="w-full h-full flex items-center justify-center p-12">
                                        <div className="bg-white rounded-lg shadow-2xl w-full h-full p-8 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-400 text-sm">Équipe collaborative</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="space-y-6">
                            {/* Feature 1 */}
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">Paiements en Ligne et Mobile</h4>
                                    <p className="text-gray-600 text-sm">
                                        Acceptez des paiements via des applications mobiles et des plateformes e-commerce
                                        intégrées, facilitant ainsi les achats pour vos clients, où qu'ils soient
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">Terminaux de Paiement (TPE)</h4>
                                    <p className="text-gray-600 text-sm">
                                        Équipez vos points de vente avec des terminaux de paiement modernes qui acceptent
                                        les cartes bancaires, le sans contact et le QR code pour des transactions rapides et sécurisées
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">Intégration Facile</h4>
                                    <p className="text-gray-600 text-sm">
                                        Grâce à des API simples et une documentation claire, intégrez nos solutions de
                                        paiement rapidement dans vos systèmes existants sans perturber vos opérations
                                    </p>
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
