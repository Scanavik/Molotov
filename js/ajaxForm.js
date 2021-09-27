$("#formx").submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "formx.php",
        data: $("#formx").serialize(),
        success: function(data) {
            $('#formx').remove(); //скрываем форму после отправки 
            $('#results').html(data); //показываем сообщение об успехе вместо неё 
        }
    });
});