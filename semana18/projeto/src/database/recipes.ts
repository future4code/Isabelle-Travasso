import connection from '../connection'
import { Recipes } from '../types/recipes'

const recipesTable = () => connection('recipes_list')

export const getAllRecipes = async () => {
    const allRecipes = await recipesTable()
    return allRecipes
}

export const createRecipe = async (newRecipe: Omit<Recipes, 'id' & 'user_id' & 'user_name' & 'date'>) => {
    const recipe = await recipesTable()
        .insert(newRecipe)
    return recipe
}

export const updateRecipe = async (
    id: string,
    userData: Omit<Recipes, 'id'>
) => {
    await
        recipesTable()
            .update(userData)
            .where({ id })
}

export const getYourRecipes = async (user_id: string): Promise<any> => {
    const result = await recipesTable()
        .select('title', 'description', 'user_name', 'date')
        .where({ user_id })
        .orderBy('date', 'desc')

    return result;
}

export const getFollowedRecipes = async (user_id: string): Promise<any> => {
    const result = await recipesTable()
    .select('title', 'description', 'date', 'user_name')
    .join({ f: 'followers_list'}, 'f.follower_id', `${user_id}`)
    .distinct()
    .orderBy('date', 'desc')

    return result;
}

// export const getFollowedRecipes = async (user_id: string): Promise<any> => {
//     const result = await connection.raw(`SELECT r.title, r.description, r.date, r.user_name FROM recipes_list r
//     JOIN followers_list as f
//     ON f.follower_id = ${user_id}`) 
//     return result;
// }

export const getRecipeById = async (id: string): Promise<any> => {
    const result = await recipesTable()
        .where({ id })
    return result;
}

export const deleteRecipe = async (id: string): Promise<any> => {
    await recipesTable()
        .delete()
        .where({ id });
}