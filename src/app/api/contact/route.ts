import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Datos de configuración de SMTP y correo, directamente en el código
const SMTP_CONFIG = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "sergioherrerav20@gmail.com",
    pass: "vfelkfhcrkcypdim",
  },
  tls: {
    rejectUnauthorized: false,
  },
};

// Dirección de correo del destinatario y origen
const CONTACT_EMAIL = "ventas@noasotonetworks.cl, sergioherrerav20@gmail.com";
const SENDER_EMAIL = "sergioherrerav20@gmail.com";
const SENDER_NAME = "Noa Soto Networks SpA";

// Cabeceras CORS para permitir peticiones desde ciertos orígenes
const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: corsHeaders,
  });
}

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return new NextResponse("Method not allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const { email, phone, message } = await request.json();

    if (!email || !message) {
      return new NextResponse(
        JSON.stringify({ error: "Email y mensaje son requeridos" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    const transporter = nodemailer.createTransport(SMTP_CONFIG);

    const mailOptions = {
      from: `"${SENDER_NAME}" <${SENDER_EMAIL}>`,
      to: CONTACT_EMAIL,
      subject: "💬 Nuevo mensaje de contacto - Noa Soto Networks SpA", // Icono actualizado
      text: `Email: ${email}\nTeléfono: ${phone || "No proporcionado"}\nMensaje: ${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <style>
            body { 
                font-family: 'Arial', sans-serif; 
                margin: 0; 
                padding: 0; 
                background-color: #f5f5f5; /* Fondo general más claro */
                color: #333333; /* Texto principal oscuro */
            }
            .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: #ffffff; /* Contenedor principal blanco */
                border-radius: 8px; /* Bordes ligeramente redondeados */
                overflow: hidden; /* Asegura que el contenido respete los bordes */
                box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Sombra sutil */
            }
            .header { 
                background: #ffffff; /* Fondo del encabezado blanco */
                padding: 20px 30px; 
                text-align: left; /* Alineación a la izquierda */
                border-bottom: 1px solid #eeeeee; /* Separador sutil */
            }
            .header h1 { 
                color: #333333; /* Color de texto más oscuro */
                margin: 0; 
                font-size: 24px; 
            }
            .content { 
                padding: 30px; 
                color: #333333; /* Texto del contenido oscuro */
            }
            .section { 
                margin-bottom: 20px; /* Espaciado entre secciones */
            }
            .label { 
                color: #555555; /* Etiqueta en un gris más oscuro */
                font-weight: bold; 
                display: block; 
                margin-bottom: 5px; 
                font-size: 14px;
            }
            .value {
                color: #1a1a1a; /* Valores en un gris muy oscuro */
                font-size: 16px;
            }
            .message { 
                background: #f9f9f9; /* Fondo del mensaje ligeramente gris */
                padding: 15px; 
                border-left: 4px solid #007bff; /* Borde de acento azul */
                margin-top: 10px; 
                color: #333333;
                border-radius: 4px; /* Bordes redondeados para el mensaje */
            }
            .footer { 
                background: #f0f0f0; /* Fondo del pie de página gris claro */
                padding: 15px 30px; 
                text-align: center; 
                font-size: 12px; 
                color: #555555; /* Texto del pie de página gris */
                border-top: 1px solid #eeeeee; /* Separador sutil */
            }
            .footer a {
                color: #007bff; /* Enlaces en azul */
                text-decoration: none; /* Sin subrayado por defecto */
            }
            .footer a:hover {
                text-decoration: underline; /* Subrayado al pasar el ratón */
            }
            .divider { 
                border-top: 1px solid #eeeeee; /* Divisor más sutil */
                margin: 25px 0; 
            }
            @media only screen and (max-width: 600px) {
              .content { padding: 20px; }
              .header { padding: 15px 20px; }
              .footer { padding: 10px 20px; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="color: #333333; margin: 0; font-size: 24px;">Noa Soto Networks SpA</h1>
              </div>
            
            <div class="content">
              <h2 style="color: #333333; margin-top: 0; margin-bottom: 25px; font-size: 20px;">Nuevo mensaje de contacto</h2>
              
              <div class="section">
                <span class="label">📧 Email:</span>
                <span class="value">${email}</span>
              </div>
              
              ${phone
                ? `
              <div class="section">
                <span class="label">📱 Teléfono:</span>
                <span class="value">${phone}</span>
              </div>
              `
                : ""
              }
              
              <div class="section">
                <span class="label">✉️ Mensaje:</span>
                <div class="message" style="white-space: pre-line;">
                  ${message}
                </div>
              </div>
              
              <div class="divider"></div>
              
              <p style="color: #666666; font-size: 13px; line-height: 1.5;">
                Este mensaje fue enviado desde el formulario de contacto de Noa Soto Networks SpA.
                Por favor, no responda directamente a este correo. Para contactar al remitente, use el email o teléfono proporcionado.
              </p>
            </div>
            
            <div class="footer">
              <p style="margin: 0 0 5px;">© ${new Date().getFullYear()} Noa Soto Networks SpA. Todos los derechos reservados.</p>
              <p style="margin: 0;">
                <a href="https://noasotonetworks.com" style="color: #007bff; text-decoration: none;">Visite nuestro sitio web</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ success: true, message: "Mensaje enviado con éxito" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);

    let errorMessage = "Error al procesar la solicitud";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  }
}