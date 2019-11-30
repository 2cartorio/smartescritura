var contractAddress = "0x04D51927fB51aaA6fEd4211a7D87d3F3210af6f6";
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


    
    
}
