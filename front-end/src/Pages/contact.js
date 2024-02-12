import { useDispatch, useSelector } from "react-redux";

export default function ContactPage(){
    const user = useSelector(state =>state.user.user);
    function handleSubmit(e){
        e.preventDefault();
        
        console.log(user);
    }
    return (
        <>
        <form method="post" onSubmit={handleSubmit}>
            <label>Testing</label>
        <button className="btn btn-success">Submit</button>
        </form>
        </>
    )
}