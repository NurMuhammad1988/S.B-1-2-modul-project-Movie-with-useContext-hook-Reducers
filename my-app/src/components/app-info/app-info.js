import { useContext } from "react"
import { Context } from "../../context"


const AppInfo = () => {

	const {state}= useContext(Context)

	return (
		<div className='app-info'>

			<p className="mx-5 text-bg-danger text-dark text-center">S.B-1,2-modul project  Movie with useContext hook  Reducers with data jsonplaceholder</p>
			<p className='fs-3 text-uppercase'>Barcha kinolar soni: {state.data.length}</p>
			<p className='fs-4 text-uppercase'>Sevimli film: {state.data.filter(c => c.favourite).length}</p>
		</div>
	)
}


export default AppInfo
