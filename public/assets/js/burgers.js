// Make sure we wait to attach our handlers until the DOM is fully loaded.

//==============FUNCTION TO GET DATA FROM USER==============

// make sure we wait to attach our handlers until the DOM is loaded
$(function() {

    //this function manages when a burger is eaten
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data('willEat');

        var isEaten = {
            devoured: newDevoured
        };

        //PUT request 
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isEaten
        }).then(
            function() {
                console.log("changed to ", newDevoured);
                location.reload(); //reload the page to get updated list
            }
        ) // ==> PUT end

    }); // ==> end partials

    // create a burger
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        
        //get the vlaues to make a new burger
        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim() ? 0 : 1
        };

        //POST request
        $.ajax("/api/burgers", {
           type: "POST",
            data: newBurger
        }).then (
            function() {
                console.log("created a new burger");
                location.reload();
            }
        );  // ==> POST end
    }); // ==> CREATE burger end
}) // ==> end function 