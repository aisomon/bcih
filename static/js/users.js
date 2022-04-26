$(function () {
	$("table tr > td:nth-child(5):contains('Admin')")
		.addClass("text-white btn bg-success Actions re")
		.css("font-size", ".9rem");
	$("table tr > td:nth-child(5):contains('Manager')")
		.addClass("text-white btn bg-info Actions re")
		.css("font-size", ".9rem");
	$("table tr > td:nth-child(5):contains('Booking Officer')")
		.addClass("text-white btn bg-warning Actions re")
		.css("font-size", ".9rem");
	$("table tr > td:nth-child(5):contains('Package Controller')")
		.addClass("text-white btn bg-dark Actions re")
		.css("font-size", ".9rem");
});
// edit
$(document).ready(function () {
	$("#dataTable").on("click", ".edit", function () {
		var currentRow = $(this).closest("tr");

		var col1 = currentRow.find("td:eq(1)").text(); // get current row 1st TD value
		var col2 = currentRow.find("td:eq(2)").text(); // get current row 2nd TD
		var col3 = currentRow.find("td:eq(3)").text(); // get current row 3rd TD
		var col4 = currentRow.find("td:eq(4)").text(); // get current row 4rd TD
	
		document.getElementById("name").value = col1;
		document.getElementById("email").value = col2;
		document.getElementById("phone").value = col3;

		let rChange = document.getElementById("role_change2");
		let optionRole = document.createElement("option");
		optionRole.value = col4;
		optionRole.text = col4;
		rChange.add(optionRole, 0);
		rChange.remove(1);

		var drop = document.getElementById("role_change2");
		[].slice.call(drop.options).map(function (a) {
			if (this[a.value]) {
				drop.removeChild(a);
			} else {
				this[a.value] = 1;
			}
		}, {});
	});
});

// delete
$(document).ready(function () {
	$("#dataTable").on("click", ".delete", function () {
		var currentRow = $(this).closest("tr");
		$("#confirm").click(function () {
			currentRow.remove();
		});
	});
});

//password validation 

function passwordVallidate() {
	var newPassword = document.getElementById("new_pass").value;
	var confirmPassword = document.getElementById("conf_pass").value;

	if (newPassword != "" || confirmPassword != "") {
		if (newPassword == confirmPassword) {
			document.getElementById("new_pass").style.borderColor = "green";
			document.getElementById("conf_pass").style.borderColor = "green";
			document.getElementById("passwordChange").style.display = "block";
		} else {
			document.getElementById("passwordChange").style.display = "none";
		}
	} else {
		document.getElementById("new_pass").style.borderColor = "red";
		document.getElementById("conf_pass").style.borderColor = "red";
	}
}