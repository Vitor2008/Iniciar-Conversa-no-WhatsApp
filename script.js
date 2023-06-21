function iniciarConversa() {
    var phone = document.getElementById('phone').value;
    var ddd = document.getElementById('ddd').value;
    
    // Verificar se os campos estão preenchidos
    if (phone && ddd) {
      // Construir o link do WhatsApp
      var whatsappLink = 'https://api.whatsapp.com/send?phone=' + ddd + phone;
      
      // Redirecionar o usuário para o WhatsApp
      window.open(whatsappLink, '_blank');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  }