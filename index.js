$(function () {
    var $username = $('#username'),
        $tel = $('#tel'),
        $pwd = $('#pwd'),
        $code = $('#code'),
        $getCode = $('#get-code'),
        $btn = $('#btn');
    $username.focusout(function () {
        if(!testUsername('#username')) $username.select();
    });
    $tel.focusout(function () {
        if(!testTel('#tel')) $tel.select();
    });
    $pwd.focusout(function () {
        if(!testPwd('#pwd')) $pwd.select();
    });
    $code.focusout(function () {
        if(!testCode('#code')) $code.select();
    });
    $getCode.click(function(){
        var num = 30,
            timer;
        $getCode.attr('disabled',true);
        alert("获取验证码"); 
        timer = setInterval(function(){
            num--;
            if(num === 0){
                clearInterval(timer);
                $getCode.val('获取验证码');
                $getCode.removeAttr('disabled');
            }
            else{
                $getCode.val('获取验证码('+num+'s)');
            }
        },1000);
    });
    $btn.click(function(){
        if(!testUsername('#username') || !testPwd('#pwd') || !testTel('#tel') || !testCode('#code')){
            return;
        }
            
        else{
            alert('注册成功！');
        }
    })
    function testUsername(field){
        var $data = $(field),
            $msg = $(field + '-validation-message');
        if($data.val() === ''){
            $msg.html('用户名不能为空！')
            $data.select();
            return false
        }
        if( /^[0-9]+.?[0-9]*$/.test($data.val())){
            $msg.html('用户名仅支持中英文、数字和下划线且不能仅为数字！')
            $data.select();
            return false
        }
        if(!/^[A-Za-z0-9_\u4e00-\u9fa5]+$/gi .test($data.val())){
            $msg.html('用户名仅支持中英文、数字和下划线且不能仅为数字！')
            $data.select();
            return false
        }
        $msg.html('')
        return true
    };
    function testTel(field){
        var $data = $(field),
            $msg = $(field + '-validation-message');
        if($data.val() === ''){
            $msg.html('手机号不能为空！')
            $data.select();
            return false
        } 
        if(!/^[1][3,4,5,7,8][0-9]{9}$/ .test($data.val())){
            $msg.html('手机号不符合要求！')
            $data.select();
            return false
        }
        $msg.html('');
        return true
    }
    function testPwd(field){
        var $data = $(field),
            $msg = $(field + '-validation-message');
        if($data.val() === ''){
            $msg.html('密码不能为空！')
            $data.select();
            return false
        }
        if(!/[a-zA-Z0-9 ]\w{7,14}/gi.test($data.val())){
            $msg.html('密码设置不符合要求！')
            $data.select();
            return false
        }
        $msg.html('');
        return true
    }
    function testCode(field){
        var $data = $(field),
            $msg = $(field + '-validation-message');
        if($data.val() === ''){
            $msg.html('验证码不能为空！')
            $data.select();
            return false
        }
        $msg.html('');
        return true
    }
})