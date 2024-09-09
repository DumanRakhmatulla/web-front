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
    if (accountNumber[i].accountNumber === accountNumber) {
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

createAccount(15, "Raymbek", 500);
createAccount(15, "Duman", 400);
