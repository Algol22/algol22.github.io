$(document).ready(function () {
    $("#datepicker").daterangepicker({
        timePicker: true, // Enable time picker
        timePicker24Hour: true, // Use 24-hour format
        startDate: moment().startOf("day"), // Default start time: 00:00
        endDate: moment().startOf("day").add(1, "day"), // Default end time: 24 hours later
        showDropdowns: true, // Enable dropdowns for month and year selection
        locale: {
            format: "DD-MM-YYYY HH:mm", // Use DD-MM-YYYY format with time
            applyLabel: "Apply", // Customize button text
            cancelLabel: "Cancel",
        },
    });
});
