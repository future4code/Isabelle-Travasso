import connection from '../connection'
import { Feed } from '../types/feed'

const followersTable = () => connection('followers_list')

export const createFollow = async (newFollow: Omit<Feed, 'follower_id'>) => {
    const follow = await followersTable()
        .insert(newFollow)
    return follow
}

export const unFollow = async (follow: Feed): Promise<any> => {
    await followersTable()
        .delete()
        .where({ follow });
}