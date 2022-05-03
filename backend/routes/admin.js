/**
    # These are routes only for testing and content creation and will not be used in the actual app
 */

const Item = require("../models/Item");

//Importing packages
const router = require("express").Router();

//Page for creating an item in the database
router.get("/addPost",async (req,res)=>{
    res.render('admin_addPost');
});

//post route for creating an item in the database
router.post("/addPost",async (req,res)=>{
    const ingredients = parseIngredients(req.body.ingredients);
    const item = await Item.create({
        allergensContained:{
            celery:((req.body.celery)?(true):(false)),
            cerealsContainingGluten:{
                wheat:((req.body.wheat)?(true):(false)),
                rye:((req.body.rye)?(true):(false)),
                barley:((req.body.barley)?(true):(false)),
                oats:((req.body.oats)?(true):(false)),
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
                almond:((req.body.almond)?(true):(false)),
                hazelnut:((req.body.hazelnut)?(true):(false)),
                walnut:((req.body.walnut)?(true):(false)),
                cashewNut:((req.body.cashewNut)?(true):(false)),
                pecanNut:((req.body.pecanNut)?(true):(false)),
                brazilNut:((req.body.brazilNut)?(true):(false)),
                pistachioNut:((req.body.pistachioNut)?(true):(false)),
                macadamiaNut:((req.body.macadamiaNut)?(true):(false)),
                QueenslandNut:((req.body.QueenslandNut)?(true):(false)),
            },
        },
        nutrionalData:[{
            perValue:req.body.perValue,
            energyValueKj:req.body.energyValueKj,
            energyValueKcal:req.body.energyValueKcal,
            fat:req.body.fat,
            saturates:req.body.saturates,
            carbohydrates:req.body.carbohydrates,
            sugar:req.body.sugar,
            protein:req.body.protein,
            salt:req.body.salt,
        }],
        ingredients:ingredients,
        name:req.body.name,
        description:req.body.description,
        netContent:req.body.netContent,
        portionSize:req.body.portionSize,
        additionalAllergyInformation:req.body.additionalAllergyInformation,
        isVegetarian:((req.body.isVegetarian)?(true):(false)),
        isVegan:((req.body.isVegan)?(true):(false))
    });
    console.log(item);
    res.redirect(301,`/admin/addPost`);
});
function parseIngredients(str) {
    let result = [], item = '', depth = 0;
  
    function push() { if (item) result.push(item); item = ''; }
  
    for (let i = 0, c; c = str[i], i < str.length; i++) {
      if (!depth && c === ',') push();
      else {
        item += c;
        if (c === '(') depth++;
        if (c === ')') depth--;
      }
    }
    
    push();
    return result;
  }
//export router
module.exports = router;