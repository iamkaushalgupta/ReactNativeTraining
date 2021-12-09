import React,{useEffect,useState} from "react";
import CourseScreen from "../views/courseScreen/courseScreen";
import { sendGetRequest } from "../network/network";

const CourseModal =()=>{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await sendGetRequest('https://jsonplaceholder.typicode.com/photos?_limit=20&_page=1');
            setData(response);
           
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        
        }
    }

    useEffect(() => {
        getData();
        
    }, []);
    return(<CourseScreen isLoading={isLoading}  data={data}/>);
}

export default CourseModal;

