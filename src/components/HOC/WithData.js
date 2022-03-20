import axios from 'axios'
import {useState, useEffect} from 'react'

const WithData = (MainComponent) => {
    const NewComponent = (props) => {
        const initialState = {
            heroTitle: '',
            heroDesc: '',
            heroImg: '',
            aboutDesc: '',
            aboutImg: '',
            resume: '',
            chatLink: ''
        }
        const [data, setData] = useState(initialState)

        useEffect(() => {
            async function fetchData() {
                const res = await axios.get('/api/data')
                setData(res.data.data)
            }

            fetchData()
        }, [])

        return <MainComponent {...props} data={data} />
    }

    return NewComponent
}

export default WithData