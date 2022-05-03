const mongoose = require("mongoose");

/*
    # Database schema for Items
    # 
*/
const ItemSchema = new mongoose.Schema({
    allergensContained:{
        celery:{
            type:Boolean,
            required:true,
            default:false,
        },
        cerealsContainingGluten:{
            wheat:{
                type:Boolean,
                required:true,
                default:false,
            },
            rye:{
                type:Boolean,
                required:true,
                default:false,
            },
            barley :{
                type:Boolean,
                required:true,
                default:false,
            },
            oats:{
                type:Boolean,
                required:true,
                default:false,
            },
        },
        crustaceans:{
            type:Boolean,
            required:true,
            default:false,
        },
        eggs:{
            type:Boolean,
            required:true,
            default:false,
        },
        fish:{
            type:Boolean,
            required:true,
            default:false,
        },
        lupin:{
            type:Boolean,
            required:true,
            default:false,
        },
        milk:{
            type:Boolean,
            required:true,
            default:false,
        },
        molluscs:{
            type:Boolean,
            required:true,
            default:false,
        },
        mustard:{
            type:Boolean,
            required:true,
            default:false,
        },
        peanuts:{
            type:Boolean,
            required:true,
            default:false,
        },
        sesame:{
            type:Boolean,
            required:true,
            default:false,
        },
        soybeans:{
            type:Boolean,
            required:true,
            default:false,
        },
        sulphureDioxideAndSulphites:{
            type:Boolean,
            required:true,
            default:false,
        },
        treeNuts:{
            almond:{
                type:Boolean,
                required:true,
                default:false,
            },
            hazelnut:{
                type:Boolean,
                required:true,
                default:false,
            },
            walnut:{
                type:Boolean,
                required:true,
                default:false,
            },
            cashewNut:{
                type:Boolean,
                required:true,
                default:false,
            },
            pecanNut:{
                type:Boolean,
                required:true,
                default:false,
            },
            brazilNut:{
                type:Boolean,
                required:true,
                default:false,
            },
            pistachioNut:{
                type:Boolean,
                required:true,
                default:false,
            },
            macadamiaNut :{
                type:Boolean,
                required:true,
                default:false,
            },
            QueenslandNut :{
                type:Boolean,
                required:true,
                default:false,
            },
        },
    },
    nutrionalData:[{
        perValue:{
            type:String,
            required:[true,"Please provide a perValue"],
            enum:["portion","100g","100ml"],
        },
        energyValueKj:{
            type:Number,
            required:[true,"Please provide a energyValueKj value"],
        },
        energyValueKcal:{
            type:Number,
            required:[true,"Please provide a energyValueKcal value"],
        },
        fat:{
            type:Number,
            required:[true,"Please provide a fat value"],
        },
        saturates:{
            type:Number,
            required:[true,"Please provide a saturates value"],
        },
        carbohydrates:{
            type:Number,
            required:[true,"Please provide a carbohydrates value"],
        },
        sugar:{
            type:Number,
            required:[true,"Please provide a sugar value"],
        },
        protein:{
            type:Number,
            required:[true,"Please provide a protein value"],
        },
        salt:{
            type:Number,
            required:[true,"Please provide a salt value"],
        },
    }],
    ingredients:[{
        type:String,
    }],
    name:{
        type:String,
        required:[true,"Please provide a name"],
    },
    description:{
        type:String,
        default:"No description provided for this item",
    },
    netContent:{
        type:Number,
        required:true,
    },
    portionSize:{
        type:Number,
        required:true,
    },
    additionalAllergyInformation:{
        type:String,
        default:"No additional allergy information provided for this item",
    },
    isVegetarian:{
        type:Boolean,
        default:false,
    },
    isVegan:{
        type:Boolean,
        default:false,
    },
});

//Model specific methods

ItemSchema.method.getItem = () =>{
    this.populate("allergensContained");
    this.populate("nutrionalData");
}

//Export the model
module.exports = mongoose.model('Item',ItemSchema );
