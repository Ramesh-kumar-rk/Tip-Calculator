// ------------------------------------for theme----------------------------------------
function darktheme(){
    document.body.classList.toggle("dark-theme")
  }
  
  // -------------------------------for Tip selection----------------------------------
  
  var tip ;
    function tipBlock(a){
      let data = document.querySelectorAll('.tipAmount');
      let customInput = document.querySelector('.custom-input').style.display;
      let custom = document.querySelector('.custom-div')
      document.querySelector('.custom-input').style.display = "none"
      document.querySelector('.custom-div').style.backgroundColor = "var(--input-background)";
      document.querySelector('.custom-div').style.color = "var(--left-color)";
  
      if(tip == a){
        data[a].style.backgroundColor = "var(--input-background)";
        data[a].style.color = "var(--left-color)";
        tip = undefined;
        return;
      }
      for(let i=0 ;i<4 ;i++){
        data[i].style.backgroundColor = "var(--input-background)";
        data[i].style.color = "var(--left-color)";
      }
        data[a].style.backgroundColor = "var(--tip-color)";
        data[a].style.color = "var(--font-color)";
        tip = a;
  
    }
  
  // --------------------------------------custom------------------------------------
  
    function custom(){
      let data = document.querySelectorAll('.tipAmount');
      tip = undefined;
      // let customInput = document.querySelector('.custom-input').style.display;
  
      for(let i=0 ;i<4 ;i++){
        data[i].style.backgroundColor = "var(--input-background)";
        data[i].style.color = "var(--left-color)";
      }
      if(document.querySelector('.custom-input').style.display === "none"){
      document.querySelector('.custom-input').style.display = "inline-block";
      document.querySelector('.custom-div').style.backgroundColor = "var(--tip-color)";
      document.querySelector('.custom-div').style.color = "var(--font-color)";
      }else{
        document.querySelector('.custom-input').style.display = "none"
        document.querySelector('.custom-div').style.backgroundColor = "var(--input-background)";
        document.querySelector('.custom-div').style.color = "var(--left-color)";
      }
    }
  
  
  // ---------------------------calculate tip---------------------
  
  function calculate(){
    let billAmount = document.getElementById('bill-amount');
    let billWarning = document.getElementById('bill-warning');
    let tipWarning = document.getElementById('tip-warning');
    let peopleWarning = document.getElementById('peopleWarning');
    let customInput = document.querySelector('.custom-input');
    let peopleCount = document.getElementById('peopleCount');
    peopleWarning.style.display = "none";
    billWarning.style.display = "none";
    tipWarning.style.display = "none";
  
    if(billAmount.value == ""){
      billWarning.style.display = "block";
      return;
    }
    if(tip == undefined && customInput.value == ""){
      tipWarning.style.display = "block";
      return;
    }
  
    let tipvalue;
    if(tip !== undefined){
      if(tip == 0){
        tipvalue = 5;
      }
      if(tip == 1){
        tipvalue = 10;
      }
      if(tip == 2){
        tipvalue = 15;
      }
      if(tip == 3){
        tipvalue = 20;
      }
    }else{
      tipvalue = customInput.value;
    }
  
  
  
  
    let numberOfPeople;
    if(peopleCount.value !== ""){
      if(parseInt(peopleCount.value) < 1 || peopleCount.value.includes(".") == true){
        peopleWarning.style.display = "block"
      }else{
        numberOfPeople = peopleCount.value;
      }
    }
    if(numberOfPeople == undefined){
      numberOfPeople = 1;
    }
    let billvalue = parseFloat(billAmount.value);
  
    // tip per person
  
    let personTip = (((tipvalue * billvalue) / 100) / numberOfPeople).toFixed(2);
    document.querySelectorAll('.amount')[0].innerHTML = personTip;
  
    // total per personTip
  
    let personTotal = ((((tipvalue * billvalue) / 100) + billvalue )/ numberOfPeople).toFixed(2);
    document.querySelectorAll('.amount')[1].innerHTML = personTotal;
  }
  
  // ------------------------reset button----------------------------
  
  function reset(){
    document.querySelectorAll('.amount')[1].innerHTML = "0.00";
    document.querySelectorAll('.amount')[0].innerHTML = "0.00";
    document.getElementById('bill-amount').value = "";
    document.querySelector('.custom-input').value = "";
    document.getElementById('peopleCount').value = "";
  
    let billWarning = document.getElementById('bill-warning');
    let tipWarning = document.getElementById('tip-warning');
    let peopleWarning = document.getElementById('peopleWarning');
    peopleWarning.style.display = "none";
    billWarning.style.display = "none";
    tipWarning.style.display = "none";
  }