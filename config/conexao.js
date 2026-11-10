import mongoose from "mongoose";
const url =
"mongodb+srv://usuario_falso:senha_falsa@cluster-exemplo.mongodb.net/"
const conexao = await mongoose.connect(url)
export default conexao