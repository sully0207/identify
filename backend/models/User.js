const mongoose = require("mongoose");
const {isEmail} = require("validator");
/*
    # Database schema for KeyAllergens
    # default values for all are false
*/
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"Username already exists! Please choose another."],
        required:[true,"Please provide a username."],
        lowercase:true,
    },
    keyAllergens:{
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
    email:{
        type:String,
        unique:[true,"Email already in use! Please choose another."],
        required:[true,"Please provide an email."],
        validate:[isEmail,'Please enter a valid email.'],
        lowercase:true,
    },
    password:{
        type: String,
        required:[true,"Please provide a password."],
        select: false,
    },
    isVegan:{
        type:Boolean,
        required:true,
        default:false,
    },
    isVegetarian:{
        type:Boolean,
        required:true,
        default:false,
    },
    itemHistory:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Item',
    }],
    customKeywords:[{
        type: String,
    }],
});


//Export the model
module.exports = mongoose.model('User',UserSchema);