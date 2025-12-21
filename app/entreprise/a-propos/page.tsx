'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function AProposPage() {
    const engagement = [
        {
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Notre Mission',
            description: 'Faciliter les transactions financières en Afrique en créant une infrastructure de paiement robuste et accessible partout sur le continent.',
            bgColor: 'bg-red-50',
            iconBg: 'bg-red-100',
            iconColor: 'text-red-600'
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Notre Vision',
            description: 'Être l\'acteur leader de la transformation digitale en Afrique, en rendant les paiements aussi simples et accessibles que possible.',
            bgColor: 'bg-red-50',
            iconBg: 'bg-red-100',
            iconColor: 'text-red-600'
        }
    ];

    const timeline = [
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
            ),
            title: 'Fondation de PAYNALA',
            year: '2018',
            color: 'text-red-600'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Le premier 100 000 paiements',
            year: '2019',
            color: 'text-orange-600'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Partenariat stratégique majeur',
            year: '2021',
            color: 'text-red-600'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
            ),
            title: 'Expansion pan-Africaine',
            year: '2023',
            color: 'text-orange-600'
        }
    ];

    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                </svg>
            ),
            title: 'Innovation',
            description: 'Repoussons continuellement les frontières de la technologie pour offrir des solutions de pointe.',
            bgColor: 'bg-white',
            iconBg: 'bg-red-100',
            iconColor: 'text-red-600'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Sécurité',
            description: 'La protection de vos données et de vos transactions est notre priorité absolue.',
            bgColor: 'bg-white',
            iconBg: 'bg-red-100',
            iconColor: 'text-red-600'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
            ),
            title: 'Centré sur le client',
            description: 'Vos besoins guident chaque décision que nous prenons.',
            bgColor: 'bg-white',
            iconBg: 'bg-red-100',
            iconColor: 'text-red-600'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Hero Section with Image */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="relative h-96 rounded-3xl overflow-hidden">
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50 z-10"></div>

                        {/* Placeholder for Background Image */}
                        <div className="absolute inset-0 bg-gray-800">
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-20 h-full flex items-center px-8 md:px-16">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    Notre mission : révolutionner les paiements en Afrique
                                </h1>
                                <p className="text-xl text-gray-200 leading-relaxed">
                                    PAYNALA se focalise sur la contribution apportée à l'essor économique du continent
                                    africain en perturbant et transformant un écosystème où l'intégration est inaccessible pour tous.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notre engagement Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Notre engagement pour l'Afrique
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Nous nous engageons à construire l'infrastructure qui favorise l'inclusion du commerce en Afrique,
                            en nous concentrant sur tout ce dont le continent a besoin.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {engagement.map((item, index) => (
                            <div key={index} className={`${item.bgColor} rounded-2xl p-8`}>
                                <div className={`inline-flex items-center justify-center w-16 h-16 ${item.iconBg} rounded-full ${item.iconColor} mb-6`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notre histoire Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-16">
                        Notre histoire
                    </h2>

                    <div className="space-y-8">
                        {timeline.map((event, index) => (
                            <div key={index} className="flex items-start space-x-6">
                                <div className={`flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center ${event.color}`}>
                                    {event.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-baseline space-x-3 mb-2">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {event.title}
                                        </h3>
                                        <span className="text-sm font-semibold text-gray-500">
                                            {event.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nos valeurs fondamentales Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Nos valeurs fondamentales
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Nos valeurs sont la lumière qui éclaire notre chemin et qui nous permettent de rester connectés à
                            notre mission immédiate.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className={`${value.bgColor} rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow`}>
                                <div className={`inline-flex items-center justify-center w-14 h-14 ${value.iconBg} rounded-full ${value.iconColor} mb-6`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Prêt à transformer les paiements pour votre entreprise ?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Rejoignez les milliers d'entreprises qui nous font confiance pour gérer leurs paiements numériques
                        en toute simplicité.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                    >
                        Démarrer une conversation
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
