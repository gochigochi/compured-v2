import { useState, RefObject } from "react"

type PropsTypes = {
    formRef: RefObject<HTMLFormElement>
    fields: string[]
}

const useForm = ({ 
    formRef, 
    fields,
}: PropsTypes) => {
    
    const [state, setState] = useState({ loading: false, error: null, success: null })
    
    const handleSubmit = async ( formData: FormData ) => {

        if (state.error) setState({...state, error: null})

        const parsedFields = fields.map(field => {
            formData.get(field)
        })

        console.log(parsedFields)

    }

    return { state, handleSubmit }
}

export default useForm