import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
function SavedNews(props){

    return(
        (
            <section className='savedNews-main'>               
                <SavedNewsHeader  cards={props.savedCards}
                    currentUser={props.currentUser}/>
                <div className='cards'>
                <div className='cards__block'>
                <NewsCardList
              searchWord={props.searchWord}
                        cards={props.savedCards}
                        Loggedin={props.Loggedin}
                        savedNewsLocation={props.savedNewsLocation}
                        handleSaveArticle={props.handleSaveArticle} 
                        />
                </div>
                </div>
            </section>

           
        )
    )
}

export default SavedNews;