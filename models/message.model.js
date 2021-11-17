module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            message: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Message = mongoose.model("messages", schema);
    return Message;
};