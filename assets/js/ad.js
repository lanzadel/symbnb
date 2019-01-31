$("#add-image").click(function(){
    const index = +$('#widgets-counter').val();
    console.log(index);
    const temp = $('#annonce_images').data('prototype').replace(/_name_/g, index);

    $('#annonce_images').append(temp);
    $("#widgets-counter").val(index + 1);

    handleDeleteButtons();
});

function updateCounter()
{
    const count = +$('#annonce_images div.form-group').length;
    $('#widgets-counter').val(count);
}

function handleDeleteButtons() {
    $('button[data-action="delete"]').click(function () {
        const target = this.dataset.target;
        $(target).remove();
    });
}
updateCounter();

handleDeleteButtons();
