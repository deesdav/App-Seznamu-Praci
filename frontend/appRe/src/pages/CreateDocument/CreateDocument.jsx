import ButtonBack from "../../components/ButtonBack/ButtonBack"
import "./CreateDocument.css"

export default function CreateDocument(){
    return(
        <div className="container">
            <h2>Create Document</h2>
            <div className="box">
                <div className="input-boxes">
                    <h4>Název</h4>
                    <input type="text" className="input-text" />
                </div>
                <div className="input-boxes">
                    <h4>Vedoucí práce</h4>
                    <input type="text" className="input-text" />
                </div>
                <div className="input-boxes">
                    <h4>Ústav</h4>
                    <input type="text" className="input-text" />
                </div>
                <div className="input-boxes">
                    <h4>Doporučené obory</h4>
                    <input type="text" className="input-text" />
                </div>
                <div className="input-boxes">
                    <h4>Možné typy prací</h4>
                    <input type="text" className="input-text" />
                </div>
                <div className="input-box-abstract">
                    <h4>Abstrakt</h4>
                    <textarea className="abstract" type="text" rows="30"/>
                </div>
                <button className="create-btn">Create</button>
            </div>
            <ButtonBack/>
        </div>
    )
}