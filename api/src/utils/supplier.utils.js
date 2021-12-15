const Supplier = require('../models/Supplier')

const addSupplier = async (name, user_id) => {
    try {
        const exist = await Supplier.findOne({name, user_id});

        if(!exist) {
            const supplierName = name.toLowerCase().trim();
            const supplier = new Supplier({name:supplierName, user_id})
            await supplier.save()
        }
        return;
    } catch (error) {
        return error;
    }
}

module.exports = { addSupplier };