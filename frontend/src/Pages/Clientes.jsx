import React, { useState } from 'react';

const Clientes = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpfCnpj: '',
    endereco: '',
    telefone: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nome) newErrors.nome = 'Nome é obrigatório';
    if (!formData.cpfCnpj) newErrors.cpfCnpj = 'CPF ou CNPJ é obrigatório';
    if (!formData.endereco) newErrors.endereco = 'Endereço é obrigatório';
    if (!formData.telefone) newErrors.telefone = 'Telefone é obrigatório';
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch('https://sua-api.com/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Cliente cadastrado com sucesso!');
        setFormData({ nome: '', cpfCnpj: '', endereco: '', telefone: '', email: '' });
      } else {
        alert('Erro ao cadastrar cliente');
      }
    } catch (error) {
      alert('Erro ao conectar com a API');
      console.error(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Cadastro de Clientes</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input
              type="text"
              name="nome"
              className="form-control"
              value={formData.nome}
              onChange={handleChange}
            />
            {errors.nome && <div className="text-danger">{errors.nome}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">CPF/CNPJ</label>
            <input
              type="text"
              name="cpfCnpj"
              className="form-control"
              value={formData.cpfCnpj}
              onChange={handleChange}
            />
            {errors.cpfCnpj && <div className="text-danger">{errors.cpfCnpj}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Endereço</label>
            <input
              type="text"
              name="endereco"
              className="form-control"
              value={formData.endereco}
              onChange={handleChange}
            />
            {errors.endereco && <div className="text-danger">{errors.endereco}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Telefone</label>
            <input
              type="text"
              name="telefone"
              className="form-control"
              value={formData.telefone}
              onChange={handleChange}
            />
            {errors.telefone && <div className="text-danger">{errors.telefone}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Cadastrar Cliente</button>
        </form>
      </div>
    </div>
  );
};

export default Clientes;