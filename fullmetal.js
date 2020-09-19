function changesel() {
			f = document.book;
			if (f.address_prov.value == "prov") {
				f.address_city.length = ;
				f.address_city.option[].text = '';
				f.address_city.option[].value = '';
			}
	else if (f.address_prov.value == 'central') {
		f.address_city.length = 1;
		f.address_city.option[1].text = "Central City";
		f.address_city.option[1].value = "1";
	}
	else if (f.address_prov.value == "south") {
		f.address_city.length = 4;
		f.address_city.option[0].text = "South City";
		f.address_city.option[0].value = "1";
		f.address_city.option[1].text = "Rush Valley";
		f.address_city.option[1].value = "2";
		f.address_city.option[2].text = "Dublith";
		f.address_city.option[2].value = "3";
		f.address_city.option[3].text = "Fotcett";
		f.address_city.option[3].value = "4";
	}
	else if (f.address_prov.value == 'east') {
		f.address_city.length = 6;
		f.address_city.option[1].text = "East City";
		f.address_city.option[1].value = '1';
		f.address_city.option[2].text = "Liore";
		f.address_city.option[2].value = "2";
		f.address_city.option[3].text = "New Optain";
		f.address_city.option[3].value = "3";
		f.address_city.option[4].text = "Youswell";
		f.address_city.option[4].value = "4";
		f.address_city.option[5].text = "Resembool";
		f.address_city.option[5].value = "5";
		f.address_city.option[6].text = "Cameron";
		f.address_city.option[6].value = "6";
	}
	else if (f.address_prov.value == "west") {
		f.address_city.length = 3;
		f.address_city.option[1].text = "West City";
		f.address_city.option[1].value = "1";
		f.address_city.option[2].text = "Pendleton";
		f.address_city.option[2].value = "2";
		f.address_city.option[3].text = "Wellebley";
		f.address_city.option[3].value = "3";
	}
	else if (f.address_prov.value == "north") {
		f.address_city.length = 2;
		f.address_city.option[1].text = "North City";
		f.address_city.option[1].value = "1";
		f.address_city.option[2].text = "Fisk";
		f.address_city.option[2].value = "2";
	}
}