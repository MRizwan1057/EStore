$(function() {
    console.log("hogya");

    loadProducts();

    $("#createProduct").click(createProduct);
    // updateProduct();
    // deleteProduct();
    // getSingleProduct();

    $("#register").click(registerUSer);

    $("#login").click(loginUser);
});

// user login

function loginUser() {
    $("#login-form").submit((event) => {
        event.preventDefault();
        // console.log(event);
        var email = $("#email").val();
        var password = $("#password").val();

        var data = { email, password };
        // alert("hogya!!!");
        console.log(data);

        $.ajax({
            url: "http://localhost:8080/api/users/signin",
            method: "POST",
            data: data,
            success: (res) => {
                console.log(res);

                //  document.cookies = "username=John Doe";
                console.log(document.cookies);
                // console.log(res);
            },
            error: (err) => {
                console.log(err);
            },
        });
        //var data = $("#login_form :input").serializeArray();
        //alert('Handler for .submit() called.');
    });
}

// user sign up

function registerUSer() {
    $("#register-form").submit((event) => {
        event.preventDefault();
        // console.log(event);
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var data = { name, email, password };
        // alert(name);
        // console.log(data);

        $.ajax({
            url: "http://localhost:8080/api/users/signup",
            method: "POST",
            data: data,
            success: (res) => {
                console.log("succeed");
                console.log(res);
                $("#regd-succ").show();
            },
            error: (err) => {
                console.log("Error on Server");
            },
        });
        //var data = $("#login_form :input").serializeArray();
        //alert('Handler for .submit() called.');
    });
}

function createProduct() {
    $("#createPro-form").submit((event) => {
        event.preventDefault();
        var name = $("#name").val();
        var price = $("#price").val();
        var soldQty = $("#soldQty").val();

        var data = { name, price, soldQty };
        console.log(data);
        $.ajax({
            url: "http://localhost:8080/api/products",
            method: "POST",
            data: data,
            success: () => {
                console.log("product created");
            },
            error: () => {
                console.log("error on server");
            },
        });
    });
}

// function updateProduct() {

//     console.log("Update Called");
//     // $("#btnAdd").prop("disabled", true);
//     var btn = $(this);
//     var id = btn.attr("data-id");

//     $.ajax({
//         url: "http://localhost:8080/api/products" + id,
//         method: "PUT",
//         data: data,

//         // success: function(person) {
//         //     console.log(person);
//         //     $("#addName").val(person.name);
//         //     $("#addAge").val(person.age);

//         //     $("#male").prop("checked", person.gender);
//         //     $("#female").prop("checked", !person.gender);
//         //     $("#addCity").val(person.city);
//         //     $("#hiddenid").append(person._id);
//         //     // $("#btnUpdate").show();
//         //     $("#btnUpdate").prop("disabled", false);
//         //     $("#btnReset").prop("disabled", false);
//         // },
//     });
// }

// function deleteProduct() {
//     console.log("Delete Called");
//     var btn = $(this);
//     var id = btn.attr("data-id");

//     $.ajax({
//         url: "http://localhost:8080/api/products" + id,
//         method: "DELETE",
//         success: loadapis,
//         error: function() {
//             console.log("Error on Server...");
//         },
//     });
// }

// function getSingleProduct() {
//     console.log('get 1 called');

//     var btn = $(this);
//     var id = btn.attr("data-id");
//     console.log(id);

//     $.ajax({
//         url: "http://localhost:8080/api/products" + id,
//         method: "GET",
//         success: loadapis,
//         error: function() {
//             console.log("Error on Server...");
//         },
//     });
// }

//
function loadProducts() {
    $.ajax({
        url: "http://localhost:8080/api/products",
        method: "GET",
        success: getProducts,
        error: function handleError() {
            $(".myNav").html("");
            $(".myNav").html("Error on server");
        },
    });
}

function getProducts(product) {
    // console.log(product);
    //  var id = product[0]._id;
    //  console.log(id);

    $(".myNav").val("");
    for (var i = 0; i < product.length; i++) {
        $(".myNav")
            .append(`<div class="card-deck text-center"><div class="card border-secondary"><span class="bg-warning">-54%</span><br><img src="./images/usb.png" alt="" class="card-image"> <hr>    <div class="card-body text-center">  <h4 class="card-title text-center">${product[i].name}</h4>   <h5 class="card-text">${product[i].price} PKR</h5> <h6 class="bg-white">${product[i].soldQty} Sold</h6> <br> <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span> <br><br><button class="btn btn-outline-warning text-primary">  Order Now</button><button class="btn btn-outline-danger" onclick="fgfgf()" data_id="${product[i]._id}">Add to Cart</button> <h5>${product[i]._id} </h5></div></div></div>`);
    }
}

function fgfgf(event) {
    var btn = $(this);
    var id = btn.attr("data_id");
    console.log(id);
}