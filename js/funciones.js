class Empleado {
    constructor(Nombre, Apellido, Genero, FechaNac, FechaIngr, Salario, Nivel, Instituto, Titulo) {
      this.Nombre = Nombre;
      this.Apellido = Apellido;
      this.Genero = Genero;
      this.FechaNac = FechaNac;
      this.FechaIngr = FechaIngr;
      this.Salario = Salario;
      this.Nivel = Nivel;
      this.Instituto = Instituto;
      this.Titulo = Titulo;
    }
    toStringNombre() {
      return (this.Nombre = document.getElementById("nombre").value);
    }
    toStringApellido() {
      return (this.Apellido = document.getElementById("apellido").value);
    }
    toStringGenero() {
      return (this.Genero = document.querySelector(
        'input[name="gen"]:checked'
      ).value);
    }
    toStringFechaNac() {
      return (this.FechaNac = document.getElementById("fechaNac").value);
    }
    toStringFechaIng() {
      return (this.FechaIngr = document.getElementById("fIngreso").value);
    }
    toStringSalario() {
      return (this.Salario = parseFloat(
        document.getElementById("salario").innerHTML
      ));
    }
  
    toStringNivel() {
      return (this.Nivel = document.getElementById("nivel").value);
    }
  
    toStringInstituto() {
      return (this.Instituto = document.getElementById("instituto").value);
    }
  
    toStringTitulo() {
      return (this.Titulo = document.getElementById("titulo").value);
    }
  
    calcularEdad() {
      let Calcular_Edad = document.getElementById("fechaNac").value;
      if (Calcular_Edad <= 0 || Calcular_Edad.length == 0) {
        alert("Valor incorrecto");
        return 0;
      } else {
        let anio = parseInt(Calcular_Edad.substr(6, 4));
        let eda = 2023 - anio;
        return eda;
      }
    }
  
    calcularAntig() {
      let Fecha_Ingreso = document.getElementById("fIngreso").value;
      let ingreso = parseInt(Fecha_Ingreso.substr(6, 4));
  
      if (Fecha_Ingreso <= 0 || Fecha_Ingreso.length == 0 || ingreso == 2023) {
        alert("Valor incorrecto");
        return 0;
      } else {
        let antiguedad = 2023 - ingreso;
        return antiguedad;
      }
    }
  
    calcularPrestac() {
      let salarioEmp = document.getElementById("salario").innerHTML;
      let Calcular_Edad = document.getElementById("fechaNac").value;
      let Fecha_Ingreso = document.getElementById("fIngreso").value;
  
      if (
        salarioEmp <= 0 ||
        salarioEmp.length == 0 ||
        Calcular_Edad.length == 0 ||
        Fecha_Ingreso == 0
      ) {
        alert("Valor del salario incorrecto");
        return 0;
      } else {
        let anti = this.calcularAntig();
        let sal = this.toStringSalario();
        let prestaciones = (anti * sal) / 12;
        return prestaciones.toFixed(2);
      }
    }
  }
/*
Funciones Usuario
*/
let verinfo = new Empleado();

function actualizarSalario() {
  let actSalario = new Empleado();
  let actSalarioEm = prompt("Ingrese el nuevo salario");

  if (actSalarioEm <= 0 || actSalarioEm.length == 0) {
    alert("Salario invalido");
  } else {
    actSalario.toStringSalario(actSalarioEm);
    document.getElementById("salario").innerHTML = actSalarioEm;
  }
}

function mostrar_datos() {
  let nombreEmp = document.getElementById("nombre").value;
  let apellidoEmp = document.getElementById("apellido").value;
  let fechaNacEmp = document.getElementById("fechaNac").value;
  let fechaIngEmpl = document.getElementById("fIngreso").value;
  let salarioEmp = document.getElementById("salario").innerHTML;
  let nivelEmp = document.getElementById("nivel").value;

  if (
    nombreEmp.length == 0 ||
    apellidoEmp.length == 0 ||
    fechaNacEmp.length == 0 ||
    fechaIngEmpl == 0 ||
    salarioEmp <= 0 ||
    salarioEmp.length == 0 ||
    nivelEmp.length == 0 

  ) {
    alert("Existen campos vacios o erroneos, verifique");
  } else {
  

    document.getElementById("nomMos").innerHTML = verinfo.toStringNombre();
    document.getElementById("apeMos").innerHTML = verinfo.toStringApellido();
    document.getElementById("genMost").innerHTML = verinfo.toStringGenero();
    document.getElementById("fechaNacMos").innerHTML = verinfo.toStringFechaNac();
    document.getElementById("fechaIngMos").innerHTML = verinfo.toStringFechaIng();
    document.getElementById("salMos").innerHTML = verinfo.toStringSalario();
    document.getElementById("nivMos").innerHTML = verinfo.toStringNivel();
    document.getElementById("institMos").innerHTML = verinfo.toStringInstituto();
    document.getElementById("titulMos").innerHTML = verinfo.toStringTitulo();
  }
}

//Calcular la edad del empleado
function edad_emple() {
  var emp = new Empleado();
  let Edad = emp.calcularEdad();
  document.getElementById("inpedad").innerHTML = Edad;
}
//Calculo antiguedad
function antiguedad() {
  var emple = new Empleado();
  let Antigu = emple.calcularAntig();
  document.getElementById("antig").innerHTML = Antigu;
}
//Calculo Prestaciones
function prestacion() {
  var emplea = new Empleado();
  let Antigu = emplea.calcularPrestac();
  document.getElementById("presta").innerHTML = Antigu;
}






// funcion independiente de generar formulario
const usuario = {
  id: '',
  nombre: '',
  email: '',
  puesto: ''
}

let isValido = false
let isEditando = false

function accionUsuario(event) {
  event.preventDefault()

  validarCampos()

  if(isValido) {
      if (!isEditando) {
          agregarUsuario()
      } else {
          editarUsuario()
      }

      limpiarObj()
      limpiarCampos()
  }
}

function agregarUsuario() {
  const id = new Date().getTime()

  const inpNombre = document.getElementById('input-nombre').value
  const inpEmail = document.getElementById('input-email').value
  const inpPuesto = document.getElementById('input-puesto').value

  const tBody = document.querySelector('tbody')
  const tr = document.createElement('tr')
  tr.setAttribute('id', id)
  
  const thId = document.createElement('th')
  thId.textContent = id
  const thNombre = document.createElement('th')
  thNombre.textContent = inpNombre
  const thEmail = document.createElement('th')
  thEmail.textContent = inpEmail
  const thPuesto = document.createElement('th')
  thPuesto.textContent = inpPuesto

  btnEditar = document.createElement('button')
  btnEditar.classList.add('btn', 'btn-editar')
  btnEditar.textContent = 'Editar'
  btnEditar.onclick = function() {
      isEditando = true

      usuario.id = thId.textContent
      usuario.nombre = thNombre.textContent
      usuario.email = thEmail.textContent
      usuario.puesto = thPuesto.textContent

      document.getElementById('input-nombre').value = usuario.nombre
      document.getElementById('input-email').value = usuario.email
      document.getElementById('input-puesto').value = usuario.puesto

      document.getElementById('btn-agregar-actualizar').value = 'Editar usuario'
      document.getElementById('btn-agregar-actualizar').classList.add('btn-editar')
      document.getElementById('btn-agregar-actualizar').classList.remove('btn-crear')
      
      
  }

  btnBorrar = document.createElement('button')
  btnBorrar.classList.add('btn', 'btn-borrar')
  btnBorrar.textContent = 'Borrar'
  btnBorrar.onclick = function() {
      tr.remove()
  }

  tr.appendChild(thId)
  tr.appendChild(thNombre)
  tr.appendChild(thEmail)
  tr.appendChild(thPuesto)
  tr.appendChild(btnEditar)
  tr.appendChild(btnBorrar)
  tBody.appendChild(tr)
}

function editarUsuario() {
  const trId = document.getElementById(usuario.id)

  trId.childNodes[1].textContent = document.getElementById("input-nombre").value
  trId.childNodes[2].textContent = document.getElementById("input-email").value
  trId.childNodes[3].textContent = document.getElementById("input-puesto").value

  const btnEditar = document.getElementById("btn-agregar-actualizar")
  btnEditar.value = "Crear Usuario"
  btnEditar.classList.remove('btn-editar')
  btnEditar.classList.add('btn-crear')
}

function limpiarObj() {
  usuario.id = ''
  usuario.nombre = ''
  usuario.email = ''
  usuario.puesto = ''
}

function limpiarCampos() {
  document.getElementById('input-nombre').value = ''
  document.getElementById('input-email').value = ''
  document.getElementById('input-puesto').value = ''

  isValido = false
  isEditando = false
}

function validarCampos() {
  
  const inpNombre = document.getElementById('input-nombre').value
  const inpEmail = document.getElementById('input-email').value
  const inpPuesto = document.getElementById('input-puesto').value

  if (
      inpNombre === '' ||
      inpEmail === '' ||
      inpPuesto === ''
  ) {
      alert('Se deben de llenar todos los campos.')
      isValido = false
  } else {
      isValido = true
  }
}


