import React,{useState,useEffect} from "react";
import {useApiContext} from '../../../hooks/context/ApiContext'
import { Link,useParams } from "react-router-dom";
import ComponenteEditarUser from "./componentEdit";
function EditUser(){


    return(
        <ComponenteEditarUser/>
    )
}
export default EditUser