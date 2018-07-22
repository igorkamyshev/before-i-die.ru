import { getFeatured } from '~/api'

export default async function({ store }) {
    const message = await getFeatured()

    store.commit('SET_FEATURED_MESSAGE', message)
}