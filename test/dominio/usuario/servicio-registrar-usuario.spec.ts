import { ServicioRegistrarUsuario } from "src/dominio/usuario/servicio/servicio-registrar-usuario";
import { Usuario } from "src/dominio/usuario/modelo/usuario";

describe('ServicioRegistrarUsuario', () => {
  it('si el nombre de usuario ya existe no se puede crear y deberia retonar error',async () => {

    let servicioRegistrarUsuario = new ServicioRegistrarUsuario({
      existeNombreUsuario: jest.fn(async (nombre) => true),
      guardar: jest.fn(async (nombre) => {})
    });

    await expect(servicioRegistrarUsuario.ejecutar(new Usuario("juan", "1234", new Date()))).rejects.toThrow("El nombre de usuario juan ya existe");

  });


  it('si el nombre no existe guarda el usuario el repositorio',async () => {

    var mockExisteNombreUsuario = jest.fn(async (nombre) => false);
    var mockGuardar = jest.fn(async (nombre) => {});
    let servicioRegistrarUsuario = new ServicioRegistrarUsuario({
      existeNombreUsuario: mockExisteNombreUsuario,
      guardar: mockGuardar
    });

    await servicioRegistrarUsuario.ejecutar(new Usuario("juan", "1234", new Date()))

    expect(mockGuardar.mock.calls.length).toBe(1);

  });

});
