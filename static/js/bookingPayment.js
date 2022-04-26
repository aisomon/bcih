$(document).ready(function () {
	$("#myModal").modal("show");
});
$(document).ready(function () {
	$(".my-select").selectpicker();
});

$(function () {
	$("#modal_btn").click(function () {
		var desire = $("#booking_value option:selected").val();
		if (desire != "") {
			$("#myModal").modal("hide");
		}
	});
});

//for selecting bank option
function bankChoose(){
		var e = document.getElementById("chooseBank");
		var value = e.options[e.selectedIndex].value;
		if (value == "Bank Transfer") {
			document.getElementById("chooseBankList").style.display = "";
			document.getElementById("transaction_note").style.display = "";
		} else {
			document.getElementById("chooseBankList").style.display = "none";
			document.getElementById("transaction_note").style.display = "none";
		}
	}

function bookingNumber(){
		var bookingId = document.getElementById("booking_id");
		var bookingNum = document.getElementById("bk_number");
		var amount = document.getElementById("total_amount");
		var phone = document.getElementById("sn_phone");
		var number = document.getElementById("booking_value").selectedOptions[0].text;
	
		var table = document.getElementById("mytab1");
		for (i = 0; i < table.rows.length; i++) {
			var tNum = table.rows[i].cells[1].innerHTML;
			var t = table.rows[i].cells[1];
			if (tNum == number) {
				var currentRow = $(t).closest("tr");
				
				var col1 = currentRow.find("td:eq(0)").text();
				var col2 = currentRow.find("td:eq(1)").text(); // get current row 1st TD value
				var col3 = currentRow.find("td:eq(2)").text(); // get current row 2nd TD
				var col4 = currentRow.find("td:eq(3)").text(); // get current row 2nd TD

				bookingId.value = col1;
				bookingNum.value = col2;
				phone.value = col3;
				amount.value = col4;

				pass(col1);
				
			}
	}
}

function pass(col1) {
	document.getElementById("printReceipt").href =
		"/booking/booking_receipt/" + col1;
	console.log(col1);
}

