/* CONTACT FORM*/
$("#form").submit(function (e) {
    var form = $(this);
    var url = "https://script.google.com/macros/s/AKfycbwopJvEWflW_gO4aK40y8dGhpky-uaCK5V9nEfYw3OcVVopBQQ/exec";

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            if (data.result == "success") {
                $("#responseForm").removeClass("hidden");
            }
            console.log(data); // show response from the php script.
        }
    });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});

/* DEMO FORM*/
$("#gform").submit(function (e) {
    var form = $(this);
    var url = "https://script.google.com/macros/s/AKfycbxDdAj2LQmjJIS_gsY0BA7x5r66K5VM6UUVlp5GfUMJn1B6V8A/exec";

    $.ajax({
        type: "POST",
        url: url,
        data: form.serialize(), // serializes the form's elements.
        success: function (data) {
            if (data.result == "success") {
                $("#successModal").removeClass("hidden");
            }
            console.log(data); // show response from the php script.
        }
    });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});