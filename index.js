function loadIndex() {
    createHeader();
    GetArticeList();

    //getArticleList();

    //showInterests();
};

function GetArticeList() {
    var div = document.getElementsByClassName("section3")[0];
    var box1 = document.createElement("div");
    box1.setAttribute("class", "box-item1");

    var itemDiv = document.createElement("div");
    itemDiv.setAttribute("class", "item");

    var leftItemDiv = document.createElement("div");
    leftItemDiv.setAttribute("class", "left-item");

    var logoimgDiv = document.createElement("div");
    logoimgDiv.setAttribute("class", "logo-img-div");

    var img = document.createElement("img");
    img.setAttribute("src", "#");


    var h4 = document.createElement("h4");
    h4.setAttribute("class", "#");
    h4.innerText = "Insider";


    div.appendChild(box1);
    box1.appendChild(itemDiv);
    itemDiv.appendChild(leftItemDiv);
    leftItemDiv.appendChild(logoimgDiv);
    logoimgDiv.appendChild(img);
    logoimgDiv.appendChild(h4);
};



















function getArticleList() {
    var url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@KonradDaWo";
    /*var req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();
    req.onreadystatechange = function() {
        if(this.readyState == 4) {
            console.log(typeof this.responseText);
            var response = JSON.parse(this.responseText);
            return response;
        }
    }
    */
    fetch(url)
        .then(response => response.json())
        .then(data => createArticleList(data));
}

function createArticleList(articleData) {
    console.log(articleData);
    var leftDiv = document.getElementsByClassName("left-div")[0];

    for (var i = 0; i < articleData.length; i++) {

        var itemDiv = createDiv("item-div");

        //<div class="item-inner-left-div"></div>
        var itemInnerLeftDiv = createInnerLeftCart(articleData[i]);

        //<div class="item-inner-left-img-div"></div>

        var itemInnerLeftImgDiv = createInnerLeftImgCart(articleData[i].post.img);

        itemDiv.appendChild(itemInnerLeftDiv);
        itemDiv.appendChild(itemInnerLeftImgDiv);

        leftDiv.appendChild(itemDiv);
    }
}



function createInnerLeftCart(data) {
    var itemInnerLeftDiv = createDiv("item-inner-left-div");

    var innerItemDiv = createDiv("item-inner-div");
    var img = document.createElement("img");
    img.setAttribute("src", data.user.profile_pic);
    img.setAttribute("alt", "logo");
    var h4 = document.createElement("h4");
    h4.innerText = data.user.profile_bio;
    innerItemDiv.appendChild(img);
    innerItemDiv.appendChild(h4);
    itemInnerLeftDiv.appendChild(innerItemDiv);

    var h2 = document.createElement("h2");
    h2.innerText = data.post.title;
    itemInnerLeftDiv.appendChild(h2);

    var h3 = document.createElement("h3");
    h3.innerText = data.post.subtitle;
    itemInnerLeftDiv.appendChild(h3);

    var span = document.createElement("span");
    span.innerHTML = data.post.time;
    itemInnerLeftDiv.appendChild(span);


    return itemInnerLeftDiv;
}

function createInnerLeftImgCart(articleImgLink) {
    var itemInnerLeftImgDiv = createDiv("item-inner-left-img-div");

    var img = document.createElement("img");
    img.setAttribute("src", articleImgLink);
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

    for (var i = 0; i < interestList.length; i++) {
        var boxDiv = createInterestListItem(interestList[i]);
        rightItemDiv.appendChild(boxDiv);
    }

    var footer = document.createElement("h4");
    footer.innerText = "See all topics";
    opl
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

    for (var i = 0; i < navMenus.length; i++) {
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