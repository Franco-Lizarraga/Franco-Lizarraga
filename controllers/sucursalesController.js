let database = require('../data/database');

module.exports = controller = {
    index:function(req,res){
        res.write("Nuestras Sucursal son: \n\n");
        database.forEach(concesionaria=>{
            res.write('*' + 'Sucursal ' + concesionaria.sucursal + ';' + '\n') 
            res.write(' ' + '-' + 'Direccion; ' + concesionaria.direccion + '\n')
            res.write(' ' + '-' + 'Telefono; ' + concesionaria.telefono + '\n\n')
        })
        res.end()
    },
    sucursal:function(req,res){
        res.set({'content-type':'text/plain; charset=utf-8'})
        let sucId = req.params.id
        database.forEach(concesionaria=>{
            if(concesionaria.sucursal.toLowerCase() == sucId.toLowerCase()){
                res.write("Si tenemos sucursal en ")
                res.write(concesionaria.sucursal + ':');
                res.write('\n')
                res.write('\n')
                res.write('*' + 'Direccion; ' + concesionaria.direccion);
                res.write('\n')
                res.write('\n')
                res.write('*' + 'Telefono; ' + concesionaria.telefono + '\n\n');
                res.write('*Autos disponible en esta sucursal: \n');
                concesionaria.autos.forEach(auto=>{
                    res.write('\n' + ' ' + 'º' + 'Auto: ' + auto.marca + '\n' + ' ' + ' - ' + 'Modelo; ' + auto.modelo + '\n' + ' ' + ' ' + ' - ' + 'Año; ' + auto.anio + '\n' + ' ' + ' ' + ' ' + ' - ' + 'Color; ' + auto.color + '\n\n');
                })
                res.write('\n')
                res.end('*' + 'Totoal de autos disponibles: ' + concesionaria.autos.length)
            }
        })
        res.end('Lo sentimos, no tenemos sucursal en esa zona')
    }
}