import Image from "next/image";

export default function ButtonWhatsApp({ texto }: { texto: string }) {
  const whatsappNumber = "+56928589224";
  const whatsappMessage = texto || "Hola, me gustaría más información sobre sus servicios de servicios web/mobile.";

  return (
    <div className="fixed bottom-6 right-6 z-100 flex items-center group">
      <span className="bg-gray-800 text-white rounded-md py-2 px-3 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-semibold">
        ¿Cómo podemos ayudarte?
      </span>
       <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex-shrink-0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
       <Image 
        src="/whatsapp.svg"
        alt="Animación de carga" 
        width="30" 
        height="30"
        className="color-white"
        color="white"
      />
      </a>
    </div>
  );
}