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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Ajoutez ici votre logique de soumission
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
                            Rejoignez l'aventure Paynala
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

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition-colors font-medium text-lg"
                        >
                            Envoyer ma candidature
                        </button>

                        {/* Alternative Link */}
                        <p className="text-center text-gray-600">
                            Vous cherchez un poste spécifique ?{' '}
                            <Link href="/carrieres" className="text-red-600 hover:text-red-700 font-medium">
                                Consultez nos offres d'emploi.
                            </Link>
                        </p>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
