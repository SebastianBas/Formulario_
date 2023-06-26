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
