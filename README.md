# news-explorer-full
Full News Explorer Api for AWS hosting

# News Explorer Full Stack App

[Live AWS hosted Link](https://djbnews.students.nomoreparties.site/)

## Technology

- A news service that allows users to find and save articles. This project utilizes both a public and personally developed API
to allow users to create an account, search articles and save them for later reference.
 - Built a secure signup/login with JWT, bcrypt, and protected routes .
 - Utilized Express routes to create a RESTful API to incorporate CRUD functionality.
 - Created Mongoose Schema with MongoDB to allow for the storage of user data..
 - Utilized a public API news service to fetch up to date news data..
 - Incorporated validation through celebrate and joi
 - Developed using MVC pattern with Node.js, ExpressJS and Mongoose ODM

### Screenshots

![React Portfolio Preview](DJBReact-Site-Preview.png)

#### Sample Code FRONTEND

     function findSavedArticles(token) {
    mainApi
      .getArticles(token)
      .then((res) => {
        setSavedCards(res);
      })
      .catch((error) => console.log(error));
  }
  </>
            )}
      function handleSearchSubmit(e) {
    e.preventDefault();
    setPreloader(true);
    if (searchTerm.length === 0) {
      setPreloader(false);
      setSearchErrorMsg('Must enter search term');
      return
    }
    newsApi.getNewsCards(searchTerm)
      .then((data) => {
        if (data.length === 0) {
          setNotFound(true);
        }
        return data;
      })
      .then((cards) => {
        setNumCardsShown(3);
        setCards(cards);
        setResults(true);
        setSearchTerm(searchTerm);
        setPreloader(false);
        setSearchErrorMsg('');

      })
      .catch(() => {
        setSearchErrorMsg("Something went wrong with this request. Please try again later.")
        setPreloader(false);
      })

    }
  
#### Sample Code BACKEND
            </>
            )}
