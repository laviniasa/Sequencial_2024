function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var birthdate = document.getElementById("birthdate").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var schoolName = document.getElementById("schoolName").value;
    var grade = document.getElementById("grade").value;
    var guardianName = document.getElementById("guardianName").value;
    var guardianContact = document.getElementById("guardianContact").value;
    var cpf = document.getElementById("cpf").value.replace(/[^\d]+/g,''); // Remover pontos e traço
    var rg = document.getElementById("rg").value;
  
    var fullNameError = document.getElementById("fullNameError");
    var birthdateError = document.getElementById("birthdateError");
    var genderError = document.getElementById("genderError");
    var addressError = document.getElementById("addressError");
    var phoneNumberError = document.getElementById("phoneNumberError");
    var emailError = document.getElementById("emailError");
    var schoolNameError = document.getElementById("schoolNameError");
    var gradeError = document.getElementById("gradeError");
    var guardianNameError = document.getElementById("guardianNameError");
    var guardianContactError = document.getElementById("guardianContactError");
    var cpfError = document.getElementById("cpfError");
    var rgError = document.getElementById("rgError");
  
    // Limpar mensagens de erro
    fullNameError.innerHTML = "";
    birthdateError.innerHTML = "";
    genderError.innerHTML = "";
    addressError.innerHTML = "";
    phoneNumberError.innerHTML = "";
    emailError.innerHTML = "";
    schoolNameError.innerHTML = "";
    gradeError.innerHTML = "";
    guardianNameError.innerHTML = "";
    guardianContactError.innerHTML = "";
    cpfError.innerHTML = "";
    rgError.innerHTML = "";
  
    // Validar nome completo
    if (fullName === "") {
      fullNameError.innerHTML = "Por favor, preencha este campo.";
      showErrorPopup("Por favor, preencha o campo Nome completo.");
      return false;
    }
  
    // Validar data de nascimento
    if (birthdate === "") {
      birthdateError.innerHTML = "Por favor, selecione uma data.";
      showErrorPopup("Por favor, selecione uma data de nascimento.");
      return false;
    }
  
    // Validar gênero
    if (gender === "") {
      genderError.innerHTML = "Por favor, selecione uma opção.";
      showErrorPopup("Por favor, selecione uma opção para o campo Gênero.");
      return false;
    }
  
    // Validar endereço
    if (address === "") {
      addressError.innerHTML = "Por favor, preencha este campo.";
      showErrorPopup("Por favor, preencha o campo Endereço.");
      return false;
    }
  
    // Validar número de telefone
    if (phoneNumber === "") {
      phoneNumberError.innerHTML = "Por favor, preencha este campo.";
      showErrorPopup("Por favor, preencha o campo Número de telefone.");
      return false;
    } else if (!phoneNumber.match(/^\d+$/)) {
      phoneNumberError.innerHTML = "Por favor, insira apenas números.";
      showErrorPopup("Por favor, insira apenas números válidos no campo Número de telefone.");
      return false;
    }
  
    // Validar e-mail
    if (email === "") {
      emailError.innerHTML = "Por favor, preencha este campo.";
      showErrorPopup("Por favor, preencha o campo E-mail.");
      return false;
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      emailError.innerHTML = "Por favor, insira um endereço de e-mail válido.";
      showErrorPopup("Por favor, insira um endereço de e-mail válido.");
      return false;
    }
  
    // Validar nome da escola
    if (schoolName === "") {
      schoolNameError.innerHTML = "Por favor, preencha este campo.";
      showErrorPopup("Por favor, preencha o campo Nome da escola atual.");
      return false;
    }
  
    // Validar série
    if (grade === "") {
      gradeError.innerHTML = "Por favor, preencha este campo.";
      showErrorPopup("Por favor, preencha o campo Série atual.");
      return false;
    }
  
    // Validar nome do responsável legal
    if (guardianName === "") {
      guardianNameError.innerHTML = "Por favor, preencha este campo.";
      showErrorPopup("Por favor, preencha o campo Nome do responsável legal.");
      return false;
    }
  
    // Validar contato do responsável legal
    if (guardianContact === "") {
      guardianContactError.innerHTML = "Por favor, preencha este campo.";
      showErrorPopup("Por favor, preencha o campo Contato do responsável legal.");
      return false;
    }
  
    // Validar CPF
    if (cpf === "") {
      cpfError.innerHTML = "Por favor, preencha este campo.";
      showErrorPopup("Por favor, preencha o campo CPF.");
      return false;
    } else if (cpf.length !== 11 || !cpf.match(/^\d+$/)) {
      cpfError.innerHTML = "Por favor, insira um CPF válido.";
      showErrorPopup("Por favor, insira um CPF válido.");
      return false;
    }
  
    // Validar RG
    if (rg === "") {
      rgError.innerHTML = "Por favor, preencha este campo.";
      showErrorPopup("Por favor, preencha o campo RG.");
      return false;
    }
  
    // Tudo validado com sucesso
    alert("Formulário enviado com sucesso!");
    return true;
  }
  
  function showErrorPopup(message) {
    alert("Erro de validação: " + message);
  }
  