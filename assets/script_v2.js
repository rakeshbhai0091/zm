 $("input#name_f-0").addClass("form-control");
 $("input#name_l-0").addClass("form-control");
 $("input#_pass-0").addClass("form-control");
 $("input#save-0").addClass("btn btn-primary btn-block w-100 mt-3");
 $("#grid-subusers > div.am-grid-container > table").addClass("table");


 $("input#email-0").addClass("form-control");
 $("input#login-0").addClass("form-control ");
 $("input#name_f").addClass("form-control");

 $("input#_name-0").addClass("form-control");
 $("input#name_l").addClass("form-control");
 $("input#pass-0").addClass("form-control");
 $("input#_oldpass-0").addClass("form-control");
 $("input#_qf_page-0_next-0").addClass("btn btn-primary btn-block w-100 mt-3");


setInterval(function () {
 $("input#submit-0").addClass("btn btn-primary");
 $("input#discard-0").addClass("btn btn-danger");
 }, 10);

 
 $("input#email-0").attr("required", "true");
 $("input#login-0").attr("required", "true");
 $("input#name_f").attr("required", "true");
 $("input#name_l").attr("required", "true");
 $("input#pass-0").attr("required", "true");


 $("input#amember-login").attr("required", "true");
 $("input#amember-pass").attr("required", "true");
 
$("input#_qf_page-0_next-0").attr('value', 'Create Account');
 $("#login-0").attr("minlength", "6");



setInterval(function () {
	 $('span.show').on('click', function () {
	$(".show-pass").html('<span class="hide">hide</span>');
	$('input#pass-0').attr('type', 'text'); 
	$('input#amember-pass').attr('type', 'text'); 
});
 $('span.hide').on('click', function () {
	$(".show-pass").html('<span class="show">show</span>');
	$('input#pass-0').attr('type', 'password'); 
	$('input#amember-pass').attr('type', 'password'); 
});
	
	}, 10);


if (window.location.toString().includes("profile")) {
 $("input#pass-0").removeAttr("required"); 
 }
 
 if (window.location.toString().includes("aff")) {
 $("#pageWrapper > div.page-body-wrapper > div.page-body > div.container-fluid.dashboard-default > div > h2:nth-child(4)").html(`Your General Affiliate Link<br><div class="card-title">
<a href="https://toolszm.com/aff/aff" style="font-size: 20px;" class="btn waves-effect waves-light btn-rounded btn-outline-info">Affilate Dashborad</a>
<a href="https://toolszm.com/aff/member/stats" style="font-size: 20px;" class="btn waves-effect waves-light btn-rounded btn-outline-info">Affiliate Sales</a>
<a href="https://toolszm.com/aff/member/payout-info" style="font-size: 20px;" class="btn waves-effect waves-light btn-rounded btn-outline-info">Payout Info</a>
<a href="https://toolszm.com/aff/member/payout" style="font-size: 20px;" class="btn waves-effect waves-light btn-rounded btn-outline-info">Payouts</a>
</div>`);
}