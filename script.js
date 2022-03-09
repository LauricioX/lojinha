class Produto {

constructor() {
    this.id = 0;
    this.arrayprodutos = [];
    this.editId = null
    
}



salvar() {
    // metodo que ira salvar produtos

    let produto = this.lerDados()

    if(this.validaCampos(produto)){
        if(this.editId == null){
            this.adicionar(produto)
        }else{
            this.atualizar(this.editId,produto)
        }

    }


   this.listaTabela()
   this.cancelar()

}

listaTabela(){

let tbody = document.getElementById("tbody")
tbody.innerText = ""

for(let i = 0; i < this.arrayprodutos.length; i++){

let tr = tbody.insertRow();

let td__id = tr.insertCell();
let td__produto = tr.insertCell();
let td__valor = tr.insertCell();
let td__acoes = tr.insertCell();

td__id.innerText = this.arrayprodutos[i].id
td__produto.innerText = this.arrayprodutos[i].nomeProduto
td__valor.innerText = this.arrayprodutos[i].preco



// adiciona icone de editar

let imgac = document.createElement("img");
imgac.src = "editing.png";
imgac.classList.add('icon')

imgac.setAttribute("onclick","produto.preparaEdicao("+ JSON.stringify(this.arrayprodutos[i])  +")")


td__acoes.appendChild(imgac)

// adiciona icone de deletar
let imgac2 = document.createElement("img");
imgac2.src = "garbage.png";
imgac2.classList.add('icon')
imgac2.setAttribute("onclick","produto.deletar("+ this.arrayprodutos[i].id +")")

td__acoes.appendChild(imgac2)





 }
}

preparaEdicao(dados){
    this.editId = dados.id;


    document.querySelector("#produto").value = dados.nomeProduto
    document.querySelector("#preco").value = dados.preco


    document.querySelector("#btn1").innerText = "Atualizar"

}


atualizar(id,produto){
    for(let i = 0; i < this.arrayprodutos.length; i++){
        if(this.arrayprodutos[i].id == id){
           this.arrayprodutos[i].nomeProduto = produto.nomeProduto;
           this.arrayprodutos[i].preco = produto.preco;
        }
    }

}





adicionar(produto){
  this.arrayprodutos.push(produto)
  this.id++
}



lerDados(){
//  este metodo sera responsavel por ler os dados e retornar para a função que o chamar

let produto = {}
produto.id = this.id
produto.nomeProduto = document.querySelector("#produto").value

produto.preco = document.querySelector("#preco").value

return produto
 
}






cancelar() {
    // função que iara cancelar o processo

    document.getElementById("produto").value = "";

    document.getElementById("preco").value = "";

    document.getElementById("produto").focus()

  document.getElementById("btn1").innerText = "Salvar"

  this.editId = null
    
}



validaCampos(produto){
    // ira validar se todos os campos foram preenchidos

    let msg = ""
    if(produto.nomeProduto == ""){
        msg += "informe o nome do produto°?\n"
    }

    if(produto.preco == ""){
        msg += "informe o preço do produto°?"
    }

    if(msg != ""){
        alert(msg)
        return false
    }


    return true;


}

    deletar(id){

        if(confirm("deseja realmente Deletar o produto  " + id)){
            let tbody = document.getElementById("tbody");

    for(let i = 0; i < this.arrayprodutos.length; i++){
        if(this.arrayprodutos[i].id == id){
            this.arrayprodutos.splice(i,1);
            tbody.deleteRow(i)
        }
    }

        }
        
    }


}

var produto = new Produto()