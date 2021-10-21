import SearchForm from '../SearchForm/SearchForm'
import About from '../About/About'
import NewsCardList from '../NewsCardList/NewsCardList'
import NotFound from '../NotFound/Notfound'
import Preloader from '../Preloader/Preloader'
import React from "react";

function Main(props) {
  return (
 <main className='main'>
                <div className='page__background'>
                    <div className='main__container'>
                        <h1 className='main__heading'>What's going on in the world?</h1>
                        <p className='main__subheading'>Find the latest news on any topic and save them in your personal account.</p>
                    </div>
                    <SearchForm errorMessage={props.searchErrorMsg} handleSearchSubmit={props.handleSearchSubmit} searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm}/>
                </div>
                {props.preloader && <Preloader />}
  {props.notFound && <NotFound /> }


 {props.cards?.length > 0 ? (<section className='cards'>
                    <div className='cards__block'>
                        <h2 className='cards__title'>Search results</h2>
                        <NewsCardList
                            Loggedin={props.Loggedin}
                            savedNewsLocation={props.savedNewsLocation}
                            cards={props.cards}
                            numCardsShown={props.numCardsShown} 
                            searchTerm={props.searchTerm}
                            handleSaveArticle={props.handleSaveArticle}
                            />
                       {props.numCardsShown < props.cards.length && (
                        <button className='cards__btn' onClick={props.handleShowMore}>Show more</button>
                       )}
                    </div>
                </section>) : props.showPreloader ? <Preloader /> :
                    props.notFound || props.cards?.length < 0 ? <NotFound /> : null}





                
                <About />
            </main>
            
        )
}

export default Main;

