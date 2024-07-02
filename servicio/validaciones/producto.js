import Joi from 'joi'

//https://joi.dev/api/?v=17.13.0

const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().min(2).max(20).required(),
        codigo: Joi.string().min(2).max(10).required(),
        precio: Joi.number().required(),
        stock: Joi.number().required(),
        marca: Joi.string().required(),
        categoria: Joi.string().required(),
        descripcionCorta: Joi.string().min(2).required(),
        descripcionLarga: Joi.string().min(2).required(),
        edadDesde: Joi.number().required(),
        edadHasta: Joi.number().required(),
        foto: Joi.string().required(),
        envio: Joi.boolean().required()
    })

    const { error } = productoSchema.validate(producto);
    //console.log(error)

    return error
}

export default validar