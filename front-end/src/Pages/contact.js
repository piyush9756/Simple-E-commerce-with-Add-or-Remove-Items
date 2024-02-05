import { useDispatch, useSelector } from "react-redux";
import { testAuthed } from "../Redux/Slices/adminSlice";

export default function ContactPage(){
    const user = useSelector(state =>state.user.user);
    const dispatch = useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        dispatch(testAuthed())
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