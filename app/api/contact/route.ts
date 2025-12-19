import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { emailConfig, EmailType } from '@/config/email.config';
import { generateEmailTemplate } from '@/lib/emailTemplate';

// Types pour les différents formulaires
interface PartenaireData {
    type: 'partenaire';
    nom: string;
    nomComplet: string;
    email: string;
    typePartenariat: string;
    message: string;
}

interface DemoData {
    type: 'demo';
    prenom: string;
    nom: string;
    email: string;
    entreprise: string;
    telephone: string;
    secteur: string;
    message?: string;
}

interface CandidatureData {
    type: 'candidature';
    prenom: string;
    nom: string;
    email: string;
    poste: string;
    message: string;
    cvFileName?: string;
    cvBase64?: string;
}

type FormData = PartenaireData | DemoData | CandidatureData;

// Créer le transporteur email
function createTransporter() {
    return nodemailer.createTransport({
        host: emailConfig.smtp.host,
        port: emailConfig.smtp.port,
        secure: emailConfig.smtp.secure,
        auth: {
            user: emailConfig.smtp.auth.user,
            pass: emailConfig.smtp.auth.pass,
        },
    });
}

// Générer le contenu de l'email selon le type
function generateEmailContent(data: FormData) {
    switch (data.type) {
        case 'partenaire':
            return {
                config: emailConfig.partenaire,
                html: generateEmailTemplate({
                    title: 'Nouvelle demande de partenariat',
                    subtitle: `${data.nomComplet} de ${data.nom} souhaite devenir partenaire PAYNALA.`,
                    fields: [
                        { label: 'Entreprise', value: data.nom },
                        { label: 'Nom du contact', value: data.nomComplet },
                        { label: 'Email', value: data.email },
                        { label: 'Type de partenariat', value: data.typePartenariat },
                        { label: 'Message', value: data.message },
                    ],
                    ctaText: 'Répondre par email',
                    ctaUrl: `mailto:${data.email}?subject=Re: Votre demande de partenariat PAYNALA`,
                }),
            };

        case 'demo':
            return {
                config: emailConfig.demo,
                html: generateEmailTemplate({
                    title: 'Nouvelle demande de démonstration',
                    subtitle: `${data.prenom} ${data.nom} souhaite une démo de nos solutions.`,
                    fields: [
                        { label: 'Prénom', value: data.prenom },
                        { label: 'Nom', value: data.nom },
                        { label: 'Email', value: data.email },
                        { label: 'Entreprise', value: data.entreprise },
                        { label: 'Téléphone', value: data.telephone },
                        { label: 'Secteur d\'activité', value: data.secteur },
                        { label: 'Message', value: data.message || 'Aucun message' },
                    ],
                    ctaText: 'Planifier la démo',
                    ctaUrl: `mailto:${data.email}?subject=Votre démonstration PAYNALA`,
                }),
            };

        case 'candidature':
            return {
                config: emailConfig.candidature,
                html: generateEmailTemplate({
                    title: 'Nouvelle candidature',
                    subtitle: `${data.prenom} ${data.nom} postule pour rejoindre l'équipe PAYNALA.`,
                    fields: [
                        { label: 'Prénom', value: data.prenom },
                        { label: 'Nom', value: data.nom },
                        { label: 'Email', value: data.email },
                        { label: 'Poste souhaité', value: data.poste },
                        { label: 'Message / Motivation', value: data.message },
                        { label: 'CV', value: data.cvFileName ? `📎 ${data.cvFileName} (en pièce jointe)` : 'Non fourni' },
                    ],
                    ctaText: 'Contacter le candidat',
                    ctaUrl: `mailto:${data.email}?subject=Votre candidature PAYNALA - ${data.poste}`,
                }),
            };
    }
}

export async function POST(request: NextRequest) {
    try {
        const data: FormData = await request.json();

        // Vérifier que le type est valide
        if (!['partenaire', 'demo', 'candidature'].includes(data.type)) {
            return NextResponse.json(
                { success: false, error: 'Type de formulaire invalide' },
                { status: 400 }
            );
        }

        // Générer le contenu de l'email
        const { config, html } = generateEmailContent(data);

        // Créer le transporteur
        const transporter = createTransporter();

        // Préparer les options d'email
        const mailOptions: nodemailer.SendMailOptions = {
            from: `"${emailConfig.sender.name}" <${emailConfig.sender.email}>`,
            to: config.recipients.join(', '),
            subject: config.subject,
            html: html,
        };

        // Ajouter le CV en pièce jointe si présent (pour les candidatures)
        if (data.type === 'candidature' && data.cvBase64 && data.cvFileName) {
            mailOptions.attachments = [
                {
                    filename: data.cvFileName,
                    content: data.cvBase64,
                    encoding: 'base64',
                },
            ];
        }

        // Envoyer l'email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: 'Email envoyé avec succès',
        });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);

        return NextResponse.json(
            {
                success: false,
                error: 'Erreur lors de l\'envoi de l\'email',
                details: error instanceof Error ? error.message : 'Erreur inconnue',
            },
            { status: 500 }
        );
    }
}
