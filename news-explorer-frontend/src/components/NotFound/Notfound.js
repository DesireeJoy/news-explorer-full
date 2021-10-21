import notFound from '../../images/not-found.svg';

function NotFound() {
    return (
        (
            <section className='not-found'>
                <img className='not-found__img' src={notFound} alt='not found logo' />
                <h4 className='not-found__title'>Nothing Found</h4>
                <p className='not-found__text'>Sorry, but nothing matched
                your search terms.</p>
            </section>
        )
    )
}

export default NotFound;