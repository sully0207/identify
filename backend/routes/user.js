//Importing packages
const router = require("express").Router();
//importing authentication
const auth = require("../authentication/verifyAuth");
//importing values
const User = require("../models/User");

/**
    # !!AUTH REQUIRED!!
    #   - uses verifyAuth middleware to get user ID from verified user.
    # Update the users key allergens
    # takes the keyallergens field from the user model
    # all parameters are booleans
    # needs all parameters for accurate updating, returns back the whole user
 */
router.put("/editKeyAllergies",auth,async (req,res)=>{
    const keyAllergens = {
        celery:((req.body.celery)?(true):(false)),
        cerealsContainingGluten:{
            wheat:((req.body.cerealsContainingGluten.wheat)?(true):(false)),
            rye:((req.body.cerealsContainingGluten.rye)?(true):(false)),
            barley:((req.body.cerealsContainingGluten.barley)?(true):(false)),
            oats:((req.body.cerealsContainingGluten.oats)?(true):(false)),
        },
        crustaceans:((req.body.crustaceans)?(true):(false)),
        eggs:((req.body.eggs)?(true):(false)),
        fish:((req.body.fish)?(true):(false)),
        lupin:((req.body.lupin)?(true):(false)),
        milk:((req.body.milk)?(true):(false)),
        molluscs:((req.body.molluscs)?(true):(false)),
        mustard:((req.body.mustard)?(true):(false)),
        peanuts:((req.body.peanuts)?(true):(false)),
        sesame:((req.body.sesame)?(true):(false)),
        soybeans:((req.body.soybeans)?(true):(false)),
        sulphureDioxideAndSulphites:((req.body.sulphureDioxideAndSulphites)?(true):(false)),
        treeNuts:{
            almond:((req.body.treeNuts.almond)?(true):(false)),
            hazelnut:((req.body.treeNuts.hazelnut)?(true):(false)),
            walnut:((req.body.treeNuts.walnut)?(true):(false)),
            cashewNut:((req.body.treeNuts.cashewNut)?(true):(false)),
            pecanNut:((req.body.treeNuts.pecanNut)?(true):(false)),
            brazilNut:((req.body.treeNuts.brazilNut)?(true):(false)),
            pistachioNut:((req.body.treeNuts.pistachioNut)?(true):(false)),
            macadamiaNut:((req.body.treeNuts.macadamiaNut)?(true):(false)),
            QueenslandNut:((req.body.treeNuts.QueenslandNut)?(true):(false)),
        },
    };
    let user = await User.findOne({_id:req.user});
    user.keyAllergens = keyAllergens;
    user.save();
    res.json({keyAllergens:user.keyAllergens});
});

/**
    # !!AUTH REQUIRED!!
    #   - uses verifyAuth middleware to get user ID from verified user.
    # Update the users vegan status
    # takes isVegan as boolean
    # needs all parameters for accurate updating, returns back the whole user
 */
router.put("/editIsVegan",auth,async (req,res)=>{
    const isVegan = ((req.body.isVegan)?(true):(false));
    let user = await User.findOne({_id:req.user});
    user.isVegan = isVegan;
    user.save();
    res.json({isVegan:user.isVegan});
});

/**
    # !!AUTH REQUIRED!!
    #   - uses verifyAuth middleware to get user ID from verified user.
    # Update the users vegetarian status
    # takes isVegetarian as boolean
    # needs all parameters for accurate updating, returns back the whole user
 */
router.put("/editIsVegetarian",auth,async (req,res)=>{
    const isVegetarian = ((req.body.isVegetarian)?(true):(false));
    let user = await User.findOne({_id:req.user});
    user.isVegetarian = isVegetarian;
    user.save();
    res.json({isVegetarian:user.isVegetarian});
});

/**
    # !!AUTH REQUIRED!!
    #   - uses verifyAuth middleware to get user ID from verified user.
    # Update the users custom keywords
    # takes string array called customKeywords in body
    # needs all parameters for accurate updating, returns back the whole user
*/
router.put("/editCustomKeywords",auth,async (req,res)=>{
    if(req.body.customKeywords){
        const customKeywords = (req.body.customKeywords);
        let user = await User.findOne({_id:req.user});
        user.customKeywords = customKeywords;
        user.save();
        res.json(customKeywords);
    }else{
        res.status(400).json({error:[{type:"Custom keywords",message:"no list given.",}]});
    }
});

/**
    # !!AUTH REQUIRED!!
    #   - uses verifyAuth middleware to get user ID from verified user.
    # Update the users custom keywords
    # takes string array called customKeywords in body
    # needs all parameters for accurate updating, returns back the whole user
*/
router.put("/clearHistory",auth, async (req,res)=>{
        let user = await User.findOne({_id:req.user});
        user.itemHistory = [];
        user.save();
        res.json({itemHistory:user.itemHistory});
});

/**
        # !!AUTH REQUIRED!!
        #   - uses verifyAuth middleware to get user ID from verified user.
        # Get user data from user takes in data query which is a string of requests seperated by commas
        # e.g. ?data=isVegan,itemHistory,customKeywords
        # only allowed requests are in variable "allowedRequest variable"
        #returns the data,
 */
router.get("/getUserData",auth, async (req,res)=>{
    const requests = req.query.data.split(",");
    const allowedRequests = ["username","keyAllergens","email","isVegan","isVegetarian","itemHistory","customKeywords"];
    try{
        const response = {};
        const user = await User.findOne({_id:req.user}).populate("itemHistory");
        response['_id'] =  user._id;
        //go through all the requests
        requests.map((request)=>{
            allowedRequests.map((allowedRequest)=>{
                //check if the request is allowed
                if(allowedRequest==request){
                    //if request is valid get the info from the user
                    response[request] = user[request];
                }
            });
        });
        res.json(response);//return the response
    }catch(err){
        res.status(500)
    }
});

//Export router
module.exports = router;
