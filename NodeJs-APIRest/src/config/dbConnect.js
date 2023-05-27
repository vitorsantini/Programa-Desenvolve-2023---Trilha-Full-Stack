import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://vitorsantini:123zanchini321@alura.9i6ncku.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;