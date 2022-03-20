import axios from 'axios'

// download function
async function saveResume(resume) {
    try {
        await axios.get(`/files/${resume}`)
    } catch (error) {
        console.log(error)
    }
}

export default saveResume