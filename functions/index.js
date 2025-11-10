const functions = require('firebase-functions');
const cors = require('cors');
const { Resend } = require('resend');

const corsHandler = cors({ origin: true });
const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendContactEmail = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method === 'OPTIONS') {
      return res.status(200).send('');
    }

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      const { name, email, phone, service, message } = req.body;

      if (!name || !email || !service || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      if (message.trim().length < 100) {
        return res.status(400).json({ error: 'Message must be at least 100 characters' });
      }

      const emailContent = `
        <h2>Neue Kontaktanfrage von ${name}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;

      const emailResponse = await resend.emails.send({
        from: 'noreply@abaris-reinigungsservice.de',
        to: 'ecozer@gmx.de',
        subject: `Neue Kontaktanfrage: ${service}`,
        html: emailContent,
      });

      if (emailResponse.error) {
        console.error('Resend API error:', emailResponse.error);
        return res.status(500).json({
          error: 'Failed to send email',
          details: emailResponse.error.message
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Email sent successfully',
        emailId: emailResponse.data.id
      });

    } catch (error) {
      console.error('Cloud Function error:', error);
      return res.status(500).json({
        error: 'Internal server error',
        details: error.message
      });
    }
  });
});
