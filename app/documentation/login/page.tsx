'use client';
import React, {FormEvent, useState} from 'react';
import Link from 'next/link';

export default function DocumentationLoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Documentation login:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            {/* Logo */}
            <div className="mb-8 flex items-center space-x-3 bg-white px-6 py-3 rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                    </svg>
                </div>
                <span className="text-2xl font-bold text-gray-900">PAYNALA</span>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Connexion à la<br />Documentation
                </h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Adresse e-mail ou Nom d'utilisateur
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                                </svg>
                            </span>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Entrez votre e-mail ou nom d'utilisateur"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Mot de passe
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                                </svg>
                            </span>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Entrez votre mot de passe"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                                required
                            />
                        </div>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="text-right">
                        <Link
                            href="/mot-de-passe-oublie"
                            className="text-sm text-red-600 hover:text-red-700 hover:underline font-medium transition-colors"
                        >
                            Mot de passe oublié ?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3.5 rounded-lg transition-colors shadow-md hover:shadow-lg p"
                    >
                        Se connecter
                    </button>
                </form>
            </div>

            {/* Footer */}
            <footer className="mt-8 text-center text-sm text-gray-500">
                © 2024 PAYNALA. Tous droits réservés.
            </footer>
        </div>
    );
}
