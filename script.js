function passwordGenrator(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()_-+={}[]:";',.<>/?';
    var passwordLengeth = 14;
    var password = "";
    for(var i=0; i<passwordLengeth; i++){
        var randomPassword = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomPassword, randomPassword + 1);
    }
    document.getElementById('password').value = password;
}
function copy(){
    var copy_paste = document.getElementById('password');
    copy_paste.select();
    copy_paste.setSelectionRange(0,9999);
    document.execCommand("copy");
}