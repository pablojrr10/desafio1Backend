console.log("Desafio ECMS Pablo Martin Vargas")


class ProductManager{
    constructor(){
        this.productos = []
    }

    getProduct = () => {return this.productos}
    getNextID = () => {
        const count = this.productos.length
        return (count>0) ? this.productos[count-1].id + 1: 1
    }
    getProductById = (productID) => {
        const product = this.productos.find(product => product.id == productID)
        if(product == undefined) return "Not Found"
        else return this.product
    }

    addProduct = (title, description, price, thumbnail, stock, code) => {
        const id = this. getNextID()
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            stock: stock ?? 0,
            code: []
        }
        this.productos.push(product)
    }
}

const productManager = new ProductManager()
productManager.addProduct ("tv", "55pulgadas full HD", 100,"tv.jpg", 10)
console.log(productManager.getProduct());

productManager.addProduct ("lavadora", "20kilos automatica", 200,"lavadora.jpg", 20)
console.log(productManager.getProduct());

productManager.getProductById(2);