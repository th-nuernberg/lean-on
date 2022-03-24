export function checkHypothesisBody(req){

    let category = req.body.category

    let possibleCategories = ["Key Partners","Key Activities","Channel","Value Propositions",'Customer Segments','Customer Relationship','Key Resources','Cost Structure','Revenue Streams']

    return possibleCategories.includes(category)


}
