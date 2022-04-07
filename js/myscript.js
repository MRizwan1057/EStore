$(function() {
    console.log("hogya");

    loadProducts();
    $(".myNav").on("click", ".addtocartbtn", fgfgf);

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
        // console.log(data);

        $.ajax({
            url: "http://localhost:8080/api/users/signin",
            method: "POST",
            data: data,
            success: function() {
                console.log("Logged in successfully");
                $("#email").val("");
                $("#password").val("");
                // $("#log-succ").html(`<h6>assdd</h6>`);
                $("#log-succ")
                    .html(`<h5>Logged in Successfully </h5><a href="userDash.html"
                >View Your Profile</a>`);
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
        success: function() {
            $("#name").val("");
            $("#email").val("");
            $("#password").val("");
            $("#regd-succ").html(
                `<h4>Registered Successfully,,,<a href="signin.html"> Sign in !!</a></h4>`
            );
        },
        // loadProducts,
        // (res) => {
        //     console.log("succeed");
        //
        // },
        error: (err) => {
            console.log("Error on Server");
        },
    });
    //var data = $("#login_form :input").serializeArray();
    //alert('Handler for .submit() called.');
}

function createProduct() {
    $("#createPro-form").submit((event) => {
        event.preventDefault();
        var name = $("#productname").val();
        var price = $("#productprice").val();
        var soldQty = $("#productsoldQty").val();
        // var productimg = $('input[type="file"]');
        var productimg = $("#productimg").prop("files")[0];

        var data = { name, price, soldQty, productimg };
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
            .append(`<div class="card-deck text-center"><div class="card border-secondary"><span class="bg-warning">-54%</span><br><img src="${product[i].pimg}" alt="" class="card-image"> <hr>    <div class="card-body text-center">  <h4 class="card-title text-center">${product[i].name}</h4>   <h5 class="card-text">${product[i].price} PKR</h5> <h6 class="bg-white">${product[i].soldQty} Sold</h6> <br> <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span> <br><br><a href="proDetails.html" class="btn btn-outline-warning text-primary">View Product</a><button class="btn btn-outline-danger addtocartbtn" data_id="${product[i]._id}">Add to Cart</button></div></div></div>`);
    }
}

function fgfgf(event) {
    var btn = $(this);
    console.log(btn);

    var id = btn.attr("data_id");

    console.log(id);
}