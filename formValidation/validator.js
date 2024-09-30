//blur có nghĩa là khi bỏ chuột ra khỏi input box.
function Validator(options) {
    function validate (inputElement, rule) {
        //display error message
        var errorMessage = rule.test(inputElement.value)
        var errorElement = inputElement.parentElement.querySelector('.form-message');
        if (errorMessage) {
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add("invalid")
            // khi có lỗi sẽ thêm 1 class invalid border màu đỏ và thêm dòng error từ test function
        }else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove("invalid");
        }
    }

    // lấy element của form
    var formElement = document.querySelector(options.form)
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                inputElement.onblur = function() {
                    //value: inputElement.value
                    //test func: rule.test
                    validate(inputElement, rule)
                    // tìm tử thag cha tới thag con là form message
                }
            }
        });
    }
}

//Nguyên tắc của các rules
//1. khi có lỗi trả ra message lỗi
//2. khi hợp lệ không trả ra gì cả(undefined)
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            // trim để loại bỏ mọi dấu cách khoảng cách
            return value.trim() ? undefined : "Please fill this field";
            // if (value) return undefined else 'Please fill this field' //kiem tra xem nguoi dung co nhap chua
        }
    }
}


Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function () {

        }
    }
    }
