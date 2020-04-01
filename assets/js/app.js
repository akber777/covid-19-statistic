$(document).ready(function(){



	let xhr=new XMLHttpRequest()



	xhr.onload=()=>{


		let response=xhr.responseText;


		let changeJson=JSON.parse(response);



		for(val in changeJson)
		{
			

			for(keys in changeJson[val])
			{

				$('tbody').append(`<tr><td>${changeJson[val][keys].Country}</td><td>${changeJson[val][keys].NewConfirmed}</td><td>${changeJson[val][keys].TotalConfirmed}</td><td>${changeJson[val][keys].TotalDeaths}</td></tr>`)
			}

		}	


	}



	xhr.open('GET','https://api.covid19api.com/summary',true);


	xhr.send();



	$("#search").on("keyup", function() {
		let value = $(this).val().toLowerCase();
		$("#mytables tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});



	function Getval(){

		let tableVal=document.querySelectorAll('#mytables td');


		for( let i=0;i < tableVal.length;i++)
		{
			if(tableVal[i].innerText=='undefined')
			{
				tableVal[i].style.display='none'


			}
		}

	}


	

	setTimeout(Getval,2500)


})


