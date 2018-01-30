import React from 'react';

const QuotesPage = () => (
    <div className="article__container">
        <div className="article__article">
            <div className="" style={{ textAlign: 'center' }}>
                <h1>Awesome Travel Quotes</h1>
            </div>

            <div className="quotes__quoteCard">
                <p style={{ fontFamily: 'helvetica', fontSize: '30px' }}>Let us step into the night and pursue that flighty temptress, adventure.</p>
                <p> - J.K. Rowling (Harry Potter and the Half-Blood Prince)</p>
            </div>

            <div className="quotes__quoteCard right">
                <p style={{ fontFamily: 'garamond', fontSize: '30px' }}>Let us step into the night and pursue that flighty temptress, adventure.</p>
                <p> - J.K. Rowling (Harry Potter and the Half-Blood Prince)</p>
            </div>

            <div className="quotes__quoteCard">
                <p style={{ fontFamily: 'comic sans ms', fontSize: '30px' }}>Let us step into the night and pursue that flighty temptress, adventure.</p>
                <p> - J.K. Rowling (Harry Potter and the Half-Blood Prince)</p>
            </div>

            <div className="quotes__quoteCard right">
                <p style={{ fontFamily: 'futura', fontSize: '30px' }}>Let us step into the night and pursue that flighty temptress, adventure.</p>
                <p> - J.K. Rowling (Harry Potter and the Half-Blood Prince)</p>
            </div>

            <div className="quotes__quoteCard">
                <p style={{ fontFamily: 'comic sans ms', fontSize: '30px' }}>Let us step into the night and pursue that flighty temptress, adventure.</p>
                <p> - J.K. Rowling (Harry Potter and the Half-Blood Prince)</p>
            </div>

            <div className="quotes__quoteCard right">
                <p style={{ fontFamily: 'impact', fontSize: '30px' }}>Let us step into the night and pursue that flighty temptress, adventure.</p>
                <p> - J.K. Rowling (Harry Potter and the Half-Blood Prince)</p>
            </div>
        </div>



        <div className="article__sideBar">

            {/*<div className="article__socialBar">
                <span>Follow me for more!</span>

            </div>*/}

            <div className="article__ad" style={{ border: '1px black solid', height: '200px', marginBottom: '40px' }}>
                <p style={{ textAlign: 'center' }}>Ad would go here</p>
            </div>
            <div className="article__ad" style={{ border: '1px black solid', height: '200px', marginBottom: '40px' }}>
                <p style={{ textAlign: 'center' }}>Ad would go here</p>
            </div>
            <div className="article__ad" style={{ border: '1px black solid', height: '200px', marginBottom: '40px' }}>
                <p style={{ textAlign: 'center' }}>Ad would go here</p>
            </div>

        </div>

        
    </div>
);

export default QuotesPage;