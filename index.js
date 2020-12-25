function createArticleList() {
    var leftDiv = document.getElementsByClassName("left-div")[0];


    var itemDiv = createDiv("item-div");

    //<div class="item-inner-left-div"></div>
    var itemInnerLeftDiv = createInnerLeftCart();

    //<div class="item-inner-left-img-div"></div>

    var itemInnerLeftImgDiv = createInnerLeftImgCart();

    itemDiv.appendChild(itemInnerLeftDiv);
    itemDiv.appendChild(itemInnerLeftImgDiv);

    leftDiv.appendChild(itemDiv);
}

function createInnerLeftCart() {
    var itemInnerLeftDiv = createDiv("item-inner-left-div");

    var innerItemDiv = createDiv("item-inner-div");
    var img = document.createElement("img");
    img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRtu9x86OcdwTZU9HeZx39XUL8VSYjy1bpw&usqp=CAU");
    img.setAttribute("alt", "logo");
    var h4 = document.createElement("h4");
    h4.innerText = "Emily Stubbs In Fitness And In Healty"
    innerItemDiv.appendChild(img);
    innerItemDiv.appendChild(h4);
    itemInnerLeftDiv.appendChild(innerItemDiv);

    var h2 = document.createElement("h2");
    h2.innerText = "I Exercised Twice a day for 75day-Here's What Happened";
    itemInnerLeftDiv.appendChild(h2);

    var h3 = document.createElement("h3");
    h3.innerText = "I felt invincible";
    itemInnerLeftDiv.appendChild(h3);

    var span = document.createElement("span");
    span.innerHTML = "Nov 21 <div> . </div> 9 min read"
    itemInnerLeftDiv.appendChild(span);

    return itemInnerLeftDiv;
}

function createInnerLeftImgCart() {
    var itemInnerLeftImgDiv = createDiv("item-inner-left-img-div");

    var img = document.createElement("img");
    img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOIOkSdoUjc2HMcY2gKRURgSO_YaiTkyE3g&amp;usqp=CAU");
    img.setAttribute("alt", "my-img");
    itemInnerLeftImgDiv.appendChild(img);
    return itemInnerLeftImgDiv;
}

function createDiv(className) {
    var div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
}
//---------------------------------------------------------------------//

function createArticleList() {
    var rightDiv = document.getElementsByClassName("right-div")[0];

    var itemInnerDive = document.createElement("div");
}