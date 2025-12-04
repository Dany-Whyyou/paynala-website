'use client';
import React from 'react';
export default function Header() {
    const [openDropdown, setOpenDropdown] = React.useState(null);

    const menuItems = [
        { name: 'Accueil', href: '/', items: [] },
        {
            name: 'Solutions',
            items: [
                { name: 'Agrégation de Paiements', href: '/solutions/agregation-de-paiements' },
                { name: 'Terminaux de Paiement (TPE)', href: '/solutions/terminaux-de-paiement' },
                { name: 'Intégration Mobile Money', href: '/solutions/integration-mobile-money' }
            ]
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
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-8">
                        <a href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-900 rounded"></div>
                            <span className="text-xl font-bold text-gray-900">Paynala</span>
                        </a>
                        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-1">
                            {menuItems.map((menu) => (
                                <div
                                    key={menu.name}
                                    className="relative"
                                    onMouseEnter={() => menu.items.length > 0 && setOpenDropdown(menu.name)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    {menu.items.length > 0 ? (
                                        <>
                                            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-50 flex items-center space-x-1 text-sm uppercase font-medium">
                                                <span>{menu.name}</span>
                                            </button>

                                            {openDropdown === menu.name && (
                                                <div className="absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                                    {menu.items.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                                        >
                                                            {item.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <a
                                            href={menu.href}
                                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-50 text-sm uppercase font-medium inline-block"
                                        >
                                            {menu.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center">
                        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 text-sm font-medium">
                            Demander une démo
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}