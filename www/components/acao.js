window.onload = function(){
    document.querySelector("#entrar").addEventListener("click", function(){
        function retorno(){
        }
        let nome = document.querySelector("#nome").value;

        navigator.notification.alert("Seja bem-vindo(a), " + nome + " ao meu aplicativo.", retorno, "Olá", "Ok");
    });
    document.querySelector("#verificar").addEventListener("click", function(){
        function retorno(buttonIndex){
             if(buttonIndex == 1){
                navigator.notification.alert("Você deve se alistar!");
            }else{
                navigator.notification.alert("Você pode tirar habilitação!");
            }
        }
        let idade = document.querySelector("#idade").value;

        if(idade >= 18){
            navigator.notification.confirm("Você é homem ou mulher?", retorno, "Responda:", ['Homem','Mulher']);
            }else if(idade < 0){
                navigator.vibrate(3000);
        }else{
                navigator.notification.beep(idade);
        }
    });
    document.querySelector("#sair").addEventListener("click", function(){
        function retorno(buttonIndex){
            if(buttonIndex == 1){
                navigator.vibrate(3000);
                navigator.app.exitApp();
            }else{
                return false;
            }
        }
        navigator.notification.confirm("Deseja fechar o App?", retorno, "Fechar App", ['Sim','Não']);
    });
}
