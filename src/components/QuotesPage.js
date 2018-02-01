import React from 'react';

const QuotesPage = () => (
    <div className="article__container">
        <div className="article__article">
            <div className="" style={{ textAlign: 'center' }}>
                <h1>Awesome Travel Quotes</h1>
            </div>

            <div className="quotes__quoteCard">
                <p style={{ fontFamily: 'helvetica', fontSize: '30px' }}>
                "Let us step into the night and pursue that flighty temptress, 
                adventure."</p>
                <p> - J.K. Rowling (Harry Potter and the Half-Blood Prince)</p>
            </div>

            <div className="quotes__quoteCard right">
                <p style={{ fontFamily: 'garamond', fontSize: '30px' }}>
                "I am not the same, having seen the moon shine on the other 
                side of the world."</p>
                <p> - Mary Anne Radmacher</p>
            </div>

            <div className="quotes__quoteCard">
                <p style={{ fontFamily: 'comic sans ms', fontSize: '30px' }}>
                "We travel not to escape life, but for life not to escape us."</p>
                <p></p>
            </div>

            <div className="quotes__quoteCard right">
                <p style={{ fontFamily: 'futura', fontSize: '30px' }}>
                "To awaken alone in a strange town is one of the most pleasant 
                sensations in the world"</p>
                <p> - Freya Stark</p>
            </div>

            <div className="quotes__quoteCard">
                <p style={{ fontFamily: 'comic sans ms', fontSize: '30px' }}>
                "Broad, wholesome, charitable views of men and things cannot be 
                acquired by vegetating in one little corner of the earth all of 
                one's lifetime."</p>
                <p> - Mark Twain</p>
            </div>

            <div className="quotes__quoteCard right">
                <p style={{ fontFamily: 'impact', fontSize: '30px' }}>
                "Man cannot discover new oceans unless he has the courage 
                to lose sight of the shore."</p>
                <p> - Andre Gide</p>
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