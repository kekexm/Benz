// JavaScript Document



var reg = /^((13|14|15|18)\d{9})|(0\d{2,3}-\d{7,8})$/i;
function isphone(mo_phone) {
	if (reg.test(mo_phone)) {
		return true;
	}
	else return false;
}

function tijiaoinfo() {
    var username = $("#username").val();
	if (username.length < 1) {
		alert("请输入姓名");
		$("#username").focus();
		return false;
	}
	var usersex = $("li.sex").children("span.selected").attr("tag");
	var phone = $("#phone").val();
	if (phone.length < 1) {
		alert("请输入手机号码");
		$("#phone").focus();
		return false;
	}
	else
	{
	   if (!isphone(phone)) {
			alert("电话格式不正确");
			$("#phone").focus();
			return false;
		}
	}
	var province = $("#proname").val();  //省
	var city = $("#cityname").val();  //市
	var dealer = $("#dealername").val();  //经销商
	// var send_address = $("#send_address").val();  //邮寄地址
	// if (send_address.length < 1) {
	// 	alert("请输入邮寄地址");
	// 	$("#send_address").focus();
	// 	return false;
	// }

	if(province == ""){
		alert("请选择地址");
		return false;
	}
	var status = $("span[abc='status']").attr("class");
	 _smq.push(['custom','填写信息_提交',username,phone]);
	_hmt.push(['_trackEvent',"填写信息_提交", 'click',username,phone]);
	if (status != "clause") {
 $.ajax({
        url: "http://datastore.inside.01event.com/datastore/2E9F817431634408AE789E32396F3164/save.htm",
        data: {
            username: username,
            mysex: usersex,
            phone: phone,
            province: province,
            city: city,
            dealer: dealer,
            userfrom:'pc'
        },
        type:"post",
        dataType:"jsonp",
        success: function (data) {
      	alert("提交成功!")
      	$(".form").hide();
      	$(".mask").hide();
           
        },
        error : function(){
          
        }
    });

	}
	else {
	    alert("您还没阅读隐私条款");
	}
	return false;
}