$(document).ready(function () {
    $("#datepicker").daterangepicker({
        timePicker: true, // Enable time picker
        timePicker24Hour: true, // 24-hour format
        startDate: moment().startOf("day"), // Set default start time to 00:00
        endDate: moment().startOf("day").add(1, "day"), // Default end time to 24 hours later
        showDropdowns: true, // Add dropdowns for year and month selection
        locale: {
            format: "M/DD/YYYY HH:mm", // Include year and use 24-hour format
            applyLabel: "Apply", // Customize button text
            cancelLabel: "Cancel",
        },
    });
});
