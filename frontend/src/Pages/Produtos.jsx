import React, { useState } from 'react';

const Produtos = () => {
  const [formData, setFormData] = useState({
    nomeProduto: '',
    descricao: '',
    quantidadeEstoque: '',
    fornecedor: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nomeProduto) newErrors.nomeProduto = 'Nome do produto é obrigatório';
    if (!formData.descricao) newErrors.descricao = 'Descrição é obrigatória';
    if (!formData.quantidadeEstoque || isNaN(formData.quantidadeEstoque) || formData.quantidadeEstoque < 0) {
      newErrors.quantidadeEstoque = 'Quantidade em estoque deve ser um número positivo';
    }
    if (!formData.fornecedor) newErrors.fornecedor = 'Fornecedor é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch('https://sua-api.com/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Produto cadastrado com sucesso!');
        setFormData({
          nomeProduto: '',
          descricao: '',
          quantidadeEstoque: '',
          fornecedor: '',
        });
      } else {
        alert('Erro ao cadastrar produto');
      }
    } catch (error) {
      alert('Erro ao conectar com a API');
      console.error(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Cadastro de Produtos</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome do Produto</label>
            <input
              type="text"
              name="nomeProduto"
              className="form-control"
              value={formData.nomeProduto}
              onChange={handleChange}
            />
            {errors.nomeProduto && <div className="text-danger">{errors.nomeProduto}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Descrição</label>
            <textarea
              name="descricao"
              className="form-control"
              value={formData.descricao}
              onChange={handleChange}
              rows="3"
            />
            {errors.descricao && <div className="text-danger">{errors.descricao}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Quantidade em Estoque</label>
            <input
              type="number"
              name="quantidadeEstoque"
              className="form-control"
              value={formData.quantidadeEstoque}
              onChange={handleChange}
              min="0"
            />
            {errors.quantidadeEstoque && <div className="text-danger">{errors.quantidadeEstoque}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Fornecedor</label>
            <input
              type="text"
              name="fornecedor"
              className="form-control"
              value={formData.fornecedor}
              onChange={handleChange}
            />
            {errors.fornecedor && <div className="text-danger">{errors.fornecedor}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Cadastrar Produto</button>
        </form>
      </div>
    </div>
  );
};

export default Produtos;
