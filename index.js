console.log('hola mundo')
let isLogged = false
let name = 'Héctor'
let isViewPassword = false

const myFunction = () => {
  console.log('click en el boton')
  let myNumber = 8;
  let miFraccion = 4.5
  let myString = "Hola"
  let isActive = true
  let age = 35

  let calculo = myNumber * 2

  console.log(myNumber, miFraccion, myString, isActive)
  console.log(calculo);

  // Template Literal  `cadena ${expresionJS}`
  console.log(`La operación con myNumber es ${myNumber ** 2}`)

  // Operador ternario
  // condicion ? valorDevueltoPorVerdadero : valorDevueltoPorFalso
  let result = myNumber > 10 ? 'Mayor que 10' : 'Menor o igual que 10'
  console.log(result)
  let resultado = age > 18 ? `${name} es mayor de edad` : `${name} es menor`
  console.log(resultado);
}

function loginLogout() {
  // renderizado condicional
  console.log(`valor inicial de ${isLogged}`)
  isLogged = !isLogged
  welcome.innerHTML = isLogged ? `Bienvenido ${name}` : 'No hay nadie logeado'
  btnLogin.innerHTML = isLogged ? 'Logout' : 'Login'
  // dashboard.style.display = isLogged ? 'grid' : 'none'
  dashboard.className = isLogged ? 'container mt-5' : 'container mt-5 d-none'
  console.log(`valor final de ${isLogged}`)
}

function changeView() {
  isViewPassword = !isViewPassword
  inputPassword.type = isViewPassword ? 'text' : 'password'
  spanPassword.innerHTML = isViewPassword ? '<i class="fas fa-eye-slash text-danger"></i>' : '<i class="fas fa-eye text-success"></i>'
}