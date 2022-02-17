var passLength = document.querySelector("#length");
var lowercase = document.querySelector('input[name="lowercase"]');
var uppercase = document.querySelector('input[name="uppercase"]');
var num = document.querySelector('input[name="number"]');
var sym = document.querySelector('input[name="symbol"]');
var generate = document.querySelector("#genPwd");
var copy = document.getElementById("copyBtn");

const passKeys = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "*;<>()[]{}#$?!^|",
};

generate.addEventListener("click", () => {
  var length = passLength.value;
  var activeLower = lowercase.checked;
  var activeUpper = uppercase.checked;
  var activeNumber = num.checked;
  var activeSymbol = sym.checked;

  generatePassword(
    activeLower,
    activeUpper,
    activeNumber,
    activeSymbol,
    length
  );
});

function generatePassword(lower, upper, num, sym, length) {
  let main = "";
  let finalPassword = "";

  const passOptions = {
    lowercase: lower,
    uppercase: upper,
    number: num,
    symbol: sym,
  };

  for (i = 0; i < Object.keys(passOptions).length; i++) {
    main += Object.values(passOptions)[i]
      ? passKeys[Object.keys(passOptions)[i]]
      : "";
  }

  if (main != "" && length > 0) {
    for (i = 0; i < length; i++) {
      finalPassword += main[Math.floor(Math.random() * main.length)];
    }

    document.querySelector("#password").value = finalPassword;
  } else {
    document.querySelector("#password").value =
      "Please select at least one checkbox !";
  }

  var genPass = document.querySelector("#password");
  if (
    genPass.value != "" &&
    genPass.value != "Include any key string and define the length!"
  ) {
    genPass.select();
    document.execCommand("copy");
  }

  var notification = alertify.notify(
    "Password generated and copied",
    "success",
    3
  );
}
