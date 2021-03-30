$(document).ready(function(){
    $(".add-row").click(function(){
        var period = $("#period").val();
        var goal = $("#goal").val();
        var donation = $("#donation").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + period + "</td><td>" + goal + "</td><td>" + donation + "</td></tr>";
        $("table tbody").append(markup);
    });

    // Find and remove selected table rows
    $(".delete-row").click(function(){
        $("table tbody").find('input[name="record"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
            }
        });
    });
});