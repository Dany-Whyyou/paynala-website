'use client';
import React, {FormEvent, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<{ name: string; value: string }>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Image */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 items-center justify-center p-16">
                <div className="relative w-full max-w-xl">
                    {/* White Card Shadow */}
                    <div className="bg-white rounded-2xl shadow-2xl p-12">
                        <div className="grid grid-cols-2 gap-8">
                            {/* Left Column - Laptop */}
                            <div className="flex flex-col justify-center">
                                <div className="relative">
                                    <Image
                                        src="/images/laptop-hand.png"
                                        alt="Main avec carte devant ordinateur"
                                        width={300}
                                        height={400}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* Right Column - Chart & Glasses */}
                            <div className="flex flex-col justify-between py-8">
                                {/* Chart */}
                                <div className="mb-8">
                                    <svg className="w-full h-32" viewBox="0 0 200 120">
                                        <rect x="20" y="80" width="20" height="40" fill="#FF6B6B" rx="2"/>
                                        <rect x="50" y="60" width="20" height="60" fill="#FF6B6B" rx="2"/>
                                        <rect x="80" y="50" width="20" height="70" fill="#FF6B6B" rx="2"/>
                                        <rect x="110" y="40" width="20" height="80" fill="#FF6B6B" rx="2"/>
                                        <rect x="140" y="30" width="20" height="90" fill="#FF6B6B" rx="2"/>
                                        <rect x="170" y="20" width="20" height="100" fill="#FF6B6B" rx="2"/>
                                    </svg>
                                </div>

                                {/* Glasses */}
                                <div className="flex justify-center">
                                    <svg className="w-32 h-auto" viewBox="0 0 200 80" fill="none">
                                        {/* Left lens */}
                                        <ellipse cx="50" cy="40" rx="35" ry="30" stroke="#D4A574" strokeWidth="3" fill="white" opacity="0.3"/>
                                        {/* Bridge */}
                                        <path d="M 85 35 Q 100 30 115 35" stroke="#D4A574" strokeWidth="3" fill="none"/>
                                        {/* Right lens */}
                                        <ellipse cx="150" cy="40" rx="35" ry="30" stroke="#D4A574" strokeWidth="3" fill="white" opacity="0.3"/>
                                        {/* Left temple */}
                                        <path d="M 15 40 L 5 45" stroke="#D4A574" strokeWidth="3"/>
                                        {/* Right temple */}
                                        <path d="M 185 40 L 195 45" stroke="#D4A574" strokeWidth="3"/>
                                    </svg>
                                </div>

                                {/* Decorative elements */}
                                <div className="mt-8 flex justify-center space-x-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded"></div>
                                    <div className="w-12 h-12 bg-gray-300 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative blur circles */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-orange-500/20 rounded-full blur-3xl"></div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 mb-8">
                        <div className="w-8 h-8 bg-red-600 rounded"></div>
                        <span className="text-2xl font-bold text-gray-900">PAYNALA</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Accédez à votre espace démo
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Connectez-vous pour explorer les fonctionnalités de notre plateforme.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email ou Nom d'utilisateur
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Saisissez votre email"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Saisissez votre mot de passe"
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all pr-12"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <Link
                                href="/mot-de-passe-oublie"
                                className="text-sm text-red-600 hover:text-red-700 hover:underline"
                            >
                                Mot de passe oublié ?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl"
                        >
                            Se Connecter
                        </button>

                        {/* Sign Up Link */}
                        <div className="text-center pt-4">
                            <p className="text-sm text-gray-600">
                                Pas encore de compte ?{' '}
                                <Link href="/inscription" className="text-red-600 hover:text-red-700 font-medium hover:underline">
                                    S'inscrire
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
