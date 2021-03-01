// alert("You don't have the license to use the code.")
let count_price1=0;
function change_text() {
    let cli = document.getElementById("cart1");
    if(cli.innerHTML == "Add to Trolly"){
        cli.innerHTML = '<a href="/trolly.html" style="text-decoration: none;" onclick="price()">Check Trolly</a>';
        alert("Item added to Trolly");
        count_price1+= parseFloat((document.getElementById("prod1")).innerHTML);
        console.log(count_price1);
        // document.getElementById("choice1").innerHTML = document.getElementById("pro1").innerHTML;
    }
    // else{
    //     cli.innerHTML = "Add to Trolly";
    // }
}

function change_text1() {
    let cli = document.getElementById("cart2");
    if(cli.innerHTML == "Add to Trolly"){
        cli.innerHTML = '<a href="/trolly.html" style="text-decoration: none;">Check Trolly</a>';
        alert("Item added to Trolly");
        count_price1+= parseFloat((document.getElementById("prod2")).innerHTML);
        console.log(count_price1);
        document.getElementById("choice2").innerHTML = document.getElementById("pro2").innerHTML;

    }
    // else{
    //     cli.innerHTML = '<a href="/trolly.html"></a>';
    // }
}

function change_text2() {
    let cli = document.getElementById("cart3");
    if(cli.innerHTML == "Add to Trolly"){
        cli.innerHTML = '<a href="/trolly.html" style="text-decoration: none;">Check Trolly</a>';
        alert("Item added to Trolly");
        count_price1+= parseFloat((document.getElementById("prod3")).innerHTML);
        console.log(count_price1);
        document.getElementById("choice3").innerHTML = document.getElementById("pro3").innerHTML;
    }
    // else{
    //     cli.innerHTML = '<a href="/trolly.html"></a>';
    // }
}
let cost=document.getElementById("no_trolly");
function price(){

    if(price == 0) {
        cost.innerHTML = "Your Trolly is empty";
    }
    else {
        cost.innerHTML = "Your total order cost is " + toString(count_price1);
    }

}
