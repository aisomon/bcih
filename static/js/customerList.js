
$(document).ready(function () {
	$("#dataTable").on("click", ".edit", function () {
		var currentRow = $(this).closest("tr");

		var col1 = currentRow.find("td:eq(0)").text();
		var col2 = currentRow.find("td:eq(1)").text();
		var col3 = currentRow.find("td:eq(2)").text();
		var col4 = currentRow.find("td:eq(3)").text();
		var col5 = currentRow.find("td:eq(4)").text();
		var col6 = currentRow.find("td:eq(5)").text();
		var col7 = currentRow.find("td:eq(6)").text();

		document.getElementById("customer_id").value = col1;
		document.getElementById("name").value = col2;
		document.getElementById("phone").value = col3;
		document.getElementById("freight").value = col4;
		document.getElementById("countryR").value = col5;
		document.getElementById("countryR").click();
		document.getElementById("stateR").value = col6;
		document.getElementById("stateR").click();
		document.getElementById("cityR").value = col7;
	});
});
$(document).ready(function () {
	$("#dataTable").on("click", ".delete", function () {
		var currentRow = $(this).closest("tr");
		$("#confirm").click(function () {
			currentRow.remove();
		});
	});
});
