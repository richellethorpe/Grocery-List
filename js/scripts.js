function handleForm(event) {
  event.preventDefault();
  document.getElementById("grocery-list").setAttribute("class","hidden");
  document.getElementById("show-me").removeAttribute("class");
  
  const userInput1 = document.getElementById("item1").value;
  console.log(userInput1);
  const userInput2 = document.getElementById("item2").value;
  const userInput3 = document.getElementById("item3").value;
  const userInput4 = document.getElementById("item4").value;
  
  let userInputArray = [userInput1, userInput2, userInput3, userInput4];
  let valueUserInputArray = userInputArray.filter(element => 
    element.length > 0);
  const alphaUserInput = valueUserInputArray.sort();
  const alphaUpperUserInput = alphaUserInput.map(element=>{
    return element.toUpperCase();
  })
  
  const ul =document.querySelector('ul#result');
  alphaUpperUserInput.forEach(element => {
    const li = document.createElement('li');
    li.append(element);
    ul.append(li);
  })
}



window.addEventListener('load', function() {
  document.querySelector('form#grocery-list').addEventListener('submit',handleForm);
})