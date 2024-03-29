import React from "react";
import { Link } from "react-router-dom";

export default function Hobbies() {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-4">
                <div className="card" style={{ width: "18rem", height: "404.91px" }}>
                    <img src="https://www.codingdojo.com/blog/wp-content/uploads/code-3.jpg" className="card-img-top" alt="coding" />
                    <div className="card-body">
                    <h5 className="card-title">Coding</h5>
                    <p className="card-text">
                        I had an interest in coding/programming since childhood...
                    </p>
                    <Link to="/coding" className="btn btn-primary btn-c">
                        Read More
                    </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" style={{ width: "18rem", height: "404.91px" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTMRcL87OGsnsNZ4ZiOjaIQlGBwO50_xNkQ&usqp=CAU" className="card-img-top" alt="rubik's cube" />
                    <div className="card-body">
                    <h5 className="card-title">Rubik's Cube</h5>
                    <p className="card-text">
                        At first I didn't know what it actually meant to solve a Rubik's cube, I used to think solving the cube only means to bring one colour...
                    </p>
                    <Link to="/rubik" className="btn btn-primary btn-r">
                        Read More
                    </Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://static.timesofisrael.com/www/uploads/2023/11/AP23015645555283.jpg" className="card-img-top" alt="basketball" />
                    <div className="card-body">
                    <h5 className="card-title">Basketball</h5>
                    <p className="card-text">
                        I was introduced to basketball as one of the compulsory sports in school...
                    </p>
                    <Link to="/basketball" className="btn btn-primary">
                        Read More
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
