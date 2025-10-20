// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Usa las variables de entorno configuradas en el .env / Vercel
const resend = new Resend(import.meta.env.RESEND_API_KEY);
const DESTINATION_EMAIL = import.meta.env.DESTINATION_EMAIL;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { nombre, email, mensaje, url } = data; // 'url' es el campo honeypot

    // 1. PROTECCIÓN HONEYPOT: Si el campo oculto está lleno, es un bot.
    if (url) {
      // Respondemos con éxito para no alertar al bot
      return new Response(JSON.stringify({ message: "Success (Honeypot)" }), {
        status: 200, 
        headers: { "Content-Type": "application/json" }
      });
    }

    // 2. VALIDACIÓN BÁSICA
    if (!nombre || !email || !mensaje) {
      return new Response(JSON.stringify({ message: 'Faltan campos requeridos.' }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // 3. ENVÍO DEL CORREO USANDO RESEND
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Remitente verificado de Resend
      to: DESTINATION_EMAIL,         // ⬅️ Tu email real (el que recibe)
      subject: `[Portafolio] Nuevo mensaje de: ${nombre}`,
      html: `
        <h2>Mensaje de Contacto</h2>
        <p><strong>De:</strong> ${nombre}</p>
        <p><strong>Email del cliente:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <div style="border-left: 3px solid #663399; padding-left: 10px;">
            <p>${mensaje}</p>
        </div>
      `,
      headers: {
        'Reply-To': email, // Configura tu respuesta para ir directamente al cliente
      },
    });

    return new Response(JSON.stringify({ message: 'Mensaje enviado con éxito.' }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error('Error en la API de contacto:', error);
    return new Response(JSON.stringify({ message: 'Error interno del servidor.' }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};