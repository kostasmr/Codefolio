import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    headline:{
        type: String,
        required: true,
    },
    about:{
        type: String,
        required: true,
    },
},{
    timestamps: true
});

const ProfileModel = mongoose.model('Profile', profileSchema);

export default ProfileModel;

