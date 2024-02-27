import { RefObject, useRef } from "react"
import useForm from "@/hooks/useForm"

const ContactForm = () => {

    const formRef: RefObject<HTMLFormElement> = useRef(null)
    const { state, handleSubmit } = useForm({
        formRef,
        fields: ["name", "email"],
    })


    const sub = async (formData: FormData) => {
        console.log("dslkaf")
    }

    return (
        <form
            action={sub}
            noValidate
            ref={formRef}
            className="relative flex flex-col gap-4 w-full md:w-1/2 max-w-[35rem]"
        >
            <input
                className="rounded-full p-4 border border-zinc-200"
                id="name"
                name="name"
                type="text"
                aria-label="nombre"
                aria-required="true"
            />
            <button 
                className="flex justify-center self-center md:self-start font-bold rounded-full p-4 bg-custom-light-black w-36"
            >
                Enviar
            </button>
        </form>
    )
}

export default ContactForm