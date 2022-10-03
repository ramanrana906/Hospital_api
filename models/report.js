const { default: mongoose } = require('mongoose');
const monoose = require('mongoose');

const reportSchema = new monoose.Schema({

status:{
    type:String,
    required:true,
},
doctor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Doctor",
    required:true,
},
patient:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Patient",
    required:true,
}
}, {
    timestamps: true


})
const Report = mongoose.model("Report", reportSchema);

module.exports = Report;