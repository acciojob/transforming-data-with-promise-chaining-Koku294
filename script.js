document.getElementById("btn").onclick = function () {
    const input = document.getElementById("ip").value;
    const output = document.getElementById("output");
    const number = parseFloat(input);

    // Clear previous output
    output.innerText = "";

    if (isNaN(number)) {
        output.innerText = "Please enter a valid number.";
        return;
    }

    // Initial promise to return input value after 2 seconds
    new Promise((resolve) => {
        setTimeout(() => {
            output.innerText = `Result: ${number}`;
            resolve(number);
        }, 2000);
    })

    // Multiply by 2 after another 2 seconds
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result * 2;
                output.innerText = `Result: ${newResult}`;
                resolve(newResult);
            }, 2000);
        });
    })

    // Subtract 3 after 1 second
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result - 3;
                output.innerText = `Result: ${newResult}`;
                resolve(newResult);
            }, 1000);
        });
    })

    // Divide by 2 after 1 second
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result / 2;
                output.innerText = `Result: ${newResult}`;
                resolve(newResult);
            }, 1000);
        });
    })

    // Add 10 after 1 second
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const finalResult = result + 10;
                output.innerText = `Final Result: ${finalResult}`;
                resolve(finalResult);
            }, 1000);
        });
    });
};

