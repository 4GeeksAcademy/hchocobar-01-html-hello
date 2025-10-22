const handleSubmit = () => {
  alert('Enviar datos')
}


const handleRegister = (data) => {
  console.log('Click en Registrarme')
  console.log(data)
}

function handleView() {
  console.log('Click en eye')
  if (passwordView) {
    view.innerHTML = '<i class="fas fa-eye"></i>'
    inputPassword.type = 'password'
  } else {
    view.innerHTML = '<i class="fas fa-eye-slash"></i>'
    inputPassword.type = 'text'
  }
  passwordView = !passwordView  // si es falso, asignar veradero y viceversa
}


let passwordView = false

                