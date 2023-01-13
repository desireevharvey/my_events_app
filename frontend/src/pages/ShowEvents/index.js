import { showOneEvent } from "../../utils/api"




const ShowEvent = ({currentUser}) => {
    const navigate = useNavigate()

    const [showEventData, setShowEventData] = useState({})
    const [showProductData, setShowProductData] = useState({})



    const {id} = useParams()
    useEffect(() => {
        showOneProduct(id).then(data => {setShowProductData(data)})
    }, [])

    

export default ShowEvent;