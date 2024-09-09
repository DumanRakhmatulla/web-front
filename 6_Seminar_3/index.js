// function greeting() {
//   console.log("Hello World");
// }

// greeting();

// function greeting(Number) {
//   console.log(Number);
// }

// greeting(15);

// person = {
//   accountNumber Number
//   holderName ,
//   balance,
// };
let accounts = [];
function createAccount(accountNumber, holderName, balance) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].accountNumber === accountNumber) {
      console.log(`Уже есть токой аккаунт ${accounts}`);
      return;
    }
  }

  const newAccount = {
    accountNumber: accountNumber,
    holderName: holderName,
    balance: balance,
  };

  accounts.push(newAccount);
  console.log(accounts);
  console.log("Успешно создали аккаунт");
}

function deposit(accountNumber, amount) {
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].accountNumber === accountNumber) {
      accounts[i].balance += amount;
      console.log("Успешно обновили");
      return;
    }
  }
  alert("простите тогово ползавител нет");
}

function transfer(fromAccountNumber, toAccountNumber, amount) {
  let fromA = null,
    toA = null;
  let fromb = null,
    tob = null;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].accountNumber === fromAccountNumber) {
      fromA = fromAccountNumber;
      fromb = accounts[i].balance;
    }
    if (accounts[i].accountNumber === toAccountNumber) {
      toA = toAccountNumber;
      tob = accounts[i].balance;
    }
  }
  if (fromA == null || toA == null) {
    alert("нету этого человек");
    return;
  } else if (fromb < amount) {
    alert("денги не хватит");
    return;
  } else {
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].accountNumber === fromAccountNumber) {
        accounts[i].balance -= amount;
      }
      if (accounts[i].accountNumber === toAccountNumber) {
        accounts[i].balance += amount;
      }
    }
  }
}

createAccount(15, "Raymbek", 500);
createAccount(16, "Duman", 500);
transfer(16, 15, 200);
// deposit(15, 500);
// deposit(16, 1000);
console.log(accounts);
