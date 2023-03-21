import { useLocation } from 'react-router-dom';

const CreateContact = () => {
    let { state } = useLocation();

    console.log(state)
    return (
        <div>Create Contact</div>
    )
};

export default CreateContact;