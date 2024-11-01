import React, { useState } from 'react';

const Vendas = () => {
  const [formData, setFormData] = useState({
    vendaId: '',
    descricao: '',
    quantidade: '',
    precoUnitario: '',
    meioPagamento: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.vendaId) newErrors.vendaId = 'Venda ID é obrigatório';
    if (!formData.descricao) newErrors.descricao = 'Descrição é obrigatória';
    if (!formData.quantidade || isNaN(formData.quantidade) || formData.quantidade <= 0) {
      newErrors.quantidade = 'Quantidade deve ser um número positivo';
    }
    if (!formData.precoUnitario || isNaN(formData.precoUnitario) || formData.precoUnitario <= 0) {
      newErrors.precoUnitario = 'Preço Unitário deve ser um número positivo';
    }
    if (!formData.meioPagamento) newErrors.meioPagamento = 'Meio de Pagamento é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch('https://sua-api.com/vendas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Venda cadastrada com sucesso!');
        setFormData({
          vendaId: '',
          descricao: '',
          quantidade: '',
          precoUnitario: '',
          meioPagamento: '',
        });
      } else {
        alert('Erro ao cadastrar venda');
      }
    } catch (error) {
      alert('Erro ao conectar com a API');
      console.error(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Cadastro de Vendas</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Venda ID</label>
            <input
              type="text"
              name="vendaId"
              className="form-control"
              value={formData.vendaId}
              onChange={handleChange}
            />
            {errors.vendaId && <div className="text-danger">{errors.vendaId}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Descrição</label>
            <input
              type="text"
              name="descricao"
              className="form-control"
              value={formData.descricao}
              onChange={handleChange}
            />
            {errors.descricao && <div className="text-danger">{errors.descricao}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Quantidade</label>
            <input
              type="number"
              name="quantidade"
              className="form-control"
              value={formData.quantidade}
              onChange={handleChange}
              min="1"
            />
            {errors.quantidade && <div className="text-danger">{errors.quantidade}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Preço Unitário (R$)</label>
            <input
              type="number"
              name="precoUnitario"
              className="form-control"
              value={formData.precoUnitario}
              onChange={handleChange}
              min="0"
              step="0.01"
            />
            {errors.precoUnitario && <div className="text-danger">{errors.precoUnitario}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Meio de Pagamento</label>
            <select
              name="meioPagamento"
              className="form-select"
              value={formData.meioPagamento}
              onChange={handleChange}
            >
              <option value="">Selecione</option>
              <option value="cartao">Cartão</option>
              <option value="dinheiro">Dinheiro</option>
              <option value="pix">Pix</option>
              <option value="boleto">Boleto</option>
            </select>
            {errors.meioPagamento && <div className="text-danger">{errors.meioPagamento}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Cadastrar Venda</button>
        </form>
      </div>
    </div>
  );
};

export default Vendas;
