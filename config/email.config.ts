/**
 * Configuration des emails PAYNALA
 *
 * Ce fichier centralise tous les paramètres d'envoi d'emails.
 * Modifiez les destinataires ci-dessous pour gérer qui reçoit les formulaires.
 */

export const emailConfig = {
    // ============================================
    // DESTINATAIRES PAR TYPE DE FORMULAIRE
    // Ajoutez ou supprimez des emails selon vos besoins
    // ============================================

    // Formulaire "Devenir Partenaire"
    partenaire: {
        recipients: [
            'contact@paynala.com',
            'daniel.doviakon@gmail.com'
            // Ajoutez d'autres emails ici si nécessaire
            // 'partenariats@paynala.com',
        ],
        subject: 'Nouvelle demande de partenariat - PAYNALA',
    },

    // Formulaire "Demander une Démo"
    demo: {
        recipients: [
            'contact@paynala.com',
            'daniel.doviakon@gmail.com'
            // 'commercial@paynala.com',
        ],
        subject: 'Nouvelle demande de démo - PAYNALA',
    },

    // Formulaire "Nous Rejoindre" (Candidatures)
    candidature: {
        recipients: [
            'contact@paynala.com',
            'daniel.doviakon@gmail.com'
            // 'rh@paynala.com',
        ],
        subject: 'Nouvelle candidature - PAYNALA',
    },

    // ============================================
    // CONFIGURATION SMTP
    // ============================================
    smtp: {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true pour 465, false pour autres ports
        auth: {
            user: process.env.SMTP_USER || 'paynalag@gmail.com',
            pass: process.env.SMTP_PASS || 'vmbljlhqmxsfewlcy',
        },
    },

    // ============================================
    // EXPEDITEUR
    // ============================================
    sender: {
        name: 'PAYNALA',
        email: process.env.SMTP_FROM || 'noreply@paynala.com',
    },

    // ============================================
    // BRANDING
    // ============================================
    branding: {
        logoUrl: 'https://paynala.com/paynala_logo.png', // URL absolue du logo
        primaryColor: '#D72229', // Rouge PAYNALA
        secondaryColor: '#F8C22A', // Jaune PAYNALA
        companyName: 'PAYNALA',
        website: 'https://paynala.com',
        address: 'Libreville, Gabon',
        phone: '+241 77 45 13 87',
    },
};

export type EmailType = 'partenaire' | 'demo' | 'candidature';
