function buka () {
	var nama = prompt('Masukan nama : ');
	var ulang = false;
	var tahap = 1;


	while (ulang == false) {
		ulang = confirm(nama +' usahain harus sholat 5 waktu yaa');
		if (ulang == false & tahap == 1) {
			tahap = 2;
			alert('usahain yaaa ' + nama);
		}
		else if (ulang == false & tahap == 2) {
			tahap = 3;
			alert('iiii harus di usahain yaa ' + nama);
		}
		else if (ulang == false & tahap == 3) {
			tahap = 1;
			alert(':( harus di usahain yaaaaa ' + nama);
		}
	}

	alert('alhamdulillah :)');

	var ulang = false;
	var tahap = 1;

	while (ulang == false) {
		ulang = confirm(nama +' Kalo ada masalah atau kenapa napaa bilang yaa ke isal');
		if (ulang == false & tahap == 1) {
			tahap = 2;
			alert('Harus bilang yaa ' + nama);
		}
		else if (ulang == false & tahap == 2) {
			tahap = 3;
			alert('Usahain bilang yaa ' + nama);
		}
		else if (ulang == false & tahap == 3) {
			tahap = 1;
			alert(':( Usahain harus bilang yaaaaa ' + nama);
		}
	}

	alert('makaciiiii ' + nama);

	var ulang = false;
	var tahap = 1;

	while (ulang == false) {
		ulang = confirm(nama +' Harus nurut yaa apa kata isal hihihihi');
		if (ulang == false & tahap == 1) {
			tahap = 2;
			alert(':( nurut yaaaaa ' + nama);
		}
		else if (ulang == false & tahap == 2) {
			tahap = 3;
			alert('iiiii harus nurut yaaa ' + nama);
		}
		else if (ulang == false & tahap == 3) {
			tahap = 1;
			alert(':( Kalo engga nurut nanti isal malaahhh ' + nama);
		}
	}

	alert('makaciiiii ' + nama +' udah mau nurut ke isal');
 return;
}