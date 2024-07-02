class ModelMem {

    constructor() {
        this.productos = [
            {
                nombre: 'Silla Gaming',
                codigo: 'S-023',
                precio: 90000,
                stock: 3,
                marca: 'Play haha',
                categoria: 'Sillas-Gaming',
                descripcionCorta: 'Silla Gaming Ergonómica y giratoria',
                descripcionLarga: 'Silla Gaming Ergonómica de Cuero. Ideal para Oficina, tareas de escritorio y gamers exigentes.',
                edadDesde: '',
                edadHasta: '',
                foto: 'https://m.media-amazon.com/images/I/61wnzULkSFL._AC_SL1500_.jpg',
                envio: true,
                id: 1
            },

            {
                nombre: 'Silla Gaming',
                codigo: 'S-028',
                precio: 80000,
                stock: 1,
                marca: 'Bigzzia ',
                categoria: 'Sillas-Gaming',
                descripcionCorta: 'Silla Gaming Ergonómica y giratoria',
                descripcionLarga: 'Silla gaming Ergonómica con reposacabezas y altura Ajustable. Ideal para Oficina, tareas de escritorio y gamers exigentes.',
                edadDesde: '',
                edadHasta: '',
                foto: 'https://m.media-amazon.com/images/I/71OTpvHzgtL._AC_SL1500_.jpg',
                envio: true,
                id: 2
            },

            {
                nombre: 'Silla Gaming',
                codigo: 'S-017',
                precio: 105000,
                stock: 13,
                marca: 'LXRADEO ',
                categoria: 'Sillas-Gaming',
                descripcionCorta: 'Silla Gaming Ergonómica y giratoria',
                descripcionLarga: 'Silla gaming Ergonómica con Soporte Lumbar Ajustable Interno. Con diseño ergonómico inclinable. Ideal para Oficina, tareas de escritorio y gamers exigentes.',
                edadDesde: '',
                edadHasta: '',
                foto: 'https://m.media-amazon.com/images/I/61fHKDwGQ7L._AC_SL1500_.jpg',
                envio: true,
                id: 3
            },

            {
                nombre: 'Silla Gaming',
                codigo: 'S-020',
                precio: 78900,
                stock: 6,
                marca: 'HLFURNIEU ',
                categoria: 'Sillas-Gaming',
                descripcionCorta: 'Silla Gaming Ergonómica y giratoria',
                descripcionLarga: 'Silla Gaming Ergonómica, regulable en altura, con reposapiés telescópico. Ideal para Oficina, tareas de escritorio y gamers exigentes.',
                edadDesde: '',
                edadHasta: '',
                foto: 'https://m.media-amazon.com/images/I/717eEEtUONL._AC_SL1500_.jpg',
                envio: true,
                id: 4
            },

            {
                nombre: 'Escritorio Gaming',
                codigo: 'E-011',
                precio: 100000,
                stock: 1,
                marca: 'HLONONE',
                categoria: 'Escritorios-Gaming',
                descripcionCorta: 'Escritorio Gaming de fibra de carbono',
                descripcionLarga: 'Escritorio Gaming de fibra de carbono con luz LED integrada, portavasos y gancho para auriculares.',
                edadDesde: '',
                edadHasta: '',
                foto: 'https://m.media-amazon.com/images/I/71fWDVRUC+L._AC_SL1500_.jpg',
                envio: false,
                id: 5
            },

            {
                nombre: 'Escritorio Gaming',
                codigo: 'E-002',
                precio: 140000,
                stock: 3,
                marca: 'HLONONE',
                categoria: 'Escritorios-Gaming',
                descripcionCorta: 'Escritorio Gaming de fibra de carbono',
                descripcionLarga: 'Escritorio Gaming de fibra de carbono con portavasos y gancho para auriculares.',
                edadDesde: '',
                edadHasta: '',
                foto: 'https://m.media-amazon.com/images/I/71qdw+SfhnL._AC_SL1500_.jpg',
                envio: false,
                id: 6
            },

            {
                nombre: 'Escritorio Gaming',
                codigo: 'E-016',
                precio: 175000,
                stock: 1,
                marca: 'Devoko',
                categoria: 'Escritorios-Gaming',
                descripcionCorta: 'Escritorio Gaming de fibra de carbono',
                descripcionLarga: 'Escritorio Gaming de Fibra de Carbono. Formato esquinero tipo "L" con Bolsa de almacenamiento, 2 Cargadores USB incorporados y 2 enchufes.',
                edadDesde: '',
                edadHasta: '',
                foto: 'https://m.media-amazon.com/images/I/71SOnDv-XSL._AC_SL1500_.jpg',
                envio: false,
                id: 7
            },
            {
                nombre: 'Escritorio Gaming',
                codigo: 'E-022',
                precio: 90000,
                stock: 3,
                marca: 'ODK ',
                categoria: 'Escritorios-Gaming',
                descripcionCorta: 'Escritorio para Juegos, Escritorio para trabajo, PC fijo, etc',
                descripcionLarga: 'Escritorio esquinero que ofrece espacio suficiente para monitores, impresoras y otros equipos de oficina o gaming.',
                edadDesde: 12,
                edadHasta: 99,
                foto: 'https://m.media-amazon.com/images/I/71YlUb6eVWL._AC_SL1500_.jpg',
                envio: false,
                id: 8
            }
        ]
    }

    obtenerProductos = async () => this.productos

    obtenerProducto = async id => {
        const producto = this.productos.find(producto => producto.id === id)
        return producto || {}
    }

    guardarProducto = async producto => {
        producto.id = String(+(this.productos[this.productos.length - 1]?.id || 0) + 1)

        this.productos.push(producto)
        return producto
    }

    actualizarProducto = async (id, producto) => {
        producto.id = id

        const index = this.productos.findIndex(p => p.id === id)
        const productoAnt = this.productos[index]
        const productoNuevo = { ...productoAnt, ...producto }

        this.productos.splice(index, 1, productoNuevo)
        return productoNuevo
    }

    borrarProducto = async id => {
        let productoEliminado = {}

        const index = this.productos.findIndex(p => p.id === id)

        if (index != -1) {
            productoEliminado = this.productos.splice(index, 1)[0]
        }
        return productoEliminado
    }
}

export default ModelMem