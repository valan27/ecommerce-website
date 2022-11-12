const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
    desc:{type:String,required:true,unique:false},
        img:{
                type:String,
                default:true,required:true
            },
        categories:{
                type:Array,
            
            },
        size:{
                type:Array,
               
            },
        color:{
                type:Array,
                default:true,required:true,unique:false
            },
        price:{
                type:Number,
                default:true,required:true
            },
        inStock:{
            type:Boolean,default:true
        }
           
        },

    {timestamps:true}
)

module.exports = mongoose.model('Product',ProductSchema)