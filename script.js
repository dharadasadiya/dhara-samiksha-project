
// ===============================
// VOLTROUTE - JAVASCRIPT
// ===============================


// SEARCH CHARGING STATION

function searchStation() {

    let searchInput = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let result = document.getElementById("searchResult");

    if (searchInput === "") {

        result.innerHTML =
            "⚠️ Please enter a city or area name.";

    }

    else if (
        searchInput.includes("ahmedabad") ||
        searchInput.includes("sg highway") ||
        searchInput.includes("prahlad nagar") ||
        searchInput.includes("satellite")
    ) {

        result.innerHTML =
            "⚡ Charging stations found! Scroll down to explore available stations.";

    }

    else {

        result.innerHTML =
            "❌ No station found in this demo location. Try Ahmedabad, SG Highway, Prahlad Nagar or Satellite.";

    }

}


// ===============================
// VIEW STATION DETAILS
// ===============================

function viewStation(stationName) {

    alert(
        "⚡ " + stationName +
        "\n\nStation details loaded successfully!" +
        "\n\nYou can check charger power, port type and availability."
    );

}


// ===============================
// QR INFORMATION
// ===============================

function showQR() {

    alert(
        "📱 QR CODE SYSTEM\n\n" +
        "Station ID: EV-AHD-001\n" +
        "Location: SG Highway, Ahmedabad\n" +
        "Charger: 60 kW Fast Charger\n" +
        "Port Type: CCS2\n" +
        "Status: 4 Ports Available\n\n" +
        "Scan → Check Details → Start Charging → Pay"
    );

}


// ===============================
// PAYMENT DEMO
// ===============================

function paymentDemo() {

    alert(
        "💳 PAYMENT SUCCESSFUL!\n\n" +
        "Amount Paid: ₹300\n" +
        "Station: Ahmedabad EV Hub\n" +
        "Charging Used: 25 kWh\n\n" +
        "Thank you for using VoltRoute ⚡"
    );

}


// ===============================
// FIRE EMERGENCY
// ===============================

function fireEmergency() {

    alert(
        "🚨 FIRE EMERGENCY ALERT!\n\n" +
        "1. Stop charging immediately.\n" +
        "2. Move to a safe location.\n" +
        "3. Do not touch electrical equipment.\n" +
        "4. Contact emergency services and station staff.\n\n" +
        "Emergency Number: 112"
    );

}


// ===============================
// ELECTRICAL EMERGENCY
// ===============================

function electricalEmergency() {

    alert(
        "⚡ ELECTRICAL FAULT REPORTED!\n\n" +
        "Please stop using the charging station.\n" +
        "Do not touch damaged cables.\n" +
        "Move to a safe area.\n\n" +
        "The Control Room has been notified (Demo)."
    );

}


// ===============================
// CONTACT CONTROL ROOM
// ===============================

function contactControl() {

    alert(
        "📞 CONTROL ROOM\n\n" +
        "VoltRoute Station Support\n" +
        "Demo Support Number: +91 98765 43210\n\n" +
        "For a real emergency, contact local emergency services."
    );

}


// ===============================
// CONTACT FORM
// ===============================

function contactMessage(event) {

    event.preventDefault();

    alert(
        "✅ Message sent successfully!\n\n" +
        "Thank you for contacting VoltRoute.\n" +
        "Our support team will contact you soon. (Demo)"
    );

}


// ===============================
// PAGE LOADED MESSAGE
// ===============================

console.log(
    "VoltRoute Smart EV Charging System Loaded Successfully ⚡"
);
