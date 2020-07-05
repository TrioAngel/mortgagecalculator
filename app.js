
		document.getElementById("range1").addEventListener('touchmove', f);
		function f(e){
			$('#rangeval1').val(e.target.value);
		}

		document.getElementById("range2").addEventListener('touchmove', s);
		function s(e){
			$('#rangeval2').val(e.target.value);
		}

		$('#range1').mousemove(function(e){
			$('#rangeval1').val(e.target.value);
		});
		$('#range2').mousemove(function(e){
			$('#rangeval2').val(e.target.value);
		});



		$('#calc').mouseup(function(){
			var range1 = $('#rangeval1').val();
			var range2 = $('#rangeval2').val();
			var result1;
			var result2;
			var result3;
			var result4;
			var year = $('#inputState').val();
			var month;
			var months;
			var perMonth;
			var space = ' ';
			var percent = $('#percent').val();
			var width1;
			var width2;

			result1 = range1 - range2;
			if(result1 < 0){
				result1 = 0;
			}


			if(percent <= 0 || percent > 100){
				percent = 0;
			}

			month = year.split(space, 2);
			months =  12 * month[0];

			perMonth = (percent / 12 / 100);

			result2 = Math.round((perMonth * Math.pow((1 + perMonth), months) / (Math.pow((1 + perMonth), months) - 1 )) * result1);

			result3 = result2 * months - result1;
			result4 = result1 + result3;

			width1 = (result1 / result4 * 100);
			width2 = 100 - width1;

			$('#result1').html(result1 + ' руб.');
			$('#result2').html(result2 + ' руб.');
			$('#result3').html(result3 + ' руб.');
			$('#result4').html(result4 + ' руб.');
			$('#range-color').html('<div id="first" style="background-color: #007bff; width:'+ width1 +'% "></div><div id="second" style="background-color: #6c757d; width:'+ width2 +'% "></div>');

		});