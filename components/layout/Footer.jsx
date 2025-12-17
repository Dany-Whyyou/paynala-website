import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-6 gap-8 mb-8">
                    <div>
                        <div className="w-40 h-40 rounded mb-4"><img src="/paynala_logo.png" alt="paynala logo"/></div>
                        <p className="text-[12px] text-gray-600 " style={{fontSize: "12px"}}>
                            PAYNALA est votre partenaire de transformation digitale en Afrique. Solutions de paiement et solutions digitales sur mesure pour entreprises et administrations.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">PAIEMENT</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="/solutions/agregation-de-paiements" className="hover:text-gray-900">Agrégation de Paiements</a></li>
                            <li><a href="/solutions/integration-mobile-money" className="hover:text-gray-900">Intégration Mobile Money</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">DIGITAL</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="/solutions-digitales" className="hover:text-gray-900">Développement Web & Mobile</a></li>
                            <li><a href="/solutions-digitales" className="hover:text-gray-900">Systèmes de Gestion</a></li>
                            <li><a href="/solutions-digitales" className="hover:text-gray-900">Digitalisation de Processus</a></li>
                            <li><a href="/solutions-digitales" className="hover:text-gray-900">Accompagnement</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">SECTEURS</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Retail & Commerce</a></li>
                            <li><a href="#" className="hover:text-gray-900">Éducation</a></li>
                            <li><a href="#" className="hover:text-gray-900">Services Gouvernementaux</a></li>
                            <li><a href="#" className="hover:text-gray-900">Transport & Logistique</a></li>
                            <li><a href="#" className="hover:text-gray-900">Banques & Finance</a></li>
                            <li><a href="#" className="hover:text-gray-900">Assurances & Santé</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">RESSOURCES</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Centre d'aide</a></li>
                            <li><a href="#" className="hover:text-gray-900">Documentation API</a></li>
                            <li><a href="#" className="hover:text-gray-900">Études de cas</a></li>
                            <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
                            <li><a href="#" className="hover:text-gray-900">Guides</a></li>
                            <li><a href="#" className="hover:text-gray-900">Conditions générales</a></li>

                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">CONTACT</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">📧 contact@paynala.com </a></li>
                            <li><a href="#" className="hover:text-gray-900">📞 +241 74451387 </a></li>
                            <li><a href="#" className="hover:text-gray-900">📍 Libreville, Gabon</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
                    © 2025 PAYNALA. Tous droits réservés. <br/>
                    Mentions légales • Politique de confidentialité • Conditions générales • Politique de cookies
                </div>
            </div>
        </footer>
    );
}