'use client';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import Link from 'next/link';
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

interface FormData {
    prenom: string;
    nom: string;
    email: string;
    poste: string;
    message: string;
    cv: File | null;
}
export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        prenom: '',
        nom: '',
        email: '',
        poste: '',
        message: '',
        cv: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        const file = files?.[0] || null;

        setFormData(prev => ({
            ...prev,
            [name]: file
        }));
    };

    // Convertir le fichier en base64
    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result as string;
                // Retirer le préfixe data:...;base64,
                const base64 = result.split(',')[1];
                resolve(base64);
            };
            reader.onerror = error => reject(error);
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            // Préparer les données avec le CV en base64 si présent
            let cvData = {};
            if (formData.cv) {
                const cvBase64 = await fileToBase64(formData.cv);
                cvData = {
                    cvFileName: formData.cv.name,
                    cvBase64: cvBase64,
                };
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'candidature',
                    prenom: formData.prenom,
                    nom: formData.nom,
                    email: formData.email,
                    poste: formData.poste,
                    message: formData.message,
                    ...cvData,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({
                    prenom: '',
                    nom: '',
                    email: '',
                    poste: '',
                    message: '',
                    cv: null
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
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    {/* Title Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            Rejoignez l'aventure PAYNALA
                        </h1>
                        <p className="text-lg text-gray-600">
                            Façonnez avec nous l'avenir de la fintech en Afrique. Nous sommes toujours à la recherche
                            de talents passionnés pour rejoindre notre équipe.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Prénom et Nom */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="prenom" className="block text-sm font-medium text-gray-900 mb-2">
                                    Prénom
                                </label>
                                <input
                                    type="text"
                                    id="prenom"
                                    name="prenom"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                    placeholder="Entrez votre prénom"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="nom" className="block text-sm font-medium text-gray-900 mb-2">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    placeholder="Entrez votre nom"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email et Poste souhaité */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Entrez votre adresse email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="poste" className="block text-sm font-medium text-gray-900 mb-2">
                                    Poste souhaité
                                </label>
                                <input
                                    type="text"
                                    id="poste"
                                    name="poste"
                                    value={formData.poste}
                                    onChange={handleChange}
                                    placeholder="ex: Développeur, Chef de produit..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                                Votre message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Parlez-nous de vous..."
                                //rows="6"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                                required
                            ></textarea>
                        </div>

                        {/* Upload CV */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Télécharger votre CV
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-400 transition-colors">
                                <input
                                    type="file"
                                    id="cv"
                                    name="cv"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                />
                                <label htmlFor="cv" className="cursor-pointer">
                                    <svg className="w-10 h-10 text-red-600 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                                    </svg>
                                    <p className="text-red-600 font-medium mb-1">
                                        {formData.cv && formData.cv.name
                                            ? formData.cv.name
                                            : 'Cliquez pour choisir un fichier ou glissez-déposez'}

                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Formats acceptés : PDF, DOCX, DOCX (max. 5MB)
                                    </p>
                                </label>
                            </div>
                        </div>

                        {/* Messages de statut */}
                        {submitStatus === 'success' && (
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    <div>
                                        <p className="text-green-800 font-medium">Candidature envoyée avec succès !</p>
                                        <p className="text-green-600 text-sm">Nous examinerons votre profil et vous recontacterons.</p>
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
                                'Envoyer ma candidature'
                            )}
                        </button>

                        {/* Alternative Link */}
                        {/*<p className="text-center text-gray-600">
                            Vous cherchez un poste spécifique ?{' '}
                            <Link href="/carrieres" className="text-red-600 hover:text-red-700 font-medium">
                                Consultez nos offres d'emploi.
                            </Link>
                        </p>*/}
                    </form>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
