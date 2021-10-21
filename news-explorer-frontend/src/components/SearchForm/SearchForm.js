function SearchForm(props) {
    return (
        (
            <section className='search'>
                <form className='search__form' onSubmit={props.handleSearchSubmit}>
                    <input className='search__input' placeholder='Please enter a keyword' value={props.searchTerm} onChange={(e) => {props.setSearchTerm(e.target.value) }}/>
                    <button className='search__submit'>Search</button>

                </form>
                <div className='login__error'>{props.errorMessage}</div>
            </section>


        )
    )
}

export default SearchForm;