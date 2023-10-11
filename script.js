function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const calculator = new Calculator(num1, num2);

  document.getElementById("sum").textContent = "Сумма: " + calculator.getSum();
  document.getElementById("difference").textContent = "Разность: " + calculator.getDifference();
  document.getElementById("product").textContent = "Произведение: " + calculator.getProduct();
  document.getElementById("quotient").textContent = "Частное: " + calculator.getQuotient();
}

class Calculator {
  constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
  }

  getSum() {
      return this.num1 + this.num2;
  }

  getDifference() {
      return this.num1 - this.num2;
  }

  getProduct() {
      return this.num1 * this.num2;
  }

  getQuotient() {
      if (this.num2 !== 0) {
          return this.num1 / this.num2;
      } else {
          return "Деление на ноль невозможно";
      }
  }
}