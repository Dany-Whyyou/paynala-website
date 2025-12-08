import Image from "next/image";
import {
  CreditCard,
  Settings,
  Shield,
  ShoppingCart,
  Plane,
  Building2,
  Landmark,
  Coins,
  CheckCircle,
  Rocket, Activity, FileSearch, ShoppingBag, School
} from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React from "react";

export default function AgregationDePaiementsPage() {
  return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Agrégation de Paiements Multi-Opérateurs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Intégrez tous les moyens de paiement africains via une seule API. Déploiement rapide, sans développement complexe.
              <br />via une seule intégration.
            </p>
            <div className="flex justify-center space-x-4">
              {/*<button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700">
                Contacter nous
              </button>*/}
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300">
                Contacter nous
              </button>
            </div>
          </div>
        </section>


        {/* How It Works */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comment ça marche ?
              </h2>
              <p className="text-gray-600">
                Intégration en 4 étapes simples
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Signature du contrat
                </h3>
                <p className="text-gray-600">
                  Contractualisation et configuration de votre compte marchand en 24h.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Intégration API
                </h3>
                <p className="text-gray-600">
                  Notre équipe technique vous accompagne pour intégrer notre API simple et documentée.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tests en sandbox
                </h3>
                <p className="text-gray-600">
                  Testez toutes les fonctionnalités dans notre environnement de test sécurisé.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Mise en production
                </h3>
                <p className="text-gray-600">
                  Activation en production et formation de vos équipes. Support continu assuré.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16  px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fonctionnalités
              </h2>
              <p className="text-gray-600">
                Toutes les fonctionnalités dont vous avez besoin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Multi-opérateurs
                </h3>
                <p className="text-gray-600">
                  Airtel Money, Moov Money, et autres opérateurs via une seule intégration.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  API REST simple
                </h3>
                <p className="text-gray-600">
                  Documentation complète, SDKs disponibles, webhooks pour notifications temps réel.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Dashboard marchand
                </h3>
                <p className="text-gray-600">
                  Visualisez vos transactions, téléchargez vos rapports, gérez vos remboursements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Liens de paiement
                </h3>
                <p className="text-gray-600">
                  Générez des liens de paiement personnalisés envoyables par email ou SMS.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Réconciliation automatique
                </h3>
                <p className="text-gray-600">
                  Rapprochement bancaire automatisé, export comptable, traçabilité complète.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Support technique
                </h3>
                <p className="text-gray-600">
                  Équipe technique disponible pour vous accompagner à chaque étape.
                </p>
              </div>


            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-16 bg-gray-50 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Avantages
              </h2>
              <p className="text-gray-600">
                Pourquoi choisir notre solution d'agrégation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Rapidité</h3>
                    <p className="text-gray-600">
                      Déploiement 10x plus rapide qu'une intégration directe (48h-2 semaines vs plusieurs mois)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Simplicité</h3>
                    <p className="text-gray-600">
                      Un seul contrat, une seule facture, un seul interlocuteur pour tous les opérateurs
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Coins className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Rentable</h3>
                    <p className="text-gray-600">
                      Coûts réduits : pas de frais d'intégration, commission compétitive négociée
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Dynamique</h3>
                    <p className="text-gray-600">
                      Évolutivité : ajout de nouveaux opérateurs sans modification de votre code
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="text-center mb-12 mt-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Parfait pour ces secteurs
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <School className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Universités et écoles</h3>
                    <p className="text-gray-600">
                      Les universités et écoles peuvent collecter les frais de scolarité via Mobile Money. Les parents paient à distance, réduction de 80% des files d'attente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Commerces</h3>
                    <p className="text-gray-600">
                      Boutiques en ligne acceptant tous les moyens de paiement locaux. Augmentation du taux de conversion de 40%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileSearch className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Prélèvements</h3>
                    <p className="text-gray-600">
                      Collecte de taxes, frais administratifs, amendes. Transparence totale et traçabilité complète.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Tarification transparente
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Tarifs négociés selon volume </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"/>
                    </svg>
                    <span
                        className="text-gray-700">Pas de frais d'installation </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Pas d'abonnement mensuel </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Support technique inclus</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Fonctionnalités premium </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">Account manager dédié </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0"
                         fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">SLA garanti </span>
                  </li>
                </ul>

              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <img src="/20943677.jpg" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/*<section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-900 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Prêt à transformer vos paiements ?
              </h2>
              <p className="text-blue-100 mb-8">
                Contactez nos experts pour une démo personnalisée et découvrez<br/>
                comment Raynala peut accélérer la croissance de votre entreprise.
              </p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700">
                Demander une démo
              </button>
            </div>
          </div>
        </section>*/}

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Prêt à révolutionner vos paiements ?
            </h2>
            <p className="text-gray-600 mb-8">
              Rejoignez les entreprises et Institutions qui ont choisi Paynala pour simplifier et sécuriser leurs transactions digitales.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-medium">
              Contacter nous
            </button>
          </div>
        </section>

        {/* Footer */}
         <Footer />
      </div>
  );
}
