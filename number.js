document.addEventListener('DOMContentLoaded', function () {
    // Get the container for number cards
    var numberList = document.getElementById('numberList');

    // Generate number cards from 1 to 100
    for (var i = 1; i <= 100; i++) {
        var numberCard = document.createElement('div');
        numberCard.classList.add('number-card');
        numberCard.innerHTML = `
            <h2>${i}</h2>
            <p>${getKoreanNumber(i)}</p>
        `;

        numberList.appendChild(numberCard);
    }

    // Function to get Korean representation of a number
    function getKoreanNumber(number) {
        // Implement logic to convert numbers to Korean representation if needed
        // For simplicity, this function currently returns the English representation
        return '(' + number + ')';
    }
});
