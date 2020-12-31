function loadIndex() {
    createHeader();

    createArticleList();

    showInterests();
}

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
var interestList = ["self", "Relationship", "Data science", "Programming", "Productivity", "Politics", "Health", "Technology"];

function showInterests() {
    var rightDiv = document.getElementsByClassName("right-div")[0];
    var rightItemDiv = createDiv("right-item-div");
    var pDiv = createDiv("p");
    rightItemDiv.appendChild(pDiv);

    var p = document.createElement("p");
    p.innerText = "DISCOVER More OF WHAT MATTERS TO You";
    pDiv.appendChild(p);

    //createInterestList()

    for(var i = 0; i < interestList.length; i++) {
        var boxDiv = createInterestListItem(interestList[i]);
        rightItemDiv.appendChild(boxDiv);
    }

    var footer = document.createElement("h4");
    footer.innerText = "See all topics";

    rightItemDiv.appendChild(footer);
    rightDiv.appendChild(rightItemDiv);
}

function createInterestListItem(title) {
    var boxDiv = createDiv("box-div");
    var a = document.createElement("a");
    a.setAttribute("href", "#");
    var h4 = document.createElement("h4");
    h4.innerText = title;
    a.appendChild(h4);
    boxDiv.appendChild(a);
    return boxDiv;
}

//----------------------------------//
var navMenus = ["Our Story", "Membership", "write", "Sign In"];

function createHeader() {
    var headerDiv = document.getElementsByClassName("header-div")[0];

    //<div class="one-div"></div>
    var oneDiv = createDiv("one-div");
    var h2 = document.createElement("h2");
    h2.innerText = "Medium";
    oneDiv.appendChild(h2);

    var twoDiv = createDiv("two-div");
    
    var ul = document.createElement("ul");

    for(var i = 0; i < navMenus.length; i++) {
        var li = creatTitle(navMenus[i]);
        ul.appendChild(li);
    }
  
    twoDiv.appendChild(ul);
    
    var threeDiv = createDiv("three-div");
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn");
    btn.innerText = "Get Started";
    threeDiv.appendChild(btn);

    headerDiv.appendChild(oneDiv);
    headerDiv.appendChild(twoDiv);
    headerDiv.appendChild(threeDiv);
}

function creatTitle(item) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.innerText = item;
    a.setAttribute("herf", "#");
    li.appendChild(a);
    return li;


}
//---------------------------------//
/*
function createHeader() {
    var sectionDiv = document.getElementsByClassName("section1")[0];

    var mainDiv = createDiv("main-div");
    var navDiv = createDiv("navDiv");
    var h2 = document.createElement("h2");
    h2.innerText = "Medium";
    var ul = document.createElement("ul");
    var li = creatTitle("Our Story");
    ul.appendChild(li);
    var li = creatTitle("Membership");
    ul.appendChild(li);

    var li = creatTitle("write");
    ul.appendChild(li);

    var li = creatTitle("sing In");
    ul.appendChild(li);

    //getStarted button
    var button = document.createElement("button");
    button.innerText = "Get Started";
    button.setAttribute("class", "btn");

    ul.appendChild(button);

    sectionDiv.appendChild(mainDiv);
    mainDiv.appendChild(navDiv);
    navDiv.appendChild(h2);
    navDiv.appendChild(ul);
    //createInterestList()

}
function creatTitle(item) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.innerText = item;
    a.setAttribute("herf", "#");
    li.appendChild(a);
    return li
}  */