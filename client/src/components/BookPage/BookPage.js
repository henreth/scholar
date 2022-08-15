import { useParams } from "react-router-dom"

export default function BookPage(){
    let params = useParams()

    // "https://www.googleapis.com/books/v1/volumes/jbwI7K00sJ0C"
    return (
        <div>{params.id}</div>
    )
}