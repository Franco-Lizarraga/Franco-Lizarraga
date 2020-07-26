let database = require('../data/database');

module.exports = controller = {
    index:function(req,res){
        res.set({'content-type':'text/plain; charset=utf-8'})
        let autosT = []
       res.write("Estas son los autos de nuestras concesionarias");
       res.write("\n")
       res.write("\n")
       database.forEach(concesionaria=>{
           res.write("\n")
           res.write('*' + 'Concesionaria de ' + concesionaria.sucursal + ';' + '\n')
           concesionaria.autos.forEach(auto=>{
               autosT.push(auto)
            res.write('\n' + ' ' + 'º' + 'Auto: ' + auto.marca + '\n' + ' ' + ' - ' + 'Modelo; ' + auto.modelo + '\n' + ' ' + ' ' + ' - ' + 'Año; ' + auto.anio + '\n' + ' ' + ' ' + ' ' + ' - ' + 'Color; ' + auto.color + '\n\n');
           })
       })
       res.end('Cantidad Total de nuestros autos en Group Motors: ' + autosT.length)
    },
    autos:function(req, res){

    }
}

