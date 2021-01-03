function loadIndex() {
    createHeader();

    createArticleList();

    showInterests();
}

//post Data
var articleData = [{
    "user": {
        "username": "",
        "profile_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwZ2AmXcwAriD5G77QHxuFvxqJV6YZ_sCWg&usqp=CAU",
        "profile_bio": "Emily Stubbs In Fitness And In Healty"
    },
    "post": {
        "title": "I Exercised Twice a day for 75day-Here'sWhat Happened",
        "subtitle": "I felt invincible",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwZ2AmXcwAriD5G77QHxuFvxqJV6YZ_sCWg&usqp=CAU",
        "time": "Nov 21.9 min read"
    }
},

{
    "user": {
        "username": "",
        "profile_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRtu9x86OcdwTZU9HeZx39XUL8VSYjy1bpw&usqp=CAU",
        "profile_bio": "Web Desing with html and css",
    },
    "post": {
        "title": "I Exercised Twice a day for 75day-Here'sWhat Happened",
        "subtitle": "I felt invincible",
        "img": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
        "time": "Nov 21.9 min read"
    }
},

{
    "user": {
        "username": "",
        "profile_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0KF6cNZQJCzwTOhEiOlhCk12-HDUHX0QiQ&usqp=CAU",
        "profile_bio": "Agile Web Development With Rails 6"
    },
    "post": {
        "title": "I Exercised Twice a day for 75day-Here'sWhat Happened",
        "subtitle": "I felt invincible",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0KF6cNZQJCzwTOhEiOlhCk12-HDUHX0QiQ&usqp=CAU",
        "time": "Nov 21.9 min read"
    }
}
]

function createArticleList() {
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