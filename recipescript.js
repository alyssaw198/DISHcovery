
filters = ["nut-free", "lactose-free", "gluten-free", "vegan", "vegetarian"];

class Food{
    _html;
    constructor(name, vegan, nonut, nodairy, nogluten, veg){
        this.name = name;
        this.vegan = vegan;
        this.nonut = nonut;
        this.nodairy = nodairy;
        this.nogluten = nogluten;
        this.veg = veg;
        this.html;
    }
}

const post1 = new Food('Ham sandwich', false, true, true, false, false);
const post2 = new Food('Peanut-butter and jelly sandwich',true, false, true, false, true );
const post3 = new Food('Spaghetti and meatballs with cheese',false, true, false, false, false);
const post4 = new Food('Oven roasted sword-fish', false, true, true, false, false);
const post5 = new Food('Thai lettuce wraps', false, false, true, true, false);
const post6 = new Food('Veggie noodle stirfry', false, false, false, false, true);
const post7 = new Food('Birria tacos', false, true, true, false, false);
const post8 = new Food('Sweet potato rice brownies', false, true, false, true, true);
const post9 = new Food('Hamburger', false, true, true, false, true);
const post10 = new Food('Tofu burrito with cheese', false, true, false, false, true);
const post11 = new Food('Chocolate corn-bread', true, true, true, true, true);


var savePosts = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11];

for (var i = 0; i < savePosts.length; i ++){
    const post = document.createElement("div");
    const node = document.createTextNode(savePosts[i].name);
    post.appendChild(node);
    post.className = "recipe";
    var id = "post" + i
    post.setAttribute("id", id);
    
    const element = document.getElementById("recipes");
    element.appendChild(post);
    savePosts[i].html = document.getElementById(id);
}



document.addEventListener('DOMContentLoaded', () => {

    const vegan = document.getElementById("vegan");
    
    const veg = document.getElementById("veg");

    const nogluten = document.getElementById("nogluten");

    const nodairy = document.getElementById("nodairy");

    const nonut = document.getElementById("nonut");

    const check = document.getElementById("filters");

    
    //if false and post has true, stay ,
    //if true and post has true, stay,
    //if true and post has false, leave,
    //if false and post has false, stay.

    //leave if post has false and the filter is true,

    check.addEventListener('change', function(){
        console.log('hoogoabooga');
        for (let i =0; i<savePosts.length; i++){
            if ((savePosts[i].vegan ==false && vegan.checked) ||
                (savePosts[i].veg ==false && veg.checked) ||
                (savePosts[i].nogluten == false && nogluten.checked) ||
                (savePosts[i].nodairy == false && nodairy.checked) ||
                 (savePosts[i].nonut == false && nonut.checked)){

                savePosts[i].html.style.display = "none";
            } else {
                savePosts[i].html.style.display = "inline-flex";
            }
        }
        })

})  