$(function() {
    $('#my_img').mouseover(function () { 
      $('#my_img').attr('src','images/02.jpg')
    }).mouseout(function () { 
      $('#my_img').attr('src','images/01.jpg')
    }) 
  $('#increase').click(function () { 
    var w= $('#my_img').attr('width');
    var h= $('#my_img').attr('height');
    w=parseInt(w);
    h=parseInt(h);
    w+=10;
    h+=10;
    if (w >=300) {
      alert('最大了');
    }
    $('#my_img').attr('width',w);
    $('#my_img').attr('height',h);
    })
    $('#decrease').click(function () { 
      var w= $('#my_img').attr('width');
      var h= $('#my_img').attr('height');
      h=parseInt(h);
      w=parseInt(w);
      w-=10;
      h-=10;
      if (w <=200) {
        alert('最小了');
      }
      $('#my_img').attr('width',w);
      $('#my_img').attr('height',h);
      })

      //网页秒表
      var dateObj=new Date();
      var now_date=dateObj.toLocaleDateString();
      var now_time=dateObj.toLocaleTimeString();
      $('#now_date').text(now_date);
      $('#now_time').val(now_time);
      var num=0;
      var tm=null;
      $('#start_time').click(function(){
        start_time();
      })
      $('#stop_time').click(function(){
        stop_time();
      })
      function start_time() {
        tm = setInterval(fn,1000);
      }
      function stop_time() {
        clearInterval(tm);
      }
      
     function fn() {
      var dateObj2=new Date();
      var new_date=dateObj2.toLocaleDateString();
      var new_time=dateObj2.toLocaleTimeString();
      $('#now_date').text(new_date);
      $('#now_time').val(new_time);
     }
    //修改内容
    $('#change_btn').click(function() {
      var row=$('#row').val();
      var col=$('#col').val();
      row=parseInt(row);
      col=parseInt(col);
      var tb_obj=$('#tb')[0];
      tb_obj.rows[row-1].cells[col-1].innerText=$('#new_text').val();

    })
})