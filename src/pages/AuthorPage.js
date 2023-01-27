import Header from "../components/Header";

const AuthorPage = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="inner-container">
                    <h1 className="page-title">About the Author: Shyfock</h1>
                    <img src="./img/author-header.jpg" className="hero-image" alt="" />
                    <div className="blog-content">
                        <p className="blog-text">Shyfock is from an age where computers were not over the table as easy as today, however he's always been interested in technology. He was always the tech boy into family and friends who knew the necessary to solve almost all the problems referred to a pc. Till now, that hasn't changed. He is actually a civil engineer, and as a professional he has learned that every knowledge you get would be useful any day. His first approach to programming was with QBASIC, back in 1995, then his degree work in 1999, it was a desktop application developed under Visual Basic, named FOOTINGS, the software was made to calculate shallow foundations. After being a structural designer engineer, for about 20 years, he remembered his programming skills and also his passion, and he began to learn web development, and now he is becoming a web dev and pass from designing buildings and bridges to build web pages. That's life!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorPage;