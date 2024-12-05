$(document).ready(function () {
    $("#datepicker").daterangepicker({
        timePicker: true, // Enable time picker
        timePicker24Hour: false, // 12-hour format with AM/PM
        showDropdowns: true, // Add dropdowns for year and month selection
        startDate: moment().startOf("hour"),
        endDate: moment().startOf("hour").add(2, "hour"),
        locale: {
            format: "M/DD/YYYY hh:mm A", // Updated to include the year in the format
            applyLabel: "Apply", // Customize button text
            cancelLabel: "Cancel",
        },
    });
});
