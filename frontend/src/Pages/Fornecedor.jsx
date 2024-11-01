import React, { useState } from 'react';

const Fornecedor = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cpfCnpj: '',
    endereco: '',
    telefone: '',
    email: '',
    dataCadastro: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nome) newErrors.nome = 'Nome é obrigatório';
    if (!formData.empresa) newErrors.empresa = 'Nome da empresa é obrigatório';
    if (!formData.cpfCnpj) newErrors.cpfCnpj = 'CPF ou CNPJ é obrigatório';
    if (!formData.endereco) newErrors.endereco = 'Endereço é obrigatório';
    if (!formData.telefone) newErrors.telefone = 'Telefone é obrigatório';
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.dataCadastro) newErrors.dataCadastro = 'Data de cadastro é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch('https://sua-api.com/fornecedores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Fornecedor cadastrado com sucesso!');
        setFormData({
          nome: '',
          empresa: '',
          cpfCnpj: '',
          endereco: '',
          telefone: '',
          email: '',
          dataCadastro: '',
        });
      } else {
        alert('Erro ao cadastrar fornecedor');
      }
    } catch (error) {
      alert('Erro ao conectar com a API');
      console.error(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Cadastro de Fornecedor</h2>
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
            <label className="form-label">Nome da Empresa</label>
            <input
              type="text"
              name="empresa"
              className="form-control"
              value={formData.empresa}
              onChange={handleChange}
            />
            {errors.empresa && <div className="text-danger">{errors.empresa}</div>}
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

          <div className="mb-3">
            <label className="form-label">Data de Cadastro</label>
            <input
              type="date"
              name="dataCadastro"
              className="form-control"
              value={formData.dataCadastro}
              onChange={handleChange}
            />
            {errors.dataCadastro && <div className="text-danger">{errors.dataCadastro}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Cadastrar Fornecedor</button>
        </form>
      </div>
    </div>
  );
};

export default Fornecedor;
