'use client';
import React, {FormEvent, useState} from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CentreAidePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaq, setOpenFaq] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const faqCategories = [
        {
            id: 'questions-generales',
            title: 'Questions Generales',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
            ),
            questions: [
                {
                    question: "Qu'est-ce que PAYNALA ?",
                    answer: "PAYNALA est une plateforme d'agregation de paiements permettant aux marchands (institutions educatives, services gouvernementaux, organisations caritatives) d'accepter des paiements via Airtel Money au Gabon."
                },
                {
                    question: "Comment fonctionne le paiement via Airtel Money ?",
                    answer: "Le client initie un paiement depuis l'application My Airtel, selectionne le marchand, entre les informations requises (reference, montant si applicable), puis recoit un push USSD et confirme avec son code PIN. Un recu avec QR code est genere automatiquement."
                },
                {
                    question: "Quels types de marchands sont supportes ?",
                    answer: "Institutions educatives (universites, ecoles), services gouvernementaux, organisations caritatives, et divers commercants. Le systeme supporte les relations de sous-compte pour les structures complexes."
                }
            ]
        },
        {
            id: 'processus-paiement',
            title: 'Processus de Paiement',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                </svg>
            ),
            questions: [
                {
                    question: "Quelles sont les etapes d'un paiement ?",
                    answer: "1) Selection du marchand dans l'app Airtel\n2) Saisie de la reference (ex: numero etudiant)\n3) Confirmation du montant\n4) Reception du push USSD\n5) Validation par code PIN\n6) Reception du recu par SMS/email"
                },
                {
                    question: "Que signifie le statut 'pending' ?",
                    answer: "Le paiement a ete initie et est en attente de confirmation par le client via son code PIN Airtel Money."
                },
                {
                    question: "Que signifie le statut 'completed' ?",
                    answer: "Le paiement a ete valide avec succes et traite. Les fonds ont ete transferes et le marchand sera credite selon sa configuration de decaissement."
                },
                {
                    question: "Que signifie le statut 'failed' ?",
                    answer: "Le paiement a echoue. Causes possibles : solde insuffisant, code PIN incorrect, timeout de session, ou probleme technique."
                },
                {
                    question: "Combien de temps ai-je pour confirmer un paiement ?",
                    answer: "Les sessions de paiement ont une duree de validite limitee (generalement quelques minutes). Au-dela, la transaction expire automatiquement."
                }
            ]
        },
        {
            id: 'commissions-frais',
            title: 'Commissions et Frais',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
            ),
            questions: [
                {
                    question: "Comment fonctionnent les commissions ?",
                    answer: "Trois modes disponibles :\n- Exclusif : Le client paie montant + frais\n- Inclusif : Frais deduits du montant recu par le marchand\n- Hybride : Frais partages entre client et marchand"
                },
                {
                    question: "Quels sont les frais Airtel ?",
                    answer: "Les commissions PAYNALA s'ajoutent selon la configuration specifique du marchand."
                },
                {
                    question: "Comment est calcule le montant net pour le marchand ?",
                    answer: "Montant net = Montant brut - Frais Airtel (1%) - Commission PAYNALA (selon configuration). Le detail est visible sur chaque transaction dans le portail."
                }
            ]
        },
        {
            id: 'recus-verification',
            title: 'Recus et Verification',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                </svg>
            ),
            questions: [
                {
                    question: "Comment verifier l'authenticite d'un recu ?",
                    answer: "Chaque recu contient un QR code unique. Scannez-le pour acceder a la page de verification qui confirme les details de la transaction (montant, date, reference, statut)."
                },
                {
                    question: "Comment recevoir mon recu ?",
                    answer: "Les recus sont envoyes automatiquement par email a l'adresse fournie lors du paiement (si applicable). Ils peuvent egalement etre telecharges depuis le portail marchand."
                },
                {
                    question: "Que contient un recu PAYNALA ?",
                    answer: "Reference de transaction, montant paye, date et heure, informations du marchand, reference client, QR code de verification, et detail des frais si applicable."
                }
            ]
        },
        {
            id: 'problemes-courants',
            title: 'Problemes Courants',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
            ),
            questions: [
                {
                    question: "Mon paiement a ete debite mais pas de confirmation ?",
                    answer: "Attendez quelques minutes - un systeme de recuperation automatique traite les transactions orphelines. Si le probleme persiste apres 15 minutes, contactez le support avec votre numero de transaction Airtel Money."
                },
                {
                    question: "J'ai entre une mauvaise reference, que faire ?",
                    answer: "Contactez immediatement le marchand concerne avec la preuve de paiement (reference Airtel). Le marchand peut effectuer une reconciliation manuelle via le portail."
                },
                {
                    question: "Le paiement affiche 'expired' mais l'argent a ete preleve ?",
                    answer: "Cela peut arriver lors d'une latence reseau. Le systeme effectue des verifications automatiques toutes les 5 minutes et procede au remboursement ou a la validation selon le cas."
                },
                {
                    question: "Erreur 'Solde insuffisant' alors que j'ai les fonds ?",
                    answer: "Verifiez que le montant inclut les eventuels frais (mode exclusif). Assurez-vous egalement qu'aucune autre transaction n'est en cours sur votre compte."
                }
            ]
        },
        {
            id: 'pour-marchands',
            title: 'Pour les Marchands',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                </svg>
            ),
            questions: [
                {
                    question: "Comment acceder au portail marchand ?",
                    answer: "Connectez-vous sur le portail PAYNALA (URL fournie lors de l'integration) avec vos identifiants. L'authentification utilise OAuth2 securise."
                },
                {
                    question: "Comment effectuer une reconciliation ?",
                    answer: "Le portail affiche toutes les transactions avec filtres par date, statut et reference. Utilisez la fonction d'export pour generer des rapports comptables."
                },
                {
                    question: "Comment fonctionnent les decaissements ?",
                    answer: "Les fonds collectes sont decaisses automatiquement selon votre configuration (quotidien, hebdomadaire, mensuel) vers votre compte marchand, deduction faite des commissions."
                },
                {
                    question: "Puis-je avoir plusieurs points de vente ?",
                    answer: "Oui, le systeme supporte les relations parent-enfant. Une organisation peut avoir plusieurs entites (ex: universite avec departements) chacune avec ses propres references."
                }
            ]
        },
        {
            id: 'support',
            title: 'Support',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"/>
                </svg>
            ),
            questions: [
                {
                    question: "Comment contacter le support PAYNALA ?",
                    answer: "Par email (contact@paynala.com), ou par telephone 077451387"
                },
                {
                    question: "Quelles informations fournir pour une reclamation ?",
                    answer: "Numero de transaction Airtel, date et heure approximatives, montant, reference client utilisee, et description detaillee du probleme."
                }
            ]
        }
    ];

    const toggleFaq = (id: string) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    // Filtrer les questions selon la recherche
    const filteredCategories = searchQuery
        ? faqCategories.map(cat => ({
            ...cat,
            questions: cat.questions.filter(q =>
                q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.answer.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })).filter(cat => cat.questions.length > 0)
        : faqCategories;

    // Filtrer par categorie active
    const displayedCategories = activeCategory
        ? filteredCategories.filter(cat => cat.id === activeCategory)
        : filteredCategories;

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section with Search */}
            <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-red-900 py-20 md:py-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Centre d'aide PAYNALA
                    </h1>
                    <p className="text-lg text-gray-200 mb-10">
                        Trouvez des reponses a toutes vos questions sur les paiements via Airtel Money.
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
                                placeholder="Recherchez par mot-cle..."
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

            {/* Categories Navigation */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeCategory === null
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Toutes les categories
                        </button>
                        {faqCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    activeCategory === cat.id
                                        ? 'bg-red-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {displayedCategories.map((category) => (
                        <div key={category.id} className="mb-12">
                            <div className="flex items-center mb-6">
                                <div className="p-2 bg-red-100 rounded-lg text-red-600 mr-3">
                                    {category.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {category.title}
                                </h2>
                            </div>
                            <div className="space-y-4">
                                {category.questions.map((faq, index) => {
                                    const faqId = `${category.id}-${index}`;
                                    return (
                                        <div
                                            key={faqId}
                                            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggleFaq(faqId)}
                                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="text-lg font-medium text-gray-900 pr-8">
                                                    {faq.question}
                                                </span>
                                                <svg
                                                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                                                        openFaq === faqId ? 'transform rotate-180' : ''
                                                    }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {openFaq === faqId && (
                                                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100">
                                                    <p className="pt-4 whitespace-pre-line">{faq.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    {displayedCategories.length === 0 && (
                        <div className="text-center py-12">
                            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-500 text-lg">Aucun resultat trouve pour "{searchQuery}"</p>
                            <button
                                onClick={() => setSearchQuery('')}
                                className="mt-4 text-red-600 hover:text-red-700 font-medium"
                            >
                                Effacer la recherche
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Support CTA */}
            <section className="py-16 bg-red-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Vous ne trouvez pas de reponse ?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Notre equipe est la pour vous aider. Contactez-nous par email ou telephone.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:contact@paynala.com"
                            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium inline-flex items-center justify-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            contact@paynala.com
                        </a>
                        <a
                            href="tel:+24177451387"
                            className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-flex items-center justify-center border border-gray-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            077 45 13 87
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
