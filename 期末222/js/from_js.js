$(function () {
  $('#username').blur(function () { 
    var username = $(this).val();
    // 空判断
    if (username==''){
      $('#warn_user').text('用户名不能为空')
      $('#warn_user').css('color','red')
      return false;
    }
    if(!isUsername(username)) {
      $('#warn_user').text('以英文开头，4-16个英文字母、数字或下划线')
      $('#warn_user').css('color','red')
    }
    else{
      $('#warn_user').text('*')
      $('#warn_user').css('color','black')
    }
   
  })
  $('#email').blur(function () { 
    var email = $(this).val();
    // 空判断
    if (email==''){
      $('#warn_email').text('电子邮箱不能为空')
      $('#warn_email').css('color','red')
      return false;
    }
    if(!isEmail(email)) {
      $('#warn_email').text('电子邮箱错误')
      $('#warn_email').css('color','red')
    }
    else{
      $('#warn_email').text('*')
      $('#warn_email').css('color','black')
    }
   
  })

  $('#id_num').blur(function () { 
    var id_num = $(this).val();
    // 空判断
    if (id_num==''){
      $('#warn_id_num').text('身份证不能为空')
      $('#warn_id_num').css('color','red')
      return false;
    }
    if(!isId_num(id_num)) {
      $('#warn_id_num').text('身份证错误')
      $('#warn_id_num').css('color','red')
    }
    else{
      $('#warn_id_num').text('*')
      $('#warn_id_num').css('color','black')
    }
   
  })
  $('#phone').blur(function () { 
    var phone = $(this).val();
    // 空判断
    if (phone==''){
      $('#warn_phone').text('手机号不能为空')
      $('#warn_phone').css('color','red')
      return false;
    }
    if(!isPhone(phone)) {
      $('#warn_phone').text('手机号错误')
      $('#warn_phone').css('color','red')
    }
    else{
      $('#warn_phone').text('*')
      $('#warn_phone').css('color','black')
    }
   
  })
  
  $('#psd1').blur(function () { 
    var psd1 = $(this).val();
    // 空判断
    if (psd1==''){
      $('#warn_psd1').text('密码不能为空')
      $('#warn_psd1').css('color','red')
      return false;
    }
    if(!isPsd11(psd1)) {
      $('#warn_psd1').text('英文，字母，下画线，且长度在6-24个字符')
      $('#warn_psd1').css('color','red')
    }
    else{
      $('#warn_psd1').text('*')
      $('#warn_psd1').css('color','black')
    }
   
  })
  $('#psd2').blur(function () { 
    var psd1=$('#psd1').val();
    var psd2 = $(this).val();
    // 空判断
    if (psd2==''){
      $('#warn_psd2').text('密码不能为空')
      $('#warn_psd2').css('color','red')
      return false;
    }
    if (psd2!=psd1){
      $('#warn_psd2').text('两次密码不同')
      $('#warn_psd2').css('color','red')
      return false;
    }

    if(!isPsd22(psd2) ){
      $('#warn_psd2').text('密码号错误')
      $('#warn_psd2').css('color','red')
    }
    else{
      $('#warn_psd2').text('*')
      $('#warn_psd2').css('color','black')
    }
   
  })

  $('#submit_data').click(function(){
		var user_str=$('#username').val();
		var psd1=$('#psd1').val();
		var psd2=$('#psd2').val();
		var email=$('#email').val();
		var id_num=$('#id_num').val();
		var phone=$('#phone').val();
		var str='';
		if(user_str==''||!isUsername(user_str)){
			str+='用户名输入不正确!\n';
		}
		if(email==''||!isEemail(email)){
			str+='电子邮箱输入不正确!\n';
		}
		if(psd2==''||!isPsd2(psd1,psd2)){
			str+='请再次输入密码!\n';
		}
		if(!isId_num(id_num)){
			str+='身份证号码格式不正确!\n';
		}
		if(!isPhone(phone)){
			str+='电话号码格式不正确!';
		}
		if(str !=''){
			alert(str);
			return false;
		}
		
	})

  //$('#submit_data').click(function(){
    //var user_str = $('#usname').val();
    //var psd1 = $('#psd1').val();
    //var psd2 = $('#psd1').val();
    //var str = '';
    // if (user_str==''){
    //   str +='用户名为空\n';
    // }
    // else if (!isUsername(user_str)){
    //   str +='用户名格式错误\n'
    // }
    // if (psd1==''){
    //   str +='密码为空\n';
    // }
    //    if (psd1!=psd2)
    // {
    //   str +='两次密码不同\n';
    // }
    // else if (!isPsd2(psd1,psd2)){

    //   str +='密码格式对\n'
    // }
    // // if (user_str == ''|| !isUsername(user_str))
    // // {
    // //    str += '用户名输入不正确';

    // //   }
    
    // //   if (psd2==''||!isPsd2(psd1,psd2)){
    // //      str +='重复密码不正确';
    // //   }
  //     if (str !='') {
  //       alert(str);
  //       return false;
  //     }
  // })
})