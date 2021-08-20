import mongoose, { Schema, Document } from 'mongoose'

export interface Itask extends Document {
    title: String;
}

const TaskSchema: Schema = new Schema({
    title: String
})

export default mongoose.model<Itask>('Task', TaskSchema);