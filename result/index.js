const calcResult = () => {
  let a = Number(document.getElementById("first").value);
  let b = Number(document.getElementById("second").value);
  let c = Number(document.getElementById("third").value);
  let d = Number(document.getElementById("fourth").value);
  let e = Number(document.getElementById("fifth").value);
  let f = Number(document.getElementById("sixth").value);
  let total = Number(document.getElementById("total").value);
  let addition = a + b + c + d + e + f;
  let average = (addition / total) * 100;
  if (addition === 0 || average === Infinity) {
    document.getElementById("sum").innerHTML =
      "Please fill all the input fields !!";
    document.getElementById("average").innerHTML = "";
    document.getElementById("result").innerHTML = "";
  } else {
    document.getElementById("sum").innerHTML = "Total Marks : " + addition;

    document.getElementById("average").innerHTML = "Average : " + average;

    switch (true) {
      case average >= 70:
        document.getElementById("result").innerHTML =
          "Your Result is: <b>Distinction</b>";
        break;
      case average >= 60:
        document.getElementById("result").innerHTML =
          "Your Result is: First Class";
        break;
      case average >= 50:
        document.getElementById("result").innerHTML =
          "Your Result is: Pass Class";
        break;
      default:
        document.getElementById("result").innerHTML =
          "Your Result is: <span style='color:rgb(255, 0, 0);background-color:white;'><b>Fail</b></span>";
    }
  }
};
const clearInput = () => {
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
  document.getElementById("third").value = "";
  document.getElementById("fourth").value = "";
  document.getElementById("fifth").value = "";
  document.getElementById("sixth").value = "";
  document.getElementById("total").value = "";
  document.getElementById("sum").innerHTML =
    "Your Total Marks will be displayed here.";
  document.getElementById("average").innerHTML =
    "Your Average percentage will be displayed here.";
  document.getElementById("result").innerHTML =
    "Your Result will be displayed here(Fail,Pass Class,First Class,Distinction).";
};
