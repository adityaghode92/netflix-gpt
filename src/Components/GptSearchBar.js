import lang from "../Utils/languageConstants";
import { useSelector } from "react-redux";


const GptSearchBar = ()=>{
    const langkey = useSelector(store => store.config.lang)
    return <div className="pt-[10%] flex justify-center">
        <form className="w-1/2  bg-black grid grid-cols-12">
            <input type="text" placeholder={lang[langkey].gptPlaceholder} className="p-4 m-2 col-span-9"></input>
            <button className="col-span-3 m-4 py-2 px-4  bg-red-700 text-white rounded-lg">{lang[langkey].search}</button>
        </form>
    </div>
}

export default GptSearchBar;