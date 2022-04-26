var a = document.getElementsByClassName("edit_data");

for (var i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function () {

		var b = this.parentNode.parentNode.cells[1].textContent;
		document.getElementById("edit_date").value = b;
		
		var c = this.parentNode.parentNode.cells[2].textContent;
		document.getElementById("edit_reference").value = c;

		let d = this.parentNode.parentNode.cells[3].textContent;
		document.getElementById("edit_sender").value = d;

		let e = this.parentNode.parentNode.cells[4].textContent;
		document.getElementById("edit_rname").value = e;

		let f = this.parentNode.parentNode.cells[5].textContent;
		document.getElementById("edit_rphone").value = f;

		let g = this.parentNode.parentNode.cells[6].textContent;
		document.getElementById("edit_freight").value = g;

		let h = this.parentNode.parentNode.cells[7].textContent;
		document.getElementById("edit_booking_type").value = h;

		let i = this.parentNode.parentNode.cells[8].textContent;
		document.getElementById("edit_delivery_type").value = i;

		let l = this.parentNode.parentNode.cells[10].textContent;
		document.getElementById("edit_status").value = l;

		let m = this.parentNode.parentNode.cells[11].textContent;
		document.getElementById("edit_total").value = m;

		let n = this.parentNode.parentNode.cells[12].textContent;
		document.getElementById("edit_creator").value = n;

		let o = this.parentNode.parentNode.cells[14].textContent;
		document.getElementById("countryR").value = o;

		let p = this.parentNode.parentNode.cells[15].textContent;
		document.getElementById("stateR").value = p;

		let q = this.parentNode.parentNode.cells[16].textContent;
		document.getElementById("cityR").value = q;

		let r = this.parentNode.parentNode.cells[17].textContent;
		document.getElementById("eidt_house_address").value = r;

		var options = document.getElementById("countryR").options;
		for (var ct = 0; ct < options.length; ct++) {
			if (options[ct].text == o) {
				options[ct].selected = true;
				document.getElementById("countryR").click();	
			}
		}
		var options2 = document.getElementById("stateR").options;
		for (var st = 0; st < options2.length; st++) {
			if (options2[st].text == p) {
				options2[st].selected = true;
				document.getElementById("stateR").click();
			}
		}
		var options3 = document.getElementById("cityR").options;
		for (var cy = 0; cy < options3.length; cy++) {
			if (options3[cy].text == q) {
				options3[cy].selected = true;
			}
		}

	
		let rChange = document.getElementById("edit_freight");
		let optionCountry = document.createElement("option");
		optionCountry.value = g;
		optionCountry.text = g;
		rChange.add(optionCountry, 0);
		rChange.remove(1);

		var drop = document.getElementById("edit_freight");

		[].slice.call(drop.options).map(function (a) {
			if (this[a.value]) {
				drop.removeChild(a);
			} else {
				this[a.value] = 1;
			}
		}, {});
		
		let z = this.parentNode.parentNode.cells[10].getElementsByTagName('select')[0].value;
		document.getElementById("edit_status").value = z;

		let rC = document.getElementById("edit_status");
		let optionC = document.createElement("option");
		optionC.value = l;
		optionC.text = l;
		rC.add(optionC, 0);
		rC.remove(0);

		var drop = document.getElementById("edit_status");

		[].slice.call(drop.options).map(function (a) {
			if (this[a.value]) {
				drop.removeChild(a);
			} else {
				this[a.value] = 1;
			}
		}, {});

		var edit_delivery_type = document.getElementById("edit_delivery_type").value;
	
	if (edit_delivery_type == "Home Delivery") {
		additionalInfo.style.display = "";
	} else {
		additionalInfo.style.display = "none";
	}
	});

}


document.getElementById("edit_delivery_type").addEventListener("change", function () {
		var e = document.getElementById("edit_delivery_type");
		var deliveryType = e.options[e.selectedIndex].text;
		var g = document.getElementById("additionalInfo");
		if (deliveryType == "Home Delivery") {
			g.style.display = "";
		} else {
			g.style.display = "none";
		}
	});