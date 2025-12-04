'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function CarrieresPage() {
    const [selectedDepartment, setSelectedDepartment] = useState('Tous');

    const whyJoinUs = [
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                </svg>
            ),
            title: 'Innovation',
            description: 'Travaillez sur des projets qui façonnent l\'avenir des paiements digitaux en Afrique.'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
            ),
            title: 'Collaboration',
            description: 'Travaillez avec une équipe talentueuse et passionnée dans un environnement inclusif et diversifié.'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Impact',
            description: 'Vos idées auront un impact réel sur des millions d\'utilisateurs à travers le continent africain.'
        }
    ];

    const benefits = [
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Travail à distance',
            bgColor: 'bg-red-100'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Horaires flexibles',
            bgColor: 'bg-red-100'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
            ),
            title: 'Développement pro',
            bgColor: 'bg-red-100'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Équipe soudée',
            bgColor: 'bg-red-100'
        }
    ];

    const teamMembers = [
        {
            name: 'Jean-Pierre',
            role: 'Directeur Technique',
            quote: 'Chez Paynala, je participe à résoudre une problématique majeure qui a un impact réel sur l\'économie du continent africain.',
            image: '/images/team/jean-pierre-testimony.jpg'
        },
        {
            name: 'Amina Ndiaye',
            role: 'Cheffe de Produit',
            quote: 'J\'ai rejoint Paynala car je souhaite contribuer à la transformation numérique de l\'Afrique.',
            image: '/images/team/amina-testimony.jpg'
        }
    ];

    const jobOffers = [
        {
            title: 'Développeur Backend (Go)',
            location: 'Dakar, Sénégal - Remote',
            department: 'Technique'
        },
        {
            title: 'Designer Produit Senior',
            location: 'Abidjan, Côte d\'Ivoire - Hybride',
            department: 'Design'
        },
        {
            title: 'Responsable Marketing Digital',
            location: 'Lagos, Nigeria - Remote',
            department: 'Marketing'
        }
    ];

    const departments = ['Tous', 'Technique', 'Design', 'Marketing', 'Ventes', 'Finance'];

    const filteredJobs = selectedDepartment === 'Tous'
        ? jobOffers
        : jobOffers.filter(job => job.department === selectedDepartment);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Rejoignez l'équipe qui construit l'avenir des paiements en Afrique
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Travaillez avec une équipe talentueuse à transformer l'écosystème financier en Afrique.
                                Ensemble, construisons les solutions de demain.
                            </p>
                            <Link
                                href="#offres"
                                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                            >
                                Voir nos offres d'emploi
                            </Link>
                        </div>

                        {/* Right Image */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                                <svg className="w-24 h-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Pourquoi nous rejoindre ?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            En rejoignant Paynala, vous contribuerez à un projet qui va au-delà de la simple
                            technologie. Vous aurez un rôle crucial dans la croissance et l'innovation de la
                            fintech africaine.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {whyJoinUs.map((reason, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full text-red-600 mb-6">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
                        Avantages de travailler chez Paynala
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className={`inline-flex items-center justify-center w-20 h-20 ${benefit.bgColor} rounded-full text-red-600 mb-4`}>
                                    {benefit.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900">
                                    {benefit.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
                        L'équipe témoigne
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{member.name}</h3>
                                        <p className="text-sm text-gray-500">{member.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed italic">
                                    "{member.quote}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Offers Section */}
            <section id="offres" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
                        Nos Offres d'Emploi
                    </h2>
                    <p className="text-center text-gray-600 mb-12">
                        Trouvez votre prochaine opportunité parmi les postes ouverts
                    </p>

                    {/* Department Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDepartment(dept)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                                    selectedDepartment === dept
                                        ? 'bg-red-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>

                    {/* Job Listings */}
                    <div className="space-y-4 max-w-4xl mx-auto">
                        {filteredJobs.map((job, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {job.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {job.location}
                                    </p>
                                </div>
                                <Link
                                    href={`/careers/${index}`}
                                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                                >
                                    Postuler
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Votre rôle idéal n'est pas listé ?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Envoyez-nous quand même votre CV ! Nous sommes toujours à la recherche de talents
                        passionnés pour rejoindre notre équipe.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                    >
                        Déposer une candidature spontanée
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
