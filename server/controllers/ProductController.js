const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

exports.getProducts = async (req, res) => {
    try {
        const res = await prisma.product.findMany()
        res.status(200).json(res)
    } catch(err) {
        res.status(500).json({msg: err.message})
    }
}
exports.getProductById = async (req, res) => {
    try {
        const res = await prisma.product.findUniqe({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(res)
    } catch(err) {
        res.status(404).json({msg: err.message})
    }

}
exports.createProduct = async (req, res) => {
    const { name, price } = req.body
    try {
        const product = await prisma.product.create({
            data: {
                name: name,
                price: price
            }
        })
        res.status(201).json(product)
    } catch(err) {
        res.status(400).json({msg: err.message})
    }
}
exports.updateProduct = async (req, res) => {
    const { name, price } = req.body
    try {
        const product = await prisma.product.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name: name,
                price: price
            }
        })
        res.status(200).json(product)
    } catch(err) {
        res.status(400).json({msg: err.message})
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        const product = await prisma.product.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(product)
    } catch(err) {
        res.status(400).json({msg: err.message})
    }
}
