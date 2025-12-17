'use client';
import React, { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const menuItems = [
        { name: 'Accueil', href: '/', items: [] },
        {
            name: 'Solutions',
            isMegaMenu: true,
            categories: [
                {
                    title: 'Solutions de Paiement',
                    items: [
                        { name: 'Agrégation de Paiements', href: '/solutions/agregation-de-paiements' },
                        { name: 'Intégration Mobile Money', href: '/solutions/integration-mobile-money' }
                    ]
                },
                {
                    title: 'Solutions Digitales',
                    items: [
                        { name: 'Développement Web & Mobile', href: '/solutions-digitales#expertises' },
                        { name: 'Systèmes de Gestion (ERP/CRM)', href: '/solutions-digitales#expertises' },
                        { name: 'Digitalisation de Processus', href: '/solutions-digitales#expertises' },
                        { name: 'Accompagnement & Consulting', href: '/solutions-digitales#expertises' }
                    ]
                }
            ],
            items: []
        },
        {
            name: 'Secteurs',
            items: [
                { name: 'Retail & Commerce', href: '/secteurs/retail-commerce' },
                { name: 'Éducation', href: '/secteurs/education' },
                { name: 'Services Gouvernementaux', href: '/secteurs/services-gouvernementaux' },
                { name: 'Transport & Logistique', href: '/secteurs/transport-logistique' },
                { name: 'Banques & Finance', href: '/secteurs/banques-finance' },
                { name: 'Assurances & Santé', href: '/secteurs/assurances-sante' }
            ]
        },
        {
            name: 'Entreprise',
            items: [
                { name: 'À propos', href: '/entreprise/a-propos' },
                { name: 'Notre équipe', href: '/entreprise/notre-equipe' },
                { name: 'Nos valeurs', href: '/entreprise/nos-valeurs' },
                { name: 'Carrières', href: '/entreprise/carrieres' }
            ]
        },
        {
            name: 'Ressources',
            items: [
                { name: "Centre d'aide", href: '/ressources/centre-aide' },
                { name: 'Documentation API', href: '/ressources/documentation-api' },
                { name: 'Blog', href: '/ressources/blog' },
                { name: 'Études de cas', href: '/ressources/etudes-de-cas' }
            ]
        },
        {
            name: 'Contact',
            items: [
                { name: 'Demander une démo', href: '/contact/demander-une-demo' },
                { name: 'Devenir partenaire', href: '/contact/devenir-partenaire' },
                { name: 'Nous rejoindre', href: '/contact/nous-rejoindre' }
            ]
        }
    ];

    const toggleSubmenu = (menuName) => {
        setOpenSubmenu(openSubmenu === menuName ? null : menuName);
    };

    return (
        <>
            <style jsx global>{`
              .menu-group {
                position: static;
              }

              .dropdown-menu {
                position: fixed;
                top: 3rem;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
                z-index: 9999;
              }

              /* Pont invisible entre le bouton et le menu */
              .menu-group::before {
                content: '';
                position: fixed;
                top: 3rem;
                height: 2rem;
                width: 100%;
                left: 0;
                right: 0;
                pointer-events: none;
                z-index: 9998;
              }

              .menu-group:hover::before {
                pointer-events: auto;
              }

              .menu-group:hover .dropdown-menu,
              .dropdown-menu:hover {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
                pointer-events: auto;
              }

              .menu-group:nth-child(1) .dropdown-menu { left: calc(50% - 450px); }
              .menu-group:nth-child(2) .dropdown-menu.mega-menu { left: calc(50% - 350px); }
              .menu-group:nth-child(2) .dropdown-menu:not(.mega-menu) { left: calc(50% - 240px); }
              .menu-group:nth-child(3) .dropdown-menu { left: calc(50% - 130px); }
              .menu-group:nth-child(4) .dropdown-menu { left: calc(50% - 23px); }
              .menu-group:nth-child(5) .dropdown-menu { left: calc(50% + 95px); }
              .menu-group:nth-child(6) .dropdown-menu { left: calc(50% + 222px); }

              .mega-menu {
                width: auto !important;
                min-width: 450px;
              }

              /* Mobile menu animation */
              .mobile-menu {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease-out;
              }

              .mobile-menu.open {
                max-height: 100vh;
              }

              .mobile-submenu {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.2s ease-out;
              }

              .mobile-submenu.open {
                max-height: 500px;
              }
            `}</style>

            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded">
                                    <img src="/paynala_logo_sans.png" alt="paynala logo" className="w-full h-full object-contain" />
                                </div>
                                <span className="text-xl font-bold text-gray-900"><span style={{color: "rgb(248, 194, 42)"}}>Pay</span><span style={{color: "rgb(215, 34, 41)"}}>nala</span></span>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-1">
                            {menuItems.map((menu) => (
                                <div key={menu.name} className="menu-group">
                                    {menu.isMegaMenu ? (
                                        <>
                                            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-50 flex items-center space-x-1 text-[14px] capitalize font-medium">
                                                <span className="text-[14px]">{menu.name}</span>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>

                                            <div className="dropdown-menu mega-menu bg-white rounded-lg shadow-xl border border-gray-200 py-4 px-2">
                                                <div className="flex gap-6">
                                                    {menu.categories.map((category) => (
                                                        <div key={category.title} className="min-w-[200px]">
                                                            <h4 className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">{category.title}</h4>
                                                            {category.items.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded-md"
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : menu.items.length > 0 ? (
                                        <>
                                            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-50 flex items-center space-x-1 text-[14px] capitalize font-medium">
                                                <span className="text-[14px]">{menu.name}</span>
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>

                                            <div className="dropdown-menu w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                                                {menu.items.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <a
                                            href={menu.href}
                                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-50 text-[14px] capitalize font-medium flex items-center space-x-1"
                                        >
                                            <span className="text-[14px]">{menu.name}</span>
                                        </a>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Desktop CTA Button */}
                        <div className="hidden lg:flex items-center ml-12">
                            <a
                                href="/contact/devenir-partenaire"
                                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 text-sm font-medium transition-colors"
                            >
                                Contactez-nous
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-600 hover:text-gray-900 p-2 rounded-md hover:bg-gray-50 transition-colors"
                                aria-label="Menu"
                            >
                                {mobileMenuOpen ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`mobile-menu lg:hidden bg-white border-t border-gray-200 ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className="px-4 py-3 space-y-1">
                        {menuItems.map((menu) => (
                            <div key={menu.name}>
                                {menu.isMegaMenu ? (
                                    <>
                                        <button
                                            onClick={() => toggleSubmenu(menu.name)}
                                            className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                                        >
                                            <span className="text-[15px] font-medium">{menu.name}</span>
                                            <svg
                                                className={`w-4 h-4 transition-transform ${openSubmenu === menu.name ? 'rotate-180' : ''}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>

                                        <div className={`mobile-submenu ${openSubmenu === menu.name ? 'open' : ''}`}>
                                            <div className="pl-4 space-y-1 py-2">
                                                {menu.categories.map((category) => (
                                                    <div key={category.title} className="mb-3">
                                                        <h4 className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">{category.title}</h4>
                                                        {category.items.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="block px-3 py-2 text-[14px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                                                                onClick={() => setMobileMenuOpen(false)}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : menu.items.length > 0 ? (
                                    <>
                                        <button
                                            onClick={() => toggleSubmenu(menu.name)}
                                            className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                                        >
                                            <span className="text-[15px] font-medium">{menu.name}</span>
                                            <svg
                                                className={`w-4 h-4 transition-transform ${openSubmenu === menu.name ? 'rotate-180' : ''}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>

                                        <div className={`mobile-submenu ${openSubmenu === menu.name ? 'open' : ''}`}>
                                            <div className="pl-4 space-y-1 py-2">
                                                {menu.items.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block px-3 py-2 text-[14px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <a
                                        href={menu.href}
                                        className="block px-3 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {menu.name}
                                    </a>
                                )}
                            </div>
                        ))}

                        {/* Mobile CTA Button */}
                        <div className="pt-4 pb-2">
                            <a
                                href="/contact/devenir-partenaire"
                                className="block w-full text-center bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 text-sm font-medium transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contactez-nous
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
