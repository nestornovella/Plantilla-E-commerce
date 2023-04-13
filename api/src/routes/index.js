const { Router } = require('express')
const { Shoping_cart } = require('../../db')

const router = Router()

router.get("/", async (req, res) => {
    const data = await Shoping_cart.findAll()
    res.json(data)
})

router.post("/", async (req, res) => {
     const { products_amount } = req.body
    try {
        if (!products_amount) {
            throw "no se pasaron parametros"
        }
        console.log(req.body)

        const cart = await Shoping_cart.create(req.body)

        res.json(cart)


    } catch (error) {
        res.json(error)
    }
})



module.exports = router