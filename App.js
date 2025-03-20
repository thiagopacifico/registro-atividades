import { useState } from "react";

export default function RegistroAtividades() {
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({
    tipo: "",
    numeroOS: "",
    inicio: "",
    fim: "",
    interferencia: false,
    motivoInterferencia: "",
    responsavelInterferencia: "",
    inicioInterferencia: "",
    fimInterferencia: "",
    observacoes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAtividade((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAtividade = () => {
    setAtividades([...atividades, atividade]);
    setAtividade({
      tipo: "",
      numeroOS: "",
      inicio: "",
      fim: "",
      interferencia: false,
      motivoInterferencia: "",
      responsavelInterferencia: "",
      inicioInterferencia: "",
      fimInterferencia: "",
      observacoes: "",
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Registro de Atividades</h2>
      <label>Tipo de Atividade:</label>
      <input name="tipo" value={atividade.tipo} onChange={handleChange} />

      <label>Número da OS:</label>
      <input name="numeroOS" value={atividade.numeroOS} onChange={handleChange} />

      <label>Horário de Início:</label>
      <input type="time" name="inicio" value={atividade.inicio} onChange={handleChange} />

      <label>Horário de Fim:</label>
      <input type="time" name="fim" value={atividade.fim} onChange={handleChange} />

      <label>Interferência:</label>
      <select name="interferencia" value={atividade.interferencia} onChange={handleChange}>
        <option value={false}>Não</option>
        <option value={true}>Sim</option>
      </select>

      {atividade.interferencia && (
        <>
          <label>Motivo da Interferência:</label>
          <input name="motivoInterferencia" value={atividade.motivoInterferencia} onChange={handleChange} />

          <label>Responsável:</label>
          <input name="responsavelInterferencia" value={atividade.responsavelInterferencia} onChange={handleChange} />
        </>
      )}

      <label>Observações:</label>
      <textarea name="observacoes" value={atividade.observacoes} onChange={handleChange} />

      <button onClick={handleAddAtividade}>Adicionar Atividade</button>

      <h3>Atividades Registradas</h3>
      <ul>
        {atividades.map((item, index) => (
          <li key={index}>{item.tipo} - {item.numeroOS}</li>
        ))}
      </ul>
    </div>
  );
}