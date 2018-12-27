
const getColorButton = document.getElementById ( 'clickMe' );

const randomNumber = ( ) => {
        const generateNumber = Math.random ( ) * Math.ceil ( 255 );
        if ( generateNumber < 125 ) {
                getColorButton.style.color = 'white';

        } else {
                getColorButton.style.color = 'buttontext';      
                
        }
        return generateNumber;

};

getColorButton.addEventListener ( 'click', ( ) => {
        // alert ( `Color changed! 😱`);
        getColorButton.style.backgroundColor = `rgba( ${ randomNumber ( ) }, ${ randomNumber ( ) }, ${ randomNumber ( ) } )`;

} );
