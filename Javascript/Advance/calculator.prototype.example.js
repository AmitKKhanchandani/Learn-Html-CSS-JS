
function Calculator(){
    this.value = 0
    this.print = function (){
      console.log(this.value);
    }
  }
  
  Calculator.prototype.add = function(val){
    this.value+=val;
  }
  Calculator.prototype.sub = function(val){
    this.value-=val;
  }
  
  
  let c = new Calculator();
  
  c.add(5);
  c.add(5);
  c.sub(3);
  console.log(c);
  c.print()
  
  
  console.log('sample 2');
  
  var Calc = function(){
    this.value = 0;
    this.add = function(val){
      this.value+=val;
      return this;
    }
    this.sub = function(val){
      this.value-=val;
      return this;
    }
    this.print = function(){
      // console.log(this.value);
      return this.value;
    }
  }
  
  let x = new Calc();
  
  // console.log(x)
  x.add(5).sub(1).add(56).sub(10)
  
  console.log(x.print());