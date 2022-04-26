
//Add row with search option
$(document).ready(function () {
	var tbody = $("#row").children("tbody");

	var table = tbody.length ? tbody : $("#row");
	var count = 1;
	$(".create").click(function () {
		count++;
		table.append(`
			<script>
			$(document).ready(function () {
		$(".my-select").selectpicker();
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
		var num = cellNumber.match(/\d+/);
		tableName.deleteRow(num);
		//document.getElementById("discount1").click();
	}
}
// new calculation
function myFunction(count) {
	//var numProduct = document.getElementById(`no_of_p${count}`).value;
	//var numWeight = document.getElementById(`weight${count}`).value;
	var numOfCustomCharge = document.getElementById(
		`customes_charge${count}`
	).value;
	var numDiscount = document.getElementById(`discount${count}`).value;
	//var homeCharge = document.getElementById("home_charge").value;
	//var districtCharge = document.getElementById("d_charge").value;
	//var packagingCharge = document.getElementById("p_charge").value;
	//var additionalCharge = document.getElementById("a_charge").value;

	// total weight table field
	var totalWeightTableField = Number(numOfCustomCharge) - Number(numDiscount);
	document.getElementById(`totalWeight_${count}`).innerHTML =
		totalWeightTableField;

	//checking the custom charge if it is 0
	// if (numOfCustomCharge == 0.0){
	// 	numOfCustomCharge = 1;
	// }

	// subtotalField
	//document.getElementById(`subtotal${count}`).innerHTML = Number(numDiscount);
	

	// row wise price calculation
	var table = document.getElementById("row");

	var i = 1;
	var sum = 0;
	while (i < table.rows.length) {
		sum += parseFloat(table.rows[i].cells[3].innerHTML);
		i++;
	}
	var sumAll = sum 
	document.getElementById("subCalShow").value = sumAll;

	// row wise weight calculation
	// var j = 1;
	// var tWeight = 0;
	// while (j < table.rows.length) {
	// 	tWeight += parseFloat(table.rows[j].cells[4].innerHTML);
	// 	j++;
	// }
	// document.getElementById("subCalShow2").value = tWeight;

	// new row add button
	// var cValue = document.getElementById(`customes_charge${count}`).value;
	// var ab = document.getElementById(`subtotal${count}`).innerHTML;
	// if (ab == 0) {
	// 	if (cValue == "0.0") {
	// 		document.getElementById("addRow").style.display = "block";
	// 	} else if (cValue == null) {
	// 		document.getElementById("addRow").style.display = "none";
	// 	} else {
	// 		document.getElementById("addRow").style.display = "none";
	// 	}
	// } else {
	// 	document.getElementById("addRow").style.display = "block";
	// }
}


// // add row button
// document.getElementById("addRow").addEventListener("click", function () {
// 	document.getElementById("addRow").style.display = "none";
// });

// // charges

// // checkbox
// $("input:checkbox").on("click", function () {
// 	var $box = $(this);
// 	if ($box.is(":checked")) {
// 		var group = "input:checkbox[name='" + $box.attr("name") + "']";
// 		$(group).prop("checked", false);
// 		$box.prop("checked", true);
// 	} else {
// 		$box.prop("checked", false);
// 	}
// });

//checkbox enable disable
$(function () {
	$("#home_delivery").click(function () {
		if ($(this).is(":checked")) {
			$("#home_delivery_charge :input").removeAttr("");
		} else {
		}
	});
});



// search
$(document).ready(function () {
	$(".my-select").selectpicker();
});

// intelInput

// This section for selecting product with custom charge
