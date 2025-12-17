'use client';
import {
    Globe,
    Smartphone,
    CreditCard,
    Code,
    Building2,
    RefreshCw,
    Lightbulb
} from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useRef, useState, useEffect } from 'react';

export default function Home() {
    // Logo slider drag functionality
    const sliderRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const slider = sliderRef.current;
        const track = trackRef.current;
        if (!slider || !track) return;

        let animationOffset = 0;
        let animationId: number;
        let lastTime = performance.now();

        const animate = (currentTime: number) => {
            if (!isDragging) {
                const deltaTime = currentTime - lastTime;
                animationOffset -= deltaTime * 0.03; // Vitesse du défilement auto

                const trackWidth = track.scrollWidth / 2;
                if (Math.abs(animationOffset) >= trackWidth) {
                    animationOffset = 0;
                }

                track.style.transform = `translateX(${animationOffset}px)`;
            }
            lastTime = currentTime;
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        const handleTouchStart = (e: TouchEvent) => {
            setIsDragging(true);
            setStartX(e.touches[0].pageX);
            const transform = track.style.transform;
            const match = transform.match(/translateX\((.*)px\)/);
            setScrollLeft(match ? parseFloat(match[1]) : 0);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.touches[0].pageX;
            const walk = (x - startX) * 1.5;
            animationOffset = scrollLeft + walk;
            track.style.transform = `translateX(${animationOffset}px)`;
        };

        const handleTouchEnd = () => {
            setIsDragging(false);
        };

        const handleMouseDown = (e: MouseEvent) => {
            setIsDragging(true);
            setStartX(e.pageX);
            const transform = track.style.transform;
            const match = transform.match(/translateX\((.*)px\)/);
            setScrollLeft(match ? parseFloat(match[1]) : 0);
            slider.style.cursor = 'grabbing';
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX;
            const walk = (x - startX) * 1.5;
            animationOffset = scrollLeft + walk;
            track.style.transform = `translateX(${animationOffset}px)`;
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            slider.style.cursor = 'grab';
        };

        const handleMouseLeave = () => {
            if (isDragging) {
                setIsDragging(false);
                slider.style.cursor = 'grab';
            }
        };

        slider.addEventListener('touchstart', handleTouchStart, { passive: true });
        slider.addEventListener('touchmove', handleTouchMove, { passive: false });
        slider.addEventListener('touchend', handleTouchEnd);
        slider.addEventListener('mousedown', handleMouseDown);
        slider.addEventListener('mousemove', handleMouseMove);
        slider.addEventListener('mouseup', handleMouseUp);
        slider.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationId);
            slider.removeEventListener('touchstart', handleTouchStart);
            slider.removeEventListener('touchmove', handleTouchMove);
            slider.removeEventListener('touchend', handleTouchEnd);
            slider.removeEventListener('mousedown', handleMouseDown);
            slider.removeEventListener('mousemove', handleMouseMove);
            slider.removeEventListener('mouseup', handleMouseUp);
            slider.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDragging, startX, scrollLeft]);
    const testimonials = [
        {
            id: 1,
            name: "SM MBOLO",
            position: "Supermarché , Secteur Retail",
            text: "Avant PAYNALA, nous avions 4 terminaux différents à chaque caisse. Aujourd'hui, un seul terminal gère tout. Nos caissiers sont plus efficaces et nos clients apprécient la flexibilité de paiement. Un gain de temps considérable."
        },
        {
            id: 2,
            name: "EN",
            position: "École Nationale Supérieure, Secteur Éducation",
            text: "Grâce à la solution d'agrégation de paiements PAYNALA, nous avons digitalisé l'encaissement des frais de scolarité. Les parents peuvent désormais payer à distance via Mobile Money. Cette solution a considérablement amélioré notre gestion administrative et réduit les files d'attente."
        },
        {
            id: 3,
            name: "OV",
            position: "Omed Voyage, Agence de voyage",
            text: "L'intégration des APIs PAYNALA dans notre système de réservation a été rapide et fluide. Nos clients peuvent désormais réserver et payer leurs billets en ligne en toute simplicité via différents canaux de paiement. Un vrai atout pour notre activité."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header/>

            {/* Hero Section avec Vidéo */}
            <section className="hero-section">
                {/* Vidéo de fond */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                    poster="/images/hero-poster.webp"
                >
                    <source src="/videos/paynala.webm" type="video/webm" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>

                {/* Overlay sombre pour lisibilité du texte */}
                <div className="hero-overlay"></div>

                {/* Contenu centré sur l'image */}
                <div className="hero-content max-w-5xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                        Accélérez votre transformation <br className="hidden sm:block"/>digitale avec PAYNALA
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-8 max-w-3xl mx-auto drop-shadow-md">
                        Du paiement digital aux solutions sur mesure, nous transformons vos ambitions en réalité.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <a href="#solutions" className="bg-red-600 text-white px-6 sm:px-8 py-3 rounded-md hover:bg-red-700 font-medium transition-colors shadow-lg">
                            Découvrir nos solutions
                        </a>
                    </div>
                </div>
            </section>

            {/* Globe Illustration */}
            {/*<section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div
                        className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-16 relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-20">
                            <div
                                className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse"
                                 style={{animationDelay: '0.1s'}}></div>
                            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse"
                                 style={{animationDelay: '0.2s'}}></div>
                            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse"
                                 style={{animationDelay: '0.3s'}}></div>
                            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse"
                                 style={{animationDelay: '0.4s'}}></div>
                        </div>
                        <div className="relative flex items-center justify-center">
                            <Globe className="w-64 h-64 text-teal-300 opacity-30" strokeWidth={0.5}/>
                        </div>
                    </div>
                </div>
            </section>*/}

            {/* Logos Section */}
            <section className="py-12 px-4 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-4xl font-bold text-gray-900 mb-8">
                        Ils nous font confiance
                    </h2>

                    {/* Desktop: Flex wrap */}
                    <div className="hidden md:flex flex-wrap justify-center items-center gap-8">
                        <div className="h-20 w-auto rounded-lg overflow-hidden">
                            <img src="/partenanaires/airtel-Money.jpg" className="h-full w-auto object-contain" alt="" />
                        </div>
                        <div className="h-20 w-auto rounded-lg overflow-hidden">
                            <img src="/partenanaires/beac.jpeg" className="h-full w-auto object-contain" alt=""/>
                        </div>
                        <div className="h-20 w-auto rounded-lg overflow-hidden">
                            <img src="/partenanaires/cma-cgm.jpeg" className="h-full w-auto object-contain" alt=""/>
                        </div>
                        <div className="h-20 w-auto rounded-lg overflow-hidden">
                            <img src="/partenanaires/cnou.jpg" className="h-full w-auto object-contain" alt=""/>
                        </div>
                        <div className="h-20 w-auto rounded-lg overflow-hidden">
                            <img src="/partenanaires/ENS-Logo1.jpg" className="h-full w-auto object-contain" alt=""/>
                        </div>
                        <div className="h-20 w-auto rounded-lg overflow-hidden">
                            <img src="/partenanaires/gimac.png" className="h-full w-auto object-contain" alt=""/>
                        </div>
                        <div className="h-20 w-auto rounded-lg overflow-hidden">
                            <img src="/partenanaires/moov.webp" className="h-full w-auto object-contain" alt=""/>
                        </div>
                        <div className="h-20 w-auto rounded-lg overflow-hidden">
                            <img src="/partenanaires/omed.png" className="h-full w-auto object-contain" alt=""/>
                        </div>
                    </div>

                    {/* Mobile: Auto-scroll + Interactive slider */}
                    <div className="md:hidden relative">
                        <div ref={sliderRef} className="logos-slider-auto overflow-hidden" style={{ cursor: 'grab' }}>
                            <div ref={trackRef} className="logos-track-auto">
                                {/* Premier groupe */}
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/airtel-Money.jpg" className="h-16 w-auto object-contain" alt="" />
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/beac.jpeg" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/cma-cgm.jpeg" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/cnou.jpg" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/ENS-Logo1.jpg" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/gimac.png" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/moov.webp" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/omed.png" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                {/* Duplication pour effet infini */}
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/airtel-Money.jpg" className="h-16 w-auto object-contain" alt="" />
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/beac.jpeg" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/cma-cgm.jpeg" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/cnou.jpg" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/ENS-Logo1.jpg" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/gimac.png" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/moov.webp" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                                <div className="logo-item-auto">
                                    <img src="/partenanaires/omed.png" className="h-16 w-auto object-contain" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .logos-slider-auto {
                        width: 100%;
                        user-select: none;
                        -webkit-user-select: none;
                    }

                    .logos-track-auto {
                        display: flex;
                        width: max-content;
                    }

                    .logo-item-auto {
                        flex-shrink: 0;
                        padding: 0 1.25rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        pointer-events: none;
                    }

                    .logo-item-auto img {
                        pointer-events: none;
                        -webkit-user-drag: none;
                    }
                `}</style>
            </section>

            {/* Solutions Section */}
            <section id="solutions" className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Nos solutions de paiement
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Découvrez nos solutions conçues pour simplifier la gestion des paiements en Afrique,
                            répondant aux besoins des entreprises et de l'administration avec efficacité.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Globe className="w-6 h-6 text-red-600"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Agrégation de <br/>Paiements Multi-Opérateurs
                            </h3>
                            <p className="text-gray-600">
                                Intégrez tous les opérateurs Mobile Money et moyens de paiement via une seule API.
                                Déploiement en 48 heures à 2 semaines, sans développement technique complexe. Solution
                                idéale pour les commerces, écoles, universités, e-commerce, l'administration et
                                entreprises.
                            </p>
                            <br/>
                            <br/>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Intégration API simple et rapide</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span
                                        className="text-gray-700">Multi-opérateurs (Airtel Money, Moov Money)</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Liens de paiement personnalisés</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Dashboard temps réel</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Rapports et analytics détaillés</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Versement instantané des fonds</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <Smartphone className="w-6 h-6 text-red-600"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Terminal de Paiement Unique (TPE)
                            </h3>
                            <p className="text-gray-600">
                                Remplacez vos terminaux par un seul TPE acceptant QR codes statiques et dynamiques, NFC,
                                Mobile Money et cartes bancaires. Simplifiez la gestion de vos caisses et réduisez vos
                                coûts de 60%. Un terminal pour tous vos paiements.
                            </p>
                            <br/>
                            <br/>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">QR code statique et dynamique</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Paiement sans contact NFC</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Compatible tous opérateurs Mobile Money</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Cartes Visa et Mastercard acceptées</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Impression automatique de tickets</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <CreditCard className="w-6 h-6 text-red-600"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Intégration Mobile Money
                            </h3>
                            <p className="text-gray-600">
                                Acceptez les paiements des opérateurs directement depuis vos applications ou points de
                                vente. Accès instantané à plus des millions d'utilisateurs via application mobile et
                                USSD (*150#). Commission compétitive, avec support technique dédié.
                            </p>
                            <br/>
                            <br/>
                            <br/>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Intégration USSD (*150#)</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Compatible applications mobiles</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Sécurité maximale (PCI-DSS)</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Déploiement sous 48h à 2 semaines</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Formation et support continu</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-gray-700">Coûts réduits vs intégration directe</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gray-900 rounded-3xl p-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center text-white">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">Des millions +</div>
                                <div className="text-sm text-gray-400">Utilisateurs mobile money accessibles</div>
                            </div>
                            {/*<div>
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">15+</div>
                  <div className="text-sm text-gray-400">Pays desservis</div>
                </div>*/}
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">1</div>
                                <div className="text-sm text-gray-400">Terminal pour tous vos paiements</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">48h-2 sem</div>
                                <div className="text-sm text-gray-400">Temps de déploiement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Au-delà du paiement - Solutions Digitales */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Texte à gauche */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Au-delà du paiement, nous transformons votre digital
                            </h2>
                            <p className="text-gray-300 text-lg mb-8">
                                Nous développons les plateformes, systèmes et workflows qui accélèrent votre transformation digitale.
                            </p>
                            <a
                                href="/solutions-digitales"
                                className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-medium transition-colors"
                            >
                                Découvrir nos solutions digitales
                            </a>
                        </div>

                        {/* Cartes à droite */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                                    <Code className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-white font-bold mb-2">Développement Web & Mobile</h3>
                                <p className="text-gray-400 text-sm">Applications sur mesure adaptées à vos besoins</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                                    <Building2 className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-white font-bold mb-2">Systèmes de Gestion (ERP/CRM)</h3>
                                <p className="text-gray-400 text-sm">Solutions complètes pour piloter votre organisation</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                                    <RefreshCw className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-white font-bold mb-2">Digitalisation de Processus</h3>
                                <p className="text-gray-400 text-sm">Automatisation de vos workflows métier</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                                    <Lightbulb className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-white font-bold mb-2">Accompagnement & Consulting</h3>
                                <p className="text-gray-400 text-sm">Stratégie et conseil pour votre transformation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why PAYNALA Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Pourquoi choisir PAYNALA ?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Une solution pensée pour les entreprises et les administrations africaines.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div
                                className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                                🎯
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Simplicité absolue</h3>
                            <p className="text-gray-600 text-sm">
                                Un seul terminal, une seule interface, un seul interlocuteur. Gérez tous vos paiements
                                depuis un tableau de bord unique et intuitif. Fini la multiplication des équipements et
                                des contacts.
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                                🔗
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Interopérabilité totale</h3>
                            <p className="text-gray-600 text-sm">
                                Compatible avec tous les opérateurs Mobile Money et systèmes bancaires. Maximisez votre
                                portée auprès de millions d'utilisateurs et acceptez tous les moyens de paiement.
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                                💰
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Tarifs compétitifs</h3>
                            <p className="text-gray-600 text-sm">
                                Commission négociée sur les transactions. Réduisez vos coûts de 60% par rapport aux
                                solutions traditionnelles tout en augmentant vos capacités d'encaissement.
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                                ⚡
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Déploiement ultra-rapide</h3>
                            <p className="text-gray-600 text-sm">
                                Mise en place en 48 heures à 2 semaines maximum, contre plusieurs mois pour une
                                intégration directe avec les opérateurs. Commencez à encaisser rapidement.
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                                🔒
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Sécurité et conformité</h3>
                            <p className="text-gray-600 text-sm">
                                Vos transactions et données sont protégées aux standards internationaux les plus
                                exigeants.
                            </p>
                        </div>

                        <div className="text-center">
                            <div
                                className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                                🤝
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Support dédié</h3>
                            <p className="text-gray-600 text-sm">
                                Avec notre Équipe basée à Libreville, nous vous assurons un support technique en
                                français et en anglais avec un accompagnement personnalisé pour votre intégration et
                                formation de vos équipes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ECTEURS DESSERVIS */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Nous accompagnons tous les secteurs
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Des solutions adaptées à chaque industrie
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <div className="h-64 bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center">
                                <img src="/secteurs/retail.jpg" className="w-full h-full object-cover object-center block" alt=""/>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Retail & Commerce</h3>
                                <p className="text-gray-600">
                                    Simplifiez vos encaissements avec un terminal unique acceptant tous les moyens de
                                    paiement. Idéal pour supermarchés, boutiques, restaurants.
                                </p>
                                <br/>
                                <button
                                    className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-red-950 font-medium">
                                    Découvrir
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <div
                                className="h-64 bg-gradient-to-br from-teal-300 to-teal-200 flex items-center justify-center">
                                <img src="/secteurs/education.jpg" className="w-full h-full object-cover object-center block" alt=""/>
                            </div>
                            <div className="p-6 justify-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Éducation</h3>
                                <p className="text-gray-600">
                                    Digitalisez le paiement des frais de scolarité. Les parents paient à distance via
                                    Mobile Money. Simplifiez votre gestion administrative.
                                </p>
                                <br/>
                                <button
                                    className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-red-950 font-medium">
                                    Découvrir
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <div
                                className="h-64 bg-gradient-to-br from-orange-300 to-orange-200 flex items-center justify-center">
                                <img src="/secteurs/administratifs.jpg" className="w-full h-full object-cover object-center block" alt=""/>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Services Administratifs</h3>
                                <p className="text-gray-600">
                                    Collectez les taxes, impôts et frais administratifs de manière transparente et
                                    traçable. Réduisez l'usage du cash.
                                </p>
                                <br/>
                                <br/>
                                <button
                                    className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-red-950 font-medium">
                                    Découvrir
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <div
                                className="h-64 bg-gradient-to-br from-teal-300 to-teal-200 flex items-center justify-center">
                                <img src="/secteurs/logistique.jpg" className="w-full h-full object-cover object-center block" alt=""/>
                            </div>
                            <div className="p-6 justify-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Transport & Logistique</h3>
                                <p className="text-gray-600">
                                    Acceptez les paiements pour vos services de transport maritime, aérien ou terrestre.
                                    Intégration simple et rapide.
                                </p>
                                <br/>
                                <br/>
                                <button
                                    className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-red-950 font-medium">
                                    Découvrir
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <div
                                className="h-64 bg-gradient-to-br from-teal-300 to-teal-200 flex items-center justify-center">
                                <img src="/secteurs/banque.jpg" className="w-full h-full object-cover object-center block" alt=""/>
                            </div>
                            <div className="p-6 justify-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Banques & Finance</h3>
                                <p className="text-gray-600">
                                    Étendez vos services de paiement digital à vos clients. Partenariat stratégique pour
                                    l'interopérabilité.
                                </p>
                                <br/>
                                <br/>
                                <button
                                    className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-red-950 font-medium">
                                    Découvrir
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <div
                                className="h-64 bg-gradient-to-br from-teal-300 to-teal-200 flex items-center justify-center">
                                <img src="/secteurs/sante.jpg" className="w-full h-full object-cover object-center block" alt=""/>
                            </div>
                            <div className="p-6 justify-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Assurances & Santé</h3>
                                <p className="text-gray-600">
                                    Facilitez le paiement des primes d'assurance et frais médicaux via Mobile Money.
                                    Améliorer l'accès aux soins.
                                </p>
                                <br/>
                                <br/>
                                <button
                                    className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-red-950 font-medium">
                                    Découvrir
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


            {/* Testimonial Section */}
            <section className="py-16 bg-white overflow-hidden">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Ils ont transformé leurs paiements avec PAYNALA
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto"></p>
                </div>

                <div className="relative">
                    {/* Container avec scroll horizontal */}
                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-0 px-4 sm:px-6 lg:px-8 animate-scroll">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={`${testimonial.id}-${index}`}
                                    className="flex w-[600px] sm:w-[600px] md:w-[600px] " style={{'marginLeft': '40px'}}
                                >
                                    <div
                                        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-lg h-full">
                                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                                            {/* Avatar */}
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                                                    <svg className="w-10 h-10 text-white" fill="none"
                                                         stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2}
                                                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Testimonial Content */}
                                            <div className="flex-1">
                                                <svg className="w-8 h-8 text-gray-300 mb-4" fill="currentColor"
                                                     viewBox="0 0 24 24">
                                                    <path
                                                        d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                                </svg>
                                                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic">
                                                    "{testimonial.text}"
                                                </p>
                                                <div>
                                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Indicateur de scroll (optionnel) */}
                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <div key={index} className="w-2 h-2 rounded-full bg-gray-300"></div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                  .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                `}</style>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Prêt à révolutionner vos paiements ?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Rejoignez les entreprises et Institutions qui ont choisi PAYNALA pour simplifier et sécuriser leurs transactions digitales.
                    </p>
                    <a href="/contact/devenir-partenaire" className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-medium">
                        Contactez-nous
                    </a>
                </div>
            </section>

            <Footer/>
        </div>
    );
}
