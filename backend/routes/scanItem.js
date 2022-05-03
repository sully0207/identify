//Importing packages
const router = require("express").Router();
//importing authentication
const auth = require("../authentication/verifyAuth");
//importing values
const User = require("../models/User");
const Item = require("../models/Item");
/*
    # !!AUTH REQUIRED!!
    #   - uses verifyAuth middleware to get user ID from verified user.
    # Route for changing comparing item data to user data
    # takes a body with the following,
    # itemID - objectID for item class
*/
router.post("/",auth,async (req,res)=>{
    //validate throughout, and send appropriate responses
    //check if itemID is provided
    if(req.body.itemID){
        //look for item with the id
        try{//mongoose doesnt accept id searches with strings that are too short, therefore a try catch must be use to catch the error instead of an if statement
            const item = await Item.findOne({_id:req.body.itemID});
            const user = await User.findOne({_id:req.user});
            const matchingAllergens = compareItemtoUserAllergen(item.allergensContained,user.keyAllergens);//get the matching allergens
            const matchingIngredients = compareIngredients(item.ingredients,user.customKeywords);//find ingredients matching keywords
            //Add the scanned item to the users scan history
            //If it is already in the history, remove it and add it to the top.
            user.itemHistory.pull(item._id);
            user.itemHistory.push(item._id);
            user.save();
            console.log(user.itemHistory);
            res.json({
                veganMatching:((item.isVegan)&&(user.isVegan)),
                vegetarian:((item.isVegetarian)&&(user.isVegetarian)),
                matchingIngredients:matchingIngredients,
                matchingAllergens:matchingAllergens,
                item:item,
            });
        }catch(err){
            res.status(400).json({error:[{type:"item",message:"Invalid item tag scanned",}]});
        }
    }else{
        res.status(400).json({error:[{type:"item",message:"No item ID received",}]});
    }
});

/*
  # Method that take in two keyAllergens objects and returns the intersection of both for every item in object
  # Purpose is to find matching allergens between an item and a user
*/
const compareItemtoUserAllergen = (itemAllergens,userAllergens) =>{
    const matchingAllergens = {
        celery:(itemAllergens.celery&&userAllergens.celery),
        cerealsContainingGluten:{
            wheat:(itemAllergens.cerealsContainingGluten.wheat&&userAllergens.cerealsContainingGluten.wheat),
            rye:(itemAllergens.cerealsContainingGluten.rye&&userAllergens.cerealsContainingGluten.rye),
            barley:(itemAllergens.cerealsContainingGluten.barley&&userAllergens.cerealsContainingGluten.barley),
            oats:(itemAllergens.cerealsContainingGluten.oats&&userAllergens.cerealsContainingGluten.oats),
        },
        crustaceans:(itemAllergens.crustaceans&&userAllergens.crustaceans),
        eggs:(itemAllergens.eggs&&userAllergens.eggs),
        fish:(itemAllergens.fish&&userAllergens.fish),
        lupin:(itemAllergens.lupin&&userAllergens.lupin),
        milk:(itemAllergens.milk&&userAllergens.milk),
        molluscs:(itemAllergens.molluscs&&userAllergens.molluscs),
        mustard:(itemAllergens.mustard&&userAllergens.mustard),
        peanuts:(itemAllergens.peanuts&&userAllergens.peanuts),
        sesame:(itemAllergens.sesame&&userAllergens.sesame),
        soybeans:(itemAllergens.soybeans&&userAllergens.soybeans),
        sulphureDioxideAndSulphites:(itemAllergens.sulphureDioxideAndSulphites&&userAllergens.sulphureDioxideAndSulphites),
        treeNuts:{
            almond:(itemAllergens.treeNuts.almond&&userAllergens.treeNuts.almond),
            hazelnut:(itemAllergens.treeNuts.hazelnut&&userAllergens.treeNuts.hazelnut),
            walnut:(itemAllergens.treeNuts.walnut&&userAllergens.treeNuts.walnut),
            cashewNut:(itemAllergens.treeNuts.cashewNut&&userAllergens.treeNuts.cashewNut),
            pecanNut:(itemAllergens.treeNuts.pecanNut&&userAllergens.treeNuts.pecanNut),
            brazilNut:(itemAllergens.treeNuts.brazilNut&&userAllergens.treeNuts.brazilNut),
            pistachioNut:(itemAllergens.treeNuts.pistachioNut&&userAllergens.treeNuts.pistachioNut),
            macadamiaNut:(itemAllergens.treeNuts.macadamiaNut&&userAllergens.treeNuts.macadamiaNut),
            QueenslandNut:(itemAllergens.treeNuts.QueenslandNut&&userAllergens.treeNuts.QueenslandNut),
        }
    };
    return matchingAllergens;
};
/*
  # Method that take in two string arrays, one of ingredients, and one of keywords
  # Purpose is to find matching keywords in the ingredients and return those keywords
*/
const compareIngredients = (ingredients,customKeywords) =>{
    const matchingIngredients = [];
    ingredients.map((ingredient)=>{
        customKeywords.map((keyword)=>{
            if((ingredient.toLowerCase()).includes(keyword.toLowerCase())){
                matchingIngredients.push(ingredient);
            }
        });
    });
    return matchingIngredients;
}


//Export router
module.exports = router;