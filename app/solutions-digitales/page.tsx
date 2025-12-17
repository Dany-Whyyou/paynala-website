import {
  Smartphone,
  Globe,
  Building2,
  Settings,
  RefreshCw,
  Lightbulb,
  Users,
  CheckCircle,
  Zap,
  DollarSign,
  GraduationCap,
  Link,
  HeadphonesIcon,
  Code,
  Database,
  Cloud,
  Shield,
  FileText,
  TestTube,
  Lock
} from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Digitales sur Mesure au Gabon | Développement Web & Mobile | PAYNALA',
  description: 'PAYNALA développe vos applications web, mobiles et systèmes de gestion au Gabon. ERP, CRM, digitalisation de processus. Paiement mobile money intégré. Devis gratuit.',
  keywords: 'développement web gabon, développement application mobile gabon, ERP gabon, CRM gabon, digitalisation entreprise gabon, transformation digitale gabon, développeur web libreville, agence digitale gabon, solutions digitales afrique',
};

export default function SolutionsDigitalesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transformez votre organisation avec des solutions digitales sur mesure
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            De la conception à la mise en œuvre, PAYNALA développe les plateformes
            et systèmes qui accélèrent votre transformation digitale en Afrique.
          </p>
          <a
            href="#expertises"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-medium transition-colors"
          >
            Découvrir nos solutions
          </a>
        </div>
      </section>

      {/* Section 1: Nos 4 Expertises */}
      <section id="expertises" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos 4 Expertises
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour répondre à tous vos besoins de transformation digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Carte 1: Développement Web & Mobile */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <Smartphone className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Plateformes Web & Mobile</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Applications sur mesure pour web et mobile, conçues avec les technologies les plus modernes.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Applications web (React, Vue.js, Next.js)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Applications mobiles (iOS, Android, Flutter)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Progressive Web Apps (PWA)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  API et microservices
                </li>
              </ul>
              <a href="/contact/devenir-partenaire" className="text-red-600 font-medium hover:text-red-700 inline-flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Carte 2: Systèmes de Gestion */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <Building2 className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">ERP, CRM & Systèmes Métier</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Solutions de gestion complètes adaptées à votre secteur et à la réalité africaine.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  ERP (gestion d'entreprise)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  CRM (relation client)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Systèmes sectoriels (éducation, santé, admin)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Paiement intégré nativement
                </li>
              </ul>
              <a href="/contact/devenir-partenaire" className="text-red-600 font-medium hover:text-red-700 inline-flex items-center">
                Découvrir
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Carte 3: Digitalisation de Processus */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <RefreshCw className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Automatisation & Workflows</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Transformez vos processus manuels en workflows digitaux automatisés.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Audit de processus
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Digitalisation des workflows
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Automatisation intelligente
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Traçabilité complète
                </li>
              </ul>
              <a href="/contact/devenir-partenaire" className="text-red-600 font-medium hover:text-red-700 inline-flex items-center">
                Commencer l'audit
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Carte 4: Accompagnement & Consulting */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Conseil & Accompagnement</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Stratégie digitale, change management et accompagnement sur mesure.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Stratégie de transformation
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Conduite du changement
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Formation des équipes
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Support continu
                </li>
              </ul>
              <a href="/contact/devenir-partenaire" className="text-red-600 font-medium hover:text-red-700 inline-flex items-center">
                Planifier un RDV
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Pourquoi choisir PAYNALA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir PAYNALA pour vos projets digitaux ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une expertise locale et des avantages uniques pour réussir votre transformation digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Avantage 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expertise Locale</h3>
              <p className="text-gray-600">
                Nous comprenons les réalités africaines : connectivité, offline-first, mobile money intégré.
              </p>
            </div>

            {/* Avantage 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Link className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Intégration Paiement Native</h3>
              <p className="text-gray-600">
                Toutes nos solutions intègrent nativement nos systèmes de paiement (mobile money, TPE).
              </p>
            </div>

            {/* Avantage 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <HeadphonesIcon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Support en Français</h3>
              <p className="text-gray-600">
                Équipe basée à Libreville. Support technique et formation en français.
              </p>
            </div>

            {/* Avantage 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Déploiement Rapide</h3>
              <p className="text-gray-600">
                Méthodologie agile. MVP en 2-4 semaines. Itérations rapides.
              </p>
            </div>

            {/* Avantage 5 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tarifs Adaptés</h3>
              <p className="text-gray-600">
                Packages adaptés à votre budget.
              </p>
            </div>

            {/* Avantage 6 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Formation Incluse</h3>
              <p className="text-gray-600">
                Formation complète de vos équipes incluse dans tous nos projets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technologies & Standards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies & Standards
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous utilisons les technologies les plus performantes et respectons les standards de qualité internationaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Code className="w-6 h-6 text-red-600 mr-3" />
                Nos technologies
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium text-gray-900">Frontend :</span>
                    <span className="text-gray-600"> React, Vue.js, Next.js, Flutter</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium text-gray-900">Backend :</span>
                    <span className="text-gray-600"> Node.js, Python, Django</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium text-gray-900">Mobile :</span>
                    <span className="text-gray-600"> React Native, Flutter</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium text-gray-900">Bases de données :</span>
                    <span className="text-gray-600"> PostgreSQL, MongoDB</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium text-gray-900">Cloud :</span>
                    <span className="text-gray-600"> AWS, Google Cloud, Azure</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <span className="font-medium text-gray-900">Paiement :</span>
                    <span className="text-gray-600"> Intégration Airtel Money, Moov Money</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Standards */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-red-600 mr-3" />
                Nos standards
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Méthodologie Agile (Scrum)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Code Reviews systématiques</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Tests automatisés</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Documentation complète</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Sécurité renforcée (ISO 27001 en cours)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Hébergement sécurisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à transformer votre organisation ?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Contactez-nous pour discuter de votre projet et obtenir un devis gratuit.
          </p>
          <a
            href="/contact/devenir-partenaire"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 font-medium transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
