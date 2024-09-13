document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
  
    form.addEventListener('submit', async(event) => {
      event.preventDefault();

      const nome = document.getElementById('nome').value;
      const date = document.getElementById('date').value;
      const destino = document.getElementById('destino').value;
      const resultDiv = document.getElementById('mensagem');
      resultDiv.innerHTML = 'Enviando o dados...';

        
      try{
        //simula uma chamada de API para enviar dados
        await fakeApiCall ({ nome, date, destino });
        resultDiv.innerHTML = `<h3>Passagem agendada. Confirme seus dados abaixo:<h3>
        <p>Nome: ${nome}<p>
        <p>Data: ${date}<p>
        <p>Destino: ${destino}`;
     } catch (error) {
           resultDiv.innerHTML =`Erro: ${error.message}`;
     }
});

   
function fakeApiCall (retorno) {
    return new Promise ((resolve, reject) => {
        setTimeout (()  => {
            if (retorno.nome && retorno.date && retorno.destino) {
                resolve ('Dados enviados');
            } else {
                reject(new Error('Dados inválidos'));
            }
        }, 5000);

       
          });
}
})

document.addEventListener('DOMContentLoaded',function(){
    const msgCookies = document.getElementById ('cookies-msg');
    const aceitoCookies = document.getElementById('aceitoCookies');
       //irá mostrar as mensagens no cookies
       function mostrarCookies(){
           msgCookies.classList.add('mostrar')
       }
     //irá esconder a mensagem do cookies
         function esconderCookies (){
             msgCookies.classList.remove('mostrar')
         }
         //mostrar a msg por um tempo
         mostrarCookies();
            //adicionnar evento de clique ao botão
         aceitoCookies.addEventListener('click', function(){
            esconderCookies();
         
    });
 
 })