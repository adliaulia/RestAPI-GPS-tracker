module.exports = mongoose => {
    
    const schema = mongoose.Schema(
        {
            tipe_gps: String,
            tempat_gps: String,
            tanggal_sync: String,
            lat_long: String,
            maps_link: String,
            altitude: String,
        }, {
            timestamps: true
        }
    );

    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        
        return object;
    });

    return mongoose.model("gps", schema);

};