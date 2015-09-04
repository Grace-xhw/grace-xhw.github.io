
    $(document).ready(function () {
     $("#demoForm").validate({
            rules: {
                username: {
                    required: true,
                    minlength: 2,
                    maxlength: 10
                },
                password: {
                    required: true,
                    minlength: 2,
                    maxlength: 16
                },
            },
            messages: {
                username: {
                    required: '请输入用户名',
                    minlength: '用户名不能小于2个字符',
                    maxlength: '用户名不能超过8个字符',
                    remote: '用户名不存在'
                },
                password: {
                    required: '请输入密码',
                    minlength: '密码不能小于2个字符',
                    maxlength: '密码不能超过10个字符'
                },
            },

            highlight: function(element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).fadeOut().fadeIn();
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
            },
            submitHandler: function (form) {
                // data={};
                // data.name=$("#username").val();
                // data.pwd=$("#password").val();
                // $.post(url,data,function(data,status){
                // alert("数据：" + data + "\n状态：" + status);
                // })
                console.log($(form).serialize())
            }
        });

        $("#btn-login").click(function () {
            console.log($("#demoForm").valid() ? "填写正确" : "填写不正确");
        });
    });