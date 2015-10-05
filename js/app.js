$(document).ready(function(){
	$.ajax({
    	type : "GET",
     	dataType : "json",
     	url : "https://www.quandl.com/api/v3/datasets/NSE/ZENSARTECH.json?auth_token=KZCPhKDFd5JZwGdUJyUY",
     	success: function(data){
           console.log(data.dataset.data);
     	}
    });

    
});

