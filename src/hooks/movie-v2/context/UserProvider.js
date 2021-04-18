import MovieContext from "./MovieContext";

const UserProfileProvider = (props) => {
  const infoUser = {
    id: 1,
    name: "Admin",
    email: "admin@gmail.com",
    avatar: "https://image.tmdb.org/t/p/w300//6KErczPBROQty7QoIsaa6wJYXZi.jpg"
  }

  return (
    <MovieContext.Provider value={infoUser}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default UserProfileProvider;