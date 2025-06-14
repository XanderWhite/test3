import { useButtonView } from "./styles";



const Search = () => {
    const btn = useButtonView();

    return (
        <form className={btn.form} method="get" action={"/news"}>
          <input
      type="text"
      placeholder="Искать новость..."
      className={ btn.input }
      name="filter"
         /><button type="submit" className={ btn.button } id="searchButton">
      <svg viewBox="0 0 20 20" className= {btn.svg}>
       <path d="M8.808 0C3.95 0 0 3.951 0 8.808c0 4.856 3.951 8.807 8.808 8.807 4.856 0 8.807-3.95 8.807-8.807S13.665 0 8.808 0Zm0 15.99c-3.96 0-7.182-3.223-7.182-7.182 0-3.96 3.222-7.182 7.182-7.182 3.96 0 7.181 3.222 7.181 7.182 0 3.96-3.222 7.181-7.181 7.181Z" />
       <path d="m19.762 18.612-4.661-4.661a.812.812 0 1 0-1.15 1.15l4.661 4.66a.81.81 0 0 0 1.15 0 .813.813 0 0 0 0-1.149Z" />
      </svg>
     </button>
    </form>
    );}

export default Search;