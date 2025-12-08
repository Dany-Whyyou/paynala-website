'use client';
import React from 'react';
import Image from 'next/image';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function EducationPage() {
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
                                pour le secteur de
                                l'éducation
                            </h1>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Modernisez la collecte des frais de scolarité et offrez la possibilité
                                aux parents de payer avec simplicité instantanément
                            </p>
                            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 text-sm font-medium transition-all">
                                Parler à un expert
                            </button>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                {/* Replace with actual school image */}
                                <div className="bg-gradient-to-br from-amber-100 to-amber-200 aspect-[4/3]">
                                    <Image
                                        src="/63858.jpg"
                                        alt="École moderne en Afrique"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Défis Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Les défis de la collecte des frais de scolarité
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Défi 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                Fardeau Administratif
                            </h3>
                            <p className="text-gray-600 text-sm text-center leading-relaxed">
                                La gestion manuelle des paiements de frais de scolarité est chronophage,
                                sujette aux erreurs et peut ralentir les opérations de l'établissement
                            </p>
                        </div>

                        {/* Défi 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                Suivi des Paiements
                            </h3>
                            <p className="text-gray-600 text-sm text-center leading-relaxed">
                                Les établissements scolaires rencontrent des difficultés à suivre les paiements,
                                ce qui peut entraîner des retards ou des erreurs dans les relevés de compte
                            </p>
                        </div>

                        {/* Défi 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                Préoccupations de Sécurité
                            </h3>
                            <p className="text-gray-600 text-sm text-center leading-relaxed">
                                Assurer la sécurité des transactions et protéger les données sensibles des
                                parents et élèves est une priorité absolue pour les institutions éducatives
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comment Paynala Simplifie Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Comment Paynala simplifie les paiements pour votre institution
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {/* Solution 1 */}
                        <div className="text-center">
                            <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                Portail de Paiement Sécurisé
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Offrez aux parents un portail en ligne où ils peuvent effectuer des paiements
                                en toute sécurité via carte bancaire, mobile money ou virement bancaire
                            </p>
                        </div>

                        {/* Solution 2 */}
                        <div className="text-center">
                            <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                Facturation Automatisée
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Automatisez la création et l'envoi de factures aux parents via SMS, email ou
                                notification push, ce qui garantit un paiement rapide et sans tracas
                            </p>
                        </div>

                        {/* Solution 3 */}
                        <div className="text-center">
                            <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                Multiples Canaux de Paiement
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Offrez plusieurs options de paiement pour permettre aux parents de payer
                                de la manière la plus pratique pour eux (mobile money, cartes, virements)
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Solution 4 */}
                        <div className="text-center">
                            <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                Tableau de Bord Analytique
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Accédez à un tableau de bord intuitif qui vous donne une vue d'ensemble
                                en temps réel sur les paiements reçus, les montants en attente et les statistiques
                            </p>
                        </div>

                        {/* Solution 5 */}
                        <div className="text-center">
                            <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                Intégration Facile
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Notre solution s'intègre facilement à vos systèmes de gestion scolaire existants,
                                permettant une transition fluide et rapide vers les paiements digitaux
                            </p>
                        </div>

                        {/* Solution 6 */}
                        <div className="text-center">
                            <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                Support Dédié
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Notre équipe de support client est disponible pour vous accompagner
                                à chaque étape et résoudre rapidement tout problème technique ou opérationnel
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

            {/* Footer */}
            <Footer />
        </div>
    );
}
