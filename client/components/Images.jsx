import React from 'react'

const Images = () => {
    return (
        <>
            <img class='taskbar' src='/taskbar.png'/>
            <img class='clippy' src='/clippy.png'/>
            <div class='iconsFlexbox'>
                <img class='bin' src='/bin.png'/>
                <img class='notepad' src='/notepad.png'/>
                <img class='phone' src='/phone.png'/>
                <img class='search' src='/search.png'/>
                <img class='settings' src='/settings.png'/>
            </div>
        </>
    )
}

export default Images