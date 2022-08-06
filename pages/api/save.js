export default async(req, res) => {
    console.log(JSON.parse(req.body))
    res.end(req.body)
}