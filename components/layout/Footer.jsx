export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-5 gap-8 mb-8">
                    <div>
                        <div className="w-8 h-8 bg-green-700 rounded mb-4"></div>
                        <p className="text-sm text-gray-600">
                            Transformer le paiement unifié pour l'Afrique
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">SOLUTIONS</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Agrégation de Paiements</a></li>
                            <li><a href="#" className="hover:text-gray-900">Mobile Money</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">ENTREPRISE</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">À propos</a></li>
                            <li><a href="#" className="hover:text-gray-900">Carrières</a></li>
                            <li><a href="#" className="hover:text-gray-900">Nos valeurs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">RESSOURCES</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Documentation API</a></li>
                            <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-900">Centre d'aide</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">CONTACT</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Nous rejoindre</a></li>
                            <li><a href="#" className="hover:text-gray-900">Devenir partenaire</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
                    © 2024 Paynala. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}