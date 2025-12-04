'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CentreAidePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaq, setOpenFaq] = useState(null);

    const categories = [
        {
            icon: (
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Mon Compte',
            description: 'Gérez vos informations et paramètres.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Paiements et Virements',
            description: 'Tout sur les frais et le règlement retardé.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'Sécurité',
            description: 'Protégez votre compte et vos données.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
            ),
            title: "Guides d'intégration",
            description: 'Aide à suivre pour les plateformes populaires.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                </svg>
            ),
            title: 'Démarrer',
            description: 'Premiers pas avec votre compte Paynala.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
            ),
            title: 'API & Développeurs',
            description: 'Documentation technique pour intégrer l\'AP...'
        }
    ];

    const faqs = [
        {
            question: 'Comment obtenir mon mot de passe ?',
            answer: 'Pour réinitialiser votre mot de passe, cliquez sur "Mot de passe oublié" sur la page de connexion. Vous recevrez un email avec les instructions pour créer un nouveau mot de passe.'
        },
        {
            question: 'Quels sont les frais de transaction ?',
            answer: 'Nos frais varient selon le type de transaction et votre plan. Les paiements locaux sont généralement facturés à 1,5% + 100 NGN, tandis que les paiements internationaux sont à 3,9% + 100 NGN. Consultez notre page tarifs pour plus de détails.'
        },
        {
            question: 'Mes données personnelles sont elles sécurisées ?',
            answer: 'Oui, nous prenons la sécurité très au sérieux. Toutes vos données sont chiffrées avec le protocole SSL/TLS. Nous sommes également certifiés PCI-DSS niveau 1, le plus haut niveau de sécurité dans l\'industrie des paiements.'
        },
        {
            question: 'Combien de temps prend un virement ?',
            answer: 'Les virements instantanés sont traités immédiatement. Les virements standards prennent généralement 1-3 jours ouvrables selon votre banque et le pays de destination.'
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search logic here
        console.log('Searching for:', searchQuery);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section with Search */}
            <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-red-900 py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Comment pouvons-nous vous aider ?
                    </h1>
                    <p className="text-lg text-gray-200 mb-10">
                        Trouvez des réponses, des guides et des articles pour tirer parti de Paynala.
                    </p>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                        <div className="relative flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="absolute left-4">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Recherchez par mot-clé..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 text-gray-900 placeholder-gray-500 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-red-600 text-white px-8 py-4 hover:bg-red-700 transition-colors font-medium"
                            >
                                Rechercher
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                        Parcourir par catégorie
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-red-300 transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 p-2 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                                        {category.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                                            {category.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                        Questions fréquentes
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg font-medium text-gray-900 pr-8">
                                        {faq.question}
                                    </span>
                                    <svg
                                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                                            openFaq === index ? 'transform rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100">
                                        <p className="pt-4">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Support CTA */}
            <section className="py-16 bg-red-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Vous ne trouvez pas de réponse ?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Notre équipe est là pour vous aider. Contactez-nous pour toutes questions ou
                        problèmes non résolus dans notre centre d'aide.
                    </p>
                    <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium inline-flex items-center">
                        Contacter le support
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}
