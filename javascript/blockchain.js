var contractAddress = "0x2024b71e5eE5BB26da186E52f4613de20a92D951";
var provider = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signer = provider.getSigner();
var contract = new ethers.Contract(contractAddress, contractAbi, signer);

function valorDepositado() {    
    var boxBalance = document.getElementById("boxBalance");
    console.log("valorDepositado - submitting the request");     
    contract.valorDepositado()
    .then( (resultFromContract) => {
        console.log("valorDepositado - result is", resultFromContract);
        boxBalance.innerHTML = resultFromContract;
    })
    .catch( (err) => {
        console.error(err);
        alert("A screen will be load asking to allow this page to connect with your Ethereum account.\nPlease give this permission to proceed.\nOr if you don't have an Ethereum account please install Metamask");
        ethereum.enable();
        alert("After you give the permission we are going to reload the page");
        document.location = "index.html";
    });
}

function executePayment() {
    var amount = document.frmPayment.amount.value;       
    if (amount<1000000000) {
        alert("Você deve pagar, no mínimo, 1 gwei para a Smart Escritura");
        return false;
    }
    var motivation = document.frmPayment.motivation.value;
    var boxCommStatus = document.getElementById("boxCommStatus");
    boxCommStatus.innerHTML = "Enviando transação...";
    var additionalSettings = {
        value: ethers.utils.parseUnits(amount, 'wei')
    }; 
    contract.AssinarPagar(motivation, additionalSettings)
    .then( (tx) => {
        console.log("executePayment - Transaction ", tx);   
        boxCommStatus.innerHTML = "Transação enviada! Aguardando resultado...";
        tx.wait()
        .then( (resultFromContract) => {
            console.log("executePayment - the result was ", resultFromContract);
            valorDepositado();
            boxCommStatus.innerHTML = "Transação executada!";
        })        
        .catch( (err) => {
            console.error("executePayment - after tx being mint");
            console.error(err);
            boxCommStatus.innerHTML = "Algo saiu errado: " + err.message;
        })
    })
    .catch( (err) => {
        console.error("executePayment - tx has been sent");
        console.error(err);
        boxCommStatus.innerHTML = "Algo deu errado: " + err.message;
    })
    
    
    
    
    
    
    
    
        var status;
        var campoStatus = document.getElementById("campoStatus"); 
        var campoValorImovel = document.getElementById("campoValorImovel");
        contrato.statusAssinadaVendedor()
            .then( (resultado) => {
                campoStatus.innerHTML = resultado;
            })
            .catch( (err) => {
                console.error(err);
                campoStatus.innerHTML = err;
            });   
        contrato.valorImovel()
            .then( (valorImovel) => {
                campoValorImovel.innerHTML = valorImovel;
            })
            .catch( (err) => {
                console.error(err);
                campoValorimovel.innerHTML = err;
            });                              
    
    
    
    
    
    
}
