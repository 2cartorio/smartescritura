pragma solidity 0.5.13;

contract Compra_E_Venda {
    string public tabeliao;
    address public enderecotabeliao;
    string public livroEscritura;
    string public paginaEscritura;
    string public vendedor;
    string public CPFVendedor;
    address payable public  enderecoVendedor;
    string public comprador;
    string public CPFComprador;
    address payable public enderecoComprador;
    string public descricaoImovel;
    string public matriculaImovel;
    string public cartorioRegistro;
    uint256 public valorImovel;
    bool public statusValorPagoAssinadaComprador;
    bool public statusAssinadaVendedor;
    bool public statusEscrituraDeclaradaIncompleta;
    bool public statusEscrituraLavrada;
    
    constructor(
        string memory _tabeliao,
        string memory _livroEscritura,
        string memory _paginaEscritura,
        string memory _vendedor,
        string memory _CPFVendedor,
        address payable _enderecoVendedor,
        string memory _comprador,
        string memory _CPFComprador,
        address payable _enderecoComprador,
        string memory _descricaoImovel,
        string memory _matriculaImovel,
        string memory _cartorioRegistro,
        uint256 _valorImovel) 
    public
    
    {
        tabeliao = _tabeliao;
        livroEscritura = _livroEscritura;
        paginaEscritura = _paginaEscritura;
        vendedor = _vendedor;
        CPFVendedor = _CPFVendedor;
        enderecoVendedor = _enderecoVendedor;
        comprador = _comprador;
        CPFComprador = _CPFComprador;
        enderecoComprador = _enderecoComprador;
        descricaoImovel = _descricaoImovel;
        matriculaImovel = _matriculaImovel;
        cartorioRegistro = _cartorioRegistro;
        enderecotabeliao = msg.sender;
        valorImovel = _valorImovel;
       
        
    }
    
    function AssinarPagar() payable public {
        require(msg.sender == enderecoComprador, "Somente comprador pode efetuar o pagamento e assinar");
        require(msg.value >= valorImovel, "Valor insuficiente");
        statusValorPagoAssinadaComprador = true;
    }
    
    function Assinar() payable public {
        require(msg.sender == enderecoVendedor, "Somente vendedor pode assinar");
        statusAssinadaVendedor = true;
        
    }
    
    
    function valorDepositado() public view returns(uint256) {
        return address(this).balance;
    }
   
    function declaraIncompleta() public {
        require(msg.sender == enderecotabeliao, "Somente o tabeliao pode declarar a escritura incompleta");
        if (statusValorPagoAssinadaComprador == true && statusAssinadaVendedor == false){
            statusEscrituraDeclaradaIncompleta = true;
            enderecoComprador.transfer(address(this).balance);
        }
   
    }
    function lavrarEscritura() public {
        require(msg.sender == enderecotabeliao, "Somente o tabeliao pode lavrar a escritura");
        if (statusValorPagoAssinadaComprador == true && statusAssinadaVendedor == true){
            statusEscrituraLavrada = true;
            enderecoVendedor.transfer(address(this).balance);
        }
    }

}
