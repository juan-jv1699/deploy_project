import React,{useState,useEffect} from "react";
import {useApiContext} from '../../../hooks/context/ApiContext'
import { Link,useParams } from "react-router-dom";
import { uploadFile } from "../../../firebase/config";
function EditUser(){
    const {updateUser,getUser}=useApiContext()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [cc, setCc] = useState('');
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        birthdate:'',
        cc:''
    });
    const {id} = useParams()
    
    useEffect(() => {
        getDataUser()
        }, []);
        const getDataUser = async ()=>{
        const res = await getUser(id)
        //   console.log(res.data)
        setData(res.data)
        }
   
     // Name
    const ChangeName = event => {
        setName(event.target.value);
    };

    // Email
    const ChangeEmail = event => {
        setEmail(event.target.value);

    };
    // Password
    const ChangePassword = event => {
        setPassword(event.target.value);

        
    };
    // Birthday
    const ChangeBirthdate = event => {
        setBirthdate(event.target.value);
        
        
    };
    // Cc
    const ChangeCc = event => {
        setCc(event.target.value);

        
    };

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    const [file, setFile] = useState(null)
    const[imageEdit,setImageEdit] = useState()
    const[appear,setAppear] = useState(true)
    // Controlador que maneja el envio del formulario
    const controladorDelEnvio = async (e) => {
      e.preventDefault();
      const result = await uploadFile(file)
      console.log(result)
      setImageEdit(result)
      setAppear(false)
    };
    console.log(imageEdit)
    return(
        <div>
             <form action="#" className="">
                <h2 className="title">Editar Usuario</h2>
                <h2>Escoja su imagen</h2>
                <div className="imagePost">
                                    <label for='file-input'>
                                      {!selectedFile || appear == false ? <img src={data.image} width='50px' className="border-rounded" />  : <img src={preview} width='50px' className="border-rounded" />   }

                                    </label>
                                    <input id="file-input" type="file" onChange={(e)=>{setFile(e.target.files[0]) ; onSelectFile(e);}}/>
                                </div>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" defaultValue={data.name} onChange={ChangeName}/>
                </div>
                <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" defaultValue={data.email}onChange={ChangeEmail} />
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" defaultValue={data.password} onChange={ChangePassword} />
                </div>
                <div className="input-field">
                    <i class="bi bi-calendar-date-fill"></i>
                    <input type="date" defaultValue={data.birthdate}onChange={ChangeBirthdate} />
                </div>
                <div className="input-field">
                    <i class="bi bi-card-text"></i>
                    <input type="number" defaultValue={data.cc} onChange={ChangeCc}/>
                {/* <h1>{cc}</h1> */}
                </div>
                <div className="main_div my-5">
                    
                        <button type="submit" className="fw-bold" onClick={()=>{controladorDelEnvio();updateUser(id,name,email,password,birthdate,cc,imageEdit)}} >Editar</button>
                    <Link to='/vista-administrar-rol'>
                    </Link>
                </div>
            </form>
        </div>
    )
}
export default EditUser