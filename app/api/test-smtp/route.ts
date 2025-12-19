import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Endpoint de diagnostic SMTP
 * GET /api/test-smtp
 *
 * Permet de tester la connexion SMTP et voir les erreurs détaillées
 */
export async function GET() {
    // Vérifier les variables d'environnement
    const config = {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS ? '***DÉFINI***' : '***NON DÉFINI***',
        from: process.env.SMTP_FROM,
    };

    // Vérifier si les variables sont définies
    const missingVars = [];
    if (!process.env.SMTP_HOST) missingVars.push('SMTP_HOST');
    if (!process.env.SMTP_PORT) missingVars.push('SMTP_PORT');
    if (!process.env.SMTP_USER) missingVars.push('SMTP_USER');
    if (!process.env.SMTP_PASS) missingVars.push('SMTP_PASS');

    if (missingVars.length > 0) {
        return NextResponse.json({
            success: false,
            error: 'Variables manquantes',
            missingVars,
            config,
        });
    }

    // Tester la connexion SMTP
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Vérifier la connexion
        await transporter.verify();

        return NextResponse.json({
            success: true,
            message: 'Connexion SMTP réussie !',
            config,
        });

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';

        // Analyser l'erreur pour donner des conseils
        let advice = '';
        if (errorMessage.includes('Invalid login')) {
            advice = 'Le mot de passe est incorrect. Assurez-vous d\'utiliser un "Mot de passe d\'application" Gmail (16 caractères sans espaces), pas votre mot de passe normal.';
        } else if (errorMessage.includes('Missing credentials')) {
            advice = 'Les identifiants SMTP_USER ou SMTP_PASS sont vides ou mal configurés.';
        } else if (errorMessage.includes('ECONNREFUSED')) {
            advice = 'Impossible de se connecter au serveur SMTP. Vérifiez SMTP_HOST et SMTP_PORT.';
        }

        return NextResponse.json({
            success: false,
            error: errorMessage,
            advice,
            config,
        });
    }
}
