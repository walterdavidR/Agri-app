import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getSiembraById,
  createSiembra,
  updateSiembra,
  getAllLotes,
  getAllCultivos,
} from "../../api/endpoints";
import { Input } from "../../components/common/Input";
import { Select } from "../../components/common/Select";
import { Button } from "../../components/common/Button";

export default function SiembraForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [siembra, setSiembra] = useState({
    lote_id: "",
    cultivo_id: "",
    fecha_siembra: "",
  });

  const [lotes, setLotes] = useState([]);
  const [cultivos, setCultivos] = useState([]);

  useEffect(() => {
    fetchData();
    if (id) loadSiembra();
  }, [id]);

  const fetchData = async () => {
    const [lotesData, cultivosData] = await Promise.all([
      getAllLotes(),
      getAllCultivos(),
    ]);
    setLotes(lotesData);
    setCultivos(cultivosData);
  };

  const loadSiembra = async () => {
    const data = await getSiembraById(id);
    setSiembra(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSiembra({ ...siembra, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateSiembra(id, siembra);
    } else {
      await createSiembra(siembra);
    }
    navigate("/siembras");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Editar Siembra" : "Registrar Nueva Siembra"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Select
          label="Lote"
          name="lote_id"
          value={siembra.lote_id}
          onChange={handleChange}
          options={lotes.map((l) => ({ value: l.id, label: l.nombre }))}
          required
        />
        <Select
          label="Cultivo"
          name="cultivo_id"
          value={siembra.cultivo_id}
          onChange={handleChange}
          options={cultivos.map((c) => ({ value: c.id, label: c.nombre }))}
          required
        />
        <Input
          label="Fecha de Siembra"
          type="date"
          name="fecha_siembra"
          value={siembra.fecha_siembra}
          onChange={handleChange}
          required
        />
        <Button type="submit">
          {id ? "Actualizar" : "Registrar"}
        </Button>
      </form>
    </div>
  );
}
