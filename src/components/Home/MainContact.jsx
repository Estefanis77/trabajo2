import { useState } from 'react';

const MainContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="main-contact-container">
      <h2 className="title">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea"
          ></textarea>
        </div>
        <div className="button-container">
  <button type="submit" className="button">Enviar</button>
</div>
      </form>
    </div>
  );
};

export default MainContact;