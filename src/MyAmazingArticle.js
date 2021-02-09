import React from 'react';
import coolImage from './internet-facts.jpg';

export default class MyAmazingArticle extends React.Component {
    render() {
        return (
            <div className="farticle">
            I am the article!
            {/* we can import and use an image with a JS portal */}
            <img alt="internet" className="internet-image" src={coolImage} />
            {/* we can link to an image like normal out on the web */}
            <img alt="lion" src="https://external-preview.redd.it/GsJdVEEp5j2vP0Vd5l32rmEnul9AkY8O4mMqcx0EW7o.jpg?auto=webp&s=ef6f5b3065bc4f8697f6c2687c5f27f1e91518e1" />
            {/* we can point to an image in our public directory */}
            <img alt="best" src="best-picture.webp" />
            <img alt="custom" src={this.props.myCoolAwesomeImage} />
                        {/* we can import and use an image with a JS portal */}
                        <img alt="internet" className="internet-image" src={coolImage} />
            {/* we can link to an image like normal out on the web */}
            <img alt="lion" src="https://external-preview.redd.it/GsJdVEEp5j2vP0Vd5l32rmEnul9AkY8O4mMqcx0EW7o.jpg?auto=webp&s=ef6f5b3065bc4f8697f6c2687c5f27f1e91518e1" />
            {/* we can point to an image in our public directory */}
            <img alt="best" src="best-picture.webp" />
            <img alt="custom" src={this.props.myCoolAwesomeImage} />
            <form>
                <input />
            </form>
            </div>
        );
    }
  }