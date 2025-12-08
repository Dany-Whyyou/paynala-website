import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-5 gap-8 mb-8">
                    <div>
                        <div className="w-16 h-16 rounded mb-4"><img src="/paynala_logo.png" alt="paynala logo"/></div>
                        <p className="text-sm text-gray-600">
                            Paynala est la plateforme de paiement qui transforme l'Afrique. Solutions d'agrégation, TPE interopérable et Mobile Money pour entreprises et gouvernements.
                            <br/><br/>
                            Société Anonyme Simplifiée <br/>
                            Capital : 10 000 000 FCFA <br/>
                            Libreville, Gabon
                        </p>



                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">SOLUTIONS</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Agrégation de Paiements</a></li>
                            <li><a href="#" className="hover:text-gray-900">Intégration Mobile Money</a></li>
                            <li><a href="#" className="hover:text-gray-900">Terminaux de Paiement (TPE)</a></li>
                            <li><a href="#" className="hover:text-gray-900">APIs Développeurs</a></li>
                            <li><a href="#" className="hover:text-gray-900">Tableau de bord</a></li>
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
                    © 2025 Paynala. Tous droits réservés. <br/>
                    Mentions légales • Politique de confidentialité • Conditions générales • Politique de cookies
                </div>
            </div>
        </footer>
    );
}