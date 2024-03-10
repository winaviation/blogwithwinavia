$("#go").onclick(() => {
  var input = $("#inp").value
  var output = $("#out")
  for (var i = 0; i < input.length; i++){
    output.innerHTML = input[i].charCodeAt(0).toString(2) + " ";
  }
})

// WHY TF THERE ARE 2 OF U GUYS