import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ nome: '', email: '', telefone: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} role="form">
            <label>
                Nome
                <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
            </label>
            <label>
                Email
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label> 
                Telefone
                <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;