import React from 'react'
import './styletext.css'

function StyleText() {
    return (
        <div className='text-style'>
            <h1 className='textstyleh1'> Display H1 Text </h1>
            <h2 className='textstyleh2'> Heading H2 Text </h2>
            <div className="style-text">
                <h3> Heading H3 Text </h3>
                <h4> Heading H4 Text </h4>
                <h5> Heading H5 Text </h5>
                <h6> Heading H6 Text </h6>
            </div>
            <div className="Paragraph-style">
                <h1 className='paragraph'> Paragraph </h1>
                <p className='dummy-style'> Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy <br />
                    text ever since the 1500s, when an unknown printer took a galley.established fact that a reader will be distracted by the <br />
                    readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less <br />
                    normal distribution of letters, as opposed. </p>
            </div>
            <div className="list0style">
            <h1 className='paragraph'> List </h1>
                <ul className='ul-style'>
                    <li> Publishing packages and web pageLorem Ipsum as their default </li>
                    <li> Content here, content here', making it look like readable </li>
                    <li> Packages and web pageLorem Ipsum as their default </li>
                </ul>
            </div>
            <div className="btn-style">
            <h1 className='paragraph'> Button </h1>
            <button className='shop-now-guid'> CLICK 🡆 </button>
            <button className='load-more-guid'>CLICK 🡆 </button>  
            <button className='shop-now-guid2'> CLICK 🡆 </button>

            </div>
        </div>
    )
}

export default StyleText
