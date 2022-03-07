import ApiCalls from "../ApiCalls"
import CategoryRoutes from "../routes/categories"


class CategoriesController {

    static getAll(context, callback){
        ApiCalls.getAll(CategoryRoutes.GET_ALL, null, callback, context)
    }


}

export default CategoriesController