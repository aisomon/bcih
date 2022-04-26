$(document).ready(function () {
	document.getElementById("bookingNumber").value =
		sessionStorage.getItem("ref");
	document.getElementById("dates").value = sessionStorage.getItem("date");
	document.getElementById("booking").value =
		sessionStorage.getItem("packingNumber");
});

//Add row
$(document).ready(function () {
	var tbody = $("#row").children("tbody");

	var table = tbody.length ? tbody : $("#row");
	var count = 1;
	$(".create").click(function () {
		count++;
		table.append(`
		<script>
		$(document).ready(function () {
			$(".my-select").select2();
});
</script>
    `);
	});
});


// delete row
function myFunc(count) {
	var tableName = document.getElementById("row");
	var totalRowCount = tableName.rows.length;
	if (totalRowCount == "2") {
		alert("Can not delete this row");
	} else {
		var cellNumber = document.getElementsByClassName(`anchors${count}`)[0].id;
		console.log(cellNumber);
		// var num = cellNumber.match(/\d+/);
		var num = cellNumber.replace(/[^0-9]/g, "");
		console.log(num);
		tableName.deleteRow(num);
		document.getElementById("weight_units1").click();
	}
}
// new calculation
function myFunction(count) {
	var numProduct = document.getElementById(`no_of_p${count}`).value;
	var numWeight = document.getElementById(`weight${count}`).value;
	var numOfCustomCharge = document.getElementById(
		`customes_charge${count}`
	).value;
	var numDiscount = document.getElementById(`discount${count}`).value;

	// total weight table field
	var totalWeightTableField = Number(numProduct) * Number(numWeight);
	document.getElementById(`totalWeight_${count}`).innerHTML =
		totalWeightTableField;

	// gram to KG
	var e = document.getElementById(`weight_units${count}`);
	var unitsName = e.options[e.selectedIndex].text;
	if (unitsName == "GRAM") {
		var convertToGram = Number(numProduct) / 1000;
		var totalWeightTableField = Number(convertToGram) * Number(numWeight);
		document.getElementById(`totalWeight_${count}`).innerHTML =
			totalWeightTableField;
	}

	// subtotalField
	document.getElementById(`subtotal${count}`).innerHTML =
		Number(numOfCustomCharge) * Number(numProduct) - Number(numDiscount);

	// row wise price calculation
	var table = document.getElementById("row");

	var i = 1;
	var sum = 0;
	while (i < table.rows.length) {
		sum += parseFloat(table.rows[i].cells[7].innerHTML);
		i++;
	}
	var sumAll = sum;
	document.getElementById("subCalShow").value = sumAll;

	// gross weight
	var rowWeight = document.getElementById("subCalShow2").value;
	var rowPrice = document.getElementById("subCalShow").value;
	var grossWeight = document.getElementById("grossWeight").value;

	var amountWeight = Number(grossWeight) * Number(rowWeight);
	document.getElementById("subCalShow").value =
		Number(amountWeight) + Number(rowPrice);

	// volume weight
	var rowPrice2 = document.getElementById("subCalShow").value;
	var volumeWeight = document.getElementById("volumeWeight").value;
	var volumeWeightInput = document.getElementById("volumeWeightInput").value;

	var amountWeight2 = Number(volumeWeight) * Number(volumeWeightInput);
	document.getElementById("subCalShow").value =
		Number(amountWeight2) + Number(rowPrice2);

	var cValue = document.getElementById(`customes_charge${count}`).value;
	var ab = document.getElementById(`subtotal${count}`).innerHTML;
	if (ab == 0) {
		if (cValue == "0.0") {
			document.getElementById("addRow").style.display = "block";
		} else if (cValue == null) {
			document.getElementById("addRow").style.display = "none";
		} else {
			document.getElementById("addRow").style.display = "none";
		}
	} else {
		document.getElementById("addRow").style.display = "block";
	}
}
// add row button
document.getElementById("addRow").addEventListener("click", function () {
	document.getElementById("addRow").style.display = "none";
});

$(document).ready(function () {
	$(".my-select").select2();
});

function myF(count) {
	var amount = document.getElementById(`customes_charge${count}`);
	var number = document.getElementById(`product_${count}`).selectedOptions[0]
		.text;

	var table = document.getElementById("mytab");
	for (i = 0; i < table.rows.length; i++) {
		var tNum = table.rows[i].cells[0].innerHTML;
		var t = table.rows[i].cells[0];
		if (tNum == number) {
			var currentRow = $(t).closest("tr");

			var col2 = currentRow.find("td:eq(1)").text();
			amount.value = col2;
		}
	}
}

