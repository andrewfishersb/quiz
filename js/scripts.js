$(document).ready(function(){
  $("form#quiz").submit(function(event){

    var charlie=0;
    var mac=0;
    var dee=0;
    var dennis=0;
    var frank=0;
    var colorInput = $("input:radio[name=color]:checked").val();
    var weekendInput = $("input:radio[name=weekend]:checked").val();
    var animalInput = $("input:radio[name=animal]:checked").val();
    var foodInput = $("input:radio[name=food]:checked").val();
    var musicInput = $("input:radio[name=music]:checked").val();
    var cityInput = $("input:radio[name=city]:checked").val();
    var result =  colorInput + weekendInput +animalInput+foodInput+musicInput+cityInput;
    for(var i = 0; i<6;i++){
      var letter = result.substring(i,i+1);
      if(letter==='1'){
        charlie++;
      }else if(letter==='2'){
        mac++;
      }else if(letter==='3'){
        dee++;
      }else if(letter==='4'){
        dennis++;
      }
      else if(letter==='5'){
        frank++;
      }
    }
    if(charlie>mac && charlie>dee && charlie >dennis && charlie>frank){
      $("#charlie").show();
      $("#mac").hide();
      $("#dennis").hide();
      $("#dee").hide();
      $("#frank").hide();
      $("#cricket").hide();
    }else if(mac>charlie && mac>dee && mac >dennis && mac>frank){
      $("#mac").show();
      $("#charlie").hide();
      $("#dennis").hide();
      $("#dee").hide();
      $("#frank").hide();
      $("#cricket").hide();
    }else if(dee>charlie && dee>mac && dee >dennis && dee>frank){
      $("#dee").show();
      $("#mac").hide();
      $("#dennis").hide();
      $("#charlie").hide();
      $("#frank").hide();
      $("#cricket").hide();
    }else if(dennis>charlie && dennis>dee && dennis >mac && dennis>frank){
      $("#dennis").show();
      $("#mac").hide();
      $("#charlie").hide();
      $("#dee").hide();
      $("#frank").hide();
      $("#cricket").hide();
    }else if(frank>charlie && frank>dee && frank >dennis && frank>mac){
      $("#frank").show();
      $("#mac").hide();
      $("#dennis").hide();
      $("#dee").hide();
      $("#charlie").hide();
      $("#cricket").hide();
    }else{
      $("#cricket").show();
      $("#mac").hide();
      $("#dennis").hide();
      $("#dee").hide();
      $("#frank").hide();
      $("#charlie").hide();
    }
event.preventDefault();
  });
});
