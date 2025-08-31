const mongoose = require('mongoose');
// const { use } = require('react');

mongoose.connect('mongodb+srv://amansinghas9170:amansinghas9170@cluster0.gk20bj9.mongodb.net/')
.then(()=>console.log("database connected successfully"))
.catch((e)=>console.log(e));

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    age : Number, 
    isActive : Boolean,
    tags : [String],
    createdAt : { type : Date, default: Date.now}
})


const User = mongoose.model('User', userSchema);

async function runQuerExample() {
    try {
        // create new document
        
        const newUser = await User.create({
            name : "Update",
            email: "update@gmail.com",
            age: 60,
            isActive: true,
            tags: [ 'designer']

        }) 

            // create new user by save method but use generally use first one 
       /*
        const newUser = new User({
            name : "Aman kr Singh",
            email: "aman.as9170@gmail.com",
            age: 23,
            isActive: true,
            tags: ['developer', 'designer']

        })

        await newUser.save();
        */

       console.log("new user Created",newUser)

        //const allUser = await User.find({isActive : true});
        // const getUerById = await User.findById(newUser._id);

       // console.log(allUser);

      // console.log(getUerById, " Get User By Id");

    //   const getSelectedField = await User.find().select("email name -_id");
    //   console.log(getSelectedField);

    // const limitedUser =await User.find().limit(3).skip(1);
    // console.log(limitedUser);

    // const sortedUser = await User.find().sort({age : 1});
    // console.log(sortedUser);

        // const countDocument = await User.countDocuments({age : 23})
        // console.log(countDocument);

        // const deletedUser = await User.findByIdAndDelete(newUser._id);
        // console.log("deleted user -> ", deletedUser);

        const updateUser = await User.findByIdAndUpdate(newUser._id, {
            $set : {age : 100, name : "Updated"},
            $push : {tags : "Updated"}
            
        }, {new : true})

        console.log("Updated User -> ", updateUser);
        
    } catch (e) {
        console.log(e)
        
    }finally{
        await mongoose.connection.close();
    }
    
}


runQuerExample();