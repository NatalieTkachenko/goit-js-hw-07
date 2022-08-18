import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryArea = document.querySelector( ".gallery" );

const galleryCollection = galleryItems.map( ( { preview, original, description } ) =>
{
    const galleryImage = document.createElement( 'img' );
    galleryImage.classList.add( 'gallery__image' );
    galleryImage.setAttribute( 'src', `${ preview }` );
    galleryImage.setAttribute( 'data-source', `${ original }` ); ``
    galleryImage.setAttribute( 'alt', `${ description }` );
    

    const galleryLink = document.createElement( 'a' );
    galleryLink.classList.add( 'gallery__link' );
    galleryLink.setAttribute( 'href', `${ original }` );
    galleryLink.append( galleryImage );


    const galleryItem = document.createElement( 'div' );
    galleryItem.classList.add( 'gallery__item' );
    galleryItem.append( galleryLink );
    
    return galleryItem;
       
} );


galleryArea.append( ...galleryCollection );


galleryArea.addEventListener( 'click', showBigImageHandler );



function showBigImageHandler( evt ) 
{
    event.preventDefault();
    if ( event.target.nodeName !== 'IMG' )
    {
        return;
    }
    else
    {
        const bigImageLink = event.target.dataset.source;
        const modal = basicLightbox.create( `<img src="${ bigImageLink }" width="800" height="600">` );

        modal.show();
        
    } 
    
};



document.addEventListener( 'keydown', closeModalWithEsc );

function closeModalWithEsc( evt )
{
    const modalIsOpen = document.querySelector( '.basicLightbox' );
    const escIsPressed = evt.code === 'Escape';

    if ( !modalIsOpen || !escIsPressed )
    {
        return;
    }
    else
    {
        modalIsOpen.classList.remove( 'basicLightbox' );
    }

}






