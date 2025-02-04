import ProfileModel from './profile.model.js';

export const getProfiles = async (req, res) => {
    const profile = await ProfileModel.find();
        res.send(profile);
}

export const getProfile = async (req, res) => {
    const profile = await ProfileModel.findById(req.params.id);

    if(!profile){
        return res.send({ message: 'This profile doesn\'t exist' });
    }
    res.send(profile);
}

export const createProfile = async(req, res) => {
    let user = await ProfileModel.findOne({name: req.body.name});

    if(user){
        return res.send({ message: 'User all ready exist!' });
    }

    const profile = req.body;

    const newProfile = new ProfileModel(profile);

    await newProfile.save();
    res.status(201).json({ success: true, data: newProfile });
}

export const deleteProfile = async (req, res) =>{
    const profile = await ProfileModel.findById(req.params.id);

    if(!profile){
        return res.send({ message: 'This profile doesn\'t exist' });
    }
    await ProfileModel.findByIdAndDelete(req.params.id);
    res.status(201).send("User with "+req.params.id+" id was deleted!");
}

export const updatedProfile = async (req, res) =>{
    const profile = await ProfileModel.findById(req.params.id);
    const updatedProfile = req.body;

    if(!profile){
        return res.send({ message: 'This profile doesn\'t exist' });
    }

    await ProfileModel.findByIdAndUpdate(req.params.id, updatedProfile, {new: true})
    res.send({ message: 'Profile with name '+ profile.name +' updated!', updatedProfile});
}

