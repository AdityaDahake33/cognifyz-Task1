function changeColor(button) {
      button.style.backgroundColor = button.style.backgroundColor === 'red' ? '#ff8a00' : 'red';
    }

    function greetUser() {
      const hour = new Date().getHours();
      let greeting = "Hello!";
      if (hour < 12) greeting = "Good Morning!";
      else if (hour < 18) greeting = "Good Afternoon!";
      else greeting = "Good Evening!";
      alert(greeting);
    }

    function calculateSum() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const result = num1 + num2;
      document.getElementById('result').textContent = "Result: " + result;
    }