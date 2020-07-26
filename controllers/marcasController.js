let database = require('../data/database');

module.exports = controller = {
    index:function(req, res){
        let marcasT = []
        let marcasTo = []
        database.forEach(concesionaria => {
            concesionaria.autos.forEach(auto => {
                marcasT.push(auto.marca)
            })
        })
        let marcasR = marcasT.filter((unico, repetido) => marcasT.indexOf(unico) === repetido)
        res.write("Nuestras marcas disponibles son: \n\n");
        marcasR.forEach(marcas => {
            res.write( marcas + '\n' )
        })
        
        res.end()
    },
    marcas:function(req,res){
        let sucId = req.params.id
        database.forEach(auto=>{
            autos.forEach(auto=>{
                if(autos.marcas.toLowerCase() == sucId.toLowerCase()){
                    res.write('Encontre La marca: ')
                    res.write(auto.marca)

                }
            })
        })
        res.end('Lo sentimos, no tenemos sucursal en esa zona')
    }
}

