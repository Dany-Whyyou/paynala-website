'use client';
import React, {FormEvent, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function DevenirPartenairePage() {
    const [formData, setFormData] = useState({
        nom: '',
        nomComplet: '',
        email: '',
        typePartenariat: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const avantages = [
        {
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Accès à de nouveaux marchés',
            description: 'Élargissez votre portée en Afrique avec notre réseau et notre vision établi.'
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z"/>
                    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Innovation technologique',
            description: 'Bénéficiez de notre expertise et de nos infrastructures modernes et fiables et évolutives.'
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Revenus additionnels',
            description: 'Générez de nouveaux flux de revenus grâce à nos modèles de partenariat bien conçus à vos clients.'
        },
        {
            icon: (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Support dédié',
            description: 'Bénéficiez d\'un accompagnement personnalisé de notre équipe pour assurer votre succès.'
        }
    ];

    const modelesPartenariat = [
        {
            image: '/api/placeholder/400/300',
            title: 'Partenariat Technologique',
            description: 'Intégrez nos APIs pour offrir à vos clients une expérience de paiement fiable et moderne.'
        },
        {
            image: '/api/placeholder/400/300',
            title: 'Partenariat Commercial',
            description: 'Distribuez nos solutions pour générer des revenus additionnels et créer une clientèle dans votre zone.'
        },
        {
            image: '/api/placeholder/400/300',
            title: 'Partenariat de Distribution',
            description: 'Devenez un revendeur de nos solutions et accédez à des marchés en augmentation constante et ayant une clientèle dynamique.'
        }
    ];

    const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'partenaire',
                    ...formData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({
                    nom: '',
                    nomComplet: '',
                    email: '',
                    typePartenariat: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
                setErrorMessage(result.error || 'Une erreur est survenue');
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage('Erreur de connexion. Veuillez réessayer.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Devenons partenaires pour façonner l'avenir du paiement en Afrique.
                            </h1>
                            <p className="text-lg text-gray-600">
                                Rejoignez notre réseau en pleine croissance et bénéficiez d'une technologie de pointe pour offrir des solutions de paiement innovantes à vos clients.
                            </p>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl z-10">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                                <svg className="w-64 h-64 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Avantages Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Les avantages d'un partenariat avec PAYNALA
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            En vous associant à PAYNALA, vous accédez à une plateforme robuste, un support expert et de nouvelles opportunités de revenus pour accélérer votre croissance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {avantages.map((avantage, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
                                    {avantage.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {avantage.title}
                                </h3>
                                <p className="text-gray-600">
                                    {avantage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modèles de Partenariat */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Découvrez nos modèles de partenariat
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {modelesPartenariat.map((modele, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="relative h-64 bg-gradient-to-br from-blue-600 to-cyan-500">
                                    {/* Placeholder pour image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className="w-32 h-32 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                                            {index === 0 && (
                                                <path d="M13 7H7v6h6V7z"/>
                                            )}
                                            {index === 1 && (
                                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                                            )}
                                            {index === 2 && (
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                                            )}
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {modele.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {modele.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Prêt à nous rejoindre ? Contactez-nous.
                        </h2>
                        <p className="text-lg text-gray-600">
                            Remplissez le formulaire et rejoignez la nouvelle équipe de partenaires pour nous contacter dans les plus brefs délais pour discuter des partenariats viables.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
                        {/* Nom de l'entreprise */}
                        <div>
                            <label htmlFor="nom" className="block text-sm font-semibold text-gray-900 mb-2">
                                Nom de l'entreprise
                            </label>
                            <input
                                type="text"
                                id="nom"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                placeholder="Votre nom d'entreprise"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>

                        {/* Nom du contact */}
                        <div>
                            <label htmlFor="nomComplet" className="block text-sm font-semibold text-gray-900 mb-2">
                                Nom du contact
                            </label>
                            <input
                                type="text"
                                id="nomComplet"
                                name="nomComplet"
                                value={formData.nomComplet}
                                onChange={handleChange}
                                placeholder="Votre nom complet"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>

                        {/* Adresse e-mail */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                Adresse e-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="exemple@entreprise.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>

                        {/* Type de partenariat */}
                        <div>
                            <label htmlFor="typePartenariat" className="block text-sm font-semibold text-gray-900 mb-2">
                                Type de partenariat
                            </label>
                            <select
                                id="typePartenariat"
                                name="typePartenariat"
                                value={formData.typePartenariat}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                                required
                            >
                                <option value="">Technologique</option>
                                <option value="technologique">Technologique</option>
                                <option value="commercial">Commercial</option>
                                <option value="distribution">Distribution</option>
                            </select>
                        </div>

                        {/* Votre message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                Votre message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Décrivez brièvement votre projet, votre demande..."
                               // rows="5"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Messages de statut */}
                        {submitStatus === 'success' && (
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    <div>
                                        <p className="text-green-800 font-medium">Demande envoyée avec succès !</p>
                                        <p className="text-green-600 text-sm">Notre équipe vous contactera dans les plus brefs délais.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                                    </svg>
                                    <div>
                                        <p className="text-red-800 font-medium">Erreur lors de l'envoi</p>
                                        <p className="text-red-600 text-sm">{errorMessage}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 rounded-lg font-medium text-lg transition-colors flex items-center justify-center ${
                                isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-red-600 hover:bg-red-700 text-white'
                            }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Envoi en cours...
                                </>
                            ) : (
                                'Envoyer la demande'
                            )}
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
