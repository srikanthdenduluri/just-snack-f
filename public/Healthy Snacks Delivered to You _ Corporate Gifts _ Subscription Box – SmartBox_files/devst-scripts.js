//$(document).ready(function(){

  $('.template-collection .devPrdTitle').each(function(){
  
  	var thistitle = $(this).text();
    
    if(thistitle == 'Build a Custom Box'){
    	$(this).parent().parent().find('.product-btm-button').hide();
    	var thatLink = $(this).parent().attr('href');
      	var addButton = '<a href="'+thatLink+'" class="dev btn--initial">Select Options</a>';
      	$(this).after(addButton);
    }
    
  }); 
  
  
  //filters price from product title
  
  $('.SdevPrdTitle').each(function(){
	var prdTitle = $(this).text();
	prdTitle = prdTitle.split('$');
	prdTitle = prdTitle[0];
	//update the text
	$(this).text(prdTitle); 
  });
  
  $('.grid-link__title.devPrdTitle').each(function(){
	var prdTitle = $(this).text();
	prdTitle = prdTitle.split('<br />');
	prdTitle = prdTitle[0];
	//update the text
	$(this).text(prdTitle); 
  });
  
 
  
  
  //add collection title
    var myUrl = document.URL;
    var url_part = myUrl.indexOf('manage_subscription_box');

    if(url_part > 0){
      $('.main-content').addClass('wrapper');
      
      //progress value
      $('.h2.bold-ro__choice-progress').after('<div class="h2 dev-progress">$<span class="devThreshold">29.99</span> credit remaining.</div>');
      $('.h2.dev-progress').after('<div class="h2 dev-checkout">You have reached maximum credit limit.</div>');
      
      
      //pricing calculation
      
      var onLoadprice = 0;
      
      $('.bold-product__title').each(function(){
		  var currentDom = $(this);
          var myText = $(this).text();
          myText = myText.split(' ');
          for(var i = 0; i < myText.length; i++){
              if(myText[i].indexOf('$') >= 0){
                  var freshPrice = myText[i].replace('$', '');
                  freshPrice = parseFloat(freshPrice);
                  console.log(freshPrice);
                  
				  console.log(currentDom.text());
                
                currentDom.parent().parent().find('.bold-product__quantity-val').attr('data-devPrice', freshPrice);
              }
          }
      });
      
      $('.bold-product__quantity input').each(function(){
		$(this).val(0);
	  });

      
      //disable decrease button
      $('.bold-product__quantity-decrease').addClass('disable-me');
      //needs filtering later
      
      //on click bold qty increase/decrease
      $(document).on('click', '.bold-product__quantity span', function(){
        debugger;
      	var itsPrice = $(this).parent().find('input').attr('data-devPrice');
        var itsQty = $(this).parent().find('input').val();
        
        if(itsQty == 0){
            $(this).parent().find('.bold-product__quantity-decrease').addClass('disable-me');
        	//$('.bold-product__quantity-decrease').addClass('disable-me');
        }else{
        	$(this).parent().find('.bold-product__quantity-decrease').removeClass('disable-me');
        }
        
        //var itsTotal = parseFloat(itsPrice)*parseFloat(itsQty);
        var itsTotal = parseFloat(itsPrice);
        
        var currentThreshold = $('.devThreshold').text();
        currentThreshold = parseFloat(currentThreshold).toFixed(2);
        
        if($(this).hasClass('bold-product__quantity-increase')){
        	var remaining = currentThreshold - itsTotal;
        }
        
        if($(this).hasClass('bold-product__quantity-decrease')){
        	var remaining = parseFloat(currentThreshold) + parseFloat(itsTotal);
        }
        
        
        
        remaining = remaining.toFixed(2);
        //update threshold
        $('.devThreshold').text(remaining);
        
        //show hide
        if(remaining <= 0 ){
        	$('.dev-progress').slideUp();
          	$('.bold-ro__choices-save').removeAttr('disabled');
          	$('.dev-checkout').slideDown();
        }else{
        	$('.dev-progress').slideDown();
          	$('.bold-ro__choices-save').attr('disabled', 'disabled');
          	$('.dev-checkout').slideUp();
        }
        remaining = parseFloat(remaining);
        if(remaining == -0.01){
        	$('.bold-product__quantity-increase').addClass('disable-me');
        }
        if(remaining < -0.01){
        	$('.bold-product__quantity-increase').addClass('disable-me');
        }
        if(remaining > -0.01){
        	$('.bold-product__quantity-increase').removeClass('disable-me');
        }
        
      });
    } // if bold page ends
  
});