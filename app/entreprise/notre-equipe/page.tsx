'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function NotreEquipePage() {
    const leadership = [
        {
            name: 'Jean-Pierre Diallo',
            position: 'Président - Directeur Général',
            description: 'Avec plus de 20 ans d\'expérience dans la finance, Jean-Pierre dirige la vision stratégique de Paynala.',
            image: '/images/team/jean-pierre.jpg',
            bgColor: 'bg-amber-700'
        },
        {
            name: 'Amina Traoré',
            position: 'Directrice des Opérations',
            description: 'A supervisé la transition vers un modèle opérationnel qui place le client au centre de tout ce que nous sommes en Afrique.',
            image: '/images/team/amina.jpg',
            bgColor: 'bg-orange-400'
        },
        {
            name: 'Moussa Diop',
            position: 'Directeur de la Technologie',
            description: 'Moussa dirige la conception technique des plateformes de paiement qui résistent aux contraintes africaines.',
            image: '/images/team/moussa.jpg',
            bgColor: 'bg-gray-700'
        },
        {
            name: 'Fatou N\'diaye',
            position: 'Directrice Financière',
            description: 'Fatou supervise la planification financière et maintient la solidité des opérations internationales.',
            image: '/images/team/fatou.jpg',
            bgColor: 'bg-orange-500'
        }
    ];

    const teamMembers = [
        {
            name: 'Chloé Dubois',
            position: 'Chef de Produit',
            image: '/images/team/chloe.jpg',
            bgColor: 'bg-orange-200'
        },
        {
            name: 'Léo Martin',
            position: 'Développeur Full-Stack',
            image: '/images/team/leo.jpg',
            bgColor: 'bg-orange-300'
        },
        {
            name: 'Paul Renard',
            position: 'Spécialiste Marketing',
            image: '/images/team/paul.jpg',
            bgColor: 'bg-teal-700'
        },
        {
            name: 'Sophie Petit',
            position: 'Responsable Ventes',
            image: '/images/team/sophie.jpg',
            bgColor: 'bg-teal-600'
        },
        {
            name: 'Julien Robert',
            position: 'Ingénieur DevOps',
            image: '/images/team/julien.jpg',
            bgColor: 'bg-orange-300'
        },
        {
            name: 'Marie Durand',
            position: 'Designer UI/UX',
            image: '/images/team/marie.jpg',
            bgColor: 'bg-orange-100'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Les experts qui transforment le paiement en Afrique
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Découvrez l'équipe passionnée et expérimentée qui se consacre à la
                                simplification des transactions financières sur tout le continent, en
                                favorisant la croissance et l'innovation.
                            </p>
                        </div>

                        {/* Right Image - Team Photo */}
                        <div className="bg-gradient-to-br from-teal-900 to-teal-700 rounded-2xl p-8 shadow-2xl">
                            <div className="flex justify-center items-end space-x-4">
                                {/* Team Members Illustration */}
                                {[1, 2, 3, 4, 5].map((person, index) => (
                                    <div
                                        key={index}
                                        className={`bg-gray-200 rounded-t-full ${
                                            index === 2 ? 'w-24 h-40' : 'w-20 h-36'
                                        } flex items-end justify-center pb-2`}
                                    >
                                        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notre Direction Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
                        Notre Direction
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {leadership.map((leader, index) => (
                            <div key={index} className="text-center">
                                {/* Avatar Circle */}
                                <div className="mb-6 flex justify-center">
                                    <div className={`w-32 h-32 ${leader.bgColor} rounded-full flex items-center justify-center shadow-lg`}>
                                        {/* Placeholder for actual image */}
                                        <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Info */}
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {leader.name}
                                </h3>
                                <p className="text-red-600 font-medium text-sm mb-3">
                                    {leader.position}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {leader.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rencontrez l'équipe Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
                        Rencontrez l'équipe
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                {/* Avatar Circle */}
                                <div className="mb-4 flex justify-center">
                                    <div className={`w-28 h-28 ${member.bgColor} rounded-full flex items-center justify-center shadow-md`}>
                                        {/* Placeholder for actual image */}
                                        <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Info */}
                                <h3 className="font-bold text-gray-900 text-sm mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-gray-600 text-xs">
                                    {member.position}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rejoignez Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Rejoignez une équipe d'innovateurs
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Nous sommes toujours à la recherche de talents passionnés pour nous aider à
                        façonner l'avenir du paiement en Afrique. Découvrez notre culture et nos
                        opportunités.
                    </p>
                    <Link
                        href="/careers"
                        className="inline-block border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-all font-medium"
                    >
                        Voir nos offres d'emploi
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
