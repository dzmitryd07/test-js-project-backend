module.exports = mongoose => {
    const Message = mongoose.model(
        'messages',
        mongoose.Schema(
            {
                name: String,
                message: String,
            },
            {timestamps: true}
        )
    );

    return Message;
};