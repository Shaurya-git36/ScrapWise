// Hide rate rows that do not match the search text

function searchRates() {
    let searchText = document.getElementById('searchBox').value.toLowerCase();
    let rows = document.querySelectorAll('.scrap-row');
    let matches = 0 ;

    rows.forEach(function(row) {
        let found = row.innerText.toLowerCase().includes(searchText);
        row.style.display = found ? '' : 'none';
        if (found) matches++;
    });
    document.getElementById('noRates').hidden = matches > 0;
}

// Multiply the weight of each scrap item by its price per kilogram.
function calculateTotal() {
    let paper = Math.max(0, Number(document.getElementById('paper').value) || 0);
    let cardboard = Math.max(0, Number(document.getElementById('cardboard').value) || 0);
    let metal = Math.max(0, Number(document.getElementById('metal').value) || 0);
    let plastic = Math.max(0, Number(document.getElementById('plastic').value) || 0);
    let ewaste = Math.max(0, Number(document.getElementById('ewaste').value) || 0);

    let total = paper * 12 + cardboard * 8 + metal * 30 + plastic * 10 + ewaste * 20;
    let weight = paper + cardboard + metal + plastic + ewaste;
    document.getElementById('totalAmount').textContent = '₹' + total.toFixed(2);
    document.getElementById('totalWeight').textContent = weight.toFixed(1) + ' kg';
}

// Clear all weights and show zero again.
function resetCalculator() {
    document.getElementById('calculatorForm').reset();
    calculateTotal();
}

// Show a confirmation on the page; this does not send a real booking.
function submitBooking(event) {
    event.preventDefault();
    let name = document.getElementById('customerName').value.trim();
    let date = document.getElementById('pickupDate').value;
    document.getElementById('bookingMessage').textContent =
        'Thank you, ' + name + '! Your demo pickup request for ' + date + ' is ready.';
    document.getElementById('bookingResult').hidden = false;
    document.getElementById('bookingForm').reset();
}

// Stop users selecting a date before today (on the booking page only).
let dateBox = document.getElementById('pickupDate');
if (dateBox) {
    let today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    dateBox.min = today.toISOString().slice(0, 10);
}
