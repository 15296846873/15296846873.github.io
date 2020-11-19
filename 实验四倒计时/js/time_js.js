$(function () {
  // 获取当前时间对象
  var dateOBJ = new Date();
  var new_year = dateOBJ.getFullYear();
  var new_month = dateOBJ.getMonth() + 1;
  var new_date = dateOBJ.getDate();

  $("#new_year").val(new_year);
  $("#new_month").val(new_month);
  $("#new_date").val(new_date);

  $("#year").text(new_year);
  $("#month").text(new_month);
  $("#date").text(new_date);
  var tm = null;

  $("#stat_time_btn").click(function () {
    
    if(!sart_time()) {
      alert("时间已经过了！！");
    }
    else{
      tm = setInterval(sart_time,1000);
    }
    
  });
  function sart_time() {
    var now_date = new Date();
    var now_time = now_date.getTime(); //毫秒数
    var year = $("#new_year").val();
    var month = $("#new_month").val();
    var date = $("#new_date").val();

    $("#year").text(year);
    $("#month").text(month);
    $("#date").text(date);
  

    var new_date = new Date(year,month-1,date);
    var new_time =  new_date.getTime(); //毫秒数
    var over_time = (new_time-now_date)/1000;//秒
    

    //换算
    if(over_time > 0){
        // 天数
        var day= Math.floor(over_time/(24*60*60));
        over_time = over_time % (24*60*60);
        //小时
        var hour= Math.floor(over_time/(60*60));
        over_time = over_time % (60*60);
        //分
        var min= Math.floor(over_time/60);
        over_time = over_time % 60;
        //秒
        var second= Math.floor(over_time);
        $("#day").text(NumtoString(day,3));
        $("#hour").text(NumtoString(hour,2));
        $("#min").text(NumtoString(min,2));
        $("#second").text(NumtoString(second,2));
    }
    else{
      if(tm != null){
        clearInterval(tm);
        alert("时间到！")
        return false;
      }else{
        
        return false;
      }
       
    }
    return true;
  }
  //补零函数
  function NumtoString(num,git) {
      var num_str =num + '';
      while(num_str.length<git) {
          num_str = '0'+num_str
      }
      return num_str;
  }

});
