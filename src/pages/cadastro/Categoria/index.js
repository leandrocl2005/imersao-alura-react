import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFields';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: ""
  }


  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria: "
          type='text'
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type='textarea'
          name="descricao"
          value={values.cor}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type='color'
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/*<div>
          <label>
            Nome da Categoria:
              <input
              type="text"
              name='nome'
              value={values.nome}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
          <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
          <input
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div>*/}


        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={`${categoria.nome}${index}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;