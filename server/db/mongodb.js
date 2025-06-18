require('dotenv').config()
const mongoose=require('mongoose')
const connect=async () => {
 try {
  await mongoose.connect(process.env.MONGODB_URL)
  console.log('DB is connect successfully');
  
 } catch (error) {
  console.log('DB is disconnect ');
  
 }
}
connect()

