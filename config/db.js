import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;

// import mongoose from "mongoose";
// import colors from "colors"; // Ensure the colors package is installed

// // Function to connect to the MongoDB database
// const connectDB = async () => {
//   try {
//     // Check if the MONGO_URL environment variable is set
//     if (!process.env.MONGO_URL) {
//       throw new Error("MONGO_URL environment variable is not set");
//     }

//     // Attempt to connect to the MongoDB database
//     const conn = await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true, // These options ensure the connection string is parsed correctly
//       useUnifiedTopology: true, // This option ensures a stable connection
//     });

//     // Log successful connection
//     console.log(
//       `Connected To Mongodb Database ${conn.connection.host}`.bgMagenta.white
//     );
//   } catch (error) {
//     // Log any errors that occur during the connection attempt
//     console.log(`Error in Mongodb ${error.message}`.bgRed.white);
//   }
// };

// // Export the connectDB function
// export default connectDB;
