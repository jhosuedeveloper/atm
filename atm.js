$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

//

var balanceChecking =0;
var balanceSavings =0;





var inputChecking = $('#checking .input');
var inputSavings   = $('#savings .input');
var outputChecking = $('#checking .balance')
var outputSavings = $('#savings .balance')



$('#checking .deposit').on('click',depositChecking)

function depositChecking (){
    $('#checking').removeClass('zero');
  balanceChecking += parseInt(inputChecking.val());
  outputChecking.text("$" + balanceChecking);
}

$('#checking .withdraw').on('click',withdrawChecking)

function withdrawChecking(){
  if(inputChecking.val()<=balanceChecking){
  balanceChecking -= parseInt(inputChecking.val());
  outputChecking.text("$" + balanceChecking);
}else overdraft(parseInt(inputChecking.val()))}


$('#savings .deposit').on('click',depositSavings)

function depositSavings (){
  balanceSavings += parseInt(inputSavings.val());
  outputSavings.text("$" + balanceSavings);
}

$('#savings .withdraw').on('click',withdrawSavings)

function withdrawSavings(){
  if(inputSavings.val()<=balanceSavings){
  balanceSavings -= parseInt(inputSavings.val());
  outputSavings.text("$" + balanceSavings);
}}



function overdraft(num){
  if(num<=(balanceChecking + balanceSavings)){
    balanceSavings -= num - balanceChecking;
    balanceChecking =0;
    outputChecking.text("$" + balanceChecking);
    outputSavings.text("$" + balanceSavings);  }
  else {  $('#checking').addClass('zero');}}
