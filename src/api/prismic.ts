import axios from "axios"

export const repoName = 'final-year-project-article'
export const repoAPI = `https://${repoName}.cdn.prismic.io/api/v2/`
export const docAPI = `${repoAPI}documents/`

export const getRef = async () => {
    try {
        const response = await axios.get(repoAPI)
        const ref = response.data.refs[0].ref
        return ref
    } catch (error) {
        console.log(error)
    }
}

export const getCurrentDocApi = async (type:IDataType) => {
    const ref = await getRef()
    const api = `${docAPI}search?ref=${ref}&q=%5B%5Bat(document.type%2C%22${type}%22)%5D%5D`
    return api
}

export const getAllArticles = async (type:IDataType) : Promise<any> => {
    const api = await getCurrentDocApi(type)
    console.log({api})
    const response = await axios.get(api)
    return response.data
}

export const getPrismicData = async (type:IDataType) : Promise<any> => {
    const api = await getCurrentDocApi(type)
    const response = await axios.get(api)
    return response.data
}

type IDataType = 'article' | 'satellite_missions'