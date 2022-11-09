import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

    getProduct():string{
        return "Todos los Productos OK!"
    }
    createProduct():string{
        return "Producto Creado OK!"
    }
    updateProduct():string{
        return "Producto Modificado OK!"
    }
}
