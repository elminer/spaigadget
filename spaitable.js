$(function() {
  var COLLAT_AMOUNT = 0.02;
  var A2_COST = 250;
  var UVHO_COST = 350;
  var LOCAL_COST = 100;

  var sellValue = parseFloat($('th .nowrap:nth-child(1)').html().replace(/,/g,''));
  var buyValue = parseFloat($('th :nth-child(3)').html().replace(/,/g,''));
  var rawVolume = $('th :nth-child(5)').text();
  var volume = parseFloat(rawVolume.substr(0, rawVolume.length - 2).replace(/[^\d\.]/g,''));
  var sellCollat = sellValue * COLLAT_AMOUNT;
  var buyCollat = buyValue * COLLAT_AMOUNT;

  $.formatNumber = function (str) { 
    x = str.split('.'); 
    x1 = x[0]; x2 = x.length > 1 ? '.' + x[1] : ''; 
    var rgx = /(\d+)(\d{3})/; 
    while (rgx.test(x1)) { 
        x1 = x1.replace(rgx, '$1' + ',' + '$2'); 
    } 
    return x1 + x2;
  };

  $.formatNumberToString = function (num) {
    return $.formatNumber(num.toFixed(2).toString());
  }

  $('#a2NoCollatReward').text($.formatNumberToString(volume * A2_COST));
  $('#a2SellReward').text($.formatNumberToString(volume * A2_COST + sellCollat));
  $('#a2BuyReward').text($.formatNumberToString(volume * A2_COST + buyCollat));

  $('#uvhoNoCollatReward').text($.formatNumberToString(volume * UVHO_COST));
  $('#uvhoSellReward').text($.formatNumberToString(volume * UVHO_COST + sellCollat));
  $('#uvhoBuyReward').text($.formatNumberToString(volume * UVHO_COST + buyCollat));

  $('#localNoCollatReward').text($.formatNumberToString(volume * LOCAL_COST));
  $('#localSellReward').text($.formatNumberToString(volume * LOCAL_COST + sellCollat));
  $('#localBuyReward').text($.formatNumberToString(volume * LOCAL_COST + buyCollat));

  $('.sellAmount').each(function(i, val){
    $(val).text($.formatNumberToString(sellValue));
  });

  $('.buyAmount').each(function(i, val){
    $(val).text($.formatNumberToString(buyValue));
  });

  $('.copyable').click(function() {
    $(this).text(parseFloat($(this).text().replace(/,/g,'')));
    var range, selection;

    if (window.getSelection && document.createRange) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(this);
        selection.removeAllRanges();
        selection.addRange(range);
    } else if (document.selection && document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(this);
        range.select();
    }
    var currentElement = this;
    $('.copyable').each(function(i, v){
      if(v != currentElement) {
        $(v).text($.formatNumber($(this).text()));
      }
    });
  }).blur(function() {
    alert('sss');
  });
});