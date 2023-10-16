import { Component } from "react";
import PropClass1 from "./PropClass1";

class PropClass extends Component
{
    render()
    {
        return(
            <div>
               <PropClass1 name="Shivi" age="20" ></PropClass1>
            </div>
        )
        }
    }
export default PropClass