import NewsCard from "../NewsCard/NewsCard"

function NewsCardList(props) {
    return (
        (
<ul className='cards__list'>
                {props.cards
                    .slice(0, props.savedNewsLocation ? props.cards.length : props.numCardsShown)
                .map((card, index) => (
                <NewsCard
                    Loggedin={props.Loggedin}
                    savedNewsLocation={props.savedNewsLocation}
                    key={index}
                    card={card}
                    searchTerm={props.searchTerm}
                    handleSaveArticle={() => props.handleSaveArticle(card)}
                />
                ))}

            </ul>


        )
    )
}

export default NewsCardList;