let database = require('../data/database');

module.exports = controller = {
    index:function(req,res){
        res.write("Bienvenidos al Gruop Motors \n\n");
        res.write('*' + "Nuestras Concesionarias son: \n")
        database.forEach(concesionaria=>{
            res.write('\n' + '-' + 'Concesionaria de ' + concesionaria.sucursal + '\n') 
        })
        res.end()
    }
}

