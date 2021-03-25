
module.exports = {
    find: async model => {
        try {
            const users = await model.findAll();    
            return users;
        } catch (error) {
            throw error.message;
        }
    },
    findById: async (model, id) => {
        try {
            const user = await model.findOne({ where: { id } });    
            return user;
        } catch (error) {
            throw error.message;
        }
    },
    create: async (model, body) => { 
        try {
            const user = await model.create(body);     
            return user;  
        } catch (error) {
            throw error.message;
        }  
    },
    update: async (model, body, id) => {
        try {
            const user = await model.update(body, { where: { id } });     
            return user;  
        } catch (error) {
            throw error.message;
        } 
    },
    deleteU: async (model, id) => {
        try {                                 
            await model.destroy({ where: { id } });       
            return "Usuario eliminado"
        } catch (error) {
            throw error.message;
        }
    }
}