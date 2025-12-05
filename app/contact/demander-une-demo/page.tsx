'use client';
import React, {FormEvent, useState} from 'react';
import Link from 'next/link';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function DemanderDemoPage() {
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        entreprise: '',
        telephone: '',
        secteur: '',
        message: ''
    });

    const avantages = [
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                </svg>
            ),
            title: 'Adaptée aux besoins de votre entreprise',
            description: 'Nous personnaliserons la démo pour répondre à vos défis uniques.',
            color: 'text-red-600',
            bgColor: 'bg-red-100'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Explorez les fonctionnalités clés en direct',
            description: 'Découvrez par vous-même les capacités de notre plateforme.',
            color: 'text-red-600',
            bgColor: 'bg-red-100'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Obtenez des réponses à vos questions par un expert',
            description: 'Nos spécialistes sont là pour vous apporter des éclaircissements et des conseils.',
            color: 'text-red-600',
            bgColor: 'bg-red-100'
        }
    ];

    const secteurs = [
        'Sélectionnez votre secteur',
        'E-commerce',
        'Services financiers',
        'Télécommunications',
        'Retail',
        'Éducation',
        'Santé',
        'Transport & Logistique',
        'Gouvernement',
        'Autre'
    ];

    const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Demo request submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column - Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Voyez Paynala en action : demandez votre démo personnalisée
                        </h1>
                        <p className="text-lg text-gray-600 mb-12">
                            Une opportunité sans engagement de découvrir comment Paynala peut résoudre vos défis de paiement spécifiques et optimiser vos opérations en Afrique.
                        </p>

                        {/* Avantages */}
                        <div className="space-y-6">
                            {avantages.map((avantage, index) => (
                                <div key={index} className="flex space-x-4">
                                    <div className={`flex-shrink-0 w-14 h-14 ${avantage.bgColor} rounded-lg flex items-center justify-center ${avantage.color}`}>
                                        {avantage.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">
                                            {avantage.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {avantage.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div>
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Demandez votre démo
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Prénom et Nom */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                                            Prénom
                                        </label>
                                        <input
                                            type="text"
                                            id="prenom"
                                            name="prenom"
                                            value={formData.prenom}
                                            onChange={handleChange}
                                            placeholder="Entrez votre prénom"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nom
                                        </label>
                                        <input
                                            type="text"
                                            id="nom"
                                            name="nom"
                                            value={formData.nom}
                                            onChange={handleChange}
                                            placeholder="Entrez votre nom"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* E-mail professionnel */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        E-mail professionnel
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="vous@entreprise.com"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                        required
                                    />
                                </div>

                                {/* Nom de l'entreprise */}
                                <div>
                                    <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom de l'entreprise
                                    </label>
                                    <input
                                        type="text"
                                        id="entreprise"
                                        name="entreprise"
                                        value={formData.entreprise}
                                        onChange={handleChange}
                                        placeholder="Le nom de votre entreprise"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                        required
                                    />
                                </div>

                                {/* Numéro de téléphone */}
                                <div>
                                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Numéro de téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        id="telephone"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                        required
                                    />
                                </div>

                                {/* Secteur d'activité */}
                                <div>
                                    <label htmlFor="secteur" className="block text-sm font-medium text-gray-700 mb-2">
                                        Secteur d'activité
                                    </label>
                                    <select
                                        id="secteur"
                                        name="secteur"
                                        value={formData.secteur}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                                        required
                                    >
                                        {secteurs.map((secteur, index) => (
                                            <option key={index} value={secteur} disabled={index === 0}>
                                                {secteur}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Votre message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Votre message (facultatif)
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Qu'aimeriez-vous voir dans la démo ?"
                                       // rows="4"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition-colors font-medium text-lg"
                                >
                                    Programmer ma démo
                                </button>

                                {/* Privacy Note */}
                                <p className="text-xs text-center text-gray-500">
                                    En soumettant ce formulaire, vous acceptez notre{' '}
                                    <Link href="/confidentialite" className="text-red-600 hover:underline">
                                        Politique de Confidentialité
                                    </Link>
                                    {' '}et consentez à être contacté par notre équipe.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
           <Footer />
        </div>
    );
}
