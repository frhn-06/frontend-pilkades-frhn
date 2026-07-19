import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schemaElection } from './validation';

const useElection = () => {

   

    

    
    const {handleSubmit:handleSubmitElection, control, formState: {errors}, setError, reset, setValue} = useForm({
        resolver: yupResolver(schemaElection)
    })
    
    


    


    return {
        handleSubmitElection,
        errors,
        setValue,
        setError,
        control,
        reset,


    }

}

export default useElection;