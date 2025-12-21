'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function EtudesDeCasPage() {
    const [activeFilter, setActiveFilter] = useState('Tous');

    const filters = ['Tous', 'E-commerce', 'Fintech', 'Mobilité', 'SaaS'];

    const caseStudies = [
        {
            id: 1,
            category: 'MOBILITÉ',
            title: 'Kobo Mobility',
            description: 'Optimisation des paiements pour le plus grand transporteur en covoiturage d\'Afrique de l\'Ouest.',
            gradient: 'from-cyan-900 to-teal-300',
            link: '#'
        },
        {
            id: 2,
            category: 'E-COMMERCE',
            title: 'Jumia Marketplace',
            description: 'Augmentation de la conversion des paiements de 30% pour le géant de e-commerce.',
            gradient: 'from-cyan-800 to-cyan-300',
            link: '#'
        },
        {
            id: 3,
            category: 'FINTECH',
            title: 'Flutterwave Inc.',
            description: 'Expansion des capacités de transfert transfrontalier avec LABS PAYNALA.',
            gradient: 'from-teal-400 to-cyan-200',
            link: '#'
        },
        {
            id: 4,
            category: 'FINTECH',
            title: 'Paystack',
            description: 'Intégration transparente pour des paiements récurrents fiables et sécurisés.',
            gradient: 'from-cyan-600 to-teal-300',
            link: '#'
        },
        {
            id: 5,
            category: 'MOBILITÉ',
            title: 'Max.ng',
            description: 'Simplification des paiements pour les conducteurs et les passagers sur une plateforme de VTC.',
            gradient: 'from-lime-400 to-emerald-300',
            link: '#'
        },
        {
            id: 6,
            category: 'E-COMMERCE',
            title: 'Hotels.ng',
            description: 'Amélioration du taux d\'autorisation des réservations en ligne avec nos passerelles de paiement.',
            gradient: 'from-slate-700 to-teal-300',
            link: '#'
        }
    ];

    const filteredCases = activeFilter === 'Tous'
        ? caseStudies
        : caseStudies.filter(cs => cs.category.toLowerCase().includes(activeFilter.toLowerCase()));

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Découvrez comment nos clients<br />
                        réussissent avec PAYNALA
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Explorez comment les entreprises africaines, des startups aux grandes organisations, optimisent leurs
                        opérations de paiement et stimulent leur croissance grâce à nos solutions innovantes.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 py-6 justify-center">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                    activeFilter === filter
                                        ? 'bg-red-100 text-red-600'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCases.map((caseStudy) => (
                            <div
                                key={caseStudy.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* Gradient Header */}
                                <div className={`h-48 bg-gradient-to-br ${caseStudy.gradient} transform group-hover:scale-105 transition-transform duration-300`}>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="mb-3">
                                        <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
                                            {caseStudy.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {caseStudy.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {caseStudy.description}
                                    </p>
                                    <Link
                                        href={caseStudy.link}
                                        className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium group"
                                    >
                                        Lire l'étude de cas
                                        <svg
                                            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No results message */}
                    {filteredCases.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">
                                Aucune étude de cas trouvée pour cette catégorie.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-pink-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Prêt à optimiser vos paiements ?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Discutez avec l'un de nos experts pour découvrir comment PAYNALA peut transformer votre entreprise.
                    </p>
                    <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 text-sm font-medium transition-all">
                        Parlez à un expert
                    </button>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
