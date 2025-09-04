// src/modules/usuarios/UsuarioForm.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUsuarioById, createUsuario, updateUsuario } from "../../api/endpoints";
import { Input } from "../../components/common/Input";
import { Select } from "../../components/common/Select";
import { Button } from "../../components/common/Button";

const roles = [
  { value: "admin", label: "Administrador" },
  { value: "operario", label: "Operario" },
  { value: "encargado", label: "Encargado de Producción" },
];

export default function UsuarioForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre: "",
    username: "",
    email: "",
    password: "",
    rol: "",
  });

  useEffect(() => {
    if (id) {
      getUsuarioById(id).then(data => setUsuario(data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateUsuario(id, usuario);
    } else {
      await createUsuario(usuario);
    }
    navigate("/usuarios");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{id ? "Editar Usuario" : "Nuevo Usuario"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nombre"
          name="nombre"
          value={usuario.nombre}
          onChange={handleChange}
          required
        />
        <Input
          label="Nombre de usuario"
          name="username"
          value={usuario.username}
          onChange={handleChange}
          required
        />
        <Input
          label="Correo electrónico"
          name="email"
          type="email"
          value={usuario.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Contraseña"
          name="password"
          type="password"
          value={usuario.password}
          onChange={handleChange}
          required={!id}
        />
        <Select
          label="Rol"
          name="rol"
          value={usuario.rol}
          onChange={handleChange}
          options={roles}
          required
        />
        <Button type="submit">
          {id ? "Actualizar Usuario" : "Crear Usuario"}
        </Button>
      </form>
    </div>
  );
}
