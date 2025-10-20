// src/components/ContactForm.jsx
import { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState(''); // 'idle', 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset(); // Limpia el formulario
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* HONEYPOT: Oculto con Tailwind. El bot lo llenará, el humano no. */}
        <div className="hidden">
          <label htmlFor="url"></label>
          <input type="text" name="url" id="url" />
        </div>

        {/* Campo Nombre */}
        <div>
          <label htmlFor="nombre" className="">Nombre:</label>
          <input type="text" name="nombre" id="nombre" required className="" />
        </div>
        {/* ... (otros campos de email y mensaje similares) ... */}
        <div>
            <label htmlFor="compañia">Compañia:</label>
            <input type="text" id="compañia"/>
        </div>
        
        <button
          type="submit"
          disabled={status === 'sending'}
          className=""
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {status === 'success' && (<p className="text-green-600 font-semibold">¡Mensaje enviado!</p>)}
        {status === 'error' && (<p className="text-red-600 font-semibold">Hubo un error al enviar el mensaje.</p>)}
      </form>
    </div>
  );
};

export default ContactForm;