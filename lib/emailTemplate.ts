import { emailConfig } from '@/config/email.config';

interface EmailTemplateData {
    title: string;
    subtitle: string;
    fields: { label: string; value: string }[];
    ctaText?: string;
    ctaUrl?: string;
}

export function generateEmailTemplate(data: EmailTemplateData): string {
    const { branding } = emailConfig;

    const fieldsHtml = data.fields
        .map(
            (field) => `
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                    <span style="color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">${field.label}</span>
                    <div style="color: #1f2937; font-size: 15px; margin-top: 4px; font-weight: 500;">${field.value || 'Non renseigné'}</div>
                </td>
            </tr>
        `
        )
        .join('');

    const ctaHtml = data.ctaText && data.ctaUrl
        ? `
            <tr>
                <td style="padding: 30px 0 0 0; text-align: center;">
                    <a href="${data.ctaUrl}" style="display: inline-block; background-color: ${branding.primaryColor}; color: white; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                        ${data.ctaText}
                    </a>
                </td>
            </tr>
        `
        : '';

    return `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">

                    <!-- Header avec Logo -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 32px 40px; text-align: center;">
                            <table role="presentation" style="width: 100%;">
                                <tr>
                                    <td style="text-align: center;">
                                        <img src="${branding.logoUrl}" alt="PAYNALA" style="height: 60px; width: auto;" />
                                    </td>
                                </tr>
                                <tr>
                                    <td style="text-align: center; padding-top: 16px;">
                                        <span style="color: ${branding.secondaryColor}; font-size: 18px; font-weight: 700;">PAY</span><span style="color: ${branding.primaryColor}; font-size: 18px; font-weight: 700;">NALA</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Titre de la notification -->
                    <tr>
                        <td style="padding: 32px 40px 0 40px;">
                            <h1 style="margin: 0; color: #1f2937; font-size: 24px; font-weight: 700; line-height: 1.3;">
                                ${data.title}
                            </h1>
                            <p style="margin: 8px 0 0 0; color: #6b7280; font-size: 15px; line-height: 1.5;">
                                ${data.subtitle}
                            </p>
                        </td>
                    </tr>

                    <!-- Barre de séparation -->
                    <tr>
                        <td style="padding: 24px 40px;">
                            <div style="height: 3px; background: linear-gradient(90deg, ${branding.primaryColor} 0%, ${branding.secondaryColor} 100%); border-radius: 2px;"></div>
                        </td>
                    </tr>

                    <!-- Contenu des champs -->
                    <tr>
                        <td style="padding: 0 40px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                ${fieldsHtml}
                            </table>
                        </td>
                    </tr>

                    <!-- CTA Button (optionnel) -->
                    <tr>
                        <td style="padding: 0 40px;">
                            <table role="presentation" style="width: 100%;">
                                ${ctaHtml}
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding: 40px; background-color: #f9fafb; margin-top: 32px;">
                            <table role="presentation" style="width: 100%;">
                                <tr>
                                    <td style="text-align: center;">
                                        <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px;">
                                            Ce message a été envoyé automatiquement depuis le site
                                        </p>
                                        <a href="${branding.website}" style="color: ${branding.primaryColor}; text-decoration: none; font-weight: 600; font-size: 14px;">
                                            ${branding.website}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="text-align: center; padding-top: 20px;">
                                        <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                                            ${branding.companyName} • ${branding.address}<br>
                                            ${branding.phone}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="text-align: center; padding-top: 16px;">
                                        <p style="margin: 0; color: #d1d5db; font-size: 11px;">
                                            © ${new Date().getFullYear()} ${branding.companyName}. Tous droits réservés.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
}
