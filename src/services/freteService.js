import axios from 'axios';

class FreteService {
  this.cep_origem = 0;
  this.cep_dest = 0;
  this.price = 0;
  this.qqt = 0;
  this.comprimento = 0;
  this.largura = 0;
  this.altura = 0;
  this.peso  = 0;
   this.result = {};
  constructor(url){
      axios.post({url:''})
  }

  getOne(id){
    return this.result.filter(item=>item.id == id);
  }

  getAll(){
    return this.result;
  }


}
export default axios.create()
