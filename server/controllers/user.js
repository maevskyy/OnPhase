import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const fetchUser = async (req, res) => {
  const token = req.cookies?.token;
  if (token) {
    jwt.verify(token, 'userToken', {}, (err, userData) => {
      if (err) throw err;
      res.json(userData);
    });
  } else {
    res.status(401).json('no token sorry');
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User doesnt exist' });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'invalid password' });
    }
    const token = jwt.sign(
      {
        email: existingUser.email,
        name: existingUser.name,
        _id: existingUser._id,
        // image: existingUser.image,
        dateBlocks: existingUser.dateBlocks,
      },
      'userToken',
      { expiresIn: '24h' }
    );
    res.cookie('token', token).status(200).json({ _id: existingUser._id });
  } catch (error) {
    res.status(500).json({ message: 'something with signIn controller' });
    console.log(error);
  }
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName, image } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exist' });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const createdUser = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      image: ''
    });
    const token = jwt.sign(
      {
        email: createdUser.email,
        name: createdUser.name,
        // image: createdUser.image,
        dateBlocks: createdUser.dateBlocks,
        _id: createdUser._id
      },
      'userToken',
      {
        expiresIn: '24h',
      }
    );
    res.cookie('token', token).status(200).json({ _id: createdUser._id });
  } catch (error) {
    res.status(500).json({ message: 'something with singUp controller' });
  }
};

export const uploadImage = async(req, res) => {
  const { id } = req.params;
  try {
    const currentUser = req.body;
    const updateUser = await User.findByIdAndUpdate(
      id,
      { ...currentUser, _id: id },
      { new: true }
    );

    res.json(updateUser.image);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong with the uploadImage controller' });
  }

}

//!wtf is this 
export const getImage = async(req, res) => {
   const {id} = req.params
  try {
    const existingUser = await User.findOne({_id: id})
    if (!existingUser) return res.status(404).json({message: 'We havenot this user'})
    res.json({
      image: existingUser.image
    })
  } catch (error) {
    res.status(500).json({ message: 'something with getImage controller' });
  }
}

// export const updatePost = async (req, res) => {
//   const { id: _id } = req.params;
//   const post = req.body;
//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send('No post with that id');
//   }
//   const updatedPost = await PostMessage.findByIdAndUpdate(
//     _id,
//     { ...post, _id },
//     { new: true }
//   );

//   res.json(updatedPost);
// };