import { createClient } from 'contentful'
import { useState, useEffect } from 'react'
const client = createClient({
  space: 'j52xyl9lh1ia',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})
export const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const data = response.items.map((item) => {
        const { image, title, url } = item.fields
        const { id } = item.sys
        const img = image.fields
        return { id, title, url, img }
      })
      setProjects(data)

      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return { isLoading, projects }
}
