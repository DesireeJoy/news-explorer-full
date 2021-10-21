function SavedNewsHeader(props){
   
    function getKeywordList(){
 const savedKeywords = [
          ...new Set(props.cards.map(({ keyword }) => keyword)),
        ];
        const [first, second] = savedKeywords;
        const { length } = savedKeywords;
      
        return length > 3
          ? `${first}, ${second}, and ${length - 2} others`
          : savedKeywords.join(', ');
      }
      
    return(
        (
            <section className='savedNews'>
                <p className='savedNews__heading'>Saved articles</p>
                <h2 className='savedNews__title'>{props.currentUser.name}, you have {props.cards.length} saved articles</h2>
                <p className='savedNews__key'>By keywords: <span className='savedNews__keywords'>{ getKeywordList() }</span></p>
            </section>
        )
    )
}










export default SavedNewsHeader;